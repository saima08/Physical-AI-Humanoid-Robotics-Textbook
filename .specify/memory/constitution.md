<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- Modified principles: None (initial setup)
- Added sections: Core Principles, Key Standards, Constraints, Success Criteria, Governance
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# AI/Spec-Driven Book Creation with Docusaurus + GitHub Pages Constitution

## Core Principles

### I. Clarity
Prioritize clarity for the developer/learner audience in all content.

### II. Accuracy
Ensure accuracy through verified technical examples.

### III. Consistency
Maintain consistency across all chapters and sections.

### IV. Deployability
All content must render correctly in Docusaurus and be deployable to GitHub Pages.

## Key Standards

- All code examples must be tested and working.
- Writing style: Clear, concise, tutorial-friendly.
- Markdown format: Docusaurus-compatible MDX.
- Terminology: Consistent naming conventions throughout.
- Reading level: Accessible to intermediate developers.

## Constraints

- Format: Docusaurus markdown (.md/.mdx files).
- Deployment target: GitHub Pages.
- Structure: Follow Docusaurus docs/sidebar conventions.
- Images: Stored in /static/img with relative paths.

## Success Criteria

- Book builds without errors (npm run build).
- Deploys successfully to GitHub Pages.
- All internal links functional.
- Code examples execute as documented.

## Governance

This constitution is the single source of truth for project standards. All contributions must adhere to these principles. Amendments require a pull request and approval from the project lead.

**Version**: 1.0.0 | **Ratified**: 2025-12-09 | **Last Amended**: 2025-12-09