#!/usr/bin/env bash
# Find US weather stations near a city.
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

curl -sS "https://api.usclimatedata.com/v1/stations?city=New%20York&limit=5" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}"
