#!/usr/bin/env bash
# Which normals datasets exist for a given station.
set -euo pipefail
: "${USCLIMATEDATA_API_KEY:?Set USCLIMATEDATA_API_KEY to your API key}"

curl -sS "https://api.usclimatedata.com/v1/stations/USFL0316/capabilities" \
  -H "X-API-Key: ${USCLIMATEDATA_API_KEY}"
