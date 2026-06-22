# Douyin API

Base: `https://www.smsz.xyz/prod-api`

Verified endpoint set:

- `/tool/douyin/Dy_video_info`
- `/tool/douyin/Dy_video_info_VIP`
- `/tool/douyin/Dy_video_info_VIP2`
- `/tool/douyin/Dy_convert_share_url`
- `/tool/douyin/Dy_search_video_VIP`
- `/tool/douyin/Dy_video_comments_VIP`
- `/tool/douyin/Dy_video_comments_list_VIP`
- `/tool/douyin/Dy_video_comments_reply_VIP`
- `/tool/douyin/Dy_user_info_VIP`
- `/tool/douyin/Dy_user_video_all_VIP`
- `/tool/douyin/Dy_user_video_page_VIP`
- `/tool/douyin/Dy_user_video_and_app`
- `/tool/douyin/Dy_user_videos_info`
- `/tool/douyin/Dy_fans_portrai_VIP`
- `/tool/douyin/Dy_hashtag_detail_VIP`
- `/tool/douyin/Dy_hashtag_video_list_VIP`

Keep `Dy_fans_portrai_VIP` spelling unchanged.

Example:

```bash
npx -y github:shanye1402-hash/hotbee-api-skills#v1.0.1 call douyin --dry-run --text "分析这个达人主页的作品和粉丝画像 https://www.douyin.com/user/xxxx"
```
