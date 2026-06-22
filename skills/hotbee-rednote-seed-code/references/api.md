# Rednote Seed-Code API

Verified from local HotBee publishing skill:

- Endpoint: `POST https://www.smsz.xyz/prod-api/tool/rednote/rednote_publish`
- Parameters:
  - `key`
  - `type`: `normal` for image notes, `video` for video notes
  - `title`
  - `content`
  - repeated `images`
  - `video`
  - `cover`
- Transport in the package CLI: query parameters with POST.

Expected success fields include `datas[0].qrcode` and `datas[0].url`.

Example:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call rednote-seed-code --dry-run --title "AI工具清单" --content "正文" --image-url "https://example.com/cover.png"
```
