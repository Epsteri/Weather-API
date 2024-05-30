<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['location'])) {
    $location = urlencode($_POST['location']);
    $apiUrl = 'http://api.weatherapi.com/v1/current.json?key=APIKEYHERE=' . $location;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    echo $response;
} else {
    echo json_encode(['error' => 'Invalid request']);
}
?>
