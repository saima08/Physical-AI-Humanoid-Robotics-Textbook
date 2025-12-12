---
sidebar_position: 4
title: URDF and SDF Formats
description: Robot description formats for simulation.
keywords: [urdf, sdf, robot description, gazebo, simulation, xacro, collada]
---

# URDF and SDF Formats

To accurately simulate robots, we need a precise digital blueprint of their physical structure, appearance, and mechanical properties. In the ROS and Gazebo ecosystems, two prominent XML-based formats serve this purpose: **Unified Robot Description Format (URDF)** and **Simulation Description Format (SDF)**. This chapter provides a comparative analysis of URDF and SDF, detailing their strengths, limitations, and best practices for their use in developing physical AI systems, particularly for humanoid robots.

**URDF (Unified Robot Description Format)**, as discussed in Module 1, is primarily designed for describing the kinematic and dynamic properties of a single robot. It defines the robot's links and joints in a hierarchical structure, along with visual, inertial, and collision properties. URDF is excellent for basic robot modeling, motion planning, and visualization in tools like `RViz2`. However, a notable limitation of URDF is its inability to describe entire environments (multiple robots, static objects, sensors not attached to a specific robot) or more complex joint types and physics interactions beyond a single robot.

**SDF (Simulation Description Format)** was developed specifically for Gazebo and is a more comprehensive format capable of describing everything in a simulation environment: robots, static objects (e.g., furniture, walls), sensors (both attached to robots and standalone), lights, and even physics parameters of the world itself. SDF is inherently designed for complex physics simulation, allowing for greater detail in collision definitions, joint types (e.g., more complex actuators), and explicit friction parameters. A key difference is that SDF supports modeling closed kinematic chains and arbitrary links, which are common in real-world scenarios that URDF struggles with.

A key insight is that while URDF is excellent for robot-centric descriptions, SDF provides the necessary richness to describe an entire virtual world. For physical AI, especially when simulating a humanoid robot interacting with a dynamic environment, leveraging the full capabilities of SDF for world modeling, while potentially using URDF (or `xacro` for URDF) for the robot itself, is a common and effective strategy. Tools exist to convert URDF to SDF, facilitating interoperability, though it's important to be aware of the potential loss or gain of information during such conversions.

**Comparison of URDF and SDF:**

| Feature               | URDF                                           | SDF                                                    |
|-----------------------|------------------------------------------------|--------------------------------------------------------|
| **Primary Use**       | Robot description                              | Full simulation environment description (robots, objects, worlds) |
| **Environment Support** | Single robot only                              | Multiple robots, static objects, lights, terrain         |
| **Kinematics**        | Tree structure (single root link)              | Graph structure (can model closed chains)                |
| **Physics Properties**| Basic (mass, inertia, collision shapes)        | Advanced (explicit friction, contact parameters, ODE/Bullet specific) |
| **Sensors**           | Attached to robot links                        | Attached to robot links or standalone in the world       |
| **Joint Types**       | Limited set (revolute, prismatic, fixed, etc.) | More extensive, including more complex actuators         |
| **Supported Tools**   | ROS (RViz, MoveIt!), Gazebo (via conversion)   | Gazebo (native), ROS (via Gazebo plugins)              |
| **File Extension**    | `.urdf`, `.xacro`                              | `.sdf`                                                 |

**Best Practices for Using URDF and SDF:**
*   **Start with URDF for Robots**: For initial robot modeling, especially with ROS tools, URDF is often simpler and more integrated. Use `xacro` to make URDF models modular and parameterizable.
*   **Convert URDF to SDF for Gazebo**: When simulating your URDF robot in Gazebo, it will be internally converted to SDF. Be aware of any properties that might not translate perfectly.
*   **Use SDF for Environments**: Design your simulation worlds directly in SDF to take full advantage of Gazebo's features for static objects, sensors, and world physics.
*   **Simplify Collision Meshes**: For both formats, use simplified collision geometries (e.g., convex hulls, basic primitives) for performance in physics engines.
*   **Texture and Material Definition**: Define visual materials and textures for more realistic rendering, often referencing `Collada (.dae)` or `OBJ (.obj)` mesh files.

**Illustrative Case: Humanoid Robot in a Home Environment:**
To simulate a humanoid robot navigating a home, you'd typically define the robot itself using URDF (possibly with `xacro` extensions for modularity). The home environment – walls, furniture, appliances – would be described in SDF. The SDF world file would then instantiate your URDF robot model, placing it within the simulated home, and define global physics parameters like gravity. This hybrid approach leverages the strengths of both formats to create a rich and realistic simulation scenario for physical AI development.