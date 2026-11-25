# 四层微内核系统架构

Clado 坚持 **「小内核 · 强保护 · 声明式扩展」** 的四层微内核设计，确保核心画布与纯文本存储长期极简稳定，同时能安全承载不断增长的垂直 Agent 与第三方插件生态。

![Clado 四层微内核架构图](/images/arch-4layer.svg)

## 三层边界与保护规则

| 层级 | 命名空间 | 能否被第三方覆盖 | 磁盘 / 状态权限 | 职责边界 |
| --- | --- | :---: | --- | --- |
| **Layer 1 · 微内核** | `clado.host` | ❌ 绝对禁止 | 唯一拥有文件原子读写与解析权 | Core Parser（含 Tag 与诊断）、多子工作区并发写锁、Canvas Host、SSE 事件总线、MCP Gateway |
| **Layer 2 · 内置插件** | `clado.*` | ❌ 绝对禁止 | 不直接写盘，通过受控宿主接口交互 | 三大视图（`cards` / `mindmap` / `doc`）与四大四角悬浮控件（`brand` / `view-controls` / `directory` / `agent`） |
| **Layer 3 · 外部插件** | `<author>.<name>` | 仅允许显式升级 | 运行在隔离 iframe 沙箱或受审计执行器中 | 声明式 `clado-plugin.json`，按最小权限读取上下文或经 `exposeToAgent` 动态挂载到 MCP |
| **Layer 0 · 纯文本存储** | 本地文件系统 | Git 版本管理 | 单一事实源 | 标准 `.md`、`.clado/templates`、`.clado/plugins`、`.clado/sessions` |

## 核心源码模块地图

| 模块目录 | 职责说明 |
| --- | --- |
| `bin/clado.js` | CLI 入口与子命令调度（`serve` / `build` / `init` / `install` / `plugin` / `update`） |
| `src/core/` | 纯无副作用解析引擎：YAML 头拆分、L1–L6 卡片树、统一 Tag 锚点解析、对称行连行校验与诊断系统 |
| `src/workspace/` | 多子工作区存储引擎：递归扫描、按工作区隔离的并发写锁、原子写盘与跨文档引用重写 |
| `src/html/` | 画布编译与浏览器运行时：受保护视图注册表、三大视图布局、Tag 左侧边槽与连线渲染、聚焦/提取链路、放大镜 Lens、双指捏合手势 |
| `src/server/` | HTTP 预览服务、SSE 实时事件流、Streamable HTTP MCP 网关、插件沙箱加载器、能力路由桥与轻量插件市场索引 |
| `src/agent/` | 独立垂直 Agent 运行时：OpenAI / Anthropic 双协议流式、本地只读代码探针、`ask_user` / `canvas_focus` 原生工具、多会话持久化与 ACP 派单 |
| `plugins/` | 四大官方内置毛玻璃界面插件包（`brand` / `view-controls` / `directory` / `agent`） |
| `templates/` & `skills/` | 7 套官方研发/测试模板与单文件 AI `SKILL.md` |
