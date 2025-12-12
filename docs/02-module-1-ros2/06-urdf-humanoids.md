---
sidebar_position: 7
title: URDF Humanoids
description: Describing humanoid robots with URDF.
keywords: [urdf, humanoid, robot description, joints, links, kinematics, dynamics]
---

# URDF Humanoids

For any physical robot, especially complex systems like humanoids, a precise digital representation of its physical structure is indispensable. The **Unified Robot Description Format (URDF)** provides a standardized XML-based specification for modeling the kinematic and dynamic properties of robots. This chapter delves into using URDF to describe humanoid robots, a critical step for simulation, motion planning, and visualization within the ROS 2 ecosystem.

URDF defines a robot as a set of rigid bodies (called **links**) connected by various types of joints. Links represent physical parts of the robot (e.g., torso, upper arm, hand), while joints define the degrees of freedom between these links (e.g., revolute, prismatic, fixed). For humanoid robots, this hierarchical structure accurately captures the complex articulation of a human-like body, allowing for precise control and realistic simulation of movements. Beyond kinematics, URDF can also specify visual properties (geometry, color, textures) and collision properties (simplified geometries for physics engines), enabling realistic rendering and robust collision detection in simulators like Gazebo.

A key insight is that an accurate URDF model is the foundation for almost all advanced humanoid robotics capabilities. Motion planners rely on the kinematic chain defined in the URDF to calculate inverse kinematics (determining joint angles to reach a target pose). Physics simulators use the inertial properties and collision models to generate realistic behaviors. Visualization tools like `RViz2` render the robot's 3D model based on the URDF. Without a well-crafted URDF, even the most sophisticated AI algorithms would struggle to interact meaningfully with the physical world through the robot's body.

**Key Concepts in URDF:**
*   **Link**: A rigid body with mass, inertia, visual, and collision properties.
*   **Joint**: Defines the kinematic and dynamic relationship between two links (parent and child). Types include `revolute`, `prismatic`, `continuous`, `fixed`, `planar`, `floating`.
*   **Origin**: Defines the position and orientation of a joint relative to its parent link, or a link's visual/collision geometry relative to its own frame.
*   **Inertial**: Mass and inertia tensor of a link, crucial for physics simulation.
*   **Visual**: Defines the graphical representation of a link.
*   **Collision**: Defines the collision geometry of a link, often a simplified shape for faster physics calculations.

**Basic URDF Structure for a Humanoid Segment (Example: Torso-to-Head):**
```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">

  <link name="torso_link">
    <visual>
      <geometry>
        <box size="0.2 0.4 0.6"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 0.8 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.2 0.4 0.6"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="10.0"/>
      <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
    </inertial>
  </link>

  <link name="head_link">
    <visual>
      <geometry>
        <sphere radius="0.15"/>
      </geometry>
      <material name="red">
        <color rgba="0.8 0 0 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.15"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="2.0"/>
      <inertia ixx="0.1" ixy="0.0" ixz="0.0" iyy="0.1" iyz="0.0" izz="0.1"/>
    </inertial>
  </link>

  <joint name="neck_joint" type="revolute">
    <parent link="torso_link"/>
    <child link="head_link"/>
    <origin xyz="0 0 0.4" rpy="0 0 0"/> <!-- Head sits on top of torso -->
    <axis xyz="0 0 1"/> <!-- Rotates around Z-axis -->
    <limit lower="-1.57" upper="1.57" effort="10" velocity="1.0"/>
  </joint>

</robot>
```

**Best Practices for URDF Modeling:**
*   **Modular Design**: Build URDFs from smaller, reusable `xacro` (XML Macros for ROS) components.
*   **Simplify Collision Geometry**: Use simpler shapes (boxes, spheres, cylinders) for collision models to improve simulation performance.
*   **Accurate Inertial Properties**: Ensure mass and inertia values are as accurate as possible for realistic physics.
*   **Clear Joint Limits**: Define realistic `lower` and `upper` limits, `effort`, and `velocity` for all joints.
*   **Consistent Units**: Stick to a consistent unit system (e.g., meters, kilograms, radians).
*   **Visualize Regularly**: Use `RViz2` to visualize your URDF model as you build it to catch errors early.