import assert from 'node:assert/strict';
import { readFile, writeFile, lstat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { crc32 } from 'node:zlib';

const root = new URL('../', import.meta.url);
const downloads = new URL('docs/public/downloads/', root);
const files = [
  "due-date-tracker-expected-results.xlsx",
  "due-date-tracker-reset.xlsx",
  "due-date-tracker.xlsx",
  "email-document-register-expected-results.xlsx",
  "email-document-register-reset.xlsx",
  "email-document-register.xlsx",
  "list-comparison-expected-results.xlsx",
  "list-comparison-reset.xlsx",
  "list-comparison.xlsx",
  "optional-practice-inputs.txt",
  "training-document-a.pdf",
  "training-document-b.pdf"
];
const page = await readFile(new URL('docs/optional/index.md', root), 'utf8');
const listed = [...page.matchAll(/\]\(\/downloads\/([^/)]+)\)/g)]
  .map(match => match[1]).filter(name => /\.(xlsx|csv|txt|png|pdf)$/.test(name));
assert.deepEqual([...new Set(listed)].sort(), files, 'Sample allowlist must match the download table.');
const hash = data => createHash('sha256').update(data).digest('hex');
const localParts = [], centralParts = [], records = [];
let offset = 0;
for (const name of files) {
  const url = new URL(name, downloads);
  assert((await lstat(fileURLToPath(url))).isFile(), `Not a regular sample file: ${name}`);
  const data = await readFile(url), filename = Buffer.from(name), checksum = crc32(data);
  // Stored ZIP entries use fixed timestamps and no platform-dependent compression.
  // The PNG/XLSX samples are already compressed. Each entry stays at the archive root.
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4);
  local.writeUInt16LE(33, 12); // 1980-01-01, 00:00:00
  local.writeUInt32LE(checksum, 14); local.writeUInt32LE(data.length, 18);
  local.writeUInt32LE(data.length, 22); local.writeUInt16LE(filename.length, 26);
  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6);
  central.writeUInt16LE(33, 14); central.writeUInt32LE(checksum, 16);
  central.writeUInt32LE(data.length, 20); central.writeUInt32LE(data.length, 24);
  central.writeUInt16LE(filename.length, 28); central.writeUInt32LE(offset, 42);
  localParts.push(local, filename, data); centralParts.push(central, filename);
  offset += local.length + filename.length + data.length;
  records.push({ name, sha256: hash(data) });
}
const directory = Buffer.concat(centralParts), end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10);
end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
const archive = Buffer.concat([...localParts, directory, end]);
const manifest = {
  revision: '2026-10-17',
  optional_exercises: ['A: Compare lists', 'B: Due-date reminders', 'C: Email-to-document register'],
  archive: { name: 'optional-sample-files.zip', contents: 'Sample files only, at the archive root', count: files.length, sha256: hash(archive) },
  files: records
};
await writeFile(new URL('optional-sample-files.zip', downloads), archive);
await writeFile(new URL('optional-download-manifest.json', downloads), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Packaged ${files.length} sample files (${archive.length} bytes); no website content.`);
