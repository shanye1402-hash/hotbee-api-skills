# HotBee API Skills

One GitHub project can host all HotBee-related Open Agent Skills. This package provides:

- One total installer for all skills.
- One independent installer command per skill.
- One CLI caller per feature for dry-run and supported live calls.
- Skill files for AI clients that support Open Agent Skills or can read local instructions.

## Install All

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install
```

## Install One Skill

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install image2
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install banana
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install seedance
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install happyhorse
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install douyin
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install rednote
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install bilibili
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install transcript
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install hot-rankings
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install rednote-seed-code
```

## Set Key

Most paid endpoints read a shared key:

PowerShell:

```powershell
[Environment]::SetEnvironmentVariable("HOTBEE_API_KEY", "YOUR_KEY", "User")
```

macOS/Linux:

```bash
export HOTBEE_API_KEY="YOUR_KEY"
```

Feature-specific env vars are also supported, for example `HOTBEE_IMAGE2_KEY`, `HOTBEE_SEEDANCE_KEY`, `HOTBEE_DOUYIN_KEY`, `HOTBEE_REDNOTE_KEY`, `HOTBEE_BILIBILI_KEY`, and `HOTBEE_TRANSCRIPT_KEY`.

## Direct Calls

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call image2 --prompt "生成一张小红书封面"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call banana --prompt "产品主图" --model nano-banana-pro
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call seedance --prompt "产品在阳光厨房里缓慢旋转" --ratio 9:16 --duration 5
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call douyin --text "解析这个视频的播放量和评论 https://v.douyin.com/xxxx/"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call rednote --url "https://www.xiaohongshu.com/explore/xxxx"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call bilibili --url "https://www.bilibili.com/video/BV..."
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call transcript --file-url "https://example.com/video.mp4"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call rednote-seed-code --title "标题" --content "正文" --image-url "https://example.com/cover.png"
```

Use `--dry-run` to preview without spending points.

## Audit Status

The current HotBee public bundle proves these endpoints:

- Image2: `/tool/gptimage2/generate`, `/tool/gptimage2/query`
- Banana2/Pro: `/tool/nanobanana/draw/generate`, query through `/tool/gptimage2/query`
- Seedance 2.0: `/tool/video/seedance/generate`, `/tool/video/seedance/query`
- Douyin: documented Douyin endpoint set under `/tool/douyin/...`
- Rednote collection: `/tool/rednote/xhs_note_content`
- Bilibili collection: `/tool/bilibili/bilibili_video_data`
- Audio/video transcript: `/tool/speech/speechToText`
- Rednote seed code: `/tool/rednote/rednote_publish`

Not yet verified in HotBee public docs:

- HappyHorse 1.0 endpoint.
- All-web hot-ranking endpoint.

Those two skills install and respond safely, but do not fake a live HotBee API call. They report the missing contract until the official endpoint is provided.

## Safety

- Do not print real API keys.
- Do not bypass platform controls, login gates, rate limits, or paywalls.
- Do not collect sensitive personal information or use collection endpoints for harassment, spam, or rule-violating scraping.
- Default to `--dry-run` for paid generation or uncertain requests.
