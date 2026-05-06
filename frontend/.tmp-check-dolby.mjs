import fs from 'node:fs'
import path from 'node:path'
import { compileRules } from './src/engine/rules/RuleCompiler.js'

const file = './public/templates/presets/Dolby.json'
const raw = fs.readFileSync(file, 'utf8')
const preset = JSON.parse(raw)
const blocks = preset?.params?.ruleBlocks || []
const result = compileRules(blocks)

console.log(JSON.stringify({
  file: path.basename(file),
  compileStatus: result?.compileStatus ?? null,
  compileError: result?.compileError ?? null,
  rejected: Array.isArray(result?.rejected) ? result.rejected.length : null
}, null, 2))
