# Postman collection

1. Import `us-climate-data.postman_collection.json` into Postman.
2. Import `us-climate-data.postman_environment.json` and select it as the active environment.
3. Edit the `api_key` environment variable and paste your own API key.
4. Run any request. `station_id` defaults to `USFL0316`  (Change it to any station returned by the "Stations" request)

Two requests ("Normals monthly extended" and "Normals daily extended") require
Advanced Access, a custom plan available on request via
https://build.usclimatedata.com/contact
"Normals daily" requires at least the Developer tier. A Free-tier key gets a 403 on those three.
