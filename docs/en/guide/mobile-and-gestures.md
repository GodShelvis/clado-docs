# Mobile & Touch Gestures

Clado preserves every desktop workbench control (`> 680px`) while adapting cleanly to phone and tablet screens (`≤ 680px`) with safe-area support, Bottom Sheets, and native multi-touch canvas gestures.

## Desktop vs. Mobile Adaptation

| Element | Desktop (`> 680px`) | Mobile (`≤ 680px`, safe-area aware) |
| --- | --- | --- |
| **Brand Menu** | `C` mark + `clado` pill | Compact `42×42px` `C` glass icon |
| **View Switcher** | `Cards \| Mindmap \| Doc` glass segmented control | Full 3-view switcher with `36px+` tap height |
| **Directory** | Floating bottom-left drawer | Truncated pill (zero overlap with Agent pill) + full-width **Bottom Sheet** |
| **Built-in Agent** | Floating bottom-right glass panel | Full-width **Bottom Sheet** with grab handle, `44px` tap targets, and top-center AI glow |
| **Document View** | 2-column sticky TOC + article | Clean single-column reading layout |

<div class="mobile-gallery">
  <figure>
    <img src="/images/mobile-canvas.png" alt="Clado Mobile Canvas">
    <figcaption>Mobile canvas: compact top bar + non-overlapping bottom bar</figcaption>
  </figure>
  <figure>
    <img src="/images/mobile-agent-sheet.png" alt="Clado Mobile Agent Bottom Sheet">
    <figcaption>Agent Bottom Sheet with ≥80% top-center AI working aura</figcaption>
  </figure>
</div>

## Native Touch Gestures

- **1-finger drag** on the canvas background pans smoothly (`touch-action: none` on `#stage`).
- **2-finger pinch-to-zoom** works anywhere on the canvas (including over cards) from `0.2x` to `2.5x`, keeping wires aligned in real time.
- **Vertical card scrolling** stays smooth inside resized cards via `touch-action: pan-y`.
