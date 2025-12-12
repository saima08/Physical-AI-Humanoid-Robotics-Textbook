---
sidebar_position: 8
title: Module 1 Assessment
description: Project requirements and rubric for ROS 2 package development.
keywords: [ros2, assessment, project, rubric, package development, physical ai]
---

# Module 1 Assessment: ROS 2 Package Development Project

This assessment for Module 1 challenges you to apply your understanding of ROS 2 architecture, communication patterns (nodes, topics, services, actions), and Python `rclpy` development by building a functional ROS 2 package. The goal is to demonstrate your ability to create modular, communicating components essential for physical AI systems. This project serves as a foundational checkpoint, ensuring you possess the practical skills to proceed with more complex robotic tasks.

The project requires you to design, implement, and test a small, integrated ROS 2 system. You will define custom message types, create several Python nodes that publish to and subscribe from topics, implement a service server and client, and utilize a simple action for a long-running task. The successful completion of this assessment will not only solidify your theoretical knowledge but also equip you with the hands-on experience of building interconnected ROS 2 components, which is directly transferable to real-world robot programming.

A key insight into this assessment is its focus on clear interfaces and modularity. In physical AI, robust system integration relies heavily on well-defined communication contracts between different robot functionalities. This project encourages you to think about how each component contributes to a larger system, how data flows between them, and how to manage their lifecycle. Pay close attention to adhering to ROS 2 best practices for node design, message passing, and error handling, as these will be critical for your evaluation.

**Project Requirements:**
1.  **Custom Message Definition**: Define a custom ROS 2 message (e.g., `RobotStatus.msg`) that includes at least three fields of different basic types (e.g., string, float, int).
2.  **Publisher Node**: Create a Python (`rclpy`) node that periodically publishes messages of your custom type to a `/robot_status` topic.
3.  **Subscriber Node**: Create a Python (`rclpy`) node that subscribes to the `/robot_status` topic, processes the incoming messages (e.g., prints relevant data), and logs them.
4.  **Service Server Node**: Implement a Python (`rclpy`) service server that provides a service (e.g., `robot_control`) which accepts a request (e.g., `command: string`) and returns a response (e.g., `success: bool`, `message: string`).
5.  **Service Client Node**: Create a Python (`rclpy`) service client that periodically calls the `robot_control` service with different commands.
6.  **Action Server Node**: Implement a Python (`rclpy`) action server for a simple long-running task (e.g., `Countdown`, `PerformSequence`). It should accept a goal (e.g., `target_count: int`), publish feedback (e.g., `current_count: int`), and return a result (e.g., `final_count: int`).
7.  **Action Client Node**: Create a Python (`rclpy`) action client that sends a goal to the `Countdown` action server, processes feedback, and handles the final result.
8.  **Launch File**: Create a Python-based launch file that starts all your developed nodes (publisher, subscriber, service server, service client, action server, action client).

**Evaluation Rubric:**

| Criteria                   | Excellent (5 points)                                       | Good (3 points)                                                 | Needs Improvement (1 point)                                |
|----------------------------|------------------------------------------------------------|-----------------------------------------------------------------|------------------------------------------------------------|
| **Modularity & Node Design** | Each node has a clear, single responsibility.              | Nodes are mostly modular but might have minor overlaps.       | Nodes are tightly coupled or perform multiple unrelated tasks. |
| **Communication Patterns** | Correct use of Topics, Services, and Actions.              | Mostly correct, minor issues in pattern selection or implementation. | Incorrect use of communication patterns.                   |
| **`rclpy` Implementation** | Clean, Pythonic code; effective use of logging.            | Functional `rclpy` code, some minor stylistic or logging issues. | Basic `rclpy` functionality, significant code issues.      |
| **Custom Message/Service** | Well-defined custom types.                                 | Custom types defined, minor structural issues.                  | Custom types are ill-defined or missing.                   |
| **Launch File**            | Fully functional Python launch file, manages all nodes.    | Launch file starts nodes, but lacks advanced features (params). | Manual node startup or broken launch file.                 |
| **Code Readability**       | Well-commented, adheres to Python style guides (PEP 8).    | Readable code, minor style guide deviations.                    | Poorly organized or undocumented code.                     |
| **Functionality**          | All project requirements met, code works as expected.      | Most requirements met, minor bugs present.                      | Significant functionality missing or broken.               |

**Submission Guidelines:**
*   Submit a single Git repository containing your ROS 2 package.
*   Include a `README.md` file with instructions on how to build, launch, and test your package.
*   Demonstrate the functionality of your publisher, subscriber, service, and action components.