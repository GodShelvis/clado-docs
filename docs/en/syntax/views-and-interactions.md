# Three Views & Interactions

Switch seamlessly between **Cards (default) → Mindmap → Document** from the top-right frosted-glass switcher. All three views share one Markdown source and one multi-select state.

## 1. Cards View (`clado.view.cards` · Default)

Best for **call chains, architecture boundaries, and data flow**. Each `#` heading renders as a card laid out left-to-right; clicking a right-side port folds/unfolds downstream branches while keeping other cards and your camera stationary.

![Cards View](/images/hero-cards-light.png)

## 2. Mindmap View (`clado.view.mindmap`)

Best for **scope breakdown and test case trees**. Headings `L1–L6` expand naturally as a left-to-right tree while cross-card links appear as soft dashed overlays.

![Mindmap View](/images/view-mindmap.png)

## 3. Document View (`clado.view.doc`)

Best for **linear reading, full tables/code verification, and outline navigation**.

![Document View](/images/view-doc.png)

## Shortcuts & Gestures

| Action | Behavior |
| --- | --- |
| **`Cmd / Ctrl + Click`** on heading | Multi-select cards/nodes (synced to MCP `selection`) |
| **Double-click** heading | Focus upstream & downstream chain |
| **Long-press** heading | Extract chain into an isolated overlay canvas |
| **Click** code / table / Mermaid | Open borderless frosted-glass Lens zoom (`Esc` to close) |
| **Drag / Wheel / 2-finger pinch** | Pan & zoom (`0` to fit viewport) |
