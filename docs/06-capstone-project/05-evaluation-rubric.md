---
sidebar_position: 6
title: Evaluation Rubric
description: Evaluation criteria and rubric for the Capstone Project.
keywords: [capstone, project, evaluation, rubric, assessment, autonomous humanoid]
---

# Capstone Project Evaluation Rubric

The Capstone Project is a comprehensive assessment of your abilities in physical AI and humanoid robotics. This chapter details the evaluation criteria and the rubric that will be used to assess your project's success. The rubric is designed to provide clear expectations for each component of your autonomous humanoid system, from its architectural design to its final demonstration, ensuring a fair and transparent evaluation process.

Your project will be evaluated across several key dimensions, reflecting the multidisciplinary nature of VLA-enabled robotics. These dimensions include the architectural soundness of your system, the robustness and accuracy of your implemented AI modules (perception, planning), the reliability of your robot's physical actions, and the overall quality of human-robot interaction. Emphasis will also be placed on your understanding of design choices, problem-solving approaches, and the clarity of your project documentation and demonstration.

A key insight into the evaluation is that it values not just the final outcome, but also the process and justification behind your decisions. Partial successes or well-identified failures, accompanied by insightful analysis and proposed solutions, can still earn high marks. The goal is to demonstrate a holistic understanding of the challenges and complexities involved in building intelligent, embodied systems. This rubric serves as a guide throughout your project, helping you prioritize efforts and ensure all critical aspects are addressed.

**Evaluation Criteria:**

| Criteria                   | Excellent (5 points)                                       | Good (3 points)                                                 | Needs Improvement (1 point)                                |
|----------------------------|------------------------------------------------------------|-----------------------------------------------------------------|------------------------------------------------------------|
| **1. Project Conception & Design (20%)** | Clear task definition, well-justified architectural choices, innovative approach. | Relevant task, functional architecture, minor design flaws.     | Unclear task, flawed architecture, basic approach.         |
| **2. Natural Language Interface (15%)** | Robust speech-to-text, effective NLU, handles ambiguity.   | Functional STT/NLU, minor issues with accuracy or ambiguity.    | Poor STT/NLU, frequently misunderstands commands.          |
| **3. Cognitive Planning (15%)**     | LLM generates logical, flexible, and context-aware plans.  | Plans are mostly logical, minor issues with complexity or context. | Inconsistent or illogical plan generation.                 |
| **4. Action Orchestration (15%)**   | Seamless translation to ROS 2 actions, robust execution, error recovery. | Functional execution, minor issues with error handling.        | Broken execution flow, frequent failures.                  |
| **5. Perception System (15%)**      | Accurate and robust object detection/SLAM, effective environmental understanding. | Functional perception, minor accuracy/robustness issues.      | Poor perception, unreliable environmental understanding.   |
| **6. Robot Execution (10%)**        | Smooth, safe, and efficient physical actions (navigation, manipulation). | Functional physical actions, minor fluidity or safety concerns. | Unsafe, clumsy, or non-functional physical actions.        |
| **7. Documentation & Demonstration (10%)** | Comprehensive report, clear video, insightful discussion, compelling demo. | Adequate report/video, some minor omissions or unclear aspects. | Minimal documentation, confusing or incomplete demo.       |

**Grading Scale:**
*   **A (90-100%)**: Exceeds expectations, demonstrates deep understanding and innovation.
*   **B (80-89%)**: Meets all expectations, solid understanding, minor areas for improvement.
*   **C (70-79%)**: Meets most expectations, some significant areas needing improvement.
*   **D (60-69%)**: Barely meets minimum expectations, significant issues in core areas.
*   **F (Below 60%)**: Does not meet minimum expectations.

**Demo Guidelines:**
*   The demonstration should clearly showcase the robot's ability to execute your defined multi-step task based on a natural language voice command.
*   Highlight the various VLA components in action (e.g., showing speech transcription, planner output, robot's physical movement).
*   Be prepared to explain your design choices, any challenges faced, and how you addressed them.
*   Keep the demo concise and focused on the core functionality.