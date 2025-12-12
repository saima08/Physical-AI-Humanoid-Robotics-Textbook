# Research: Docusaurus Best Practices

This document summarizes the research and decisions made for the Docusaurus-based book project.

## Docusaurus Version
- **Decision**: Use Docusaurus v3.x.
- **Rationale**: It's the latest major version with support for MDX v3, offering better performance and more features. It is under active development.
- **Alternatives considered**: Docusaurus v2.x. This is a stable version but lacks some of the modern features of v3.

## Sidebar Generation
- **Decision**: Auto-generated sidebar from the directory structure.
- **Rationale**: This approach reduces manual maintenance of the `sidebars.js` file. The `_category_.json` file provides sufficient control over the order and appearance of the sidebar items.
- **Alternatives considered**: Manual sidebar generation. This provides more control but is more error-prone and requires more maintenance.

## Theme
- **Decision**: Use the classic theme with custom CSS.
- **Rationale**: The classic theme provides a good starting point. Custom CSS will be used for branding and minor layout adjustments.
- **Alternatives considered**: A fully custom theme. This would be too time-consuming for this project.

## ROS 2 Distribution
- **Decision**: Use ROS 2 Humble.
- **Rationale**: Humble is a long-term support (LTS) release, supported until 2027. It's the current industry standard.
- **Alternatives considered**: ROS 2 Iron. Iron is a more recent release but is not an LTS release.

## Code Examples
- **Decision**: Provide snippets in the book with links to full files on GitHub.
- **Rationale**: This keeps the book content concise while providing complete, runnable examples for readers.
- **Alternatives considered**: Embedding full files in the book. This would make the chapters too long and difficult to read.