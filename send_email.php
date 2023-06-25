<?php
// Configuration
$maxRequests = 10; // Maximum number of requests allowed per time frame
$timeFrame = 60; // Time frame in seconds (e.g., 60 seconds = 1 minute)

// Get the user's IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Generate a unique identifier for the current user's request
$requestId = md5($ip . $_SERVER['HTTP_USER_AGENT']);

// Define the path to the rate limit storage file
$storagePath = __DIR__ . '/ratelimit.txt';

// Load the rate limit data from the storage file
$rateLimitData = json_decode(file_get_contents($storagePath), true) ?? [];

// Check if the current user's request is within the rate limit
if (isset($rateLimitData[$requestId]) && $rateLimitData[$requestId]['requests'] >= $maxRequests) {
    http_response_code(429); // 429 Too Many Requests
    echo 'Rate limit exceeded. Please try again later.';
    exit;
}

// Increment the request count for the current user
if (!isset($rateLimitData[$requestId])) {
    $rateLimitData[$requestId] = [
        'requests' => 1,
        'timestamp' => time()
    ];
} else {
    $rateLimitData[$requestId]['requests']++;
}

// Clean up expired rate limit entries
$currentTime = time();
foreach ($rateLimitData as $id => $data) {
    if ($currentTime - $data['timestamp'] >= $timeFrame) {
        unset($rateLimitData[$id]);
    }
}

// Save the updated rate limit data to the storage file
file_put_contents($storagePath, json_encode($rateLimitData));

// Sanitize and validate the message parameter
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
if (!$message) {
    http_response_code(400);
    exit;
}

// Sanitize and validate the email parameter
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if (!$email) {
    http_response_code(400);
    exit;
}

// Escape email headers
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

// Set the email parameters
$to = 'you@invalidemail.com'; // Replace with the recipient's email address
$subject = 'A note from $b'; // Replace with the email subject
$headers = 'From: noone@invalidemail.com' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo 'Email sent successfully';
} else {
    http_response_code(500);
    echo 'Error sending email';
}
?>
