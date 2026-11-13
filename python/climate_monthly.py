"""Monthly climate averages for a station."""
import os

import requests

BASE_URL = "https://api.usclimatedata.com/api/v1"
API_KEY = os.environ["USCLIMATEDATA_API_KEY"]

response = requests.get(
    f"{BASE_URL}/climate",
    headers={"X-API-Key": API_KEY},
    params={"station_id": "USFL0316", "temp_unit": "f"},
    timeout=10,
)
if not response.ok:
    raise SystemExit(
        f"Request failed with status {response.status_code}: {response.text}"
    )
print(response.json())
