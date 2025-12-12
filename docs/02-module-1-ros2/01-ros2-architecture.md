---
sidebar_position: 2
title: ROS 2 Architecture
description: Understanding the core architecture of ROS 2.
keywords: [ros2, architecture, dds, middleware, nodes, topics, services]
---

# ROS 2 Architecture

Understanding the core architecture of ROS 2 is fundamental to developing robust and scalable robotic applications, especially in the domain of physical AI and humanoid robotics. Unlike its predecessor, ROS 1, ROS 2 was re-engineered from the ground up to address critical requirements for modern robotics, including real-time performance, security, and multi-robot system capabilities. This chapter will delve into the fundamental components and design principles that underpin ROS 2, illustrating how its distributed nature facilitates complex robot behaviors.

At the heart of ROS 2's architecture is the concept of a **distributed system**, where various independent executables (called **nodes**) communicate with each other to perform a larger task. This modularity is a significant advantage, allowing different teams to develop components in parallel and enabling easier maintenance and debugging. Nodes can be responsible for anything from controlling a robot's motor to processing sensor data or executing high-level AI algorithms. Their ability to run on different machines across a network, yet communicate seamlessly, makes ROS 2 highly flexible for diverse robotic setups, from single humanoids to fleets of autonomous vehicles.

A key differentiator for ROS 2 is its reliance on **Data Distribution Service (DDS)** as its primary middleware. DDS is an open international standard for publish-subscribe communication, offering quality-of-service (QoS) policies that are crucial for real-time robotic applications. These QoS settings allow developers to fine-tune aspects like reliability, latency, and data persistence, ensuring that critical sensor data or control commands are delivered predictably. This robust communication layer is what truly empowers physical AI systems to operate reliably in dynamic environments, providing the necessary backbone for humanoid robots to react promptly and safely.

**Key Components of ROS 2 Architecture:**
*   **Nodes**: The smallest unit of computation in ROS 2. Each node performs a specific task (e.g., a camera driver, a motor controller, an AI planner).
*   **Topics**: The most common way for nodes to exchange asynchronous, one-way messages. A node publishes messages to a topic, and other nodes subscribe to that topic to receive the messages.
*   **Services**: A request/response communication mechanism for nodes. A client node sends a request to a service-server node and waits for a response.
*   **Actions**: Designed for long-running tasks, providing goal, feedback, and result mechanisms. Useful for complex operations like "move to a location."
*   **Parameters**: Configuration values for nodes that can be set at runtime.
*   **`ros2 daemon`**: A background process that improves the performance of ROS 2 command-line tools.

**Insights into Distributed Nature:**
The distributed architecture of ROS 2 allows for unparalleled flexibility. Components can be distributed across multiple physical machines, containers, or even within a single process. This is particularly beneficial for humanoid robots, where different computational tasks (e.g., vision processing, leg control, voice synthesis) might require different hardware resources or execution environments.

**Best Practices for ROS 2 Architecture Design:**
*   **Granular Nodes**: Design nodes to be small and focused on a single responsibility.
*   **Clear Topic/Service/Action Definitions**: Use well-defined message types and interfaces for communication.
*   **QoS Configuration**: Appropriately configure Quality of Service profiles for critical communications.
*   **Launch Files**: Utilize launch files to define and manage the startup configuration and interconnections of multiple nodes.
*   **Namespaces**: Use namespaces to organize complex systems and avoid naming conflicts, especially in multi-robot scenarios.