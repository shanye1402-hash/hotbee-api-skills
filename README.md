# HotBee API Skills / HotBee API 技能包

One GitHub project hosts all HotBee-related Open Agent Skills. 安装后会打印中文分步引导，并在技能 UI 元数据和 `SKILL.md` 正文里提供对应中文名。

- One total installer for all skills.
- One independent installer command per skill.
- One CLI caller per feature for dry-run and supported live calls.
- Skill files for AI clients that support Open Agent Skills or can read local instructions.
- Chinese skill display names for installed skill lists and user-facing guidance.

## Install All

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install
```

After install, the CLI prints:

- Install locations, such as `~/.agents/skills/` and optional `~/.claude/skills/`.
- Installed skills with Chinese names.
- `HOTBEE_API_KEY` setup steps for PowerShell and macOS/Linux.
- Codex, Claude Code, generic AI, and direct CLI examples.
- Common troubleshooting notes for missing keys, UTF-8 output, and dry-run mode.

You can reopen the guide anytime:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 guide
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 guide douyin
```

## Install One Skill

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install image2
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install banana
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install seedance
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install happyhorse
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install douyin
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install rednote
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install bilibili
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install transcript
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install hot-rankings
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 install rednote-seed-code
```

## Skill Names / 技能中文名

| Feature ID | Skill name | 中文名 |
| --- | --- | --- |
| `image2` | `hotbee-image2` | HotBee Image2 图片生成 |
| `banana` | `hotbee-banana` | HotBee Banana2/Pro 图片生成 |
| `seedance` | `hotbee-seedance` | HotBee Seedance 2.0 视频生成 |
| `happyhorse` | `hotbee-happyhorse` | HotBee HappyHorse 1.0 视频生成 |
| `douyin` | `hotbee-douyin-collect` | HotBee 抖音数据采集 |
| `rednote` | `hotbee-rednote-collect` | HotBee 小红书数据采集 |
| `bilibili` | `hotbee-bilibili-collect` | HotBee B站数据采集 |
| `transcript` | `hotbee-transcript` | HotBee 音视频转文字 |
| `hot-rankings` | `hotbee-hot-rankings` | HotBee 全网热榜 |
| `rednote-seed-code` | `hotbee-rednote-seed-code` | HotBee 小红书种草码 |

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
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call image2 --prompt "生成一张小红书封面"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call banana --prompt "产品主图" --model nano-banana-pro
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call seedance --prompt "产品在阳光厨房里缓慢旋转" --ratio 9:16 --duration 5
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call douyin --text "解析这个视频的播放量和评论 https://v.douyin.com/xxxx/"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call rednote --url "https://www.xiaohongshu.com/explore/xxxx"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call bilibili --url "https://www.bilibili.com/video/BV..."
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call transcript --file-url "https://example.com/video.mp4"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call hot-rankings --text "获取百度和抖音热榜"
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call hot-rankings --platform all --dry-run
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.3 call rednote-seed-code --title "标题" --content "正文" --image-url "https://example.com/cover.png"
```

Use `--dry-run` to preview without spending points.

## AI Client Examples

Codex:

```text
$hotbee-douyin-collect 解析这个视频的播放量和评论 https://v.douyin.com/xxxx/
```

Claude Code:

```text
/hotbee-image2 生成一张 3:4 小红书封面，主题是 AI 工具清单
```

Generic AI:

```text
Use the local skill at ~/.agents/skills/hotbee-douyin-collect. Parse this Chinese request and return the matching data: 解析这个视频的播放量和评论 https://v.douyin.com/xxxx/
```

## Audit Status

The current HotBee public bundle, local skill audit, or provided OpenAPI contract proves these endpoints:

- Image2: `/tool/gptimage2/generate`, `/tool/gptimage2/query`
- Banana2/Pro: `/tool/nanobanana/draw/generate`, query through `/tool/gptimage2/query`
- Seedance 2.0: `/tool/video/seedance/generate`, `/tool/video/seedance/query`
- Douyin: documented Douyin endpoint set under `/tool/douyin/...`
- Rednote collection: `/tool/rednote/xhs_note_content`
- Bilibili collection: `/tool/bilibili/bilibili_video_data`
- Audio/video transcript: `/tool/speech/speechToText`
- Hot rankings: `GET /tool/hot/xiaohongshu`, `/tool/hot/douyin`, `/tool/hot/baidu`, `/tool/hot/weibo`, `/tool/hot/bilibili`
- Rednote seed code: `/tool/rednote/rednote_publish`

Not yet verified in HotBee public docs:

- HappyHorse 1.0 endpoint.
- Other-platform hot-ranking endpoints beyond Xiaohongshu, Douyin, Baidu, Weibo, and Bilibili.

HappyHorse and unverified ranking platforms still respond safely and do not fake live HotBee API calls. Confirmed hot-ranking platforms are wired to real endpoints and use missing-key protection before live calls.

## Safety

- Do not print real API keys.
- Do not bypass platform controls, login gates, rate limits, or paywalls.
- Do not collect sensitive personal information or use collection endpoints for harassment, spam, or rule-violating scraping.
- Default to `--dry-run` for paid generation or uncertain requests.
