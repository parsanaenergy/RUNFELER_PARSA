#!/usr/bin/env node
/**
 * AI Fingerprint Scanner - ParsaSEO Content Audit Tool
 * Scans content, markdown, and source files for generic AI-generated buzzwords and cliches.
 */

const fs = require('fs');
const path = require('path');

const FORBIDDEN_WORDS = [
  { word: "در دنیای امروز", suggestion: "امروزه / در شرایط فعلی شبکه برق و بازار انرژی / در صنعت امروز" },
  { word: "شایان ذکر است", suggestion: "نکته کلیدی اینجاست که / بررسی‌های میدانی نشان می‌دهد / توجه داشته باشید" },
  { word: "تسهیل می‌کند", suggestion: "ساده‌تر و سریع‌تر می‌سازد / امکان‌پذیر می‌کند / شتاب می‌بخشد" },
  { word: "تسهیل میکند", suggestion: "ساده‌تر و سریع‌تر می‌سازد / امکان‌پذیر می‌کند" },
  { word: "نوآورانه", suggestion: "پیشرفته / مهندسی‌شده / به‌روز و اختصاصی / دانش‌بنیان" },
  { word: "پاسخ کوتاه", suggestion: "دیدگاه مدیر فنی / جمع‌بندی تخصصی مهندسی / چکیده تجربی" },
  { word: "در نتیجه", suggestion: "از همین رو / بنابراین / با این حساب / بر این اساس / که این امر موجب" },
  { word: "به طور کلی", suggestion: "در عمل / بر اساس داده‌های تجربی / طبق استاندارد / در واقع" }
];

const SCAN_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.html', '.php', '.sql'];
const IGNORED_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', '.system_generated'];

let totalMatches = 0;
let fileMatchCount = 0;
const resultsByFile = {};

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const matchesInFile = [];

    lines.forEach((line, lineIndex) => {
      FORBIDDEN_WORDS.forEach(({ word, suggestion }) => {
        if (line.includes(word)) {
          matchesInFile.push({
            line: lineIndex + 1,
            word,
            suggestion,
            snippet: line.trim()
          });
        }
      });
    });

    if (matchesInFile.length > 0) {
      fileMatchCount++;
      totalMatches += matchesInFile.length;
      resultsByFile[filePath] = matchesInFile;
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
  }
}

function traverseDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.includes(entry.name)) {
        traverseDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext)) {
        if (!fullPath.includes('scan-ai-fingerprints')) {
          scanFile(fullPath);
        }
      }
    }
  }
}

const targetDir = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');

console.log('='.repeat(70));
console.log('🔍 ParsaSEO AI Fingerprint Scanner');
console.log(`📂 Scanning Target: ${targetDir}`);
console.log('='.repeat(70));

traverseDirectory(targetDir);

if (totalMatches === 0) {
  console.log('✅ تبریک! هیچ ردپای هوش مصنوعی (AI Fingerprint) در فایل‌های مورد بررسی یافت نشد.');
} else {
  console.log(`⚠️ تعداد کل ردپاهای هوش مصنوعی یافت‌شده: ${totalMatches} در ${fileMatchCount} فایل\n`);
  for (const [file, items] of Object.entries(resultsByFile)) {
    console.log(`📄 [فایل]: ${file}`);
    items.forEach(m => {
      console.log(`   ├─ خط ${m.line} | کلمه ممنوعه: "${m.word}"`);
      console.log(`   │  متن: ${m.snippet.slice(0, 110)}...`);
      console.log(`   │  جایگزین پیشنهادی: ${m.suggestion}`);
    });
    console.log('');
  }
}

console.log('='.repeat(70));
