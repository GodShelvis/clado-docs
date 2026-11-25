# `clado.agent` · Inspiration Agent

`clado.agent` is the **native vertical AI engineering workbench** pinned to the bottom-right corner of the canvas. Deeply aware of your active document, selected cards, and semantic Tags, it orchestrates architecture design, test case authoring, Diff auditing, and ACP coding dispatch inside one workspace.

<div class="plugin-meta">
  <div class="plugin-meta-item"><span>Plugin ID</span><code>clado.agent</code></div>
  <div class="plugin-meta-item"><span>Mount Slot</span><strong>bottom-right</strong></div>
  <div class="plugin-meta-item"><span>Protection</span><strong>Built-in Protected (clado.*)</strong></div>
  <div class="plugin-meta-item"><span>Mobile Layout</span><strong>86dvh Bottom Sheet</strong></div>
</div>

<img src="/images/plugin-agent.png" alt="clado.agent Inspiration workbench with bottom-center feathered AI aura" class="plugin-shot" />

---

## Position & Appearance

- **Desktop Slot**: Pinned to `bottom-right`.
- **Collapsed State**: A compact frosted pill with a spark-bulb icon that stays unobtrusive during reading.
- **Expanded State**: Opens upward into a floating frosted workbench (`#clado-agent-panel`) with header controls, workflow chips, persona selector, streaming transcript, and adaptive composer.
- **Active AI Processing Aura**: Strictly while the Agent is streaming, reasoning, or mutating the canvas, a **≥ 80% wide, soft-feathered luminous glow** breathes softly along the bottom center edge of the panel—disappearing completely when idle.
- **Mobile Layout**: Automatically expands into an `86dvh` Bottom Sheet respecting virtual keyboard insets and safe-area margins.

---

## Key Features

### 1. Header Controls

- **Provider Badge**: Displays the active protocol and model beneath the header title.
- **Follow (`跟随`)**: Smoothly pans and focuses the canvas camera onto whichever card AI is reading or editing in real time.
- **History (`历史`)**: Browse and resume persisted sessions stored as plain text under `.clado/sessions/`.
- **New Chat (`新对话`)**: Start a clean vertical session on the active canvas.

### 2. Four Engineering Workflows

| Workflow | Purpose | Output |
| --- | --- | --- |
| **Architecture Design** | Map call chains, boundaries, and implementation plans | Cards view `.md` spec with semantic Tags and links |
| **Test Cases** | Derive edge cases, concurrency checks, and test matrices | Mindmap-ready test case hierarchy |
| **Diff Audit** | Verify real Git diffs against the approved design spec | Annotated audit cards highlighting additions, changes, and risks |
| **ACP Dispatch** | Package approved design cards and hand off implementation to a local ACP coding executor | Live progress and code changes in your repo |

### 3. Personas & ACP Executor Selection

Switch between **Software Architect**, **QA Specialist**, and **Audit Reviewer** personas independently of workflow mode. In **ACP Dispatch** mode, an **Executor** dropdown appears so you can choose any registered local ACP coding executor (such as ZCode or custom ACP plugins).

### 4. Dual-Protocol Streaming & `ask_user` Decisions

Supports true token streaming over both OpenAI and Anthropic protocols (with Prompt Caching and collapsible thinking blocks). Whenever a design decision requires human judgment, the Agent calls `ask_user` and pauses with an interactive decision card directly in the chat stream.

<img src="/images/agent-ask-user.png" alt="Inspiration Agent paused with an interactive ask_user decision card" class="plugin-shot-wide" />

---

## Configuring `clado.agent`

1. Open [`clado.brand`](/en/plugins/brand) → **Plugin Manager**.
2. Click **Settings** on **Inspiration (`clado.agent`)**.
3. Choose your protocol (OpenAI / Anthropic), enter `baseUrl`, `apiKey`, and `model`, and save.

---

## Next Steps

- Deep dive into the Agent protocol & ACP dispatch: [Built-in Agent & ACP Dispatch →](/en/ai/vertical-agent)
- Learn real-time presence & canvas glow behavior: [Live Presence & Human Decisions →](/en/ai/live-collaboration)
