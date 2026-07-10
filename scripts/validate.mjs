import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlFiles = fs.readdirSync(root).filter((name) => name.endsWith('.html'));
const failures = [];

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const ids = [...source.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) failures.push(`${file}: duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}`);

  if (source.includes('<main id="main-content">')) {
    for (const required of [
      'property="og:title"',
      'name="twitter:card"',
      'type="application/ld+json"',
      '<script src="js/main.js"></script>'
    ]) {
      if (!source.includes(required)) failures.push(`${file}: missing ${required}`);
    }

    const schemaMatch = source.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
    if (schemaMatch) {
      try {
        JSON.parse(schemaMatch[1]);
      } catch (error) {
        failures.push(`${file}: invalid JSON-LD (${error.message})`);
      }
    }
  }

  for (const match of source.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:)/.test(href)) continue;
    const [pathAndQuery, fragment] = href.split('#');
    const pathname = pathAndQuery.split('?')[0];
    const targetName = pathname || file;
    const targetPath = path.join(root, targetName);
    if (!fs.existsSync(targetPath)) {
      failures.push(`${file}: missing target ${href}`);
      continue;
    }
    if (fragment) {
      const target = fs.readFileSync(targetPath, 'utf8');
      const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(`id=["']${escaped}["']`).test(target)) {
        failures.push(`${file}: missing fragment ${href}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML files: metadata, JSON-LD, IDs, links, and fragments pass.`);
}
