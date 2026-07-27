"""Find US weather stations near a city."""
import os

import requests

BASE_URL = "https://api.usclimatedata.com/api/v1"
API_KEY = os.environ["USCLIMATEDATA_API_KEY"]

response = requests.get(
    f"{BASE_URL}/stations",
    headers={"X-API-Key": API_KEY},
    params={"city": "New York", "limit": 5},
    timeout=10,
)
response.raise_for_status()
print(response.json())
