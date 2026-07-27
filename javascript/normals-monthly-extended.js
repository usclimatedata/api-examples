// Extended monthly normals (degree-days, percentiles, threshold days).
// Requires at least the Growth tier -- a Free or Developer key gets a 403.
const BASE_URL = "https://api.usclimatedata.com/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;

const url = new URL(`${BASE_URL}/normals/monthly/extended`);
url.searchParams.set("station_id", "USFL0316");
url.searchParams.set("month", "7");

const response = await fetch(url, { headers: { "X-API-Key": API_KEY } });
if (response.status === 403) {
  console.log(
    "This endpoint requires at least the Growth tier. Upgrade at https://build.usclimatedata.com/pricing"
  );
} else if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
} else {
  console.log(await response.json());
}
