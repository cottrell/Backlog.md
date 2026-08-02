---
id: BACK-565
title: Add ready filter toggle to Kanban board in Web UI and interactive TUI
status: In Progress
assignee:
  - '@codex'
created_date: '2026-08-02 20:32'
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
- [ ] #1 The browser Kanban board exposes a Ready only toggle that filters to ready tasks and preserves the setting in the URL.
- [ ] #2 The interactive Kanban board exposes an R shortcut that toggles ready-only filtering and is documented in help.
- [ ] #3 Ready-only filtering uses the existing readiness semantics and does not mutate task state or ordinal ordering.
- [ ] #4 Automated tests cover browser and interactive TUI ready-only filter behavior.
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 bunx tsc --noEmit passes when TypeScript touched
- [ ] #2 bun run check . passes when formatting/linting touched
- [ ] #3 bun test (or scoped test) passes
<!-- DOD:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Apply the isolated Kanban ready-filter controls from the prior combined branch. 2. Verify browser URL state and interactive TUI shortcut behavior against existing readiness semantics. 3. Run focused and full validation, then finalize the task for a dedicated draft PR.
<!-- SECTION:PLAN:END -->
