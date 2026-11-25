---
layout: home

hero:
  name: "Clado"
  text: "Plain Markdown as a Live Visual Canvas for AI Engineering"
  tagline: "One standard Markdown file renders simultaneously as a Cards Call-Graph, Mindmap Test Tree, and Linear Document. AI operates the canvas via MCP and the built-in vertical Agent while you review, select, and decide."
  image:
    light: /images/hero-cards-light.png
    dark: /images/hero-cards-dark.png
    alt: Clado Visual Canvas Live Preview (Light & Dark)
  actions:
    - theme: brand
      text: Get Started →
      link: /en/guide/getting-started
    - theme: alt
      text: What is Clado?
      link: /en/guide/what-is-clado
    - theme: alt
      text: Semantic Tags & Links
      link: /en/syntax/tags-and-links

features:
  - icon: 🗂️
    title: Three Views, One Source
    details: Switch seamlessly between Cards (call graphs & architecture), Mindmap (test cases & hierarchy), and Document (linear reading) backed by plain .md files with zero hidden layout databases.
  - icon: 🏷️
    title: Card + Semantic Tag Linking
    details: 6-color pastel pills and crisp 5.5px pure dots pin cleanly to the left edge across prose, lists, tables, code gutters, and Mermaid nodes. Link anywhere with [label](#tagId).
  - icon: 🤖
    title: Streamable HTTP MCP + Native Agent
    details: 8 cohesive core MCP tools plus dynamic plugin capability routing. Built-in dual-protocol (OpenAI & Anthropic) streaming Agent with ask_user decisions and one-click ACP coding dispatch.
  - icon: ✨
    title: Restrained Monochrome Glass UI
    details: Clean monochrome frosted-glass controls in Light & Dark modes. Real-time SSE presence shows a feathered ≥80% bottom-center breathing glow strictly while AI is actively working.
  - icon: 📱
    title: Desktop & Mobile Touch Ready
    details: Full 4-corner floating HUD on desktop; safe-area mobile layout with Bottom Sheets, 44px tap targets, 1-finger pan, and native 2-finger pinch-to-zoom.
  - icon: 🧩
    title: Protected Microkernel & Plugins
    details: Built-in clado.* namespace is strictly protected. External UI capability plugins and ACP executors run sandboxed with clado plugin CLI and tiered permission auditing.
---

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 0; padding: 0 24px;">

## Try Clado in Three Commands

```bash
# 1. Install (latest beta includes native Agent, semantic Tags, and mobile support)
npm install -g cladogram@beta

# 2. Launch the live canvas and Streamable HTTP MCP server
clado serve /path/to/your-project

# 3. Install the single-file AI Skill into your project (optional)
clado install /path/to/your-project --to zcode
```

Open `http://127.0.0.1:4317/` to inspect your live canvas, and point any Streamable HTTP MCP client to `http://127.0.0.1:4317/mcp`.

</div>
