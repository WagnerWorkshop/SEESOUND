import fs from 'node:fs'
import path from 'node:path'
import { compileRules } from './src/engine/rules/RuleCompiler.js'

const dir = './public/templates/presets'
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort()

for (const file of files) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8')
  const preset = JSON.parse(raw)
  const blocks = preset?.params?.ruleBlocks || []
  const result = compileRules(blocks)

  const rejectedCount = Array.isArray(result?.rejected) ? result.rejected.length : 0
  const spawn = Number(result?.spawnRuleCount) || 0
  const living = Number(result?.livingRuleCount) || 0
  const physical = Number(result?.physicalRuleCount) || 0
  const line = Number(result?.lineRuleCount) || 0
  const background = Number(result?.backgroundRuleCount) || 0
  const camera = Number(result?.cameraRuleCount) || 0
  const activeTotal = spawn + living + physical + line + background + camera

  console.log(`${file} | status=${result?.compileStatus ?? 'n/a'} | error=${result?.compileError ?? 'null'} | rejected=${rejectedCount} | activeTotal=${activeTotal} (spawn=${spawn},living=${living},physical=${physical},line=${line},background=${background},camera=${camera})`)
}
