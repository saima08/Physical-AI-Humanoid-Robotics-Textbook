---
id: 0003
title: Create Spec for Physical AI Book Layout
stage: spec
date: 2025-12-09
surface: agent
model: gemini-1.5-flash
feature: 001-physical-ai-book-layout
branch: 001-physical-ai-book-layout
user: user
command: /sp.specify
labels: ["spec", "docusaurus"]
links:
  spec: ./spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/001-physical-ai-book-layout/spec.md
 - specs/001-physical-ai-book-layout/checklists/requirements.md
tests:

---

## Prompt

---
description: Create or update the feature specification from a natural language feature description.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

The text the user typed after `/sp.specify` in the triggering message **is** the feature description. Assume you always have it available in this conversation even if `Physical AI & Humanoid Robotics Book - Docusaurus Layout Setup Target audience: AI/ML developers, robotics enthusiasts, and students transitioning from digital AI to embodied intelligence Focus: Bridging digital AI knowledge with physical robot control using ROS 2, Gazebo, Unity, and NVIDIA Isaac Success criteria: - Readers understand Physical AI principles and embodied intelligence - Clear progression from ROS 2 basics to humanoid robot development - All code examples tested with ROS 2 Humble/Iron on Ubuntu 22.04 - Deployable to GitHub Pages without build errors - Navigation follows logical learning path across 4 modules Constraints: - Format: Docusaurus MDX with proper frontmatter - Structure: 4 main modules + intro + capstone sections - Code blocks: Python (rclpy), YAML (launch files), XML (URDF) - Hardware references: RTX 4070+ workstations, Jetson Orin, RealSense cameras - Timeline: Layout and high-level content in first iteration Not building (in this iteration): - Detailed step-by-step tutorials (second iteration) - Complete code repositories - Video content or interactive simulations - Vendor-specific product comparisons - Hardware purchasing guides ---
## Book Structure Specification
### Root Configuration
docs/
├── intro.md
├── prerequisites/
│   ├── _category_.json
│   ├── hardware-requirements.md
│   └── software-setup.md
├── module-1-ros2/
│   ├── _category_.json
│   ├── index.md
│   ├── nodes-topics-services.md
│   ├── python-agents-rclpy.md
│   └── urdf-humanoids.md
├── module-2-simulation/
│   ├── _category_.json
│   ├── index.md
│   ├── gazebo-physics.md
│   ├── unity-rendering.md
│   └── sensor-simulation.md
├── module-3-nvidia-isaac/
│   ├── _category_.json
│   ├── index.md
│   ├── isaac-sim.md
│   ├── isaac-ros.md
│   └── nav2-bipedal.md
├── module-4-vla/
│   ├── _category_.json
│   ├── index.md
│   ├── voice-to-action.md
│   ├── cognitive-planning.md
│   └── capstone-project.md
└── assessments/
    ├── _category_.json
    └── index.md

---
## Module Specifications
### Introduction Section
Purpose: Set context for Physical AI journey
Content scope:
- What is Physical AI and embodied intelligence
- Why humanoid robots matter in human-centered environments
- Course learning outcomes overview
- Book navigation guide
### Prerequisites Section
Purpose: Ensure readers have proper setup before starting
Content scope:
- Hardware tiers: Workstation specs, Edge kits, Robot lab options
- Software stack: Ubuntu 22.04, ROS 2 Humble/Iron, Isaac Sim
- Cloud alternatives: AWS RoboMaker, Omniverse Cloud
- Economy Jetson Student Kit breakdown (~$700)
### Module 1: The Robotic Nervous System (ROS 2)
Purpose: Establish middleware foundation for robot control
Duration mapping: Weeks 3-5 of course
Content scope:
- ROS 2 architecture and core concepts
- Nodes, topics, services, and actions explained
- Building ROS 2 packages with Python (rclpy)
- Launch files and parameter management
- URDF format for humanoid robot descriptions
Key deliverable: ROS 2 package development project
### Module 2: The Digital Twin (Gazebo & Unity)
Purpose: Master physics simulation and environment building
Duration mapping: Weeks 6-7 of course
Content scope:
- Gazebo simulation environment setup
- URDF and SDF robot description formats
- Physics simulation: gravity, collisions, dynamics
- High-fidelity rendering in Unity
- Sensor simulation: LiDAR, Depth Cameras, IMUs
Key deliverable: Gazebo simulation implementation
### Module 3: The AI-Robot Brain (NVIDIA Isaac™)
Purpose: Advanced perception and training with NVIDIA tools
Duration mapping: Weeks 8-10 of course
Content scope:
- NVIDIA Isaac SDK and Isaac Sim overview
- Photorealistic simulation and synthetic data generation
- Hardware-accelerated VSLAM (Visual SLAM)
- Nav2 path planning for bipedal humanoid movement
- Reinforcement learning for robot control
- Sim-to-real transfer techniques
Key deliverable: Isaac-based perception pipeline
### Module 4: Vision-Language-Action (VLA)
Purpose: Converge LLMs with robotics for intelligent agents
Duration mapping: Weeks 11-13 of course
Content scope:
- Voice-to-Action with OpenAI Whisper
- Cognitive Planning: LLM to ROS 2 action sequences
- Speech recognition and natural language understanding
- Multi-modal interaction: speech, gesture, vision
- Integrating GPT models for conversational robotics
Key deliverable: Capstone autonomous humanoid project
### Capstone Project Section
Purpose: Integration of all modules into complete system
Content scope:
- Project requirements and architecture
- Voice command → Path planning → Navigation → Object manipulation
- Evaluation criteria and rubric
- Demo guidelines
### Assessments Section
Purpose: Validate learning through practical projects
Content scope:
- ROS 2 package development project specs
- Gazebo simulation implementation requirements
- Isaac-based perception pipeline criteria
- Capstone project evaluation rubric
---
## Docusaurus Configuration Requirements
### docusaurus.config.js
- Title: "Physical AI & Humanoid Robotics"
- Tagline: "From Digital Intelligence to Embodied Robots"
- GitHub Pages deployment configuration
- Prism syntax highlighting for Python, YAML, XML, bash
- Mermaid diagrams plugin for architecture visualization
### sidebars.js
- Auto-generated sidebars from folder structure
- Custom ordering: intro → prerequisites → modules 1-4 → assessments
- Collapsible module sections
### Category Configuration (_category_.json)
Each module folder requires:
- label: Module title
- position: Navigation order
- collapsible: true
- collapsed: false (for active module)

---
## Content Standards
### Frontmatter Template
---
sidebar_position: [number]
title: "[Chapter Title]"
description: "[SEO-friendly description]"
keywords: [physical-ai, ros2, robotics, nvidia-isaac]
---
### Code Block Standards
- Language tags: python, yaml, xml, bash
- Include file path comments where applicable
- Working examples tested on Ubuntu 22.04 + ROS 2 Humble
### Admonition Usage
- :::tip
  - Best practices and shortcuts
- :::info
  - Hardware specifications and requirements
- :::warning
  - Common pitfalls and errors
- :::danger
  - Safety considerations for physical robots
### Cross-Reference Pattern
Use relative links: [Topic Name](./relative-path.md)
Module references: [Module 1](../module-1-ros2/index.md)

---
## Deployment Specification
### GitHub Pages Configuration
- Branch: gh-pages (auto-generated)
- Build command: npm run build
- Base URL: /<repository-name>/
### Build Validation Checklist
- [ ] npm run build completes without errors
- [ ] All internal links resolve correctly
- [ ] Images load from /static/img/
- [ ] Code syntax highlighting renders properly
- [ ] Mobile responsive layout verified
```

Task: Analyze the potentially_problematic_string. If it's syntactically invalid due to incorrect escaping (e.g., "\n", "\t", "\", "\'", '"'), correct the invalid syntax. The goal is to ensure the text will be a valid and correctly interpreted.

For example, if potentially_problematic_string is "bar\nbaz", the corrected_new_string_escaping should be "bar
baz".
If potentially_problematic_string is console.log(\"Hello World\"), it should be console.log("Hello World").

Return ONLY the corrected string in the specified JSON format with the key 'corrected_string_escaping'. If no escaping correction is needed, return the original potentially_problematic_string.
context
{
  "type": "object",
  "properties": {
    "corrected_string_escaping": {
      "type": "string",
      "description": "The string with corrected escaping, ensuring it is valid, specially considering potential over-escaping issues from previous LLM generations."
    }
  },
  "required": ["corrected_string_escaping"]
}
