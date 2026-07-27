<?php
// Monthly climate averages for a station.
$apiKey = getenv('USCLIMATEDATA_API_KEY');
if (!$apiKey) {
    fwrite(STDERR, "Set USCLIMATEDATA_API_KEY to your API key\n");
    exit(1);
}

$url = 'https://api.usclimatedata.com/v1/climate?' . http_build_query([
    'station_id' => 'USFL0316',
    'temp_unit' => 'f',
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-API-Key: {$apiKey}"]);
$body = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($status !== 200) {
    fwrite(STDERR, "Request failed with status {$status}: {$body}\n");
    exit(1);
}
print_r(json_decode($body, true));
