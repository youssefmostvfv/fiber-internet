<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// =====================================================
// إعدادات الاتصال بقاعدة بيانات Hostinger
// =====================================================
$db_host = 'localhost';
$db_name = 'u368034572_fiber';    // اسم قاعدة البيانات في هوستينجر
$db_user = 'u368034572_fiber5g';   // اسم مستخدم قاعدة البيانات
$db_pass = 'Fiber5ginternet';      // كلمة المرور

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // جلب التقييمات المقبولة من قاعدة البيانات مرتبة بالأحدث
    $stmt = $pdo->prepare("SELECT id, name, city, provider, rating, comment, created_at FROM customer_reviews WHERE status = 'approved' ORDER BY id DESC LIMIT 30");
    $stmt->execute();
    $reviews = $stmt->fetchAll();
    echo json_encode(['success' => true, 'data' => $reviews]);
    exit();
}

if ($method === 'POST') {
    // قراءة البيانات المرسلة من النموذج
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    
    if (!$input) {
        $input = $_POST;
    }
    
    $name = isset($input['name']) ? trim(strip_tags($input['name'])) : '';
    $city = isset($input['city']) ? trim(strip_tags($input['city'])) : 'السعودية';
    $provider = isset($input['provider']) ? trim(strip_tags($input['provider'])) : 'STC فايبر';
    $rating = isset($input['rating']) ? intval($input['rating']) : 5;
    $comment = isset($input['comment']) ? trim(strip_tags($input['comment'])) : '';
    
    if (empty($name) || empty($comment)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'يرجى كتابة الاسم والتعليق كاملين']);
        exit();
    }
    
    $rating = max(1, min(5, $rating));

    $stmt = $pdo->prepare("INSERT INTO customer_reviews (name, city, provider, rating, comment, status, created_at) VALUES (:name, :city, :provider, :rating, :comment, 'approved', NOW())");
    $result = $stmt->execute([
        ':name' => $name,
        ':city' => $city,
        ':provider' => $provider,
        ':rating' => $rating,
        ':comment' => $comment
    ]);

    if ($result) {
        echo json_encode([
            'success' => true,
            'message' => 'تم إضافة تقييمك بنجاح',
            'data' => [
                'id' => $pdo->lastInsertId(),
                'name' => $name,
                'city' => $city,
                'provider' => $provider,
                'rating' => $rating,
                'comment' => $comment,
                'created_at' => date('Y-m-d H:i:s')
            ]
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'تعذر حفظ التقييم']);
    }
    exit();
}
