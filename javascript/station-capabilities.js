// Which normals datasets exist for a given station.
const BASE_URL = "https://api.usclimatedata.com/api/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;
if (!API_KEY) {
  throw new Error("Set USCLIMATEDATA_API_KEY to your API key");
}
const STATION_ID = "USFL0316";

const response = await fetch(`${BASE_URL}/stations/${STATION_ID}/capabilities`, {
  headers: { "X-API-Key": API_KEY },
});
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
console.log(await response.json());
