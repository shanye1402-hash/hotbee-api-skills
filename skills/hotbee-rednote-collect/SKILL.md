---
name: hotbee-rednote-collect
description: Use when a user wants to parse or collect Xiaohongshu/Rednote note content through the HotBee xhs_note_content endpoint from a note URL.
---

# HotBee Rednote Collect

Use the package CLI:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call rednote --url "https://www.xiaohongshu.com/explore/xxxx"
```

Use `HOTBEE_API_KEY`, `HOTBEE_REDNOTE_KEY`, or `REDNOTE_KEY`.

Read `references/api.md` before assuming user-profile or search endpoints; only note content is verified in the public bundle.
