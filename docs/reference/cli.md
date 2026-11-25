# CLI 命令速查

Clado 全局命令行工具 `clado`（由 npm 包 `cladogram` 提供）涵盖画布预览、离线交付、Skill 安装、插件市场与版本升级。

## 命令总览

| 命令 | 说明 | 常用参数 |
| --- | --- | --- |
| `clado serve [目录或文件]` | 启动只读实时画布与 Streamable HTTP MCP（支持单工作区与大目录多子工作区） | `--port=4317`（`0` 随机端口）、`--mode=cards\|mindmap\|doc`（默认 `cards`）、`--theme=light\|dark`、`--entry=<文件>`、`--agent=off`、`--experimental-plugins`、`--json` |
| `clado init [目录]` | 幂等初始化 `.clado/doc` 与项目模板目录 | — |
| `clado build [目录或文件]` | 打包为单个自包含只读离线 HTML（默认 `clado.html`） | `--out=<路径>`、`--entry=<入口>`、`--mode=cards\|mindmap\|doc`、`--theme=light\|dark`、`--split`（按文档拆分）、`--strict`（警告视作错误） |
| `clado install [目录]` | 为指定 AI 编程客户端安装单文件 `SKILL.md` 并初始化 `~/.clado/templates/` | `--list`、`--to <客户端>`、`--dry-run`、`--force` |
| `clado plugin <子命令>` | 轻量插件管理与市场检索 | `list` / `create <id> --kind ui\|executor` / `install <dir>` / `remove <id>` / `search [关键词] [--registry <url>]` |
| `clado update` / `upgrade` | 检查或升级全局 npm 安装 | `--check`（仅查询最新版本）、`--json` |
| `clado changelog` | 输出内置版本更新说明 | — |
| `clado version` / `help` | 查看当前版本 / 完整帮助信息 | — |

## 常用组合示例

```bash
# 在随机端口启动深色主题画布，并以 JSON 打印服务地址（方便脚本/容器集成）
clado serve ./workspace --port=0 --theme=dark --json

# 仅以静态只读画布运行，关闭右下角「灵感」Agent 面板
clado serve ./workspace --agent=off

# 严格校验整个目录并导出单文件离线交付 HTML
clado build ./workspace --out ./deliverable.html --strict

# 生成一个 UI 插件脚手架并安装到当前项目工作区
clado plugin create acme.notes ./acme-notes --kind ui
clado plugin install ./acme-notes ./workspace
```
