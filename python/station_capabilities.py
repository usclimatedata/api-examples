"""Which normals datasets exist for a given station."""
import os

import requests

BASE_URL = "https://api.usclimatedata.com/v1"
API_KEY = os.environ["USCLIMATEDATA_API_KEY"]
STATION_ID = "USFL0316"

response = requests.get(
    f"{BASE_URL}/stations/{STATION_ID}/capabilities",
    headers={"X-API-Key": API_KEY},
    timeout=10,
)
response.raise_for_status()
print(response.json())
