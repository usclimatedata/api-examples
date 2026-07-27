# U.S. Climate Data API Examples

This repository contains practical code examples for integrating with the U.S. Climate Data API.

The examples demonstrate common use cases, including searching for locations and retrieving monthly and daily climate normals using different programming languages and tools.

## Documentation

- API Website: https://build.usclimatedata.com
- API Documentation: https://build.usclimatedata.com/docs

## Get an API key

Sign up for a free API key at https://account.usclimatedata.com. Every example
in this repository reads the key from the `USCLIMATEDATA_API_KEY` environment
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

## Endpoints and tiers

All 7 live `/v1` endpoints are covered by every example set. Some endpoints require a paid tier:

| Endpoint | Minimum tier | Notes |
|---|---|---|
| `GET /stations` | Free | Search stations by city, state, zip, or coordinates |
| `GET /climate` | Free | Monthly climate averages for a station |
| `GET /stations/{station_id}/capabilities` | Free | Which normals datasets exist for a station |
| `GET /normals/monthly` | Free | 1991-2020 monthly normals, restricted columns on Free |
| `GET /normals/daily` | Developer | Daily normals for a specific month |
| `GET /normals/monthly/extended` | Growth | Degree-days, percentiles, threshold days |
| `GET /normals/daily/extended` | Growth | Daily percentiles and threshold probabilities |

A Free-tier key gets a `403` on any endpoint above its tier. Every example that
touches a gated endpoint shows how to detect and handle that response.

## About the API

The U.S. Climate Data API provides structured access to long-term U.S. climate normals, enriched climate metrics, and application-ready climate intelligence for developers, dashboards, websites, agents, and AI applications.

## License

The example code in this repository is licensed under the MIT License.
