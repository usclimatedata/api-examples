// Extended daily normals (percentiles, threshold probabilities).
// Requires Advanced Access -- a Free or Developer key gets a 403.
const BASE_URL = "https://api.usclimatedata.com/api/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;
if (!API_KEY) {
  throw new Error("Set USCLIMATEDATA_API_KEY to your API key");
}

const url = new URL(`${BASE_URL}/normals/daily/extended`);
url.searchParams.set("station_id", "USFL0316");
url.searchParams.set("month", "7");

const response = await fetch(url, { headers: { "X-API-Key": API_KEY } });
if (response.status === 403) {
  console.log(
    "This endpoint requires Advanced Access. Request access at https://build.usclimatedata.com/contact"
  );
} else if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
} else {
  console.log(await response.json());
}
