<?php
/**
 * TravelSkills.io — Brevo subscription handler
 * Déposer à la racine de travelskills.io sur Hostinger
 */

// ─── Configuration ───────────────────────────────────────────────────────────
define('BREVO_API_KEY', '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');  // xkeysib-...
define('BREVO_LIST_ID', 5);                               // Remplacer par l'ID de votre liste (ex: 4)
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
$body = json_decode(file_get_contents('php://input'), true);
$email = trim($body['email'] ?? '');

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Appel API Brevo
$payload = json_encode([
    'email'          => $email,
    'listIds'        => [BREVO_LIST_ID],
    'updateEnabled'  => false,   // Ne pas écraser si déjà existant
    'attributes'     => [
        'SOURCE' => 'travelskills.io'
    ]
]);

$ch = curl_init('https://api.brevo.com/v3/contacts');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        'accept: application/json',
        'content-type: application/json',
        'api-key: ' . BREVO_API_KEY,
    ],
    CURLOPT_TIMEOUT        => 10,
]);

$response     = curl_exec($ch);
$http_code    = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error   = curl_error($ch);
curl_close($ch);

if ($curl_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Connection error']);
    exit;
}

$result = json_decode($response, true);

// 201 = créé, 204 = déjà existant (updateEnabled: false)
if ($http_code === 201 || $http_code === 204) {
    echo json_encode(['success' => true, 'message' => 'Subscribed successfully']);
} elseif ($http_code === 400 && isset($result['code']) && $result['code'] === 'duplicate_parameter') {
    // Email déjà inscrit — on répond success pour ne pas exposer la base
    echo json_encode(['success' => true, 'message' => 'Already subscribed']);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Subscription failed',
        'http_code' => $http_code,
        'brevo_response' => $result
    ]);
}
