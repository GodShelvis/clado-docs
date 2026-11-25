# 开发你的第一个插件

Clado 支持两类外部插件：**UI 能力插件（`--kind ui`）** 与 **ACP 编码执行器插件（`--kind executor`）**。第三方插件统一运行在隔离沙箱中，通过声明式清单 `clado-plugin.json` 申请最小权限。

## 1. 一键生成插件脚手架

无需手写样板文件，直接使用内置 CLI 生成完整可运行的插件目录：

::: code-group

```bash [UI 能力插件（含 MCP 暴露）]
clado plugin create acme.review ./my-review-plugin --kind ui
```

```bash [ACP 外包执行器插件]
clado plugin create acme.coder ./my-coder-executor --kind executor
```

:::

生成的 UI 插件目录结构：

```text
my-review-plugin/
├── clado-plugin.json    # 清单：ID、版本、权限、挂载槽位、配置 Schema、MCP 能力
└── ui/
    ├── index.html       # 沙箱 iframe 入口，引入 /clado-plugin-sdk.js
    ├── main.js          # 插件逻辑：读上下文、注册能力
    └── style.css        # 复用宿主透明毛玻璃主题变量
```

## 2. 清单契约（`clado-plugin.json`）

```json
{
  "manifestVersion": 1,
  "id": "acme.review",
  "name": "评审助手",
  "version": "1.0.0",
  "engines": { "clado": "^0.5.5" },
  "protocols": ["1.0"],
  "entrypoints": { "ui": { "path": "ui/index.html" } },
  "permissions": [
    "ui.mount:sidebar",
    "canvas.document.read",
    "canvas.selection.read"
  ],
  "contributes": {
    "mounts": [{ "id": "panel", "slot": "sidebar" }],
    "capabilities": [
      {
        "id": "review.summary",
        "mount": "panel",
        "version": "1.0.0",
        "description": "汇总当前文档评审意见",
        "exposeToAgent": true,
        "inputSchema": {
          "type": "object",
          "properties": { "file": { "type": "string" } },
          "required": ["file"],
          "additionalProperties": false
        },
        "outputSchema": {
          "type": "object",
          "properties": { "summary": { "type": "string" } },
          "required": ["summary"],
          "additionalProperties": false
        }
      }
    ]
  }
}
```

### 合法挂载槽位与权限

| 权限类别 | 合法值 | 说明 |
| --- | --- | --- |
| **UI 挂载槽位** | `ui.mount:top-left` / `top-right` / `bottom-left` / `bottom-right` / `topbar` / `bottombar` / `sidebar` / `canvas-overlay` | 在指定槽位挂载沙箱 iframe |
| **只读画布上下文** | `canvas.document.read`、`canvas.selection.read`、`canvas.graph.read`、`canvas.viewport.read` | 通过 `plugin.getContext([...])` 读取受控快照 |
| **跨插件能力调用** | `capability.call:<pluginId>/<capability>@<major>` | 仅可调用清单显式声明的其他插件能力 |
| **ACP 执行器进程** | `executor.spawn`（高风险，需显式审计） | 注册自定义外部 Coding Agent 派单执行器 |

## 3. 在 `ui/main.js` 中使用插件 SDK

```js
const plugin = await window.CladoPluginSDK.connect();

// 读取当前文档与用户在画布上多选的卡片
const ctx = await plugin.getContext(['document', 'selection']);

// 注册能力：因 exposeToAgent: true，AI 可立即通过 clado_capabilities 调用
plugin.provide({
  'review.summary@1': async ({ file }) => {
    const latest = await plugin.getContext(['document', 'selection']);
    return {
      summary: `已核对 ${file}，当前选中 ${latest.selection.length} 个节点。`,
    };
  },
});
```

## 4. 安装并在工作区调试

```bash
# 执行权限审计并安装到目标工作区的 .clado/plugins/acme.review
clado plugin install ./my-review-plugin /path/to/your-workspace

# 启动工作区并加载外部插件
clado serve /path/to/your-workspace --experimental-plugins
```
