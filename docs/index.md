---
layout: home

hero:
  name: "Clado"
  text: "纯文本即画布，为 AI 研发协作而生"
  tagline: "一份标准 Markdown 同时呈现卡片调用链、脑图用例树与文章流。AI 通过 MCP 与内置垂直 Agent 实时操作画布，你作为观察者直观审查、点选与拍板。"
  image:
    light: /images/hero-visual-light.svg
    dark: /images/hero-visual-dark.svg
    alt: Clado 概念视觉图：悬浮卡片、语义 Tag 锚点与柔光 AI 协作
  actions:
    - theme: brand
      text: 快速开始 →
      link: /guide/getting-started
    - theme: alt
      text: 了解 Clado 本体
      link: /core/what-is-core
    - theme: alt
      text: 探索内置插件
      link: /plugins/overview

features:
  - icon: 🗂️
    title: 三视图同源渲染
    details: 同一份标准 .md 文档无缝切换「卡片视图（调用链）」「脑图视图（测试用例树）」与「文档视图（长文顺读）」，零隐藏黑盒坐标。
  - icon: 🏷️
    title: 卡片 + 语义 Tag 二元连线
    details: 6 色低饱和胶囊与极简 5.5px 纯色圆点锚点，支持正文、列表、表格、代码行左侧边槽与 Mermaid 节点精准连线，写 [文案](#tagId) 即连。
  - icon: 🤖
    title: Streamable HTTP MCP + 原生 Agent
    details: 8 个高内聚核心 MCP 工具 + 动态插件能力桥；内置 OpenAI / Anthropic 双协议流式垂直 Agent，支持 ask_user 决策拍板与 ACP 一键派发开发。
  - icon: ✨
    title: 克制单色毛玻璃与实时现场感
    details: 浅/深双色单色调画布与透明悬浮控件；SSE 实时推送 AI 读写状态，仅在 AI 活跃处理时于底边中央泛起 ≥80% 羽化柔光呼吸。
  - icon: 📱
    title: PC / 移动端通用与触控手势
    details: 完整保留桌面端四角悬浮工作台，小屏自动切换为 Bottom Sheet 底部抽屉与 44px 触控热区，原生支持双指捏合缩放与单指拖拽。
  - icon: 🧩
    title: 四层微内核与轻量插件市场
    details: clado.* 保留命名空间受内核强保护；第三方 UI 能力插件与 ACP 执行器运行于隔离沙箱，配备 clado plugin CLI 与权限分级审计。
---

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 0; padding: 0 24px;">

## 三步体验 Clado

```bash
# 1. 安装（推荐最新 beta 通道体验原生 Agent、语义 Tag 与移动端适配）
npm install -g cladogram@beta

# 2. 在你的项目或需求目录启动实时画布与 MCP 服务
clado serve /path/to/your-project

# 3. 为你的 AI 编程客户端安装单文件 Skill（可选）
clado install /path/to/your-project --to zcode
```

启动后浏览器打开 `http://127.0.0.1:4317/` 即可查看实时画布，AI 客户端接入 `http://127.0.0.1:4317/mcp` 即可直接读写卡片与读取你的画布选区。

</div>
