import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Icons for the important notes section
const uiIcons = [
  { name: 'note-domain', id: 'lucide:lightbulb' },
  { name: 'note-price', id: 'lucide:clipboard' },
  { name: 'note-feature', id: 'lucide:wrench' },
  { name: 'note-consult', id: 'lucide:message-circle' },
];

const outDir = path.resolve('public', 'icons', 'ui');
fs.mkdirSync(outDir, { recursive: true });

function fixSvg(svg, name) {
  // Fix 1em dimensions
  const vbMatch = svg.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
  if (vbMatch) {
    const w = Math.round(parseFloat(vbMatch[1]));
    const h = Math.round(parseFloat(vbMatch[2]));
    svg = svg.replace(/width="1em"/, `width="${w}"`);
    svg = svg.replace(/height="1em"/, `height="${h}"`);
  }
  // Replace currentColor with dark brand color
  svg = svg.replaceAll('currentColor', '#18181A');
  return svg.trim();
}

for (const icon of uiIcons) {
  console.log(`Fetching ${icon.id}...`);
  try {
    let svg = execSync(`npx better-icons get ${icon.id}`, { encoding: 'utf8' });
    svg = fixSvg(svg, icon.name);
    const filePath = path.join(outDir, `${icon.name}.svg`);
    fs.writeFileSync(filePath, svg);
    console.log(`  → Saved ${icon.name}.svg`);
  } catch (e) {
    console.error(`  ERROR ${icon.name}: ${e.message.split('\n')[0]}`);
  }
}

console.log('Done!');
