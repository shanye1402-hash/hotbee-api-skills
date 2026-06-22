---
name: hotbee-seedance
description: Use when a user wants Seedance 2.0 video generation through HotBee/SMSZ, including text-to-video, image/video/audio reference-to-video, async task submission, or task query.
---

# HotBee Seedance 2.0

中文名：HotBee Seedance 2.0 视频生成

Use the package CLI:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.1 call seedance --prompt "<video prompt>"
```

Query a task:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.1 call seedance --task-id "<task_id>"
```

Use `HOTBEE_API_KEY`, `HOTBEE_SEEDANCE_KEY`, or `SEEDANCE_API_KEY`. Keep generation tasks bounded: 4-15 seconds, reasonable material count, no abuse or bypass.

Read `references/api.md` for exact request shape.
