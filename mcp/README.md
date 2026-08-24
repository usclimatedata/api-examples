# MCP (Model Context Protocol)

Connect an AI assistant directly to the U.S. Climate Data API, no client code needed,
just configuration. Requires the **Developer plan or higher**. A Free-tier account
cannot complete the connection.

## Server URL

```
https://api.usclimatedata.com/mcp
```

## How the connection works

1. You add the server URL above to your MCP client (Claude Desktop, Claude.ai,
   Cursor, or any other MCP-compatible client).
2. The client registers itself with the server automatically (OAuth 2.1 dynamic
   client registration), there is no client ID or secret to create or paste in.
3. A browser window opens for a one-time consent screen. Approve it while signed in
   to your U.S. Climate Data account.
4. The client stores an access token and a refresh token. Tokens refresh silently in
   the background; you don't need to re-approve unless you revoke the connection
   from your dashboard.

Tool calls made through MCP count against the same monthly quota and rate limit as
regular API requests on your account.

## Claude Desktop

Some MCP clients, including Claude Desktop, connect to remote OAuth-protected
servers through the [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) bridge
rather than a direct URL entry. Add this to your `claude_desktop_config.json` (see
[`claude_desktop_config.json`](claude_desktop_config.json) in this folder for the
full file):

```json
{
  "mcpServers": {
    "us-climate-data": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://api.usclimatedata.com/mcp"]
    }
  }
}
```

Restart Claude Desktop after saving the file. The first tool call triggers the
browser consent step described above.

**Client support changes quickly.** Some clients now accept the server URL directly
without a bridge. Check your client's current documentation for remote MCP server
support before assuming the snippet above is still the right approach.

## Available tools

- **search_locations** - Find U.S. climate stations by city name.
- **station_capabilities** - Check which climate datasets exist for a station before requesting them.
- **get_monthly_climate** - Long-term monthly climate averages with a written description of the local climate.
- **get_monthly_normals** - Official NOAA 1991-2020 monthly climate normals.
- **get_koppen_classification** - Koppen-Geiger climate classification for a station.
- **get_daily_normals** - Official NOAA 1991-2020 daily climate normals. Requires the Developer plan or higher.

## Revoking access

Revoke a connected AI client at any time from the "Connected AI Clients" section of
your [dashboard](https://account.usclimatedata.com/dashboard). This immediately
invalidates its access and refresh tokens.
