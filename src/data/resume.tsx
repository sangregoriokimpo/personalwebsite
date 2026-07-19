import { Icons } from "@/components/icons";
import { HomeIcon, GalleryVerticalEndIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gregory Jabido",
  initials: "G. J.",
  url: "https://github.com/sangregoriokimpo",
  location: "Everett, WA",
  locationLink: "https://www.google.com/maps/place/Everett,+WA",
  description:
    "Engineering Autonomy for the Final Frontier: Robotics • Astronautics • GN&C • Simulation",
  summary:
    "Aspiring Roboticist and Aerospace Engineer pursuing a B.S. in Mechanical Engineering with a minor in Electrical Engineering at Washington State University. Interdisciplinary engineer with experience in robotics & mechatronics, autonomous systems, and GN&C, across both hardware, software and simulation.",
  avatarUrl: "/clearshiki.jpg",

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
      company: "NASA Jet Propulsion Laboratory, California Institute of Technology",
      href: "https://www.jpl.nasa.gov/",
      badges: ["Lunar Robotics","ROS2"],
      location: "Pasadena, CA",
      title: "Applied Robotic Systems Engineering Intern (358E)",
      logoUrl: "/jpllogo.jpg",
      start: "08/2026",
      end: "12/2026",
      description:
        "Selected to develop and demonstrate lunar mobility, manipulation, and mobile manipulator capabilities supporting NASA Moon to Mars (M2M) objectives.",
    },   
    {
      company: "WSU, SIAS Lab, Dr. Hosseinzadeh",
      href: "https://labs.wsu.edu/siaslab/",
      badges: ["Quadruped Robotics"],
      location: "Pullman, WA",
      title: "Undergraduate Robotics Research Assistant",
      logoUrl: "SIASLab.jpg",
      start: "08/2025",
      end: "Present",
      description:
        "Developing Isaac Sim implementation of HuNavSim for Unitree Go2 quadruped, modeling social intention and enabling safe path planning around people.",
    },
    {
      company: "Sierra Lobo",
      href: "https://sierralobo.com/",
      badges: ["Orbital Robotics","ROS2","Isaac Sim"],
      location: "Milan, OH",
      title: "Robotics Engineering Intern",
      logoUrl: "/sierralobo.png",
      start: "05/2026",
      end: "08/2026",
      description:
        "Developed autonomy and simulation workflows for orbital robotics using ROS and Isaac Sim, including HIL programming for a UFACTORY xArm7, CubeSat avionics and thrust-vector control, PCL and odometry-based deployment simulations, and PID/EKF tuning in Python and MATLAB as a continuation of the SSTI project.",
    },    
    {
      company: "Sierra Lobo",
      href: "https://sierralobo.com/",
      badges: ["Orbital Robotics","ROS2","Isaac Sim"],
      location: "Milan, OH",
      title: "Robotics Engineering Intern | Part Time",
      logoUrl: "/sierralobo.png",
      start: "01/2026",
      end: "06/2026",
      description:
        "Developed ROS 2 and Isaac Sim environments for orbital robotics, satellite servicing, and on-orbit assembly, incorporating Clohessy Wiltshire orbital propagation with an RK4 solver, NVIDIA Lula inverse kinematics for autonomous manipulation, and RCS thrust vectoring logic for spacecraft GNC testing as part of SSTI, a joint U.S. Space Force and Ohio university satellite-servicing program.",
    },
    {
      company: "UF, RISING Lab, Dr. Sandip Ray",
      href: "https://sandip.ece.ufl.edu/rising-lab/",
      badges: ["ROS2", "Gazebo", "CV"],
      location: "Gainesville, FL",
      title: "Undergraduate Robotics Research Intern | SURF Fellowship",
      logoUrl: "RISINGlab.jpg",
      start: "05/2025",
      end: "08/2025",
      description:
        "Built ROS2/Gazebo AV testbed; lane following & traffic-sign detection (OpenCV, YOLOv8, PID, Kalman Filter); embedded integration on RPi4 and custom drivers.",
    },
    {
      company: "Amazon, PAE2",
      href: "https://www.amazon.com",
      badges: ["Top 100 NA"],
      location: "Arlington, WA",
      title: "Fulfillment Associate | Seasonal",
      logoUrl: "/amazon.png",
      start: "06/2024",
      end: "08/2024",
      description:
        "Ranked top 10 at PAE2 and top 100 in North America (Season 25) for speed & accuracy.",
    },
  ],

  extracurricular:[
    {
      company: "Palouse RoboSub",
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
      company: "WSU Robotics Club",
      href: "https://robotics.wsu.edu/",
      badges: ["Quadruped Robotics", "ROS1"],
      location: "Pullman, WA",
      title: "CS Team Member",
      logoUrl: "arm_logo.png",
      start: "01/2025",
      end: "Present",
      description:
        "Developed a prototype quadruped inverse kinematics system using the MIT CHAMP/CHVMP gait framework and prototyped PPO-based standing and walking policies in MuJoCo.",
    },
    {
      company: "NASA L'SPACE Mission Concept Academy (Team 27 Venera Nova)",
      href: "https://www.lspace.asu.edu/",
      badges: ["CDH", "Technical Writing",],
      location: "Remote",
      title: "Command & Data Handling (CDH) Engineer",
      logoUrl: "lspace.png",
      start: "12/2024",
      end: "05/2025",
      description:
        "Designed CDH subsystem, ran trade studies, and developed Siemens NX CAD for a robotic space mission through SDR (System/Software Definition Review), PDR (Preliminary Design Review) and CDR (Critical Design Review).",
    },
  ],

  education: [
    {
      school: "Washington State University",
      href: "https://wsu.edu/",
      degree: "BSME - Robotics & Autonomous Systems | Minor in Electrical Engineering",
      logoUrl: "/wsu.png",
      start: "2023",
      end: "2028",
    },
  ],

  projects: [
{
      title: "Guppy, an Autonomous Underwater Vehicle (AUV)",
      href: "https://github.com/PalouseRobosub/guppy",
      dates: "Jan 2025 – Aug 2026",
      active: true,
      description:
        "Palouse Robosub's (Washington State University) AUV for 2026 Robonation Robosub Competition. Placed 22nd place out of 39 qualifying teams, beating Duke and Carnegie Mellon University.",
      technologies: [
        "ROS 2 Jazzy",
        "Latte Panda Sigma",
        "T200 Thrusters",
        "VectorNav VN-100 IMU",
        "WaterLinked A50 DVL",
        "FLIR gigE camera",
        "OpenCV",
        "YOLO",
        "C/C++",
        "Python",
        "Embedded Systems",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PalouseRobosub/guppy",
          icon: <Icons.github className="size-3" />,
        },
      ],
        image: "/guppy.png",
        video:
          "",
    },
    {
      title: "GNCea, an AUV/ROV Simulator",
      href: "https://github.com/PalouseRobosub/GNCea",
      dates: "Aug 2025 – Present",
      active: true,
      description:
        "ROS 2 Jazzy based simulator in Gazebo Harmonic with custom C++ plugins for thrust allocation, buoyancy, and hydrodynamic drag; real-time 6-DOF teleop, depth/altitude control, and camera/LiDAR perception.",
      technologies: [
        "C/C++",
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
          href: "https://github.com/PalouseRobosub/GNCea",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gncealogo.png",
      video: "",
    },
    {
      title: "F1Tenth Algorithms",
      href: "https://github.com/sangregoriokimpo/F1Tenth-Algorithms",
      dates: "Dec 2025 – Present",
      active: true,
      description:
        "ROS 2 Humble F1Tenth autonomous racing stack for Ackermann vehicles, featuring Follow-the-Gap and wall-following with RGBD + 3D LiDAR perception; supports multi-vehicle racing scenarios and real-time reactive navigation.",
      technologies: [
        "C/C++",
        "Python",
        "ROS 2 Humble",
        "Gazebo Classic",
        "XML/SDF",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sangregoriokimpo/F1Tenth-Algorithms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/car.png",
      video: "",
    },
    {
      title: "Camera Sensor Attack Testbed",
      href: "https://github.com/sangregoriokimpo/Ackermann-Geometry-Lane-Follower", 
      dates: "May 2025 – Aug 2025",
      active: true,
      description:
        "PiCar-X/RPi4 vision-only AV testbed with dual-lane pipelines (HSV, Canny/Hough), YOLO sign detection, PID + Kalman Filter control, and live telemetry to study reflective/blinding/spoofing attacks and mitigations.",
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

  hackathons: [],

} as const;
