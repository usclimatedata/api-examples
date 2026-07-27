"""1991-2020 monthly climate normals.

Available on the Free tier with a restricted set of columns; extra fields
like `description` require Developer+ -- see https://build.usclimatedata.com/docs
for the full column list.
"""
import os

import requests

BASE_URL = "https://api.usclimatedata.com/api/v1"
API_KEY = os.environ["USCLIMATEDATA_API_KEY"]

response = requests.get(
    f"{BASE_URL}/normals/monthly",
    headers={"X-API-Key": API_KEY},
    params={"station_id": "USFL0316", "month": 7},
    timeout=10,
)
response.raise_for_status()
print(response.json())
