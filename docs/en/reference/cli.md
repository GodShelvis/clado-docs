# CLI Reference

| Command | Description | Common Flags |
| --- | --- | --- |
| `clado serve [dir\|file]` | Launch live read-only canvas & Streamable HTTP MCP | `--port=4317`, `--mode=cards\|mindmap\|doc`, `--theme=light\|dark`, `--entry`, `--agent=off`, `--experimental-plugins`, `--json` |
| `clado init [dir]` | Idempotently initialize `.clado/doc` & templates | — |
| `clado build [dir\|file]` | Bundle single-file self-contained offline HTML | `--out`, `--entry`, `--mode`, `--theme`, `--split`, `--strict` |
| `clado install [dir]` | Install single-file AI `SKILL.md` & user templates | `--list`, `--to <client>`, `--dry-run`, `--force` |
| `clado plugin <cmd>` | Manage local plugins & search lightweight registry | `list`, `create`, `install`, `remove`, `search` |
| `clado update` | Check or upgrade global npm installation | `--check`, `--json` |
| `clado version` / `changelog` | Show version or release notes | — |
