---
sidebar_position: 5
title: Hardware Vendors
description: Recommended hardware vendors for Physical AI and Robotics components.
keywords: [hardware, vendors, suppliers, components, jetson, realsense, robotics]
---

# Recommended Hardware Vendors for Physical AI and Robotics Components

Sourcing reliable hardware components is a crucial step in building physical AI systems and humanoid robots. This chapter provides a curated list of recommended hardware vendors and suppliers for various categories of robotics components, from powerful development boards and sensors to specialized actuators and complete robot platforms. While the market is vast, these vendors are known for their quality, community support, and compatibility with the software ecosystems (ROS 2, NVIDIA Isaac) discussed in this book.

The right hardware can significantly impact the success and capabilities of your robotic project. This list is not exhaustive but aims to guide you towards reputable sources for components that have proven effective in the physical AI and robotics community. Whether you're building a new robot from scratch, upgrading an existing platform, or simply experimenting with new sensors, knowing where to find high-quality parts is invaluable.

A key insight is that compatibility and community support are often as important as raw specifications. A technically superior component might be difficult to integrate if it lacks proper documentation, drivers, or active community support. The vendors listed here generally excel in providing resources that facilitate seamless integration into your development workflow, minimizing potential headaches. This chapter empowers you to make informed purchasing decisions that accelerate your project development and enhance the reliability of your physical AI systems.

**Key Hardware Categories and Recommended Vendors:**

1.  **Development Boards & Edge AI Computers:**
    *   **NVIDIA Jetson Series (Orin Nano/NX, AGX Orin)**: Essential for GPU-accelerated AI at the edge.
        *   **Vendors**: NVIDIA's official store, Seeed Studio, SparkFun, Adafruit.
    *   **Raspberry Pi / NVIDIA Jetson Nano Developer Kit**: For lighter-weight applications or initial prototyping.
        *   **Vendors**: Official Raspberry Pi resellers, Seeed Studio, SparkFun, Adafruit.

2.  **Sensors (Vision, Depth, IMU, LiDAR):**
    *   **Intel RealSense Depth Cameras (D435i, D455)**: Industry-standard for RGB-D data.
        *   **Vendors**: Intel's official store, Amazon, specialized robotics distributors.
    *   **Ouster / Velodyne (LiDAR)**: For advanced 3D mapping and navigation.
        *   **Vendors**: Ouster, Velodyne Lidar (direct or through specialized distributors).
    *   **Astra Orbbec Depth Cameras**: Affordable alternatives to RealSense.
        *   **Vendors**: Orbbec, Amazon.
    *   **IMUs (e.g., Adafruit BNO055, SparkFun MPU-9250)**: For orientation and motion sensing.
        *   **Vendors**: SparkFun, Adafruit, Pololu.

3.  **Actuators (Motors, Servos, Grippers):**
    *   **Dynamixel Servos (Robotis)**: High-performance, intelligent servos with ROS support.
        *   **Vendors**: Robotis, Trossen Robotics.
    *   **Maxon Motors / Faulhaber Motors**: High-quality DC and brushless DC motors for demanding applications.
        *   **Vendors**: Direct from Maxon/Faulhaber (industrial), specialized distributors.
    *   **Robotiq / OnRobot (Grippers)**: Advanced robotic grippers for manipulation tasks.
        *   **Vendors**: Robotiq, OnRobot (industrial distributors).

4.  **Mobile Robot Bases:**
    *   **TurtleBot Series (Open Robotics)**: Popular open-source mobile robot platform for ROS development.
        *   **Vendors**: Robotis, Clearpath Robotics.
    *   **Clearpath Robotics**: High-performance research and industrial robots.
        *   **Vendors**: Clearpath Robotics (direct).
    *   **Unitree Robotics (Go1, H1)**: For quadrupeds and humanoid robots.
        *   **Vendors**: Unitree Robotics (direct or through distributors).

5.  **General Robotics Components:**
    *   **SparkFun / Adafruit**: Prototyping boards, sensors, breakout boards, general electronics.
        *   **Vendors**: SparkFun, Adafruit (direct).
    *   **Pololu**: Motors, motor drivers, wheels, and various robotic components.
        *   **Vendors**: Pololu (direct).
    *   **DFRobot**: Robot kits, sensors, microcontrollers.
        *   **Vendors**: DFRobot (direct).

**Best Practices for Sourcing Hardware:**
*   **Check Compatibility**: Always verify that the hardware is compatible with your chosen software stack (e.g., ROS 2 drivers available, JetPack support).
*   **Read Reviews**: Look for reviews and community feedback on reliability and performance.
*   **Consider Documentation**: Good documentation and tutorials can save immense development time.
*   **Budget Accordingly**: Robotics hardware can be expensive; balance desired performance with your project's budget.
*   **Buy from Reputable Sources**: Purchase from official vendors or authorized distributors to ensure authenticity and support.
*   **Local Suppliers**: Consider local electronics or robotics suppliers for faster delivery and easier returns/support.