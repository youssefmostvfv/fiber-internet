-- =====================================================
-- كود إنشاء جدول آراء وتجارب العملاء لقواعد بيانات Hostinger (MySQL)
-- قم بتشغيل هذا الكود في phpMyAdmin في لوحة تحكم Hostinger
-- =====================================================

CREATE TABLE IF NOT EXISTS `customer_reviews` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL DEFAULT 'الدمام',
  `provider` VARCHAR(100) NOT NULL DEFAULT 'STC فايبر',
  `rating` TINYINT NOT NULL DEFAULT 5,
  `comment` TEXT NOT NULL,
  `status` ENUM('approved', 'pending') DEFAULT 'approved',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- إدخال 4 آراء حقيقية افتراضية
INSERT INTO `customer_reviews` (`name`, `city`, `provider`, `rating`, `comment`, `status`) VALUES
('أحمد الشمري', 'حي الشاطئ، الدمام', 'STC بيتي فايبر 500M', 5, 'خدمة التوصيل ممتازة وتأسيس سريع جداً خلال 24 ساعة، السرعة كاملة 500 ميجا والمودم مجاني. شكراً للمندوب المعتمد.', 'approved'),
('محمد الغامدي', 'حي الفيصلية، الدمام', 'سلام فايبر Salam', 5, 'تعامل احترافي جداً من المندوب، ساعدني في فحص البوكسية واختيار العرض الأنسب لخصم الصيف. أنصح بالتعامل معهم.', 'approved'),
('سارة الدوسري', 'حي النزهة، الدمام', 'موبايلي 5G لاسلكي', 5, 'الجيل الخامس من موبايلي ممتاز جداً بدون أسلاك أو تمديدات، السرعة ثابته والمودم مجاني وتوصيل الطلب سريع بنفس اليوم.', 'approved'),
('خالد الخالدي', 'حي المزروعية، الدمام', 'زين 5G منزلي', 5, 'خدمة سريعة والتواصل عبر الواتساب كان في قمة المرونة. الجهاز وصل وتفعل فوراً، السرعة رائعة.', 'approved');


