# 插件市场与权限审计

Clado 采用类似 Homebrew / VS Code Open Registry 的**轻量无后端 JSON 索引架构**，既支持社区公开索引，也支持企业内网在工作区 `.clado/plugin-registry.json` 维护私有插件源。

## `clado plugin` 命令行速查

```bash
# 列出内置受保护插件与当前工作区已安装的外部插件（含权限风险评级）
clado plugin list [工作区]

# 一键生成 UI 插件或 ACP 执行器插件脚手架
clado plugin create <pluginId> [输出目录] --kind ui|executor

# 执行清单校验与权限审计后，安全安装到 <工作区>/.clado/plugins/<pluginId>
clado plugin install <本地插件目录> [工作区]

# 安全卸载外部插件（严格拒绝卸载 clado.* 内置插件）
clado plugin remove <pluginId> [工作区]

# 检索插件市场索引（支持内置示例源、工作区私有源与远程 HTTP(S) JSON 源）
clado plugin search [关键词] [--registry <本地路径或URL>]
```

## 权限分级风险审计

安装、列举或检索任意外部插件时，内核会自动运行权限分级审计并给出明确的风险评级与中文摘要：

| 风险级别 | 覆盖权限 | 典型影响范围 |
| :---: | --- | --- |
| <span class="demo-tag green">low</span> | `ui.mount:*`、`canvas.*.read` | 仅在隔离 iframe 展示界面与读取画布只读快照 |
| <span class="demo-tag amber">medium</span> | `capability.call:*`、`exposeToAgent: true` | 可跨插件协作调用能力，或向 AI Agent 暴露受 Schema 约束的动作 |
| <span class="demo-tag red">high</span> | `executor.spawn`（ACP 执行器） | 可按用户派单启动本机外部 Coding Agent 进程 |

::: danger 不可逾越的安全红线
1. 任何插件源中的条目若伪造 `clado.*` 命名空间，索引加载器会直接过滤并拒绝安装。
2. 所有第三方插件清单均经过严格的语义版本、协议版本、权限白名单与 JSON Schema 校验；非法插件只会被隔离跳过，绝不影响画布核心运行。
:::

## 在线服务 HTTP 端点

运行 `clado serve` 时，工作区同步暴露以下只读检索与安全管理端点供前端插件管理弹窗调用：

- `GET /library/plugin-registry?q=<关键词>`：按当前工作区检索可用插件及权限审计结果；
- `DELETE /library/install-plugin?id=<pluginId>`：卸载指定工作区外部插件（拒绝 `clado.*`）。
