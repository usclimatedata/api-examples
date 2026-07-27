"""Extended daily normals (percentiles, threshold probabilities).

Requires Advanced Access -- a Free or Developer key gets a 403.
"""
import os

import requests

BASE_URL = "https://api.usclimatedata.com/api/v1"
API_KEY = os.environ["USCLIMATEDATA_API_KEY"]

response = requests.get(
    f"{BASE_URL}/normals/daily/extended",
    headers={"X-API-Key": API_KEY},
    params={"station_id": "USFL0316", "month": 7},
    timeout=10,
)
if response.status_code == 403:
    print(
        "This endpoint requires Advanced Access. "
        "Request access at https://build.usclimatedata.com/contact"
    )
else:
    response.raise_for_status()
    print(response.json())
