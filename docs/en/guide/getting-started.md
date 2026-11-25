# Quick Start & Installation

Launch a live visual canvas and Streamable HTTP MCP server in under a minute.

## Requirements

- **Node.js 22+** (compatible with Node 18+, 22 LTS recommended)
- Any modern desktop or mobile browser

## Install Clado

::: code-group

```bash [Latest Beta (Recommended)]
npm install -g cladogram@beta --registry=https://registry.npmjs.org/
```

```bash [Stable Release]
npm install -g cladogram --registry=https://registry.npmjs.org/
```

```bash [Run Without Installing]
npx cladogram@beta serve ./my-project
```

:::

Verify your installation:

```bash
clado version
clado help
```

## Initialize & Serve

```bash
# Optional: initialize .clado/doc and project templates (idempotent)
clado init ./my-project

# Start the live read-only canvas and Streamable HTTP MCP server
clado serve ./my-project
```

Open `http://127.0.0.1:4317/` in your browser and connect MCP clients to `http://127.0.0.1:4317/mcp`.

![Clado Dark Theme Canvas](/images/hero-cards-dark.png)

## Install the AI Skill for Your Project

```bash
# List supported AI coding clients
clado install /path/to/your-project --list

# Install single-file SKILL.md and prepare ~/.clado/templates/
clado install /path/to/your-project --to zcode
```

## Export Offline HTML Deliverable

```bash
# Bundle into a single zero-dependency read-only HTML file (default: clado.html)
clado build ./my-project --out ./dist/architecture.html --mode=cards --strict
```
