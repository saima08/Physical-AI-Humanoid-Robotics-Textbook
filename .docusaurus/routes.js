import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-humanoid-robotics-book/',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/', '4eb'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug', '509'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug/config',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug/config', '6f3'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug/content',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug/content', '560'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug/globalData',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug/globalData', '499'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug/metadata',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug/metadata', 'ac8'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug/registry',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug/registry', 'f52'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/__docusaurus/debug/routes',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/__docusaurus/debug/routes', 'a9a'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/404',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/404', 'cb3'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/docs',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', 'fe3'),
    routes: [
      {
        path: '/physical-ai-humanoid-robotics-book/docs',
        component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', '4be'),
        routes: [
          {
            path: '/physical-ai-humanoid-robotics-book/docs',
            component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', 'c57'),
            routes: [
              {
                path: '/physical-ai-humanoid-robotics-book/docs/appendix/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/appendix/', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/appendix/glossary',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/appendix/glossary', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/appendix/hardware-vendors',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/appendix/hardware-vendors', '6b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/appendix/resources',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/appendix/resources', '26f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/appendix/troubleshooting',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/appendix/troubleshooting', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-project/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-project/', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-project/evaluation-rubric',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-project/evaluation-rubric', '849'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-project/implementation-guide',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-project/implementation-guide', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-project/project-requirements',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-project/project-requirements', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-project/system-architecture',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-project/system-architecture', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-project/testing-validation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-project/testing-validation', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/intro',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/intro', '5ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/actions-communication',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/actions-communication', '167'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/launch-files',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/launch-files', '223'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/module1-assessment',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/module1-assessment', '278'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/nodes-topics-services',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/nodes-topics-services', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/python-rclpy',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/python-rclpy', 'd8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/ros2-architecture',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/ros2-architecture', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-1-ros2/urdf-humanoids',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-1-ros2/urdf-humanoids', 'ca6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/', 'e77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/gazebo-introduction',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/gazebo-introduction', '14b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/human-robot-interaction',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/human-robot-interaction', 'd97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/module2-assessment',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/module2-assessment', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/physics-simulation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/physics-simulation', '2ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/sensor-simulation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/sensor-simulation', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/unity-integration',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/unity-integration', '902'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-2-simulation/urdf-sdf-formats',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-2-simulation/urdf-sdf-formats', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/isaac-platform-overview',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/isaac-platform-overview', '352'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/isaac-ros-integration',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/isaac-ros-integration', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/isaac-sim-setup',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/isaac-sim-setup', 'cae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/module3-assessment',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/module3-assessment', '794'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/nav2-bipedal-movement',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/nav2-bipedal-movement', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/sim-to-real-transfer',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/sim-to-real-transfer', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/synthetic-data-generation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/synthetic-data-generation', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/vslam-navigation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-3-nvidia-isaac/vslam-navigation', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/', '3ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/conversational-robotics',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/conversational-robotics', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/llm-cognitive-planning',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/llm-cognitive-planning', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/module4-assessment',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/module4-assessment', '204'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/multimodal-interaction',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/multimodal-interaction', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/ros2-action-sequences',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/ros2-action-sequences', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/vla-introduction',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/vla-introduction', 'f07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module-4-vla/whisper-voice-commands',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module-4-vla/whisper-voice-commands', '95f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/prerequisites/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/prerequisites/', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/prerequisites/cloud-alternatives',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/prerequisites/cloud-alternatives', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/prerequisites/edge-kit-setup',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/prerequisites/edge-kit-setup', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/prerequisites/hardware-requirements',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/prerequisites/hardware-requirements', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/prerequisites/workstation-setup',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/prerequisites/workstation-setup', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
