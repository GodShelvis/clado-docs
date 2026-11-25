# 快速开始与安装

只需不到 1 分钟，即可在本地项目或文档目录启动 Clado 实时画布与 MCP 服务。

## 环境要求

- **Node.js 22+**（兼容 Node 18+，推荐 22 LTS）
- 现代浏览器（Chrome / Edge / Safari / 移动端浏览器）

## 安装 Clado

::: code-group

```bash [灰度最新版（推荐）]
npm install -g cladogram@beta --registry=https://registry.npmjs.org/
```

```bash [正式稳定版]
npm install -g cladogram --registry=https://registry.npmjs.org/
```

```bash [免安装直接运行]
npx cladogram@beta serve ./my-project
```

:::

安装完成后验证版本：

```bash
clado version
clado help
```

## 初始化并启动画布

在你的项目目录或文档目录执行：

```bash
# 可选：初始化 .clado/doc 与模板目录（幂等，不会覆盖已有文件）
clado init ./my-project

# 启动实时画布与 Streamable HTTP MCP 服务
clado serve ./my-project
```

终端会输出服务地址：

```text
Clado 实时画布：http://127.0.0.1:4317/
MCP：http://127.0.0.1:4317/mcp
工作区：/path/to/my-project
```

打开 `http://127.0.0.1:4317/` 即可看到你的实时可视化画布；点击左下角「文档」可切换目录与查看源码，点击右上角切换「卡片 / 脑图 / 文档」三种视图。

![Clado 深色主题卡片画布](/images/hero-cards-dark.png)

## 为业务项目安装 AI Skill

如果你使用外部 AI 编程工具（如 ZCode、Claude Code、Cursor、Codex 等），可以为你的业务项目安装单文件 `SKILL.md` 入口，并自动初始化 `~/.clado/templates/` 官方模板库：

```bash
# 查看支持的 AI 客户端列表
clado install /path/to/your-project --list

# 安装到指定客户端
clado install /path/to/your-project --to zcode

# 先预览将写入的文件（不落盘）
clado install /path/to/your-project --to zcode --dry-run
```

::: tip 关于 Skill 安装边界
`clado install` 仅向业务项目写入受管理的单文件 `SKILL.md`，绝不会把演示范例污染进你的业务仓库。
:::

## 一键导出离线 HTML 交付

评审定稿后，可将当前目录或单篇文档打包成**零外部依赖的单文件只读 HTML**，直接发给同事或在浏览器离线打开（依然保留三视图切换、放大镜与高亮交互）：

```bash
# 打包整个工作区（默认输出 clado.html）
clado build ./my-project

# 指定输出路径、默认视图与严格校验（警告也当错误处理）
clado build ./my-project --out ./dist/architecture.html --mode=cards --strict
```
