---
sidebar_position: 4
title: Edge Kit Setup
description: Setting up edge computing devices like Jetson Orin Nano.
keywords: [edge kit, jetson orin, realsense, setup, embedded ai, ros2, physical ai]
---

# Edge Kit Setup

Deploying Physical AI solutions often requires specialized edge computing devices that can operate efficiently with limited power and size constraints, directly on the robot. This chapter guides you through the setup of such an edge kit, focusing on the **NVIDIA Jetson Orin Nano** or similar Jetson platforms, coupled with essential peripherals like the **Intel RealSense D435i camera** and compatible microphone arrays. These compact yet powerful systems are crucial for bringing AI capabilities from development workstations to embodied robots.

The NVIDIA Jetson platform is a series of embedded computing boards designed for AI at the edge. The Jetson Orin Nano, in particular, offers impressive AI inferencing performance per watt, making it an ideal candidate for robotics applications where power efficiency and size are critical. Its integrated GPU accelerates deep learning workloads, enabling real-time perception and decision-making directly on the robot. The Intel RealSense D435i provides crucial depth sensing capabilities, allowing robots to perceive their environment in 3D, a fundamental requirement for navigation, object manipulation, and human-robot interaction.

Properly configuring an edge kit involves a unique set of challenges compared to a standard workstation. This includes flashing appropriate operating system images, installing optimized AI frameworks, and ensuring seamless integration with ROS 2. This chapter details the necessary steps to get your Jetson Orin Nano, RealSense camera, and microphone array operational, transforming them into a capable platform for deploying your physical AI projects. The goal is to create a robust, self-contained robotic brain ready for advanced applications.

**Step-by-Step Breakdown for Jetson Orin Nano Setup (Summary):**
1.  **Flash JetPack OS**: Download the latest JetPack SDK (which includes Ubuntu, CUDA, cuDNN, TensorRT, and other NVIDIA tools) and flash it onto your Jetson Orin Nano's microSD card or NVMe SSD using the NVIDIA SDK Manager.
2.  **Initial Configuration**: Complete the Ubuntu setup process, including user creation and network configuration.
3.  **Install ROS 2**: Follow the standard ROS 2 Humble installation guide for Ubuntu ARM64 architecture, similar to the workstation setup but ensuring ARM-specific binaries.
4.  **Install `rosdep`**: Install and initialize `rosdep` to manage ROS 2 system dependencies.

**Step-by-Step Breakdown for Intel RealSense D435i Setup (Summary):**
1.  **Install `librealsense`**: Follow the official Intel RealSense SDK (`librealsense`) installation instructions for Ubuntu on ARM.
2.  **Install ROS 2 Wrapper**: Install the `realsense-ros` package from the ROS 2 binaries or build it from source if necessary.
3.  **Verify Operation**: Launch the RealSense node (`ros2 launch realsense2_camera rs_launch.py`) and verify camera streams in `RViz2`.

**Best Practices for Edge Kit Development:**
*   **Power Management**: Optimize code and system settings for power efficiency.
*   **Cross-Compilation**: For complex projects, consider cross-compiling on a workstation for faster build times.
*   **Resource Monitoring**: Regularly monitor CPU, GPU, and memory usage on the Jetson to prevent bottlenecks.
*   **Secure Remote Access**: Set up SSH for headless operation and secure remote development.

**Illustrative Case: Robot's Vision and Hearing:**
An edge kit like the Jetson Orin Nano with a RealSense camera and microphone array provides the robot with critical "senses." The RealSense offers 3D depth perception (essential for obstacle avoidance and object manipulation), while the microphone array allows for acoustic perception (e.g., sound source localization, voice command recognition). This multimodal sensing capability is foundational for advanced physical AI tasks.