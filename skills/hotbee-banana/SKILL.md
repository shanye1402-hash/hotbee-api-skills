---
name: hotbee-banana
description: Use when a user wants Banana2, Banana Pro, Nano Banana, or nano-banana image generation through the HotBee/SMSZ image API with shared Image2 polling.
---

# HotBee Banana2 / Pro

中文名：HotBee Banana2/Pro 图片生成

Use the package CLI:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.2 call banana --prompt "<prompt>" --model nano-banana
```

For Pro:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.2 call banana --prompt "<prompt>" --model nano-banana-pro
```

Use `HOTBEE_API_KEY`, `HOTBEE_IMAGE2_KEY`, `SMSZ_IMAGE2_KEY`, or `IMAGE2_KEY`. Poll results with `call banana --task-id <id>`.

Read `references/api.md` before changing model names or request shape.
