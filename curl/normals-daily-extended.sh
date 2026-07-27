#!/usr/bin/env bash
# Extended daily normals (percentiles, threshold probabilities).
# Requires at least the Growth tier -- a Free or Developer key gets a 403.
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

response=$(curl -sS -w '\n%{http_code}' "https://api.usclimatedata.com/v1/normals/daily/extended?station_id=USFL0316&month=7" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}")
status="${response##*$'\n'}"
body="${response%$'\n'*}"

if [ "$status" = "403" ]; then
  echo "This endpoint requires at least the Growth tier. Upgrade at https://build.usclimatedata.com/pricing"
else
  echo "$body"
fi
