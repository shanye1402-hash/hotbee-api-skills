# Seedance 2.0 API

Verified from HotBee public bundle and local Seedance skill.

- Generate: `POST https://www.smsz.xyz/prod-api/tool/video/seedance/generate`
- Query: `POST https://www.smsz.xyz/prod-api/tool/video/seedance/query`
- Generate uses `multipart/form-data` fields: `key`, `prompt`, `model`, `resolution`, `ratio`, `duration`.
- URL references are query parameters:
  - repeated `referenceImageUrls`
  - repeated `referenceVideoUrls`
  - repeated `referenceAudioUrls`
- File references, when implemented by a client, use multipart fields:
  - repeated `referenceImages`
  - repeated `referenceVideos`
  - repeated `referenceAudios`
- Models: `Doubao-Seedance-2.0`, `Doubao-Seedance-2.0-fast`.
- Duration: `4` to `15`, or `-1` for auto.

Example:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.1 call seedance --dry-run --prompt "产品在阳光厨房里缓慢旋转" --ratio 9:16 --duration 5 --image-url https://example.com/product.png
```
