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
response.raise_for_status()
print(response.json())
