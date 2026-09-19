import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const backupDir = path.join(projectRoot, 'assets_backup_unwatermarked');

const targetFolders = [
  'public/assets/real_camps',
  'public/assets/cottages',
  'public/assets/hero'
];

const singleFiles = [
  'public/hero-poster.webp'
];

const WATERMARK_TEXT = "© The Kumbh Cottages | A Venture of Raamvan Retreats";

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getAllImageFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllImageFiles(fullPath));
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function createWatermarkSvg(w, h) {
  const isLandscape = w >= h;
  const angle = isLandscape ? -22 : -36;
  const fontSize = Math.max(13, Math.round(Math.min(w, h * 1.3) * 0.026));

  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="wm-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#000000" flood-opacity="0.85"/>
      </filter>
    </defs>
    
    <g transform="translate(${w * 0.5}, ${h * 0.5}) rotate(${angle})">
      <!-- Top hairline accent -->
      <line
        x1="-${fontSize * 13}"
        y1="-${fontSize * 0.8}"
        x2="${fontSize * 13}"
        y2="-${fontSize * 0.8}"
        stroke="rgba(230, 200, 140, 0.42)"
        stroke-width="0.8"
      />
      
      <!-- Sleek diagonal watermark text -->
      <text
        x="0"
        y="4"
        text-anchor="middle"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="rgba(0, 0, 0, 0.35)"
        stroke-width="0.8"
        font-family="Georgia, 'Cinzel', 'Playfair Display', serif"
        font-size="${fontSize}"
        font-weight="600"
        letter-spacing="0.10em"
        filter="url(#wm-shadow)"
      >
        ${WATERMARK_TEXT}
      </text>

      <!-- Bottom hairline accent -->
      <line
        x1="-${fontSize * 13}"
        y1="${fontSize * 1.0}"
        x2="${fontSize * 13}"
        y2="${fontSize * 1.0}"
        stroke="rgba(230, 200, 140, 0.42)"
        stroke-width="0.8"
      />
    </g>
  </svg>
  `;
}

async function watermarkImage(sourcePath, destPath) {
  try {
    const meta = await sharp(sourcePath).metadata();
    const w = meta.width;
    const h = meta.height;

    if (!w || !h || w < 200 || h < 200) {
      // Skip tiny icons/logos
      fs.copyFileSync(sourcePath, destPath);
      return false;
    }

    const svg = createWatermarkSvg(w, h);
    const ext = path.extname(destPath).toLowerCase();

    let pipeline = sharp(sourcePath).composite([
      { input: Buffer.from(svg), top: 0, left: 0 }
    ]);

    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 88 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 88 });
    } else if (ext === '.png') {
      pipeline = pipeline.png();
    }

    await pipeline.toFile(destPath);
    return true;
  } catch (err) {
    console.error(`Error processing ${sourcePath}:`, err.message);
    return false;
  }
}

async function main() {
  console.log(`\n🛡️ [Watermark] Starting permanent copyright watermarking on all photos...`);
  console.log(`   Text: "${WATERMARK_TEXT}"`);

  // 1. Gather all files
  const allFiles = [];
  for (const folder of targetFolders) {
    const fullDir = path.join(projectRoot, folder);
    allFiles.push(...getAllImageFiles(fullDir));
  }
  for (const single of singleFiles) {
    const fullPath = path.join(projectRoot, single);
    if (fs.existsSync(fullPath)) {
      allFiles.push(fullPath);
    }
  }

  console.log(`   Found ${allFiles.length} photo assets to process.`);

  // 2. Backup originals if not already backed up
  ensureDir(backupDir);
  for (const file of allFiles) {
    const rel = path.relative(projectRoot, file);
    const backupTarget = path.join(backupDir, rel);
    ensureDir(path.dirname(backupTarget));
    if (!fs.existsSync(backupTarget)) {
      fs.copyFileSync(file, backupTarget);
    }
  }
  console.log(`   ✅ Original unwatermarked assets safely backed up to ${backupDir}`);

  // 3. Process each photo from backup and overwrite target in public/
  let processedCount = 0;
  for (const file of allFiles) {
    const rel = path.relative(projectRoot, file);
    const backupSource = path.join(backupDir, rel);
    const success = await watermarkImage(backupSource, file);
    if (success) processedCount++;
  }

  console.log(`\n✨ [Watermark] Successfully watermarked ${processedCount} photos across public/assets!`);

  // 4. Also copy updated watermarked files to dist/ if dist exists
  const distDir = path.join(projectRoot, 'dist');
  if (fs.existsSync(distDir)) {
    console.log(`   Syncing watermarked photos to dist/...`);
    for (const file of allFiles) {
      const rel = path.relative(path.join(projectRoot, 'public'), file);
      const distTarget = path.join(distDir, rel);
      if (fs.existsSync(path.dirname(distTarget))) {
        fs.copyFileSync(file, distTarget);
      }
    }
    console.log(`   ✅ Dist directory synced!`);
  }
}

main().catch(console.error);
