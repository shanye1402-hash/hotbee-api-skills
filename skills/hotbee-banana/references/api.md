# Banana2 / Pro API

Contract source: local HotBee integration memory and existing linked-account implementation.

- Generate: `POST https://www.smsz.xyz/prod-api/tool/nanobanana/draw/generate`
- Query: `POST https://www.smsz.xyz/prod-api/tool/gptimage2/query`
- Generate parameters: `key`, `prompt`, `model`, `aspectRatio`, optional `imageSize`, repeated `imageUrls`.
- Model aliases:
  - Banana2: `nano-banana`
  - Banana Pro: `nano-banana-pro`
- The response task id may appear as `id` or `task_id`; poll it through the shared Image2 query endpoint.

Example:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.2 call banana --dry-run --prompt "把参考图做成电商主图" --model nano-banana-pro --image-url https://example.com/ref.png
```
