---
name: hotbee-douyin-collect
description: Use when a user wants to parse or collect verified Douyin video, comment, creator, fan portrait, or hashtag data through HotBee APIs using Chinese natural-language instructions and Douyin links.
---

# HotBee Douyin Collect

中文名：HotBee 抖音数据采集

Use the package CLI:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.5 call douyin --text "解析这个视频的播放量和评论 https://v.douyin.com/xxxx/"
```

Use `HOTBEE_API_KEY` only for VIP endpoints. Free/no-key endpoints can run without a key. If a requested Douyin catalog path is listed as stale in `references/api.md`, explain the current contract gap instead of calling it.

For fuller Douyin-specific behavior, the standalone package remains available as `hotbee-douyin-api-skill`; this total pack includes a compact compatible caller.

Read `references/api.md` for endpoint list and Chinese intent mapping.
