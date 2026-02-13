export const PROJECTS = [
  {
    id: "taskflow",
    title: "TaskFlow – Intelligent Productivity System",
    category: "SaaS / Full-Stack",
    description: "Scalable project management for remote teams featuring real-time updates via WebSockets.",
    problem: "Remote teams often struggle with fragmented communication and delayed updates on task progress, leading to inefficiencies and missed deadlines.",
    solution: "TaskFlow provides a unified dashboard with real-time WebSocket integration, ensuring every team member sees updates instantly without page refreshes.",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Tailwind"],
    features: [
      "Real-time task board updates",
      "Interactive team chat per project",
      "Automated progress reports",
      "Role-based access control"
    ],
    metrics: [
      { label: "Efficiency Boost", value: "35%" },
      { label: "Active Users", value: "500+" },
      { label: "Latency", value: "<100ms" }
    ],
    liveUrl: "https://taskflowcj.infinityfreeapp.com/",
    githubUrl: "https://github.com/carljohntruya-art/taskflow",
    images: ["/assets/taskflow.png"]
  },
  {
    id: "jusas",
    title: "Jusas Smoothie Tropical App",
    category: "E-Commerce / Mobile Web",
    description: "A premium ordering experience for a smoothie bar with customization and loyalty tracking.",
    problem: "Traditional ordering methods were slow and didn't allow for detailed customization or loyalty engagement.",
    solution: "A mobile-first web app that allows users to customize their blends, order ahead, and track loyalty points in a sleek, glassmorphic interface.",
    techStack: ["React", "Firebase", "Tailwind", "Framer Motion"],
    features: [
      "Interactive smoothie customizer",
      "Real-time order status tracking",
      "User accounts and loyalty points",
      "Admin dashboard for inventory"
    ],
    metrics: [
      { label: "Conversion Rate", value: "12%" },
      { label: "User Retention", value: "45%" }
    ],
    liveUrl: "https://jusas-new.vercel.app",
    githubUrl: "https://github.com/carljohntruya-art/Jusas",
    images: ["/assets/jusas-tropical.png"]
  },
  {
    id: "bipsu",
    title: "Bipsu Complaint System",
    category: "Enterprise / Admin System",
    description: "Digitalized campus complaint management system for streamlined issue resolution.",
    problem: "Paper-based complaints were difficult to track, often lost, and took weeks to process.",
    solution: "A digital portal where students can submit categorized complaints with evidence, and admins can manage workflow statuses efficiently.",
    techStack: ["React", "Node.js", "Express", "MySQL", "JWT"],
    features: [
      "Encrypted complaint submission",
      "Admin workflow management",
      "Automated email notifications",
      "PDF Report generation"
    ],
    metrics: [
      { label: "Resolution Time", value: "-60%" },
      { label: "User Satisfaction", value: "4.8/5" }
    ],
    liveUrl: "",
    githubUrl: "",
    images: ["/assets/bipsu-dashboard.png"]
  },
  {
    id: "meat-freshness",
    title: "Meat Freshness Detection AI",
    category: "AI / Computer Vision",
    description: "Deep learning system using CNNs to detect meat quality from camera input.",
    problem: "Manual inspection of meat quality is subjective and prone to human error, potentially leading to food safety issues.",
    solution: "A convolutional neural network model trained on thousands of meat samples that can accurately categorize freshness levels in real-time.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "React"],
    features: [
      "Real-time camera feed analysis",
      "Freshness percentage score",
      "Historical data logging",
      "Mobile-responsive dashboard"
    ],
    metrics: [
      { label: "Accuracy", value: "98.5%" },
      { label: "Inference Time", value: "45ms" }
    ],
    liveUrl: "",
    githubUrl: "",
    images: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: "smart-personal-organize",
    title: "Smart Personal Organize (Const Task Manager)",
    category: "Productivity / SaaS",
    description: "A modern task management web application with authentication and structured productivity workflow.",
    problem: "Generic task managers lack the structure needed for deep focus and authenticated privacy.",
    solution: "A curated task management experience with secure JWT authentication and a focused UI for high-priority task organization.",
    techStack: ["React", "Vite", "Node.js", "Express", "MySQL", "JWT"],
    features: [
      "Secure Login/Signup system",
      "Structured task hierarchies",
      "Productivity analytics",
      "Cross-device synchronization"
    ],
    metrics: [
      { label: "Deployment", value: "Netlify" },
      { label: "Security", value: "JWT" }
    ],
    liveUrl: "https://consttaskmanager.netlify.app/",
    githubUrl: "",
    images: ["/assets/task_manager.png"]
  }
];
