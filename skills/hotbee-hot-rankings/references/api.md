# Hot Rankings Contract Status

Audit result:

- Searched HotBee public page bundle from `https://www.hotbee.cn/#/api-docs`.
- Anonymous `https://www.smsz.xyz/prod-api/catalog/apis` returns 401.
- No verified `/tool/...hot...`, `/tool/...rank...`, or hot-ranking endpoint was found.

Safe behavior:

- Use browsing/search if the AI client has that capability.
- Otherwise return a clear contract-gap message and ask for the official endpoint.
