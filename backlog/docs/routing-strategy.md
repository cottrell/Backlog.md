# Navigation & Routing Strategy: Query Parameters vs. Slugs

## Current Implementation (links branch)
The automatic task ID linking currently uses a **query parameter strategy**:
- **Format:** `/?highlight=task-123`
- **Mechanism:** A global `QueryHandler` component in `App.tsx` watches for this parameter and opens the corresponding task modal.
- **Pros:** 
    - Zero disruption to existing page-based routing (`/tasks`, `/milestones`, etc.).
    - Allows linking to a task from *any* page.
    - Preserves state (e.g., if you are on the Statistics page and click a task link, you stay on Statistics but see the task details).

## Future Consideration: Slug-based Routing
To align with modern web standards and improve SEO/navigability, we should consider moving to a **slug-based routing** model:
- **Format:** `/tasks/task-123/my-task-title`
- **Comparison:** This is already used for Decisions and Documentation (`/decisions/:id/:title`).

### Why we haven't switched yet:
1.  **Modal vs. Page:** The current UI is heavily centered around a Task Modal. Moving to `/tasks/:id` might imply a full-page view, which would require a significant UI refactor or a "shallow" routing strategy where the modal is tied to the path.
2.  **Context Preservation:** Query parameters allow a "floating" modal experience. If we move to slugs, we need to decide if `/tasks/:id` always takes you to the list view, or if it can overlay the Board, Milestones, or Statistics.

### Recommended Next Steps:
- Evaluate a "Nested Routing" approach where `:taskId` can be an optional sub-segment of any main route (e.g., `/board/:taskId`, `/tasks/:taskId`).
- Implement `history.pushState` or `Link` components that update the URL without a full page reload when a task is opened.
- Standardize ID stripping and title sanitization (using `src/web/utils/urlHelpers.ts`) across all entity types.
