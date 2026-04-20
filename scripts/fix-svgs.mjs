import fs from 'fs';
import path from 'path';

const dirs = ['public/icons/tech', 'public/icons/ui'];

for (const dir of dirs) {
  const fullDir = path.resolve(dir);
  const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.svg'));
  
  for (const file of files) {
    const filePath = path.join(fullDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix width="1em" height="1em" -> use actual viewBox dimensions
    const vbMatch = content.match(/viewBox="0 0 (\d+) (\d+)"/);
    if (vbMatch && content.includes('width="1em"')) {
      content = content.replace('width="1em"', `width="${vbMatch[1]}"`);
      content = content.replace('height="1em"', `height="${vbMatch[2]}"`);
      console.log(`Fixed dimensions: ${file} -> ${vbMatch[1]}x${vbMatch[2]}`);
    }
    
    // Fix corrupted linearGradient tags
    // Pattern: `line fill="currentColor"arGradient` should be `linearGradient`
    if (content.includes('line fill="currentColor"arGradient')) {
      content = content.replaceAll('line fill="currentColor"arGradient', 'linearGradient');
      console.log(`Fixed corrupted linearGradient: ${file}`);
    }
    
    // Fix corrupted circle with fill="currentColor" inside defs (nextjs pattern)
    // <circle fill="currentColor" id="..." ...> inside <defs> is wrong
    if (content.includes('<circle fill="currentColor"')) {
      content = content.replaceAll('<circle fill="currentColor"', '<circle');
      console.log(`Fixed circle fill: ${file}`);
    }
    
    fs.writeFileSync(filePath, content);
  }
}

console.log('All SVGs fixed!');
