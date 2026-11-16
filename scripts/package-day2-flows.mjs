import assert from 'node:assert/strict'
import { readFile, writeFile, lstat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { crc32 } from 'node:zlib'

const publicRoot = new URL('../docs/public/day-2/', import.meta.url)
const samples = new URL('../resources/day-2-flow-packages/', import.meta.url)
// Only the reviewed native exports and learner README belong in this outer download.
const files = [
  "README.md",
  "solutions/B2D2V2InstructorSolutions_1_0_0_1.zip",
  "starters/Core01/B2D2V2Core01RepairRelaySTART_1_0_0_1.zip",
  "starters/Core02/B2D2V2Core02DocumentHandoffSTART_1_0_0_1.zip",
  "starters/Core03/B2D2V2Core03MatchCloseRemindSTART_1_0_0_1.zip",
  "starters/R1/B2D2V2R01OfficeScriptSTART_1_0_0_1.zip",
  "starters/R2/B2D2V2R02FileSequencingSTART_1_0_0_1.zip",
  "starters/R3/B2D2V2R03HtmlImageSTART_1_0_0_1.zip",
  "starters/R4/B2D2V2R04ApprovalGateSTART_1_0_0_1.zip",
  "starters/R5/B2D2V2R05PdfGenerationSTART_1_0_0_1.zip"
]
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const localParts = [], centralParts = [], records = []
let offset = 0
const checksums = []
for (const name of files) checksums.push(`${hash(await readFile(new URL(name, samples)))}  ${name}`)
const checksumBytes = Buffer.from(checksums.join('\n') + '\n')
files.push('SHA256SUMS.txt')
for (const name of files) {
  const url = new URL(name, samples)
  if (name !== 'SHA256SUMS.txt') assert((await lstat(url)).isFile(), `Missing reviewed Flow resource: ${name}`)
  const bytes = name === 'SHA256SUMS.txt' ? checksumBytes : await readFile(url), filename = Buffer.from(name), checksum = crc32(bytes)
  const local = Buffer.alloc(30), central = Buffer.alloc(46)
  local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4)
  local.writeUInt16LE(33, 12); local.writeUInt32LE(checksum, 14)
  local.writeUInt32LE(bytes.length, 18); local.writeUInt32LE(bytes.length, 22)
  local.writeUInt16LE(filename.length, 26)
  central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6)
  central.writeUInt16LE(33, 14); central.writeUInt32LE(checksum, 16)
  central.writeUInt32LE(bytes.length, 20); central.writeUInt32LE(bytes.length, 24)
  central.writeUInt16LE(filename.length, 28); central.writeUInt32LE(offset, 42)
  localParts.push(local, filename, bytes); centralParts.push(central, filename)
  offset += local.length + filename.length + bytes.length
  records.push({ name, bytes: bytes.length, sha256: hash(bytes) })
}
const directory = Buffer.concat(centralParts), end = Buffer.alloc(22)
end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10)
end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16)
const archive = Buffer.concat([...localParts, directory, end])
const manifest = {
  revision: '2026-11-16-v2',
  description: 'Extract this outer ZIP first. Eight START native solution ZIPs and one bundle of eight SOLUTION Flows; README and checksums included. No Legacy packages.',
  archive: { name: 'day-2-flow-packages.zip', count: files.length, sha256: hash(archive) },
  files: records
}
await writeFile(new URL('day-2-flow-packages.zip', publicRoot), archive)
await writeFile(new URL('flow-package-manifest.json', publicRoot), JSON.stringify(manifest, null, 2) + '\n')
console.log(`Packaged 9 unchanged native solution ZIPs, learner README and checksums (${files.length} files).`)
