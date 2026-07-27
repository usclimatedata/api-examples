#!/usr/bin/env bash
# Extended monthly normals (degree-days, percentiles, threshold days).
# Requires Advanced Access -- a Free or Developer key gets a 403.
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

response=$(curl -sS -w '\n%{http_code}' "https://api.usclimatedata.com/api/v1/normals/monthly/extended?station_id=USFL0316&month=7" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}")
status="${response##*$'\n'}"
body="${response%$'\n'*}"

if [ "$status" = "403" ]; then
  echo "This endpoint requires Advanced Access. Request access at https://build.usclimatedata.com/contact"
else
  echo "$body"
fi
