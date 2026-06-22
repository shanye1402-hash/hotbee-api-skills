# HotBee Skills 安装与使用命令

## 结论

全部放在一个 GitHub 项目里是可行的。推荐项目名：

```text
shanye1402-hash/hotbee-api-skills
```

总安装命令：

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install
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

| 功能 | Skill 名 | 独立安装命令 | 使用示例 |
| --- | --- | --- | --- |
| Image2 | `hotbee-image2` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install image2` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call image2 --prompt "生成一张小红书封面"` |
| Banana2/Pro | `hotbee-banana` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install banana` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call banana --prompt "产品主图" --model nano-banana-pro` |
| Seedance 2.0 | `hotbee-seedance` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install seedance` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call seedance --prompt "产品在阳光厨房里缓慢旋转" --ratio 9:16 --duration 5` |
| HappyHorse 1.0 | `hotbee-happyhorse` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install happyhorse` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call happyhorse --dry-run --prompt "电影感产品视频"` |
| 抖音采集 | `hotbee-douyin-collect` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install douyin` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call douyin --text "解析这个视频的播放量和评论 https://v.douyin.com/xxxx/"` |
| 小红书采集 | `hotbee-rednote-collect` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install rednote` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call rednote --url "https://www.xiaohongshu.com/explore/xxxx"` |
| B站采集 | `hotbee-bilibili-collect` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install bilibili` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call bilibili --url "https://www.bilibili.com/video/BV..."` |
| 音视频转文字 | `hotbee-transcript` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install transcript` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call transcript --file-url "https://example.com/video.mp4"` |
| 全网热榜 | `hotbee-hot-rankings` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install hot-rankings` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call hot-rankings --dry-run --text "今天 AI 热榜"` |
| 小红书种草码 | `hotbee-rednote-seed-code` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 install rednote-seed-code` | `npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.0 call rednote-seed-code --title "标题" --content "正文" --image-url "https://example.com/cover.png"` |

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

已在 HotBee 当前公开 bundle 或本地已验证技能中确认：

- Image2: `/tool/gptimage2/generate`, `/tool/gptimage2/query`
- Banana2/Pro: `/tool/nanobanana/draw/generate`, 通过 `/tool/gptimage2/query` 查询
- Seedance 2.0: `/tool/video/seedance/generate`, `/tool/video/seedance/query`
- 抖音采集: `/tool/douyin/...` 公开目录中的 16 个 endpoint
- 小红书采集: `/tool/rednote/xhs_note_content`
- B站采集: `/tool/bilibili/bilibili_video_data`
- 音视频转文字: `/tool/speech/speechToText`
- 小红书种草码: `/tool/rednote/rednote_publish`

当前 HotBee 公开 bundle 未确认：

- HappyHorse 1.0
- 全网热榜

这两个技能已做安全处理：可以安装，可以输出当前合同状态，但不会伪造 HotBee endpoint 或发起不确定请求。要启用真实调用，需要补充官方 endpoint、参数、计费和查询生命周期。

## 测试命令

```bash
npm test
node ./bin/hotbee-skills.mjs call image2 --dry-run --prompt "测试"
node ./bin/hotbee-skills.mjs call douyin --dry-run --text "解析这个视频的播放量 https://v.douyin.com/xxxx/"
node ./bin/hotbee-skills.mjs call happyhorse --dry-run --prompt "测试"
node ./bin/hotbee-skills.mjs call hot-rankings --dry-run --text "今天 AI 热榜"
```

## 风险规则

- 不把真实 key 写入技能包。
- 缺少 key 时不请求付费接口。
- 不伪造未公开 endpoint。
- 不绕过平台限制、登录门槛、限流、付费墙。
- 不用于骚扰、垃圾营销、敏感个人信息采集或违反第三方平台规则的用途。
