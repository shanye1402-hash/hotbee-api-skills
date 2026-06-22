---
name: hotbee-hot-rankings
description: Use when a user asks for HotBee all-web hot rankings, 热榜, 热搜, trending topics, or Xiaohongshu/Rednote hot-search ranking data. Supports the verified HotBee Xiaohongshu hot-search endpoint and should not invent unverified platform endpoints.
---

# HotBee Hot Rankings

中文名：HotBee 全网热榜

Use the verified Xiaohongshu hot-search endpoint:

- Base: `https://www.smsz.xyz/prod-api`
- Endpoint: `GET /tool/hot/xiaohongshu`
- Required query: `key`
- Cost: 5 points per call

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.2 call hot-rankings --dry-run --text "获取小红书热搜榜"
```

Run live only when `HOTBEE_API_KEY` is available or the user passes `--key`. Return the API data fields `datas_info[].title`, `score`, `word_type`, `rank_change`, plus `time` and `tips`.

If the user asks for other platforms or true cross-platform aggregation, explain that this skill currently has a verified Xiaohongshu hot-search endpoint only. Do not invent unverified platform endpoints.

Read `references/api.md` for the exact request and response contract.
