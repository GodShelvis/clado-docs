# 统一语义 Tag 与精准连线

为了让正文、列表、表格、代码块和 Mermaid 图都能用**同一套极简语法**承接精准连线，Clado 提供了 **「卡片 + 语义 Tag」二元连线模型**：

- **目标只有两种**：连到某张 **卡片 / 小节**（`[说明](#支付网关)`），或者连到文档内任意一个 **唯一 Tag ID**（`[触发验签](#verify-sign)`）。

![卡片 + 语义 Tag 二元连线模型示意图](/images/tags-anatomy.svg)

## 1. 六色语义约定

颜色含义在模板与文档中统一约定，用低饱和微彩在不打扰单色画布的前提下快速传达语义：

| 颜色类 / 别名 | 胶囊效果 | 无字圆点 | 约定语义 | 典型场景 |
| --- | --- | :---: | --- | --- |
| `.green` / `.add` | <span class="demo-tag green">新增</span> | <span class="demo-dot green"></span> | **新增** | 新接口、新字段、新逻辑分支 |
| `.amber` / `.mod` | <span class="demo-tag amber">修改</span> | <span class="demo-dot amber"></span> | **修改 / 注意** | 存量逻辑调整、变更注意项、告警点 |
| `.red` / `.del` | <span class="demo-tag red">删除</span> | <span class="demo-dot red"></span> | **删除 / 风险** | 下线代码、废弃字段、高危风险提示 |
| `.blue` / `.spec` | <span class="demo-tag blue">需求原文</span> | <span class="demo-dot blue"></span> | **需求 / 契约** | 需求原文、输入输出契约、核心主流程 |
| `.purple` / `.note` | <span class="demo-tag purple">特别说明</span> | <span class="demo-dot purple"></span> | **特别说明** | 补充约束、异步回调、降级策略 |
| `.gray`（默认） | <span class="demo-tag gray">锚点</span> | <span class="demo-dot gray"></span> | **通用锚点** | 无特定颜色语义的纯定位锚点 |

## 2. 两种形态与跨组件写法（视觉一律归左）

因为 Tag 是被连线的落点锚点，无论作者将无字圆点写在行首、行中还是行尾，Clado 渲染时都会**自动归位到该行最左侧**，优雅承接入线。

### ① 正文 / 列表 / 表格中的 Tag

```markdown
- [需求原文]{#req-entry .blue} 参数校验后 [触发回调验签](#verify-sign)
- [新增]{#entry-idemp .green} 补齐幂等请求号校验
- 回调接口强制校验商户签名 []{#cb-verify .amber}
- []{#idempotency .green} 幂等更新账户余额并生成对账流水
```

- **有文字**（`[新增]{#id .green}` 或仅做展示的 `[新增]{.green}`）：渲染为低饱和柔和胶囊。
- **无文字**（`[]{#id .amber}`）：渲染为极简 **`5.5px` 纯色小圆点**（零多余外圈），在无序列表中直接替代灰色圆点，安静自然。

### ② 代码块中的 Tag（保持代码 100% 可直接复制编译）

在代码行尾用当前语言的注释写出 `{#id .color [可选短字]}`，支持 `//`、`#`、`--`、`/* ... */`、`<!-- ... -->`：

```ts
export async function onCallback(req: CallbackReq) {
  verifySign(req); // {#verify-sign .blue}
  return ledger.commit(req); // {#commit-ledger .green 落账}
}
```

- 源码里它是合法注释，**复制出来可以直接编译运行**；
- 画布渲染时自动剥离行尾 `{#...}` 注释文本，并将极小圆点或胶囊精准渲染在**该代码行的最左侧边槽**，入线直接落到这一行左侧！

### ③ Mermaid 图中的 Tag

在 Mermaid 代码块内使用标准注释声明节点锚点：

```mermaid
flowchart LR
  VERIFY["回调验签"] --> SETTLE["账务清算"]
  %% {#SETTLE .green}
```

## 3. 连线引用语法（同文档 & 跨文档）

| 写法 | 目标类型 | 画布与引用表现 |
| --- | --- | --- |
| `[显示文字](目标卡片标题)` | 卡片 | 自左向右生成主调用实线与展开端口 |
| `[显示文字](目标卡片#小节标题)` | 卡内 L2–L6 小节 | 虚线精准落到目标小节标题左侧 |
| `[触发验签](#verify-sign)` | 同文档唯一 Tag | 精准落到目标卡内对应正文行 / 代码行左侧边槽 / Mermaid 节点，点击高亮闪烁 |
| `[触发验签](支付网关#verify-sign)` | 指定卡片内 Tag | 与 `#verify-sign` 等价，语义更显式 |
| `[幂等落账](ledger.md#idempotency)` | 跨文档 Tag | 点击跨文档跳转；经 MCP 重命名或移动文件时自动保留 `#idempotency` |

::: warning Tag ID 文档内必须唯一
如果同一份文档内定义了两个相同的 `#id`，Clado 解析器会立即报 `MD_TAG_DUPLICATE_ID` 错误，并在画布右上角诊断面板与 MCP 响应中指出精确行号。
:::

::: tip 为什么坚持二元连线模型？
将目标收敛为 **卡片/小节** 与 **语义 Tag（`#tagId`）** 两种之后，正文、列表、表格、代码行和 Mermaid 节点全部共享同一种语法；增删代码行不会导致行号漂移，文档长期演进时连线依然稳固。
:::
