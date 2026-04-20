import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const techIcons = [
  { name: 'nextjs', id: 'logos:nextjs-icon' },
  { name: 'react', id: 'logos:react' },
  { name: 'tailwindcss', id: 'logos:tailwindcss-icon' },
  { name: 'typescript', id: 'logos:typescript-icon' },
  { name: 'nodejs', id: 'logos:nodejs-icon' },
  { name: 'supabase', id: 'logos:supabase-icon' },
  { name: 'postgresql', id: 'logos:postgresql' },
  { name: 'prisma', id: 'logos:prisma' },
  { name: 'vercel', id: 'logos:vercel-icon' },
  { name: 'github', id: 'logos:github-icon' }
];

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
  { name: 'plug', id: 'lucide:plug' }
];

const techDir = path.resolve('public', 'icons', 'tech');
const uiDir = path.resolve('public', 'icons', 'ui');

fs.mkdirSync(techDir, { recursive: true });
fs.mkdirSync(uiDir, { recursive: true });

function fetchIconList(list, outDir) {
  for (const icon of list) {
    console.log(`Fetching ${icon.id}...`);
    try {
      const getCmd = `npx better-icons get ${icon.id}`;
      let svgOutput = execSync(getCmd, { encoding: 'utf8' });
      
      const filePath = path.join(outDir, `${icon.name}.svg`);
      fs.writeFileSync(filePath, svgOutput.trim());
      console.log(`Saved to ${filePath}`);
    } catch (e) {
      console.log(`ERROR processing ${icon.name}: ${e.message}`);
    }
  }
}

fetchIconList(techIcons, techDir);
fetchIconList(uiIcons, uiDir);

console.log("All done!");
