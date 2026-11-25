# 模板继承与诊断校验

Clado 内置了 7 套开箱即用的研发与测试模板，并配备了实时解析诊断引擎，让 AI 和团队按统一工程规范产出高质量画布。

## 模板三级继承机制

当你或 AI 调用 `clado_templates list` / `read` 时，Clado 按以下优先级自动合并模板（同名模板高优先级覆盖低优先级）：

1. **当前工作区项目模板**：`<工作区>/.clado/templates/*.md`
2. **逐层上级目录模板**：父级团队/组织仓库中的 `.clado/templates/`
3. **本机用户模板库**：`~/.clado/templates/`（执行 `clado install` 或 `clado init` 自动准备）

### 内置官方模板一览

| 模板 ID | 名称 | 推荐默认视图 | 适用场景 |
| --- | --- | --- | --- |
| `call-chain` | 调用链路 | 卡片视图 | 追踪入口契约 → 应用层 → 领域层 → DAO/SQL 的真实调用链 |
| `business-flow` | 业务流程 | 卡片视图 | 端到端业务流转、角色泳道、异常分支与补偿策略 |
| `data-design` | 数据设计 | 卡片视图 | 表结构、字段契约、主外键与状态机流转 |
| `requirement-overview` | 需求总览 | 卡片视图 | 需求背景、核心范围、验收标准与变更清单 |
| `system-state` | 系统现状 | 卡片视图 | 长期演进的系统架构归档与模块职责边界 |
| `mind-expansion` | 思维发散 | 脑图视图 | 方案对比、头脑风暴与多维度拆解 |
| `test-cases` | 测试用例 | 脑图视图 | 按功能模块 → 正常流 / 边界条件 / 异常流 / 回归检查点组织用例树 |

通过 MCP `clado_templates` 的 `pull` / `push` 动作，可以随时在项目库与本机用户库之间同步自定义模板。

## 实时解析诊断规则

Clado 解析引擎在每次渲染、保存和 MCP 写入时都会执行确定性校验，结果同时展示在网页右上角无边框毛玻璃「`X 项问题`」角标与 MCP 响应的 `diagnostics` 字段中：

| 诊断码 | 级别 | 触发条件与修复建议 |
| --- | --- | --- |
| `MD_NO_CARD` | `error` / `warn` | 整篇缺少一级标题 `#`，或某子标题出现在任何 `#` 之前。 |
| `MD_CARD_ISOLATED` | `error` | 多卡画布交付校验（`clado build`）时存在未参与任何跨卡关系的孤立卡片（单卡画布自动豁免）。 |
| `MD_EDGE_AMBIGUOUS` | `error` | 链接目标同时匹配多张同名卡片，需改用 `卡片标题#小节标题` 完整路径或唯一 `#tagId`。 |
| `MD_TAG_DUPLICATE_ID` | `error` | 同一文档内定义了重复的 Tag `#id`，修改其中一个保持唯一。 |
| `MD_FRONT_MATTER_INVALID` | `error` | YAML 文档头格式非法。 |
| `MD_DUPLICATE_HEADING` | `warn` | 同级出现重名标题。 |
| `MD_HEADING_SKIP` | `warn` | 标题层级跳跃（例如 `#` 下直接跳 `###`）。 |
| `MD_CONTENT_LONG` | `warn` | 单块正文超过 400 字建议阈值（代码块、链接 URL 与 Tag 属性自动豁免字数统计）。 |
| `MD_FENCE_UNCLOSED` | `warn` | 代码围栏未闭合。 |
