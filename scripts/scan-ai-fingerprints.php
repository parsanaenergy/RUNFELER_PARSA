<?php
/**
 * ParsaSEO AI Fingerprint Scanner (PHP & WordPress CLI / Standalone)
 *
 * Use Cases:
 * 1. CLI file scan: php scripts/scan-ai-fingerprints.php --path=/path/to/project
 * 2. WordPress DB scan: php scripts/scan-ai-fingerprints.php --wp-config=/path/to/wp-config.php
 * 3. Direct MySQL DB scan: php scripts/scan-ai-fingerprints.php --db-host=localhost --db-name=wp_db --db-user=root --db-pass=secret
 */

$forbidden_words = [
    "در دنیای امروز" => "امروزه / در شرایط فعلی شبکه برق و بازار انرژی / در صنعت امروز",
    "شایان ذکر است" => "نکته کلیدی اینجاست که / بررسی‌های میدانی نشان می‌دهد / توجه داشته باشید",
    "تسهیل می‌کند" => "ساده‌تر و سریع‌تر می‌سازد / امکان‌پذیر می‌کند / شتاب می‌بخشد",
    "تسهیل میکند" => "ساده‌تر و سریع‌تر می‌سازد / امکان‌پذیر می‌کند",
    "نوآورانه" => "پیشرفته / مهندسی‌شده / به‌روز و اختصاصی / دانش‌بنیان",
    "پاسخ کوتاه" => "دیدگاه مدیر فنی / جمع‌بندی تخصصی مهندسی / چکیده تجربی",
    "در نتیجه" => "از همین رو / بنابراین / با این حساب / بر این اساس / که این امر موجب",
    "به طور کلی" => "در عمل / بر اساس داده‌های تجربی / طبق استاندارد / در واقع"
];

$options = getopt("", ["path:", "wp-config:", "db-host:", "db-name:", "db-user:", "db-pass:"]);

echo "\n" . str_repeat("=", 70) . "\n";
echo "🔍 ParsaSEO AI Fingerprint Scanner (PHP / WordPress DB / Files)\n";
echo str_repeat("=", 70) . "\n";

$total_matches = 0;

// 1. Scan Database if DB credentials or wp-config is provided
if (isset($options['wp-config']) || isset($options['db-name'])) {
    echo "🗄️ Scanning Database for AI Fingerprints...\n";
    $db_host = $options['db-host'] ?? 'localhost';
    $db_name = $options['db-name'] ?? '';
    $db_user = $options['db-user'] ?? 'root';
    $db_pass = $options['db-pass'] ?? '';

    if (isset($options['wp-config']) && file_exists($options['wp-config'])) {
        $wp_config = file_get_contents($options['wp-config']);
        if (preg_match("/define\(\s*['\"]DB_NAME['\"]\s*,\s*['\"](.*?)['\"]\s*\);/", $wp_config, $m)) $db_name = $m[1];
        if (preg_match("/define\(\s*['\"]DB_USER['\"]\s*,\s*['\"](.*?)['\"]\s*\);/", $wp_config, $m)) $db_user = $m[1];
        if (preg_match("/define\(\s*['\"]DB_PASSWORD['\"]\s*,\s*['\"](.*?)['\"]\s*\);/", $wp_config, $m)) $db_pass = $m[1];
        if (preg_match("/define\(\s*['\"]DB_HOST['\"]\s*,\s*['\"](.*?)['\"]\s*\);/", $wp_config, $m)) $db_host = $m[1];
    }

    if (!empty($db_name)) {
        try {
            $pdo = new PDO("mysql:host={$db_host};dbname={$db_name};charset=utf8mb4", $db_user, $db_pass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);
            echo "✅ Connected to Database: {$db_name}\n\n";

            $tables = ['wp_posts' => ['post_title', 'post_content', 'post_excerpt'], 'wp_postmeta' => ['meta_value']];
            foreach ($tables as $table => $columns) {
                // Check if table exists
                $table_exists = $pdo->query("SHOW TABLES LIKE '{$table}'")->fetch();
                if (!$table_exists) continue;

                foreach ($forbidden_words as $word => $suggestion) {
                    foreach ($columns as $column) {
                        $stmt = $pdo->prepare("SELECT ID, {$column} as matched_text FROM {$table} WHERE {$column} LIKE :keyword LIMIT 50");
                        $stmt->execute(['keyword' => "%{$word}%"]);
                        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

                        if (!empty($rows)) {
                            foreach ($rows as $row) {
                                $total_matches++;
                                echo "⚠️ [DB Match] Table: {$table} | Column: {$column} | Record ID: " . ($row['ID'] ?? 'N/A') . "\n";
                                echo "   ├─ کلمه ممنوعه: \"{$word}\"\n";
                                echo "   ├─ بخش متن: " . mb_substr(strip_tags($row['matched_text']), 0, 100) . "...\n";
                                echo "   └─ جایگزین پیشنهادی: {$suggestion}\n\n";
                            }
                        }
                    }
                }
            }
        } catch (Exception $e) {
            echo "❌ Database connection failed: " . $e->getMessage() . "\n";
        }
    }
}

// 2. Scan Directory Files
$scan_path = $options['path'] ?? dirname(__DIR__);
echo "📂 Scanning Local Directory: {$scan_path}\n";

$extensions = ['php', 'html', 'ts', 'tsx', 'js', 'jsx', 'json', 'md'];
$ignored_dirs = ['node_modules', '.next', '.git', 'vendor'];

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($scan_path, RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::SELF_FIRST
);

foreach ($iterator as $item) {
    if ($item->isDir()) {
        if (in_array($item->getFilename(), $ignored_dirs)) {
            // Skip directory traversal
            continue;
        }
    } elseif ($item->isFile()) {
        $ext = strtolower(pathinfo($item->getFilename(), PATHINFO_EXTENSION));
        if (in_array($ext, $extensions)) {
            $filePath = $item->getRealPath();
            if (strpos($filePath, 'scan-ai-fingerprints') !== false) continue;

            $lines = file($filePath, FILE_IGNORE_NEW_LINES);
            if ($lines === false) continue;

            foreach ($lines as $lineNum => $line) {
                foreach ($forbidden_words as $word => $suggestion) {
                    if (mb_strpos($line, $word) !== false) {
                        $total_matches++;
                        echo "📄 [فایل]: " . $filePath . "\n";
                        echo "   ├─ خط: " . ($lineNum + 1) . " | کلمه ممنوعه: \"{$word}\"\n";
                        echo "   ├─ متن: " . mb_substr(trim($line), 0, 110) . "...\n";
                        echo "   └─ جایگزین پیشنهادی: {$suggestion}\n\n";
                    }
                }
            }
        }
    }
}

echo str_repeat("=", 70) . "\n";
if ($total_matches === 0) {
    echo "🎉 نتیجه اسکن: ۰ ردپای هوش مصنوعی. تمام متون تمیز و انسانی‌سازی شده هستند.\n";
} else {
    echo "📊 مجموع کل ردپاهای هوش مصنوعی یافت شده: {$total_matches} مورد\n";
}
echo str_repeat("=", 70) . "\n";
