# Image2 API

Verified from HotBee public bundle and local working skill.

- Generate: `POST https://www.smsz.xyz/prod-api/tool/gptimage2/generate`
- Query: `POST https://www.smsz.xyz/prod-api/tool/gptimage2/query`
- Generate request uses query/form parameters: `key`, `prompt`, `model`, `aspectRatio`, `resolution`, `quality`, repeated `urls`, `webHook=-1`, `shutProgress=false`.
- Models: `gpt-image-2`, `gpt-image-2-vip`.
- Common resolutions: `1K`, `2K`, `4K`.
- Query request uses `key` and `id`.

Example:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.5 call image2 --prompt "产品海报，干净高级" --aspect-ratio 3:4 --resolution 1K
```
