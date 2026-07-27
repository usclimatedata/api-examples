// Monthly climate averages for a station.
interface ClimateMonthlyResponse {
  request: {
    endpoint: string;
    station_id: string;
    temp_unit: "c" | "f" | "both";
    precip_unit: "mm" | "in";
    snow_unit: "cm" | "in";
    month: number | null;
  };
  station: {
    station_id: string;
    name: string | null;
    state: string | null;
    state_name: string | null;
    country: string | null;
    latitude: number | null;
    longitude: number | null;
    elevation_m: number | null;
    timezone: string | null;
  };
  meta: {
    data_period: { from: number; to: number };
    temp_unit: "c" | "f" | "both";
    precipitation_unit: "mm" | "in";
    snow_unit: "cm" | "in";
    sunshine_unit: string;
  };
  description?: string | null;
  data: Array<{
    month: number;
    month_name: string;
    temp_high: number;
    temp_low: number;
    precipitation: number | null;
    rainy_days: number | null;
    sunshine_hours: number | null;
    snow: number | null;
  }>;
}

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
const data: ClimateMonthlyResponse = await response.json();
console.log(data);
