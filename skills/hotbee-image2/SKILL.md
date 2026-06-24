---
name: hotbee-image2
description: Use when a user wants Image2 or GPT Image 2 image generation through HotBee/SMSZ, including Chinese prompt-to-image, reference-image generation, async task submission, or task query/polling.
---

# HotBee Image2

中文名：HotBee Image2 图片生成

Use the package CLI for deterministic calls:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.5 call image2 --prompt "<prompt>"
```

Dry-run before spending points unless the user clearly asks to execute:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.5 call image2 --dry-run --prompt "生成一张小红书封面"
```

Use `HOTBEE_API_KEY` only. Never print real keys.

Read `references/api.md` for endpoint and parameter details.
