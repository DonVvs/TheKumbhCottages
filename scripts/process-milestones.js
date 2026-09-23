import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const uploadedDir = 'C:/Users/singh/.gemini/antigravity-ide/brain/670ec6a6-e1f4-445f-8e10-c69ff676c75c/.user_uploaded';
const targetDir = path.join(projectRoot, 'public/assets/milestones');
const backupDir = path.join(projectRoot, 'assets_backup_unwatermarked/milestones');

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const WATERMARK_TEXT = "© The Kumbh Cottages | Raamvan Retreats Global Venture";

const items = [
  {
    src: path.join(uploadedDir, 'media_1790162604451.jpg'),
    dest: 'the-kumbh-cottages-2001-ram-janmabhoomi-triveni-sangam-camp.webp',
    year: '2000-2001',
    title: 'The Kumbh Cottages - Prayagraj Maha Kumbh 2001 - Ram Janmabhoomi Camp'
  },
  {
    src: path.join(uploadedDir, 'media_1790162604475.jpg'),
    dest: 'the-kumbh-cottages-2012-prayagraj-maha-kumbh-corporate-camp.webp',
    year: '2011-2012',
    title: 'The Kumbh Cottages - Prayagraj Maha Kumbh 2012 - First Wi-Fi Corporate Camp'
  },
  {
    src: path.join(uploadedDir, 'media_1790162604485.jpg'),
    dest: 'the-kumbh-cottages-2012-prayagraj-maha-kumbh-elevated-villas.webp',
    year: '2011-2012',
    title: 'The Kumbh Cottages - Prayagraj Maha Kumbh 2012 - Elevated Riverfront Canvas Villas'
  }
];

function createWatermarkSvg(w, h) {
  const isLandscape = w >= h;
  const angle = isLandscape ? -20 : -32;
  const fontSize = Math.max(13, Math.round(Math.min(w, h * 1.3) * 0.026));

  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="wm-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#000000" flood-opacity="0.85"/>
      </filter>
    </defs>
    
    <g transform="translate(${w * 0.5}, ${h * 0.5}) rotate(${angle})">
      <line
        x1="-${fontSize * 14}"
        y1="-${fontSize * 0.8}"
        x2="${fontSize * 14}"
        y2="-${fontSize * 0.8}"
        stroke="rgba(230, 200, 140, 0.45)"
        stroke-width="0.8"
      />
      <text
        x="0"
        y="4"
        text-anchor="middle"
        fill="rgba(255, 255, 255, 0.48)"
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
      <line
        x1="-${fontSize * 14}"
        y1="${fontSize * 1.0}"
        x2="${fontSize * 14}"
        y2="${fontSize * 1.0}"
        stroke="rgba(230, 200, 140, 0.45)"
        stroke-width="0.8"
      />
    </g>
  </svg>
  `;
}

async function processMilestones() {
  for (const item of items) {
    console.log(`Processing ${item.src} -> ${item.dest}...`);
    const backupPath = path.join(backupDir, item.dest);
    const targetPath = path.join(targetDir, item.dest);

    // 1. Save unwatermarked high-res webp to backup
    await sharp(item.src)
      .webp({ quality: 92, effort: 6 })
      .toFile(backupPath);

    // 2. Read metadata and apply watermark
    const meta = await sharp(item.src).metadata();
    const w = meta.width;
    const h = meta.height;
    const svgOverlay = Buffer.from(createWatermarkSvg(w, h));

    await sharp(item.src)
      .composite([{ input: svgOverlay, top: 0, left: 0 }])
      .webp({ quality: 86, effort: 6 })
      .toFile(targetPath);

    console.log(`✅ Saved ${targetPath} (${w}x${h})`);
  }
}

processMilestones().catch(err => {
  console.error('Error processing milestones:', err);
  process.exit(1);
});
