---
sidebar_position: 6
title: Launch Files
description: Managing and orchestrating ROS 2 nodes with launch files.
keywords: [ros2, launch files, xml, python, parameters, node composition]
---

# Launch Files

In a complex robotic system, managing numerous ROS 2 nodes, their configurations, and their interconnections manually can quickly become cumbersome and error-prone. **ROS 2 Launch Files** provide a powerful and flexible mechanism for orchestrating multiple nodes, setting parameters, remap topics, and performing other setup tasks in a declarative manner. This chapter delves into the creation and utilization of launch files, covering both XML-based and Python-based approaches, which are essential for managing the startup and configuration of physical AI systems.

Launch files are effectively scripts that define how a collection of ROS 2 nodes should be executed. They allow you to define what nodes to run, what arguments to pass to them, which topics to remap, and even how to compose multiple nodes into a single process for performance optimization. This capability is critical for ensuring consistent system startup, especially for humanoid robots that might involve dozens of sensors, actuators, and AI modules, each encapsulated in its own node. Instead of starting each node individually, a single `ros2 launch` command can bring up the entire robot's software stack.

A key insight into the power of launch files lies in their ability to enhance reproducibility and simplify complex deployments. By centralizing the startup configuration, you can easily switch between different robot configurations (e.g., simulation vs. real robot), change parameters for experimentation, or launch a subset of nodes for debugging, all without modifying the underlying node code. The shift towards Python-based launch files in ROS 2 has further increased their flexibility, allowing for programmatic logic, conditional execution, and dynamic parameter generation, which is highly beneficial for adaptive physical AI systems.

**Explanations of Launch File Features:**
*   **Node Execution**: Specifying which executable nodes to run.
*   **Parameter Management**: Setting initial values for node parameters.
*   **Topic Remapping**: Changing the names of topics to resolve conflicts or improve system organization.
*   **Namespace Assignment**: Grouping nodes under a common namespace to manage communication within subsystems.
*   **Node Composition**: Running multiple nodes within a single process to reduce inter-process communication overhead.
*   **Conditional Execution**: Using logic (e.g., if-else statements in Python launch files) to start nodes or include other launch files based on conditions.

**XML Launch File Example (Simple Node):**
```xml
<!-- my_robot_bringup/launch/my_robot.launch.xml -->
<launch>
  <node pkg="my_robot_driver" exec="camera_node" name="camera" output="screen">
    <param name="fps" value="30"/>
    <remap from="/camera/image" to="/robot/image_raw"/>
  </node>
  <node pkg="my_robot_perception" exec="object_detector" name="detector" output="screen">
    <remap from="/input/image" to="/robot/image_raw"/>
    <param name="model_path" value="$(find my_robot_perception)/models/model.pt"/>
  </node>
</launch>
```

**Python Launch File Example (Using Programmatic Logic):**
```python
# my_robot_bringup/launch/my_robot.launch.py
from launch import LaunchDescription
from launch_ros.actions import Node
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
import os

def generate_launch_description():
    # Declare a launch argument for robot_name, with a default value
    robot_name_arg = DeclareLaunchArgument(
        'robot_name',
        default_value='humanoid_01',
        description='Name of the robot'
    )

    robot_name = LaunchConfiguration('robot_name')

    camera_node = Node(
        package='my_robot_driver',
        executable='camera_node',
        name='camera_node',
        namespace=robot_name, # Use namespace for multi-robot support
        parameters=[{'fps': 30}],
        remappings=[
            ('/camera/image', '/robot/image_raw'),
        ],
        output='screen'
    )

    object_detector_node = Node(
        package='my_robot_perception',
        executable='object_detector',
        name='object_detector_node',
        namespace=robot_name,
        remappings=[
            ('/input/image', '/robot/image_raw'),
        ],
        parameters=[{
            'model_path': os.path.join(
                os.path.dirname(__file__), '..', 'models', 'model.pt'
            )
        }],
        output='screen'
    )

    return LaunchDescription([
        robot_name_arg,
        camera_node,
        object_detector_node,
    ])
```

**Best Practices for Launch File Design:**
*   **Modularity**: Break down complex launch configurations into smaller, reusable launch files.
*   **Parameters**: Expose configurable options as launch arguments or parameters for flexibility.
*   **Namespaces**: Use namespaces to organize nodes logically and support multi-robot systems.
*   **Output Management**: Direct node output to `screen` during development and `log` for deployment.
*   **Composition**: Consider using node composition for performance-critical pipelines where nodes share a process.