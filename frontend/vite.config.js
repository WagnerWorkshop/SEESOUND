import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    server: {
        port: 5173,
        fs: {
            allow: [resolve(__dirname, '..')],
        },
        // Proxy REST calls to FastAPI so the browser never hits a CORS wall
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
            // WebSocket bridge → Python backend
            '/ws': {
                target: 'ws://localhost:8000',
                ws: true,
                changeOrigin: true,
            },
        },
    },
})
