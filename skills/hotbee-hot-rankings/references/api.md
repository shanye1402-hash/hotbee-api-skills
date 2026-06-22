# Hot Rankings API

Base: `https://www.smsz.xyz/prod-api`

## Verified endpoint

### Xiaohongshu hot-search ranking

- Method: `GET`
- Endpoint: `/tool/hot/xiaohongshu`
- Category: 全网热榜
- Summary: 获取小红书热搜榜数据
- Cost: 5 points per call
- Required query:
  - `key`: HotBee card key. Read from `HOTBEE_API_KEY` by default.

Example:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.2 call hot-rankings --dry-run --text "获取小红书热搜榜"
```

Expected response shape:

```json
{
  "msg": "成功获取小红书热榜数据...",
  "code": 200,
  "datas_info": [
    {
      "score": "921万",
      "word_type": "热",
      "rank_change": 0,
      "title": "热搜标题"
    }
  ],
  "time": "2026-04-21 17:15:21",
  "tips": "提示信息"
}
```

## Current scope

This package has a verified HotBee endpoint for Xiaohongshu hot-search ranking only. If a user asks for Douyin, Bilibili, Weibo, or true cross-platform hot rankings, do not invent endpoints; ask for the official OpenAPI contract or use browsing/search tools with citations when available.
