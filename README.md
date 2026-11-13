# U.S. Climate Data API Examples

This repository contains practical code examples for integrating with the U.S. Climate Data API.

The examples demonstrate common use cases, including searching for locations and retrieving monthly and daily climate normals using different programming languages and tools.

## Documentation

- API Website: https://build.usclimatedata.com
- Interactive API Documentation: https://build.usclimatedata.com/docs

## Get an API key

Sign up for a free API key at https://account.usclimatedata.com.
Every example in this repository reads the key from the `USCLIMATEDATA_API_KEY` environment
variable:

```bash
export USCLIMATEDATA_API_KEY=your-key-here
```

## Available Examples

Each folder is self-contained and has its own README with setup and run instructions:

- [cURL](curl/)
- [JavaScript](javascript/)
- [TypeScript](typescript/)
- [PHP](php/)
- [Python](python/)
- [Postman](postman/)

  
- [MCP](mcp/) - connect an AI assistant directly, no client code needed

## Endpoints and tiers

All 7 live `/v1` endpoints are covered by every example set. Some endpoints require a paid tier:

| Endpoint | Minimum tier | Notes |
|---|---|---|
| `GET /stations` | Free | Search stations by city, state, zip, or coordinates |
| `GET /stations/{station_id}/capabilities` | Free | Which normals datasets exist for a station |
| `GET /climate` | Free | Monthly climate averages for a station |
| `GET /normals/monthly` | Free | 1991-2020 monthly normals, restricted columns on Free |
| `GET /normals/daily` | Developer | Daily normals for a specific month |
| `GET /normals/monthly/extended` | Advanced Access | Degree-days, percentiles, threshold days |
| `GET /normals/daily/extended` | Advanced Access | Daily percentiles and threshold probabilities |

Free and Developer are the only self-serve plans today. The extended normals
endpoints require Advanced Access, a custom plan available on request via
https://build.usclimatedata.com/contact.

There is no self-serve signup for it yet. A key without sufficient tier gets
a `403` on any gated endpoint. The language examples handle that response
explicitly, and the Postman collection includes response tests for gated
requests.

## Missing data and unavailable normals

- A `null` value means the figure was not recorded for that station. It never means zero.
- Not every station has every dataset. Call `GET /stations/{station_id}/capabilities` first:
  `climate_profile` tells you whether `/climate` has data, `monthly_normals` whether the
  NOAA normals endpoints do.
- When a station has no normals at all, the normals endpoints return `404` with the error code
  `normals_not_available` (an unknown station returns `station_not_found`).
- A retired duplicate station ID returns the station that replaced it, so the `station_id` in the
  response can differ from the one you sent.

## About the API

The U.S. Climate Data API provides structured access to long-term U.S. climate normals, enriched climate metrics, and application-ready climate intelligence for developers, dashboards, websites, agents, and AI applications.

## Integration tools

- [Run the U.S. Climate Data API collection in Postman](POSTMAN_COLLECTION_URL)

## License

The example code in this repository is licensed under the MIT License.
