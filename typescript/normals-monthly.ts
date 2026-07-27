// 1991-2020 monthly climate normals. Available on the Free tier with a
// restricted set of columns (extra fields like `description` require
// Developer+ -- see https://build.usclimatedata.com/docs for the full
// column list).
interface NormalsMonthlyResponse {
  station_id: string;
  normals: unknown[];
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
