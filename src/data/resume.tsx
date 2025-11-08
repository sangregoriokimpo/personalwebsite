import { Icons } from "@/components/icons";
import { HomeIcon, GalleryVerticalEndIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gregory Jabido",
  initials: "G. J.",
  url: "https://github.com/sangregoriokimpo",
  location: "Everett, WA",
  locationLink: "https://www.google.com/maps/place/Everett,+WA",
  description:
    "B.S. Mechanical Engineering student (Electrical Engineering minor) focused on robotics, autonomous systems, and guidance, navigation & control (GN&C). Builds high-fidelity simulators and integrated perception-control systems for robotics applications.",
  summary:
    "Aspiring Roboticist and Aerospace Engineer pursuing a B.S. in Mechanical Engineering with a minor in Electrical Engineering at Washington State University. Interdisciplinary engineer with experience in robotics & mechatronics, autonomous systems, and GN&C, across both hardware, software and simulation.",
  avatarUrl: "/githubpfp.jpg",

  skills: [
    "Python",
    "C/C++",
    "Rust",
    "C#",
    "Java",
    "TypeScript/JavaScript",
    "React",
    "Node.js",
    "Robot Operating System (ROS)",
    "Gazebo",
    "OpenCV",
    "YOLO",
    "Docker",
    "Git",
    "Fusion 360",
    "SolidWorks",
    "Siemens NX",
    "Verilog",
    "ARM Assembly",
    "LaTeX",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: GalleryVerticalEndIcon, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "gregoryjabido@outlook.com",
    tel: "+1 509-701-2862",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sangregoriokimpo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gregory-jabido",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:gregoryjabido@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sierra Lobo",
      href: "https://sierralobo.com/",
      badges: ["Orbital Robotics", "Co-op"],
      location: "Milan, OH",
      title: "Incoming Computer Science Intern",
      logoUrl: "/sierralobo.png",
      start: "01/2026",
      end: "Present",
      description:
        "Co-op focused on orbital robotics using ROS and NVIDIA Isaac Sim; contributing to autonomy & simulation workflows.",
    },
    {
      company: "WSU — SIAS Lab (Dr. Hosseinzadeh)",
      href: "https://labs.wsu.edu/siaslab/",
      badges: ["Quadruped Robotics"],
      location: "Pullman, WA",
      title: "Undergraduate Robotics Research Assistant",
      logoUrl: "SIASLab.jpg",
      start: "08/2025",
      end: "Present",
      description:
        "Probabilistic intention & motion prediction on Unitree Go2 EDU Plus for safe path planning around people.",
    },
    {
      company: "Palouse RoboSub — WSU",
      href: "https://robosub.eecs.wsu.edu/",
      badges: ["AUV/ROV", "ROS2"],
      location: "Pullman, WA",
      title: "Autonomy & Simulation Lead",
      logoUrl: "palouserobosub.jpg",
      start: "01/2024",
      end: "Present",
      description:
        "Led development of GNCea: Gazebo Harmonic AUV/ROV simulator with custom C++ plugins (thrust allocation, buoyancy, hydrodynamic drag), 6-DOF teleop, and autonomy.",
    },
    {
      company: "UF — RISING Lab (Dr. Sandip Ray)",
      href: "https://sandip.ece.ufl.edu/rising-lab/",
      badges: ["ROS2", "Gazebo", "CV"],
      location: "Gainesville, FL",
      title: "Undergraduate Robotics Research Intern",
      logoUrl: "RISINGlab.jpg",
      start: "05/2025",
      end: "08/2025",
      description:
        "Built ROS2/Gazebo AV testbed; lane following & traffic-sign detection (OpenCV, YOLOv8, PID, Kalman Filter); embedded integration on RPi4 and custom drivers.",
    },
    {
      company: "NASA L'SPACE — Mission Concept Academy",
      href: "https://www.lspace.asu.edu/",
      badges: ["CDH", "SDR","PDR","SDR",],
      location: "Remote",
      title: "Command & Data Handling (CDH) Engineer",
      logoUrl: "lspace.png",
      start: "12/2024",
      end: "05/2025",
      description:
        "Designed CDH subsystem, ran trade studies, and developed Siemens NX CAD for a robotic space mission through SDR (System/Software Definition Review), PDR (Preliminary Design Review) and CDR (Critical Design Review).",
    },
    {
      company: "Amazon — PAE2",
      href: "https://www.amazon.com",
      badges: ["Top 100 NA"],
      location: "Arlington, WA",
      title: "Fulfillment Associate",
      logoUrl: "/amazon.png",
      start: "06/2024",
      end: "08/2024",
      description:
        "Ranked top 10 at PAE2 and top 100 in North America (Season 25) for speed & accuracy.",
    },
  ],

  education: [
    {
      school: "Washington State University",
      href: "https://wsu.edu/",
      degree: "B.S. Mechanical Engineering (Minor in Electrical Engineering)",
      logoUrl: "/wsu.png",
      start: "2023",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "GNCea — AUV/ROV Simulator",
      href: "https://github.com/sangregoriokimpo/GNCea",
      dates: "Aug 2025 – Present",
      active: true,
      description:
        "ROS 2 Jazzy-based simulator in Gazebo Harmonic with custom C++ plugins for thrust allocation, buoyancy, and hydrodynamic drag; real-time 6-DOF teleop, depth/altitude control, and camera/LiDAR perception.",
      technologies: [
        "C++",
        "Python",
        "ROS 2 Jazzy",
        "Gazebo Harmonic",
        "XML/SDF",
        "OpenCV",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sangregoriokimpo/GNCea",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/GNCea.png",
      video: "",
    },
    {
      title: "Camera Sensor Attack Testbed",
      href: "https://github.com/sangregoriokimpo/Ackermann-Geometry-Lane-Follower", 
      dates: "May 2025 – Aug 2025",
      active: true,
      description:
        "PiCar-X/RPi4 vision-only AV testbed with dual-lane pipelines (HSV, Canny/Hough), YOLO sign detection, PID+Kalman control, and live telemetry to study reflective/blinding/spoofing attacks and mitigations.",
      technologies: [
        "Python",
        "OpenCV",
        "YOLOv8",
        "Raspberry Pi 4",
        "PiCar-X",
        "Label Studio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sangregoriokimpo/Ackermann-Geometry-Lane-Follower",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/explorationplatform.jpg",
      video: "",
    },
    {
      title: "React Chess Engine",
      href: "https://github.com/sangregoriokimpo/chess-app/tree/master", 
      dates: "May 2025",
      active: true,
      description:
        "Interactive chess engine with full rule enforcement (promotion, en passant, check detection) and OOP move validation via a centralized Referee; drag-and-drop UI.",
      technologies: ["TypeScript", "React", "HTML5 Canvas", "CSS Modules"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sangregoriokimpo/chess-app/tree/master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chessapp.png",
      video: "",
    },
    {
      title: "A* Path Planning Simulation",
      href: "https://github.com/sangregoriokimpo/A-Star-Path-Planning-Simulation", 
      dates: "June 2025",
      active: false,
      description:
        "Grid-based A* simulator in Python showcasing shortest-path computation, obstacle avoidance, and heuristic search.",
      technologies: ["Python", "Pygame", "OOP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sangregoriokimpo/A-Star-Path-Planning-Simulation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/astar.png",
      video: "",
    },
    {
      title: "Verilog Stopwatch & Calculator",
      href: "https://github.com/sangregoriokimpo/EE214", 
      dates: "Aug 2024 - Dec 2024",
      active: false,
      description:
        "Stopwatch and calculator implemented in Verilog on Xilinx ZYNQ XC7007S with seven-seg display, switches, and push buttons.",
      technologies: ["Verilog", "Vivado", "Vitis"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sangregoriokimpo/EE214",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blackboard.png",
      video: "",
    },
  ],

  hackathons: ["Crimson Code 2024"],

} as const;
