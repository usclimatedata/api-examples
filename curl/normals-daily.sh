#!/usr/bin/env bash
# Daily climate normals for a specific month. Requires at least the
# Developer tier -- a Free key gets a 403.
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

response=$(curl -sS -w '\n%{http_code}' "https://api.usclimatedata.com/v1/normals/daily?station_id=USFL0316&month=7" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}")
status="${response##*$'\n'}"
body="${response%$'\n'*}"

if [ "$status" = "403" ]; then
  echo "This endpoint requires at least the Developer tier. Upgrade at https://build.usclimatedata.com/pricing"
else
  echo "$body"
fi
