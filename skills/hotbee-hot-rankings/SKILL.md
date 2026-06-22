---
name: hotbee-hot-rankings
description: Use when a user asks for all-web hot rankings, trending topics, 热榜, 热搜, or current cross-platform trend collection. The current HotBee public bundle does not expose a verified hot-ranking endpoint, so use AI browsing/search workflow or report the contract gap.
---

# HotBee Hot Rankings

The current HotBee public API bundle does not expose a verified all-web hot-ranking endpoint.

Use this command to show the current contract status:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call hot-rankings --dry-run --text "今天 AI 热榜"
```

If the AI client has browsing/search tools, collect current trends from authoritative platform pages and cite sources. Do not invent HotBee endpoint paths.

Read `references/api.md` for the audit status.
