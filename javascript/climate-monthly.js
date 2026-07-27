// Monthly climate averages for a station.
const BASE_URL = "https://api.usclimatedata.com/api/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;
if (!API_KEY) {
  throw new Error("Set USCLIMATEDATA_API_KEY to your API key");
}

const url = new URL(`${BASE_URL}/climate`);
url.searchParams.set("station_id", "USFL0316");
url.searchParams.set("temp_unit", "f");

const response = await fetch(url, { headers: { "X-API-Key": API_KEY } });
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
console.log(await response.json());
