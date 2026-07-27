// Find US weather stations near a city.
interface StationsResponse {
  request: {
    endpoint: string;
    city?: string | null;
    state?: string | null;
  };
  meta: {
    count: number;
    limit: number;
  };
  stations: Array<{
    station_id: string;
    name: string | null;
    state: string | null;
    state_name: string | null;
    country: string | null;
    latitude: number | null;
    longitude: number | null;
    elevation_m: number | null;
    timezone: string | null;
    zip: string | null;
    distance_km?: number | null;
  }>;
}

const BASE_URL = "https://api.usclimatedata.com/api/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;
if (!API_KEY) {
  throw new Error("Set USCLIMATEDATA_API_KEY to your API key");
}

const url = new URL(`${BASE_URL}/stations`);
url.searchParams.set("city", "New York");
url.searchParams.set("limit", "5");

const response = await fetch(url, { headers: { "X-API-Key": API_KEY } });
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
const data: StationsResponse = await response.json();
console.log(data);
