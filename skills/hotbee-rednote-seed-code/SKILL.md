---
name: hotbee-rednote-seed-code
description: Use when a user wants to generate Xiaohongshu/Rednote seed-code publish pages, QR codes, or 种草码 through HotBee rednote_publish from prepared title, content, image URLs, or video URL.
---

# HotBee Rednote Seed Code

中文名：HotBee 小红书种草码

Use the package CLI:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.2 call rednote-seed-code --title "标题" --content "正文" --image-url "https://example.com/cover.png"
```

Use `HOTBEE_API_KEY`, `HOTBEE_REDNOTE_KEY`, `REDNOTE_KEY`, or `SMSZ_REDNOTE_KEY`.

Only call after title, content, and media URLs are confirmed. Do not publish accidental drafts.

Read `references/api.md` for endpoint and parameter details.
