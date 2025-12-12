---
sidebar_position: 8
title: Module 2 Assessment
description: Simulation project requirements and rubric.
keywords: [simulation, assessment, project, rubric, gazebo, unity, urdf, physical ai]
---

# Module 2 Assessment: Digital Twin Simulation Project

This assessment for Module 2 challenges you to apply your understanding of simulation environments by creating a "digital twin" of a robotic system. You will design a virtual environment, incorporate a robot model, and simulate its interaction with the environment and/or other objects. This project serves as a crucial step in your physical AI journey, demonstrating your ability to build, configure, and operate robotic simulations, which are vital for rapid prototyping and safe testing of complex behaviors.

The project requires you to create a virtual testbed that effectively models a specific robotic scenario. You will leverage either Gazebo or Unity (or a combination, if appropriate) to build an environment, integrate a robot model (potentially a humanoid, if relevant to your project), and set up basic sensor simulations. The successful completion of this assessment will not only solidify your theoretical knowledge of simulation principles but also provide practical experience in creating a valuable tool for developing and validating physical AI algorithms.

A key insight into this assessment is its focus on the fidelity and utility of your digital twin. The quality of your simulation—how accurately it reflects a real-world scenario and how well it supports your development goals—is paramount. Pay close attention to defining realistic physics parameters, sensor models, and environmental elements. Your ability to justify your choices for simulation tools and configurations based on the requirements of your chosen robotic scenario will be a significant part of the evaluation.

**Project Requirements:**
1.  **Choose a Robotic Scenario**: Select a specific robotic task or environment to simulate (e.g., a mobile robot navigating a cluttered room, a manipulator picking up objects, a humanoid maintaining balance).
2.  **Environment Design**: Create a 3D virtual environment (in Gazebo or Unity) that accurately represents your chosen scenario. Include static objects, obstacles, and appropriate visual elements.
3.  **Robot Model Integration**: Integrate a robot model into your environment. If simulating a humanoid, ensure its URDF/SDF correctly defines its links, joints, and inertial properties.
4.  **Sensor Simulation**: Equip your robot model (or environment) with at least two simulated sensors (e.g., camera, LiDAR, depth sensor, IMU) relevant to your scenario. Configure their properties (field of view, resolution, noise) realistically.
5.  **Physics Configuration**: Configure the physics engine parameters to ensure stable and realistic interactions within your simulation (e.g., gravity, friction, collision detection).
6.  **ROS 2 Integration**: If using Gazebo, ensure your simulation publishes sensor data and can receive control commands via ROS 2 topics. If using Unity, demonstrate communication using the ROS-Unity Bridge.
7.  **Demonstrate Basic Behavior**: Program your robot (or guide it manually within the simulator) to exhibit a basic behavior relevant to your scenario (e.g., simple navigation, object detection, joint movement).
8.  **Documentation**: Provide a brief report (in a `README.md` or separate document) explaining your scenario, choices of simulation tools, key configurations, and how to run your simulation.

**Evaluation Rubric:**

| Criteria                   | Excellent (5 points)                                       | Good (3 points)                                                 | Needs Improvement (1 point)                                |
|----------------------------|------------------------------------------------------------|-----------------------------------------------------------------|------------------------------------------------------------|
| **Scenario Selection**     | Clear, well-justified scenario; complex enough for simulation. | Relevant scenario, some justification needed.                  | Unclear or overly simplistic scenario.                     |
| **Environment Fidelity**   | Detailed, realistic environment; well-configured physics. | Functional environment, minor physics or visual imperfections. | Unrealistic environment or problematic physics.             |
| **Robot Model Quality**    | Accurate URDF/SDF, proper mass/inertia/collision.          | Functional model, some URDF/SDF details could improve.        | Poorly defined model, significant errors in URDF/SDF.      |
| **Sensor Realism**         | Multiple relevant sensors, realistically configured.       | Functional sensors, minor realism issues.                      | Missing or poorly configured sensors.                      |
| **ROS 2 Integration**      | Seamless ROS 2 communication (topics, services).          | Basic ROS 2 communication, some integration issues.            | Broken or missing ROS 2 integration.                       |
| **Demonstrated Behavior**  | Robot exhibits clear, task-relevant behavior.             | Robot shows basic behavior, minor flaws.                       | Robot behavior is unstable or incorrect.                   |
| **Documentation**          | Comprehensive, clear explanation of choices and setup.     | Adequate documentation, minor omissions.                      | Minimal or confusing documentation.                        |

**Submission Guidelines:**
*   Submit a link to a Git repository containing your simulation project files (URDF/SDF models, world files, ROS 2 packages, Unity project, etc.).
*   Include a `README.md` file with instructions on how to set up and run your simulation, as well as a brief explanation of your chosen scenario and robot behavior.
*   Provide a short video demonstration of your robot exhibiting its behavior in the simulated environment.