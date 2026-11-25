# 版本更新日志

## 0.5.5-beta.5 · 单色透明毛玻璃 UI、移动端适配与统一语义 Tag 锚点

- **克制单色透明毛玻璃与 AI 体感柔光**：移除卡片、决策卡与插件弹窗上的四周边彩框与不透明底色，升级为浅/深双色统一透明毛玻璃；仅在 AI 活跃处理或生成时，于卡片 / 灵感面板底边中央呈现延伸至 ≥80% 宽度的羽化呼吸柔光（普通点击与静止卡片零打扰）。
- **PC / 移动端通用响应式布局与触控手势**：完整保留桌面端四角悬浮工作台，小屏（`≤ 680px`）自动适配安全区（紧凑顶栏、底栏防重叠截断、灵感/目录/弹窗切换为 Bottom Sheet 底部抽屉与 `44px` 触控热区），画布原生支持双指捏合缩放与单指拖拽。
- **统一语义 Tag 锚点（卡片 + Tag 二元连线模型）**：支持 6 色低饱和胶囊 `[新增]{#id .green}` 与无字 `5.5px` 纯色圆点 `[]{#id .amber}`（无外圈、视觉自动归左），同步支持代码块行尾注释 `// {#id .blue}`（自动提取至代码行最左侧边槽）与 Mermaid 注释 `%% {#id .green}`；支持同文档 `#tagId` 与跨文档 `other.md#tagId` 精准连线，新增 `MD_TAG_DUPLICATE_ID` 校验。

## 0.5.5-beta.4 · 轻量插件市场底座、`clado plugin` CLI 与权限审计

- 新增 `clado plugin <list|create|install|remove|search>` 完整命令行插件管理与 UI / ACP 执行器脚手架生成。
- 新增轻量 JSON 插件市场索引（内置源、工作区 `.clado/plugin-registry.json` 与远程 HTTP(S) 源）以及在线端点 `GET /library/plugin-registry`、`DELETE /library/install-plugin`。
- 新增插件权限分级风险审计（`low` / `medium` / `high`），强守护 `clado.*` 内置命名空间不可覆盖或卸载。

## 0.5.5-beta.3 · 对称「行连行」与稳定语义锚点

- 画布连线升级为 100% 标准 Markdown 对称表达：行内正文/列表行（`clado:to:line:<锚点>`）与代码块/表格/Mermaid 起点（`;to:line|code|table|mermaid:...`）均可精准落点到目标卡正文行、代码行、表格行或 Mermaid 节点。
- 引入稳定语义锚点与行号漂移兜底，新增 `MD_MEDIA_LINK_TARGET` 诊断校验；卡片与脑图双视图一致渲染目标左侧精准蓝条与点击闪烁高亮。

## 0.5.5-beta.2 · 系统级内置原生 Agent、双协议流式与跟随 AI 视角

- 新增系统级内置原生 Agent（`clado.agent`），支持 OpenAI 兼容与 Anthropic 原生双协议真 Token 流式输出（含 Prompt Caching 与可折叠思考过程）。
- 新增内置人设预设、`.clado/sessions/` 持久化多会话、本地只读代码探针、`test-cases` 脑图用例模板、面板内一键 ACP 派发开发。
- 新增原生 `ask_user` 结构化决策提问卡与 `canvas_focus` 平滑镜头引导；画布全面升级为 SSE 实时推送与 `280ms` 平滑平移「跟随 AI 视角」开关，原生支持 `.md` 一等创建。

## 0.5.5-beta.1 · 多子工作区并发 MCP 与卡片布局修复

- 单一 `clado serve <父目录>` 支持多 Agent 并发操作各自子工作区（独立写锁、选区隔离、能力与截图路由、网页切换与新标签页打开）。
- 统一按左上角蓝条中点对齐父子卡片、消除长分支甩飞同列叶卡问题；视图顺序调整为「卡片（默认）→ 脑图 → 文档」。

## 0.5.4 · 插件管理与「灵感」对话

- 左上角菜单新增插件管理（启停、配置编辑与本地安装），插件可声明式登记带 Schema 的能力供 MCP 发现调用；右下角新增「灵感」ACP 对话面板。

## 0.5.3 · 从画布选区到 MCP 编辑

- 支持 `Cmd / Ctrl + 左键` 跨三视图多选卡片并同步给 MCP `clado_workspace selection`；新增 `clado update` / `clado changelog`。

## 0.5.2 · 精确连线与模板继承

- 支持代码行、表格行与 Mermaid 节点精准连线起点、双击聚焦、长按提取独立链路、三级模板继承合并。
