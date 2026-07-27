// Find US weather stations near a city.
const BASE_URL = "https://api.usclimatedata.com/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;

const url = new URL(`${BASE_URL}/stations`);
url.searchParams.set("city", "New York");
url.searchParams.set("limit", "5");

const response = await fetch(url, { headers: { "X-API-Key": API_KEY } });
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
console.log(await response.json());
