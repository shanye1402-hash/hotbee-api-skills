---
name: hotbee-happyhorse
description: Use when a user asks for HappyHorse 1.0 video generation or wants to know whether HotBee exposes a HappyHorse API. The current HotBee public bundle does not expose a verified HappyHorse endpoint, so avoid fake live calls.
---

# HotBee HappyHorse 1.0

中文名：HotBee HappyHorse 1.0 视频生成

The current HotBee public API bundle and anonymous `/catalog/apis` response do not expose a verified HappyHorse endpoint. Do not invent a HotBee path.

Use this command to show the current contract status:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.1 call happyhorse --dry-run --prompt "一段电影感产品视频"
```

If the user provides an official HotBee HappyHorse endpoint later, update `references/api.md` before enabling live calls.
