# 内置受保护插件（`clado.*`）

Clado 将所有官方原生能力划入系统保留命名空间 **`clado.*`**，并在内核层强制保护：**任何第三方插件不得注册 `clado.*` ID，不得覆写、劫持或卸载系统自带视图与核心界面控件。**

## 三大受保护内置视图

位于受保护视图注册表 `window.CladoViews`，按默认顺序排列：

| 插件 ID | 视图名称 | 定位 | 能否被外部覆写 |
| --- | --- | --- | :---: |
| **`clado.view.cards`** | 卡片视图（默认） | 调用链、架构设计、Tag 精准连线 | ❌ 禁止 |
| **`clado.view.mindmap`** | 脑图视图 | 层级树、需求拆解、测试用例树 | ❌ 禁止 |
| **`clado.view.doc`** | 文档视图 | 长文顺读、大纲导航、代码/表格核对 | ❌ 禁止 |

外部视图插件只能使用 `<author>.<name>` 命名空间新增扩展视图（如看板视图、时序视图），不能替换上述三大内置视图。

## 四大内置界面插件（四角悬浮毛玻璃 HUD）

所有内置界面插件采用统一单色透明毛玻璃视觉，进入放大视图（Lens）时平滑淡出，把最大面积留给画布内容：

| 插件 ID | 挂载槽位 | 核心功能 | 配置路径 |
| --- | --- | --- | --- |
| **`clado.brand`** | `top-left` | 主题切换（浅色/深色）、画布截图、插件管理面板（启停/改配置/本地安装） | `.clado/plugin-settings.json`（不可关闭） |
| **`clado.view-controls`** | `top-right` | 三视图切换器、无边框毛玻璃诊断角标（`X 项问题`）、「退出聚焦」按钮 | `.clado/plugin-settings.json` |
| **`clado.directory`** | `bottom-left` | 树形文档目录、全文过滤搜索、源码查看、多子工作区切换与新标签页打开；向 MCP 注册 `directory.open@1` | `.clado/plugin-settings.json` |
| **`clado.agent`** | `bottom-right` | 「灵感」垂直 Agent 对话面板（OpenAI / Anthropic 双协议流式、历史会话、决策卡、ACP 派单） | `~/.clado/inspiration.json`（可用 `--agent=off` 停用） |
