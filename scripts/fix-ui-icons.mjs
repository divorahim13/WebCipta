import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Re-fetch all UI icons cleanly
const uiIcons = [
  { name: 'globe', id: 'lucide:globe' },
  { name: 'briefcase', id: 'lucide:briefcase' },
  { name: 'portfolio', id: 'lucide:image' },
  { name: 'building', id: 'lucide:building' },
  { name: 'calendar', id: 'lucide:calendar' },
  { name: 'article', id: 'lucide:file-text' },
  { name: 'box', id: 'lucide:box' },
  { name: 'shopping-cart', id: 'lucide:shopping-cart' },
  { name: 'settings', id: 'lucide:settings' },
  { name: 'wrench', id: 'lucide:wrench' },
  { name: 'check', id: 'lucide:check' },
  { name: 'x', id: 'lucide:x' },
  { name: 'clock', id: 'lucide:clock' },
  { name: 'refresh', id: 'lucide:refresh-ccw' },
  { name: 'server', id: 'lucide:server' },
  { name: 'plus', id: 'lucide:plus' },
  { name: 'shield', id: 'lucide:shield' },
  { name: 'smartphone', id: 'lucide:smartphone' },
  { name: 'search', id: 'lucide:search' },
  { name: 'whatsapp', id: 'lucide:message-circle' },
  { name: 'key', id: 'lucide:key' },
  { name: 'plug', id: 'lucide:plug' },
  { name: 'image', id: 'lucide:image' }
];

const uiDir = path.resolve('public', 'icons', 'ui');
fs.mkdirSync(uiDir, { recursive: true });

for (const icon of uiIcons) {
  console.log(`Fetching ${icon.id}...`);
  try {
    let svg = execSync(`npx better-icons get ${icon.id}`, { encoding: 'utf8' }).trim();
    
    // Fix 1em dimensions to actual viewBox dimensions
    const vbMatch = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
    if (vbMatch) {
      svg = svg.replace('width="1em"', `width="${vbMatch[1]}"`);
      svg = svg.replace('height="1em"', `height="${vbMatch[2]}"`);
    }
    
    // Replace currentColor with #1C1B1A (a nice dark color) for <img> rendering
    svg = svg.replaceAll('currentColor', '#1C1B1A');
    
    const filePath = path.join(uiDir, `${icon.name}.svg`);
    fs.writeFileSync(filePath, svg);
    console.log(`  -> ${filePath}`);
  } catch (e) {
    console.error(`  ERROR: ${e.message}`);
  }
}

console.log('Done!');
