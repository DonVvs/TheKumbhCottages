import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'thekumbhcottages.com';
const KEY = 'e3d7a859b19f4a0c8b61c834a9e52c80';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read URLs from sitemap.xml
function getUrlsFromSitemap() {
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error(`❌ sitemap.xml not found at ${sitemapPath}`);
    return [];
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function submitToIndexNow(endpointHost, endpointPath, payload) {
  return new Promise((resolve) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: endpointHost,
      port: 443,
      path: endpointPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'TheKumbhCottages-IndexNow-Bot/1.0'
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        resolve({
          host: endpointHost,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ host: endpointHost, error: 'Request timed out' });
    });

    req.on('error', (err) => {
      resolve({ host: endpointHost, error: err.message });
    });

    req.write(data);
    req.end();
  });
}

export async function runIndexNow() {
  console.log(`\n📡 [IndexNow] Starting automated search engine indexing broadcast...`);
  const urls = getUrlsFromSitemap();

  if (urls.length === 0) {
    console.log(`⚠️ No URLs found to submit. Exiting.`);
    return;
  }

  console.log(`📋 Found ${urls.length} canonical URLs for ${HOST}`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    { name: 'IndexNow Central Hub (Bing, Yandex, Seznam, Naver)', host: 'api.indexnow.org', path: '/indexnow' },
    { name: 'Microsoft Bing Direct', host: 'www.bing.com', path: '/indexnow' }
  ];

  for (const ep of endpoints) {
    console.log(`🚀 Submitting to ${ep.name}...`);
    try {
      const result = await submitToIndexNow(ep.host, ep.path, payload);
      if (result.error) {
        console.log(`   ℹ️ [${ep.host}] Notice: ${result.error} (Network offline or blocked)`);
      } else if (result.statusCode === 200) {
        console.log(`   ✅ [${ep.host}] HTTP 200 OK: All ${urls.length} URLs submitted and accepted for instantaneous crawl!`);
      } else if (result.statusCode === 202) {
        console.log(`   ✅ [${ep.host}] HTTP 202 Accepted: Submission received and queued for immediate indexing!`);
      } else {
        console.log(`   ⚠️ [${ep.host}] HTTP ${result.statusCode} ${result.statusMessage || ''} ${result.body || ''}`);
      }
    } catch (e) {
      console.log(`   ℹ️ [${ep.host}] Error: ${e.message}`);
    }
  }

  console.log(`✨ [IndexNow] Automated sitemap detection and indexing dispatch completed.\n`);
}

runIndexNow();
