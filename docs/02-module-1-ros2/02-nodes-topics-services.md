---
sidebar_position: 3
title: Nodes, Topics, and Services
description: Communication patterns in ROS 2.
keywords: [ros2, nodes, topics, services, communication, publisher, subscriber, client, server]
---

# Nodes, Topics, and Services

The ability of different software components to communicate effectively is paramount in any complex system, and in robotics, this communication needs to be robust, flexible, and often real-time. ROS 2 provides a powerful set of communication mechanisms, primarily through **Nodes**, **Topics**, and **Services**, that enable the modular and distributed architecture discussed in the previous chapter. Mastering these patterns is essential for building any functional ROS 2 application, particularly for the intricate interactions required by physical AI and humanoid robots.

**Nodes** are the fundamental computational units in ROS 2. Each node is an executable program that performs a specific, well-defined task. For instance, in a humanoid robot, one node might be responsible for reading data from a camera, another for controlling a specific joint, and yet another for executing a high-level path planning algorithm. This modular approach encourages code reuse, simplifies debugging, and allows developers to focus on individual functionalities without being bogged down by the entire system's complexity. Nodes can be written in various languages (Python, C++) and can run on different machines across a network, communicating seamlessly via the underlying DDS middleware.

**Topics** implement a publish-subscribe communication pattern, forming the backbone of asynchronous, one-way data flow in ROS 2. A node designated as a **publisher** sends messages of a specific type to a named topic, while other nodes act as **subscribers** to receive these messages. This decoupling means publishers don't need to know who their subscribers are, and vice versa, allowing for highly flexible and scalable systems. For physical AI, topics are critical for streaming sensor data (e.g., camera feeds, LiDAR scans), publishing robot state information (e.g., joint angles, pose estimates), and issuing continuous control commands (e.g., velocity commands to a mobile base).

**Services**, in contrast to topics, provide a synchronous request/response communication pattern. When a node (the **client**) needs to request a specific action or piece of information from another node (the **server**), it makes a service call. The server processes the request and sends a response back to the client. This pattern is ideal for tasks that require immediate feedback or a specific, discrete action, such as requesting a robot to "open gripper," "capture image," or querying a database for a specific piece of information. Services ensure that a particular operation is completed before the client proceeds, making them suitable for critical, non-streaming interactions.

**Explanations of Communication Mechanisms:**
*   **Nodes**: Independent processes that encapsulate specific functionalities.
*   **Topics (Publish/Subscribe)**:
    *   **Publisher**: Sends data (messages) on a named topic.
    *   **Subscriber**: Receives data from a named topic.
    *   **Key Insight**: Asynchronous, one-way communication, great for streaming data.
*   **Services (Request/Response)**:
    *   **Client**: Sends a request to a service server and waits for a response.
    *   **Server**: Receives a request, processes it, and sends a response back.
    *   **Key Insight**: Synchronous, two-way communication, great for discrete queries or actions.

**Examples of Usage in Physical AI:**
*   **Topic Example**: A camera driver node publishes image messages to the `/camera/image_raw` topic. A vision processing node subscribes to this topic, processes the images to detect objects, and then publishes the detected objects to a `/perception/objects` topic.
*   **Service Example**: A client node requests a `capture_photo` service from a camera control node. The camera control node takes a photo and returns `success` or `failure` in the response.

**Best Practices for Using Nodes, Topics, and Services:**
*   **Design for Modularity**: Each node should have a clear, single responsibility.
*   **Define Message Types Clearly**: Use custom message types when necessary to accurately represent your data.
*   **Choose the Right Communication Pattern**: Use topics for continuous data streams and services for discrete, request-response interactions.
*   **Optimize QoS Settings**: Configure Quality of Service (QoS) profiles to match the communication needs (e.g., reliable for control, best-effort for sensor data).
*   **Monitor Communication**: Use tools like `ros2 topic list`, `ros2 topic echo`, `ros2 service list`, and `ros2 service call` to inspect and debug communication.