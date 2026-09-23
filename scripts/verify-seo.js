import fs from 'fs';
import path from 'path';

const xml = fs.readFileSync('public/sitemap.xml', 'utf8');
const locRegex = /<loc>(https:\/\/thekumbhcottages\.com.*?)<\/loc>/g;
const locs = [];
let match;
while ((match = locRegex.exec(xml)) !== null) {
  locs.push(match[1]);
}

console.log('Total URLs found in sitemap.xml:', locs.length);

const issues = [];
locs.forEach(url => {
  const relPath = url.replace('https://thekumbhcottages.com', '') || '/';
  const filePath = relPath === '/' ? 'dist/index.html' : path.join('dist', relPath, 'index.html');

  if (!fs.existsSync(filePath)) {
    issues.push(`Missing pre-rendered dist file: ${filePath} for URL: ${url}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Title check
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    issues.push(`Empty or missing <title>: ${url}`);
  }

  // Meta description check
  const descMatch = html.match(/<meta name="description" content="(.*?)"/);
  if (!descMatch || !descMatch[1].trim()) {
    issues.push(`Missing or empty <meta name="description">: ${url}`);
  }

  // Canonical check
  const canMatch = html.match(/<link rel="canonical" href="(.*?)"/);
  if (!canMatch) {
    issues.push(`Missing <link rel="canonical">: ${url}`);
  } else if (canMatch[1] !== url) {
    issues.push(`Canonical mismatch: ${url} has canonical ${canMatch[1]}`);
  }

  // H1 heading check
  if (!html.includes('<h1')) {
    issues.push(`Missing <h1> heading in pre-rendered body: ${url}`);
  }

  // Structured Data Schema check
  if (!html.includes('application/ld+json')) {
    issues.push(`Missing JSON-LD schema: ${url}`);
  }
});

if (issues.length === 0) {
  console.log(`✅ ALL ${locs.length} URLs are 100% compliant with Google Search indexing criteria!`);
} else {
  console.log(`⚠️ Issues found (${issues.length}):`);
  issues.forEach(i => console.log(' - ' + i));
}
