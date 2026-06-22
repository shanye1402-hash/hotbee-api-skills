# HotBee Skills 安装与使用命令

## 结论

全部放在一个 GitHub 项目里是可行的。推荐项目名：

```text
shanye1402-hash/hotbee-api-skills
```

总安装命令：

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install
```

安装完成后，终端会直接打印分步中文引导，包括：

- 安装位置。
- 已安装技能和对应中文名。
- PowerShell、macOS/Linux 的 `HOTBEE_API_KEY` 设置方式。
- Codex、Claude Code、通用 AI 的调用示例。
- 直接命令调用示例。
- 缺 key、中文乱码、dry-run 等排查说明。

以后需要重新查看引导：

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 guide
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 guide douyin
```

安装后会把所有技能复制到：

```text
~/.agents/skills/
```

如果检测到 Claude Code，也会同步到：

```text
~/.claude/skills/
```

## 通用 Key 设置

PowerShell:

```powershell
[Environment]::SetEnvironmentVariable("HOTBEE_API_KEY", "YOUR_KEY", "User")
```

macOS/Linux:

```bash
export HOTBEE_API_KEY="YOUR_KEY"
```

## 技能清单、独立安装命令、使用示例

| 功能 ID | Skill 名 | 中文名 | 独立安装命令 | 使用示例 |
| --- | --- | --- | --- | --- |
| `image2` | `hotbee-image2` | HotBee Image2 图片生成 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install image2` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call image2 --prompt "生成一张小红书封面"` |
| `banana` | `hotbee-banana` | HotBee Banana2/Pro 图片生成 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install banana` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call banana --prompt "产品主图" --model nano-banana-pro` |
| `seedance` | `hotbee-seedance` | HotBee Seedance 2.0 视频生成 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install seedance` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call seedance --prompt "产品在阳光厨房里缓慢旋转" --ratio 9:16 --duration 5` |
| `happyhorse` | `hotbee-happyhorse` | HotBee HappyHorse 1.0 视频生成 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install happyhorse` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call happyhorse --dry-run --prompt "电影感产品视频"` |
| `douyin` | `hotbee-douyin-collect` | HotBee 抖音数据采集 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install douyin` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call douyin --text "解析这个视频的播放量和评论 https://v.douyin.com/xxxx/"` |
| `rednote` | `hotbee-rednote-collect` | HotBee 小红书数据采集 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install rednote` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call rednote --url "https://www.xiaohongshu.com/explore/xxxx"` |
| `bilibili` | `hotbee-bilibili-collect` | HotBee B站数据采集 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install bilibili` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call bilibili --url "https://www.bilibili.com/video/BV..."` |
| `transcript` | `hotbee-transcript` | HotBee 音视频转文字 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install transcript` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call transcript --file-url "https://example.com/video.mp4"` |
| `hot-rankings` | `hotbee-hot-rankings` | HotBee 全网热榜 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install hot-rankings` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call hot-rankings --dry-run --text "获取百度和抖音热榜"` |
| `rednote-seed-code` | `hotbee-rednote-seed-code` | HotBee 小红书种草码 | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 install rednote-seed-code` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.4 call rednote-seed-code --title "标题" --content "正文" --image-url "https://example.com/cover.png"` |

## Codex / Claude Code 调用

Codex 示例：

```text
$hotbee-douyin-collect 解析这个视频的播放量和评论 https://v.douyin.com/xxxx/
```

Claude Code 示例：

```text
/hotbee-image2 生成一张 3:4 小红书封面，主题是 AI 工具清单
```

通用 AI 示例：

```text
Use the local skill at ~/.agents/skills/hotbee-image2. Dry-run an Image2 request for this prompt: 生成一张小红书封面
```

## 审核结果

已在 HotBee 当前公开 bundle、本地已验证技能或你提供的 OpenAPI 合同中确认：

- Image2: `/tool/gptimage2/generate`, `/tool/gptimage2/query`
- Banana2/Pro: `/tool/nanobanana/draw/generate`, 通过 `/tool/gptimage2/query` 查询
- Seedance 2.0: `/tool/video/seedance/generate`, `/tool/video/seedance/query`
- 抖音采集已确认可执行路线: `/tool/douyin/Dy_video_info`、`/Dy_video_info_VIP`、`/Dy_video_info_VIP2`、`/Dy_video_all_comments_VIP`、`/Dy_user_profile_VIP`、`/Dy_user_post_videos_Vip2`、`/Dy_user_video_and_app`、`/Dy_user_videos_info`、`/Dy_fans_portrai_VIP`、`/Dy_hashtag_detail_VIP`、`/Dy_hashtag_video_list_VIP`
- 小红书采集: `/tool/rednote/xhs_note_content`
- B站采集: `/tool/bilibili/bilibili_video_data`
- 音视频转文字: `/tool/speech/speechToText`
- 全网热榜: `GET /tool/hot/xiaohongshu`、`/tool/hot/douyin`、`/tool/hot/baidu`、`/tool/hot/weibo`、`/tool/hot/bilibili`
- 小红书种草码: `/tool/rednote/rednote_publish`

当前未确认或不应默认调用：

- HappyHorse 1.0
- 小红书、抖音、百度、微博、B站以外的其他平台热榜 endpoint
- 抖音公开目录里部分旧路径当前后端探测为 `404 Not Found`：`/Dy_convert_share_url`、`/Dy_search_video_VIP`、`/Dy_video_comments_VIP`、`/Dy_video_comments_list_VIP`、`/Dy_video_comments_reply_VIP`、`/Dy_user_info_VIP`、`/Dy_user_video_all_VIP`、`/Dy_user_video_page_VIP`

HappyHorse 和未确认平台热榜已做安全处理：可以安装，可以输出当前合同状态，但不会伪造 HotBee endpoint 或发起不确定请求。已确认热榜平台会走真实 endpoint，并在缺少 key 时跳过请求。

## 测试命令

```bash
npm test
node ./bin/hotbee-skills.mjs list
node ./bin/hotbee-skills.mjs guide
node ./bin/hotbee-skills.mjs guide douyin
node ./bin/hotbee-skills.mjs call image2 --dry-run --prompt "测试"
node ./bin/hotbee-skills.mjs call douyin --dry-run --text "解析这个视频的播放量 https://v.douyin.com/xxxx/"
node ./bin/hotbee-skills.mjs call happyhorse --dry-run --prompt "测试"
node ./bin/hotbee-skills.mjs call hot-rankings --dry-run --text "获取百度和抖音热榜"
node ./bin/hotbee-skills.mjs call hot-rankings --dry-run --text "全网热榜"
node ./bin/hotbee-skills.mjs call hot-rankings --text "获取百度热榜"
```

## 风险规则

- 不把真实 key 写入技能包。
- 缺少 key 时不请求付费接口。
- 不伪造未公开 endpoint。
- 不绕过平台限制、登录门槛、限流、付费墙。
- 不用于骚扰、垃圾营销、敏感个人信息采集或违反第三方平台规则的用途。
