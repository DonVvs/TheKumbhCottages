import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TRAVEL_AND_KUMBH_BLOGS } from '../src/data/travelAndKumbhBlogsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metaBlogs = TRAVEL_AND_KUMBH_BLOGS.map(blog => ({
  slug: blog.slug,
  category: blog.category,
  badge: blog.badge,
  title: blog.title,
  excerpt: blog.excerpt,
  readTime: blog.readTime,
  publishedDate: blog.publishedDate,
  author: blog.author,
  image: blog.image
}));

const fileContent = `// Auto-generated lightweight metadata for Sacred Travel & Kumbh Guides
// Prevents bundling 230KB+ full blog content on list and preview widgets.
export const TRAVEL_AND_KUMBH_BLOGS_META = ${JSON.stringify(metaBlogs, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/data/travelAndKumbhBlogsMeta.js');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${outputPath} with ${metaBlogs.length} articles! Size: ${(Buffer.byteLength(fileContent) / 1024).toFixed(1)} KB`);
