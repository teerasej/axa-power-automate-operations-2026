import assert from 'node:assert/strict'
import { readFile, writeFile, lstat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { crc32 } from 'node:zlib'

const publicRoot = new URL('../docs/public/day-2/', import.meta.url)
const samples = new URL('files/', publicRoot)
// Keep this list explicit. Flow exports, account details, source ledgers and artwork
// originals are deliberately outside this synthetic-resource archive.
const files = [
  'DOC-A.pdf', 'DOC-B.pdf',
  'core01-repair-relay.xlsx', 'core03-match-close-remind.xlsx',
  'core03-final-response.csv', 'expected-results.md',
  'rescue01-check-table.ts', 'rescue01-script-workbook-a.xlsx', 'rescue01-script-workbook-b.xlsx',
  'rescue02-sequence-content.txt', 'rescue05-summary-template.html', 'rescue-test-cards.md',
  'reset/core01-repair-relay.xlsx',
  'reset/core03-match-close-remind.xlsx', 'reset/rescue01-script-workbook-a.xlsx',
  'reset/rescue01-script-workbook-b.xlsx'
].sort()
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const localParts = [], centralParts = [], records = []
let offset = 0
for (const name of files) {
  const url = new URL(name, samples)
  assert((await lstat(url)).isFile(), `Missing regular Day 2 resource: ${name}`)
  const bytes = await readFile(url), filename = Buffer.from(name), checksum = crc32(bytes)
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
  revision: '2026-11-15-v2-review',
  description: 'Synthetic Day 2 resources only. This archive is not a Power Automate import package.',
  archive: { name: 'day-2-practice-files.zip', count: files.length, sha256: hash(archive) },
  files: records
}
await writeFile(new URL('day-2-practice-files.zip', publicRoot), archive)
await writeFile(new URL('download-manifest.json', publicRoot), JSON.stringify(manifest, null, 2) + '\n')
console.log(`Packaged ${files.length} Day 2 synthetic resources; no Flow exports or private records.`)
