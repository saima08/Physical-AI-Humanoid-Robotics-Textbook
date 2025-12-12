---
sidebar_position: 5
title: Python rclpy
description: Developing ROS 2 applications with Python (rclpy).
keywords: [ros2, python, rclpy, development, nodes, publishers, subscribers, services]
---

# Python rclpy

Python is a ubiquitous language in AI and robotics due to its readability, extensive libraries, and rapid prototyping capabilities. For ROS 2 development, **`rclpy`** is the Python client library that enables seamless interaction with the ROS 2 graph. This chapter dives into developing ROS 2 applications using `rclpy`, empowering you to create nodes, publishers, subscribers, and service clients/servers with Python. Mastering `rclpy` is crucial for physical AI developers who leverage Python for machine learning, computer vision, and high-level robot control algorithms.

`rclpy` provides a Pythonic interface to the underlying ROS 2 C++ API (`rcl`), making it straightforward to write ROS 2 components without delving into low-level C++ details. It handles the complexities of DDS communication, Quality of Service (QoS) settings, and ROS 2 graph management, allowing developers to focus on the logic of their applications. Whether you're integrating a new AI model for perception, implementing a complex state machine for robot behavior, or simply logging sensor data, `rclpy` offers the tools to do so efficiently and effectively in Python.

A key insight into `rclpy`'s power is its integration with Python's asynchronous programming features. Modern robotics applications often involve multiple concurrent tasks, such as reading from sensors, processing data, and sending commands. `rclpy` is built with an event-driven execution model, allowing nodes to handle multiple callbacks (for subscriptions, service requests, timers) without blocking the main thread. This asynchronous capability is vital for ensuring that your Python ROS 2 nodes remain responsive and can meet the timing requirements of real-world physical AI systems.

**Key `rclpy` Concepts:**
*   **Node Creation**: Instantiating a ROS 2 node in Python.
*   **Publisher/Subscriber**: Creating and managing topic communication.
*   **Service Client/Server**: Implementing request/response interactions.
*   **Parameters**: Accessing and modifying node configurations.
*   **Timers**: Scheduling periodic actions within a node.
*   **Callback Groups**: Managing execution of multiple callbacks.

**Step-by-Step Breakdown for a Simple Publisher Node:**
1.  **Import `rclpy` and `Node`**:
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String # Example message type
    ```
2.  **Create a Node Class**: Define a class that inherits from `rclpy.node.Node`.
    ```python
    class MinimalPublisher(Node):
        def __init__(self):
            super().__init__('minimal_publisher')
            self.publisher_ = self.create_publisher(String, 'topic', 10)
            timer_period = 0.5  # seconds
            self.timer = self.create_timer(timer_period, self.timer_callback)
            self.i = 0
        
        def timer_callback(self):
            msg = String()
            msg.data = f'Hello ROS 2: {self.i}'
            self.publisher_.publish(msg)
            self.get_logger().info(f'Publishing: "{msg.data}"')
            self.i += 1
    ```
3.  **Main Function**: Initialize `rclpy`, create node, spin, and shutdown.
    ```python
    def main(args=None):
        rclpy.init(args=args)
        minimal_publisher = MinimalPublisher()
        rclpy.spin(minimal_publisher)
        minimal_publisher.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

**Best Practices for `rclpy` Development:**
*   **Structure Your Code**: Organize nodes into Python packages with clear entry points.
*   **Use Logging Effectively**: Leverage `self.get_logger()` for informative messages and debugging.
*   **Manage Resources**: Ensure nodes are properly destroyed and `rclpy.shutdown()` is called.
*   **Asynchronous Callbacks**: Keep callbacks short and offload heavy computation to separate threads or executors to avoid blocking the event loop.
*   **Parameterize Nodes**: Make your nodes flexible by using ROS 2 parameters for configurable values.
*   **Test Thoroughly**: Write unit and integration tests for your `rclpy` nodes.

**Illustrative Cases:**
*   **Perception Pipeline**: An `rclpy` node subscribes to a camera topic, uses OpenCV or a PyTorch model to detect objects, and publishes the detected object bounding boxes to another topic.
*   **High-level Behavior Control**: A Python node implements a state machine that subscribes to various sensor inputs and publishes navigation goals or manipulation commands to other ROS 2 components.