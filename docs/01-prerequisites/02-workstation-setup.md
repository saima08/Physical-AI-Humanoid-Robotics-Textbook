---
sidebar_position: 3
title: Workstation Setup
description: Setting up your development workstation with Ubuntu and ROS 2.
keywords: [workstation, setup, ubuntu, ros2, humble, installation, development environment]
---

# Workstation Setup

A well-configured development workstation is the cornerstone of efficient Physical AI and Robotics development. This chapter provides a step-by-step guide to setting up your primary development environment, focusing on **Ubuntu 22.04 LTS (Jammy Jellyfish)** as the operating system and **ROS 2 Humble Hawksbill** as the robotic middleware. This combination offers a stable, widely supported, and feature-rich platform essential for tackling complex robotics projects. Proper installation and configuration from the outset will prevent many common issues and ensure a smooth development workflow.

Ubuntu 22.04 LTS is chosen for its long-term support, extensive package repositories, and robust compatibility with ROS 2 and various robotics hardware. Its stability and large community support make it an ideal choice for both beginners and experienced developers. ROS 2 Humble, also an LTS release, is specifically designed to run on Ubuntu 22.04, providing a powerful framework for inter-process communication, hardware abstraction, and development tools that are crucial for building sophisticated robotic applications. This integrated setup forms the backbone of your physical AI development toolkit.

The process detailed here emphasizes clarity and reproducibility, guiding you through each command and configuration setting. We'll cover everything from preparing your system for installation to verifying successful setup, ensuring that your workstation is fully capable of running simulations, compiling ROS 2 packages, and interacting with robotic hardware. By carefully following these instructions, you will establish a development environment that maximizes productivity and minimizes environmental setup headaches, allowing you to focus on the exciting challenges of physical AI.

**Step-by-Step Breakdown for Ubuntu 22.04 Installation (Summary):**
1.  **Download ISO**: Obtain the official Ubuntu 22.04 LTS desktop ISO image.
2.  **Create Bootable USB**: Use tools like Rufus or Etcher to create a bootable USB drive.
3.  **Install Ubuntu**: Boot from the USB and follow the on-screen prompts for a clean installation or dual-boot setup. Ensure sufficient disk space is allocated.
4.  **Update System**: After installation, run `sudo apt update && sudo apt upgrade -y` to get the latest packages.

**Step-by-Step Breakdown for ROS 2 Humble Installation (Summary):**
1.  **Set Locale**: Ensure your locale is set to `en_US.UTF-8`.
2.  **Add ROS 2 apt Repository**: Follow official ROS 2 documentation to add the GPG key and repository.
3.  **Install ROS 2 Desktop Full**: Execute `sudo apt install ros-humble-desktop-full`. This includes ROS 2, `rviz2`, demos, and other tools.
4.  **Environment Setup**: Source the ROS 2 setup script (`source /opt/ros/humble/setup.bash`) and add it to your `~/.bashrc` for persistence.
5.  **Install `rosdep`**: Install and initialize `rosdep` to manage ROS 2 system dependencies.

**Best Practices for Development Environment Management:**
*   **Regular Updates**: Keep your Ubuntu and ROS 2 installations updated to benefit from bug fixes and new features.
*   **Virtual Environments (Python)**: Use `venv` or `conda` for Python packages to avoid dependency conflicts.
*   **Dedicated Workspaces**: Organize your ROS 2 projects in dedicated `colcon` workspaces.
*   **Backup**: Regularly back up your system and important project files.

**Insights into Common Setup Challenges:**
Users often face issues with graphics drivers for NVIDIA GPUs, especially for CUDA compatibility. Ensure you install proprietary NVIDIA drivers from Ubuntu's "Additional Drivers" utility. Network configuration, particularly with VPNs or strict firewalls, can also interfere with ROS 2's DDS communication. Verify DDS discovery by running simple `ros2 run` examples.