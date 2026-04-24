<?php
/**
 * TravelSkills.io — Brevo subscription handler
 * Déposer à la racine de travelskills.io sur Hostinger
 */

// ─── Configuration ───────────────────────────────────────────────────────────
define('BREVO_API_KEY',        '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');
define('BREVO_LIST_ID',        5);
define('TEMPLATE_NOTIFICATION', 5);   // Notification to team
define('TEMPLATE_WELCOME_EN',   6);   // Welcome email — English
define('TEMPLATE_WELCOME_FR',   7);   // Welcome email — French
define('NOTIFY_EMAIL',         'hello@travelskills.io');
define('NOTIFY_NAME',          'TravelSkills.io');
// ─────────────────────────────────────────────────────────────────────────────

// CORS — autoriser uniquement travelskills.io
$allowed_origins = ['https://travelskills.io', 'https://www.travelskills.io'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Accepter uniquement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Lire et valider le body JSON
$body  = json_decode(file_get_contents('php://input'), true);
$email = strtolower(trim($body['email'] ?? ''));
$lang  = in_array($body['lang'] ?? '', ['en', 'fr']) ? $body['lang'] : 'en';

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function brevo_post(string $endpoint, array $data): array {
    $ch = curl_init('https://api.brevo.com/v3' . $endpoint);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($data),
        CURLOPT_HTTPHEADER     => [
            'accept: application/json',
            'content-type: application/json',
            'api-key: ' . BREVO_API_KEY,
        ],
        CURLOPT_TIMEOUT => 10,
    ]);
    $response   = curl_exec($ch);
    $http_code  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($ch);
    curl_close($ch);
    return ['code' => $http_code, 'body' => json_decode($response, true), 'error' => $curl_error];
}

function send_template(int $templateId, string $toEmail, string $toName = '', array $params = []): void {
    $to = ['email' => $toEmail];
    if (!empty($toName)) {
        $to['name'] = $toName;
    }
    $payload = [
        'templateId' => $templateId,
        'to'         => [$to],
    ];
    if (!empty($params)) {
        $payload['params'] = $params;
    }
    brevo_post('/smtp/email', $payload);
}

// ─────────────────────────────────────────────────────────────────────────────

// 1. Ajouter le contact à la liste Brevo
$result = brevo_post('/contacts', [
    'email'         => $email,
    'listIds'       => [BREVO_LIST_ID],
    'updateEnabled' => false,
    'attributes'    => ['SOURCE' => 'travelskills.io', 'LANG' => strtoupper($lang)],
]);

if ($result['error']) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Connection error']);
    exit;
}

$http_code   = $result['code'];
$brevo_body  = $result['body'];
$already_sub = ($http_code === 400 && ($brevo_body['code'] ?? '') === 'duplicate_parameter');

if (!in_array($http_code, [201, 204]) && !$already_sub) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Subscription failed', 'http_code' => $http_code]);
    exit;
}

// 2. Envoyer le mail de bienvenu à l'inscrit (seulement si nouveau)
if ($http_code === 201) {
    $welcome_template = ($lang === 'fr') ? TEMPLATE_WELCOME_FR : TEMPLATE_WELCOME_EN;
    send_template($welcome_template, $email);

    // 3. Envoyer la notification à l'équipe (avec params pour afficher les infos du nouveau contact)
    send_template(TEMPLATE_NOTIFICATION, NOTIFY_EMAIL, NOTIFY_NAME, [
        'EMAIL'  => $email,
        'LANG'   => strtoupper($lang),
        'DATE'   => date('Y-m-d H:i'),
        'SOURCE' => 'travelskills.io',
    ]);
}

echo json_encode(['success' => true, 'message' => $already_sub ? 'Already subscribed' : 'Subscribed successfully']);
