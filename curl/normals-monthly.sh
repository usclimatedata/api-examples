#!/usr/bin/env bash
# 1991-2020 monthly climate normals. Available on the Free tier with a
# restricted set of columns (extra fields like `description` require
# Developer+, see docs/superpowers/specs/2026-07-26-api-examples-repo-design.md
# in the API repo for the full column matrix).
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

curl -sS "https://api.usclimatedata.com/v1/normals/monthly?station_id=USFL0316&month=7" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}"
