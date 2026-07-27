#!/usr/bin/env bash
# Monthly climate averages for a station.
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

curl -sS "https://api.usclimatedata.com/api/v1/climate?station_id=USFL0316&temp_unit=f" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}"
