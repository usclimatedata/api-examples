<?php
// 1991-2020 monthly climate normals. Available on the Free tier with a
// restricted set of columns (extra fields like `description` require
// Developer+ -- see https://build.usclimatedata.com/docs for the full
// column list).
$apiKey = getenv('USCLIMATEDATA_API_KEY');
if (!$apiKey) {
    fwrite(STDERR, "Set USCLIMATEDATA_API_KEY to your API key\n");
    exit(1);
}

$url = 'https://api.usclimatedata.com/api/v1/normals/monthly?' . http_build_query([
    'station_id' => 'USFL0316',
    'month' => 7,
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
