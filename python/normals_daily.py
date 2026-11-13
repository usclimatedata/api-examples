"""Daily climate normals for a specific month.

Requires at least the Developer tier -- a Free key gets a 403.
"""
import os

import requests

BASE_URL = "https://api.usclimatedata.com/api/v1"
API_KEY = os.environ["USCLIMATEDATA_API_KEY"]

response = requests.get(
    f"{BASE_URL}/normals/daily",
    headers={"X-API-Key": API_KEY},
    params={"station_id": "USFL0316", "month": 7},
    timeout=10,
)
if response.status_code == 403:
    print(
        "This endpoint requires at least the Developer tier. "
        "Upgrade at https://build.usclimatedata.com/pricing"
    )
else:
    if not response.ok:
        raise SystemExit(
            f"Request failed with status {response.status_code}: {response.text}"
        )
    print(response.json())
