---
id: BACK-565
title: Add ready filter toggle to Kanban board in Web UI and interactive TUI
status: Done
assignee:
  - '@codex'
created_date: '2026-08-02 20:32'
updated_date: '2026-08-02 20:45'
labels:
  - tui
  - web
  - enhancement
dependencies: []
type: enhancement
ordinal: 208000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Let users filter Kanban boards to tasks whose dependencies are satisfied, using controls appropriate to the browser and interactive TUI without changing task order or task state.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 The browser Kanban board exposes a Ready only toggle that filters to ready tasks and preserves the setting in the URL.
- [x] #2 The interactive Kanban board exposes an R shortcut that toggles ready-only filtering and is documented in help.
- [x] #3 Ready-only filtering uses the existing readiness semantics and does not mutate task state or ordinal ordering.
- [x] #4 Automated tests cover browser and interactive TUI ready-only filter behavior.
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [x] #1 bunx tsc --noEmit passes when TypeScript touched
- [x] #2 bun run check . passes when formatting/linting touched
- [x] #3 bun test (or scoped test) passes
<!-- DOD:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Apply the isolated Kanban ready-filter controls from the prior combined branch. 2. Verify browser URL state and interactive TUI shortcut behavior against existing readiness semantics. 3. Run focused and full validation, then finalize the task for a dedicated draft PR.

4. Treat ready-only filtering as move-blocking and add a regression test for the interactive board.
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Implemented the browser Ready only toggle with URL state and the interactive TUI R shortcut with help text. The branch is stacked on BACK-546 for the shared readiness semantics. Verified with full bun test, bunx tsc --noEmit, bun run check ., and bun run build.

Review fix: ready-only filtering now blocks the interactive TUI move command, preventing ordinal moves against hidden tasks. Verified with src/test/board-ui.test.ts, TypeScript, and Biome.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Added the ready-only Kanban filter and corrected its interactive TUI move safety: ready-only filtering now blocks moves against hidden tasks. Verified with full prior validation plus focused board tests, TypeScript, and Biome.
<!-- SECTION:FINAL_SUMMARY:END -->
