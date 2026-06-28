import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { existsSync, createReadStream, statSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ORT_DIST = resolve(__dirname, 'node_modules/onnxruntime-web/dist')

// Serve onnxruntime-web WASM/.mjs files from node_modules as static assets,
// bypassing Vite's transform pipeline. Required because:
//   1. onnxruntime-web's initWasm() uses dynamic import() for .mjs glue files
//   2. Vite refuses to transform files from /public/ that are dynamically imported
//   3. With require-corp, CDN files need CORP headers these local files get
function serveOrtMjs() {
    return {
        name: 'ort-mjs',
        configureServer(server) {
            // Register middleware BEFORE Vite's static serve to intercept /ort/
            server.middlewares.use((req, res, next) => {
                const url = req.url || ''
                if (!url.startsWith('/ort/')) return next()
                // Strip query params (?import) and decode
                const filePath = url.split('?')[0].replace(/^\/ort\//, '')
                const fullPath = resolve(ORT_DIST, filePath)
                // Ensure we don't escape the ORT_DIST directory
                if (!fullPath.startsWith(ORT_DIST) || !existsSync(fullPath)) {
                    return next()
                }
                const ext = filePath.split('.').pop()
                const mime = ext === 'mjs' ? 'application/javascript'
                    : ext === 'wasm' ? 'application/wasm'
                        : 'application/octet-stream'
                // Cross-Origin-Resource-Policy: cross-origin satisfies require-corp
                res.writeHead(200, {
                    'Content-Type': mime,
                    'Cross-Origin-Resource-Policy': 'cross-origin',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Length': statSync(fullPath).size,
                })
                createReadStream(fullPath).pipe(res)
            })
        },
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [serveOrtMjs()],
    optimizeDeps: {
        exclude: ['onnxruntime-web'],
    },
    server: {
        port: 5173,
        fs: {
            allow: [resolve(__dirname, '..')],
        },
        watch: {
            ignored: ['**/public/ort/**'],
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
            '/ws': {
                target: 'ws://localhost:8000',
                ws: true,
                changeOrigin: true,
            },
        },
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    },
    build: {
        target: 'es2020',
        chunkSizeWarningLimit: 4096,
    },
    worker: {
        format: 'es',
    },
})
