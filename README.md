# 童话术 · 聊天话术教练（MVP）
在线体验：https://wyc77209-source.github.io/tong-huashu/

粘贴她在微信 / Tinder / Soul 的消息，输出：可复制回复（主选+备选）、她在想什么、信号判断（兴趣/试探/防御/情绪输出/空白无钩子/模糊拒绝）、技巧备注 + 童锦程语录。附土味情话生成器。

- 纯静态、纯前端引擎（`engine.js`）：加权词典计分分类器 + 否定/转折处理；回复按信号×阶段（刚认识/已聊熟）分池，并把她话里的关键词（火锅、周六、老板…）嵌进回复。不上传聊天内容，无需 API Key。
- 继续聊（多轮对话线，约3次被推自动建议停）、点按即复制、分享卡图片。
- 测试：`node tests.js`（78条调参集）、`node holdout*.js`（留出集；每个留出集在调参前的首测成绩才是真实泛化：55.6% / 53.3% / 50.0%）。
- 免费每日 5 次（localStorage）；会员仅为候补名单（邮箱只存在访客本机），不收款、不收集数据。
- 仅限 18+；涉及未成年、对方已明确拒绝、跟踪/隐私的请求直接拒绝。
- AI 后端钩子：设置 `window.TH_API` 为 POST 接口，返回与 `TH.analyze` 相同结构即可。

致谢/灵感：[hotcoffeeshake/tong-jincheng-skill](https://github.com/hotcoffeeshake/tong-jincheng-skill)；语录整理自 [233ol.com](https://www.233ol.com/wh/700.html)。童锦程内容为节目效果，真诚才是必杀技。
