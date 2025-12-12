---
sidebar_position: 4
title: Actions Communication
description: Implementing long-running tasks with ROS 2 Actions.
keywords: [ros2, actions, long-running tasks, feedback, goal, result]
---

# Actions Communication

While ROS 2 Topics are ideal for continuous data streams and Services handle discrete request/response interactions, many robotic tasks are long-running and require periodic feedback about their progress, as well as the ability to be preempted or canceled. This is precisely the domain of **ROS 2 Actions**. Actions provide a more sophisticated communication pattern designed for goal-oriented tasks that extend over time, making them indispensable for complex behaviors in physical AI and humanoid robotics.

Consider a humanoid robot tasked with "walking to the kitchen." This isn't an instant operation; it's a sequence of movements that takes time. During this process, a human operator or another AI system might want to know if the robot is making progress (feedback), or perhaps even tell it to stop mid-journey (preemption). Services would be insufficient here, as they block until completion, and topics alone would not provide the structured feedback loop or goal management. Actions elegantly address these needs by defining a clear protocol for sending a goal, receiving continuous feedback, and ultimately obtaining a final result.

ROS 2 Actions are built upon ROS 2 Topics and Services but provide a higher-level abstraction. An action client sends a **goal** to an action server, which then attempts to achieve that goal. As the action server executes the task, it periodically publishes **feedback** messages, informing the client about its current state and progress. Once the task is complete (or canceled), the action server sends a **result** back to the client. This robust, asynchronous, and feedback-rich communication pattern is crucial for managing the intricate, multi-step operations characteristic of intelligent physical robots operating in dynamic environments.

**Explanations of Action Components:**
*   **Goal**: The desired state or task for the action server to achieve (e.g., target pose for navigation, object to grasp).
*   **Feedback**: Intermediate messages published by the action server to inform the client about the current progress of the action (e.g., current pose during navigation, percentage complete for a grasping task).
*   **Result**: The final outcome of the action, sent once the action is completed, aborted, or canceled (e.g., `success`, `failure`, `preempted`).

**Illustrative Case: Humanoid Robot Navigation:**
A humanoid robot's navigation stack might expose a `NavigateToPose` action. An action client (e.g., a high-level planner) sends a goal specifying the target (x, y, yaw). As the robot moves, the action server (the navigation controller) publishes feedback like the robot's current pose and remaining distance. If an obstacle appears, the client could preempt the current goal and send a new one. Once the robot reaches the target, a result of `SUCCESS` is sent.

**Best Practices for Using Actions:**
*   **Use for Long-Running, Stateful Tasks**: Actions are best suited for tasks that take a noticeable amount of time, have intermediate states, and might need to be monitored or canceled.
*   **Define Clear Goal/Feedback/Result Types**: Carefully design the message types for goal, feedback, and result to accurately represent the task's parameters and outcomes.
*   **Implement Preemption Logic**: Ensure action servers can gracefully handle requests to cancel or preempt the current goal.
*   **Provide Meaningful Feedback**: Feedback should be frequent and informative enough for the client to assess progress without overwhelming the communication bus.
*   **Error Handling**: Define specific error codes or states within the result message to communicate failure modes.

**Insights into Action Communication in Complex Systems:**
Actions often form a hierarchy in complex robotic systems. A high-level AI planner might send an "ExploreEnvironment" action goal. This action server, in turn, might become an action client to a "NavigateToPose" action server and a "ManipulateObject" action server. This nesting allows for the decomposition of complex tasks into manageable sub-goals, with each layer providing feedback and handling its own failures. This structured approach is fundamental for building sophisticated behaviors in humanoid robots.