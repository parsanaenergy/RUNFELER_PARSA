#!/bin/bash
# اسکریپت ساخت ZIP تمیز برای دیپلوی روی رانفلر
# استفاده: bash build-zip.sh

set -e

OUTPUT="parsa-energy-deploy.zip"

echo "📦 ساخت ZIP تمیز برای دیپلوی رانفلر..."

rm -f "$OUTPUT"

zip -r "$OUTPUT" . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x ".gitignore" \
  -x "*.log" \
  -x "dev.log" \
  -x "server.log" \
  -x ".env" \
  -x ".env.local" \
  -x "db/*" \
  -x "*.db" \
  -x "*.db-journal" \
  -x "examples/*" \
  -x "mini-services/*" \
  -x "download/*" \
  -x "upload/*" \
  -x "skills/*" \
  -x ".zscripts/*" \
  -x "agent-ctx/*" \
  -x "ARCHITECTURE.md" \
  -x "worklog.md" \
  -x "README.md" \
  -x "Caddyfile" \
  -x "parsa-energy-deploy.zip" \
  -x ".dockerignore" \
  > /dev/null 2>&1

SIZE=$(ls -lh "$OUTPUT" | awk '{print $5}')
FILES=$(unzip -l "$OUTPUT" | tail -1 | awk '{print $2}')

echo ""
echo "✅ ZIP آماده شد: $OUTPUT"
echo "📊 حجم: $SIZE | تعداد فایل: $FILES"
echo ""
echo "محتویات ریشه ZIP:"
unzip -l "$OUTPUT" | head -15
echo ""
echo "🚀 این فایل را در پنل رانفلر آپلود کنید."
