import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Icons for services page - picked for visual relevance
const serviceIcons = [
  { name: 'svc-landing', id: 'lucide:rocket' },           // Landing page - rocket = promosi cepat
  { name: 'svc-portfolio', id: 'carbon:portfolio' },       // Portfolio
  { name: 'svc-profil', id: 'lucide:store' },              // Profil bisnis - toko/usaha
  { name: 'svc-company', id: 'lucide:building-2' },        // Company profile
  { name: 'svc-blog', id: 'lucide:newspaper' },            // Blog/Artikel
  { name: 'svc-event', id: 'lucide:ticket' },              // Event/Pendaftaran
  { name: 'svc-catalog', id: 'tabler:layout-grid' },       // Katalog Produk - grid layout
  { name: 'svc-toko', id: 'lucide:shopping-bag' },         // Toko Online
  { name: 'svc-custom', id: 'tabler:brand-codesandbox' },  // Custom/Sistem
  { name: 'svc-maintenance', id: 'lucide:shield-check' },  // Maintenance
];

const outDir = path.resolve('public', 'icons', 'services');
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

for (const icon of serviceIcons) {
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
