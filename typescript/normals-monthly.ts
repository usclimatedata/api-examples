// 1991-2020 monthly climate normals. Available on the Free tier with a
// restricted set of columns (extra fields like `description` require
// Developer+ -- see https://build.usclimatedata.com/docs for the full
// column list).
type TemperatureValue = { c: number; f: number } | number | null;

interface NormalsMonthlyResponse {
  request: {
    endpoint: string;
    station_id: string;
    temp_unit: "c" | "f" | "both";
    precip_unit: "mm" | "in";
    snow_unit: "mm" | "cm" | "in";
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
    snow_unit: "mm" | "cm" | "in";
  };
  description?: string | null;
  data: Array<{
    month: number;
    month_name: string;
    temp_high: TemperatureValue;
    temp_low: TemperatureValue;
    temp_avg: TemperatureValue;
    precipitation: number | null;
    temp_range?: number | null;
    hdd?: number | null;
    cdd?: number | null;
    snow?: number | null;
    sunshine_hours?: number | null;
    wind_direction_degrees?: number | null;
    complete_period?: boolean;
  }>;
}

const BASE_URL = "https://api.usclimatedata.com/api/v1";
const API_KEY = process.env.USCLIMATEDATA_API_KEY;
if (!API_KEY) {
  throw new Error("Set USCLIMATEDATA_API_KEY to your API key");
}

const url = new URL(`${BASE_URL}/normals/monthly`);
url.searchParams.set("station_id", "USFL0316");
url.searchParams.set("month", "7");

const response = await fetch(url, { headers: { "X-API-Key": API_KEY } });
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
const data: NormalsMonthlyResponse = await response.json();
console.log(data);
