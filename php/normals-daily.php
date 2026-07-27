<?php
// Daily climate normals for a specific month.
// Requires at least the Developer tier -- a Free key gets a 403.
$apiKey = getenv('USCLIMATEDATA_API_KEY');
if (!$apiKey) {
    fwrite(STDERR, "Set USCLIMATEDATA_API_KEY to your API key\n");
    exit(1);
}

$url = 'https://api.usclimatedata.com/v1/normals/daily?' . http_build_query([
    'station_id' => 'USFL0316',
    'month' => 7,
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-API-Key: {$apiKey}"]);
$body = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($status === 403) {
    echo "This endpoint requires at least the Developer tier. Upgrade at https://build.usclimatedata.com/pricing\n";
} elseif ($status !== 200) {
    fwrite(STDERR, "Request failed with status {$status}: {$body}\n");
    exit(1);
} else {
    print_r(json_decode($body, true));
}
