// Sample tools data - Replace this with your actual tools
const toolsData = [
    {
        id: 1,
        name: "Code Formatter Pro",
        category: "web",
        description: "Advanced code formatting tool that supports multiple programming languages with customizable rules and real-time preview.",
        icon: "fas fa-code",
        technologies: ["JavaScript", "CSS", "HTML", "Python"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Multi-language support",
            "Real-time formatting",
            "Custom rules engine",
            "Batch processing",
            "VS Code integration"
        ],
        screenshots: [
            "assets/screenshots/formatter-1.jpg",
            "assets/screenshots/formatter-2.jpg"
        ]
    },
    {
        id: 2,
        name: "API Testing Suite",
        category: "api",
        description: "Comprehensive API testing framework with automated testing, mock responses, and detailed reporting capabilities.",
        icon: "fas fa-plug",
        technologies: ["Node.js", "Express", "MongoDB", "Jest"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Automated API testing",
            "Mock server creation",
            "Performance monitoring",
            "CI/CD integration",
            "Detailed reporting"
        ],
        screenshots: [
            "assets/screenshots/api-suite-1.jpg",
            "assets/screenshots/api-suite-2.jpg"
        ]
    },
    {
        id: 3,
        name: "Mobile App Builder",
        category: "mobile",
        description: "Drag-and-drop mobile app builder with native code generation and cloud deployment capabilities.",
        icon: "fas fa-mobile-alt",
        technologies: ["React Native", "TypeScript", "Firebase", "AWS"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Visual app builder",
            "Native code generation",
            "Cloud deployment",
            "Real-time preview",
            "Store publishing"
        ],
        screenshots: [
            "assets/screenshots/mobile-builder-1.jpg",
            "assets/screenshots/mobile-builder-2.jpg"
        ]
    },
    {
        id: 4,
        name: "Database Migration Tool",
        category: "utility",
        description: "Powerful database migration and synchronization tool supporting multiple database systems with version control.",
        icon: "fas fa-database",
        technologies: ["Python", "SQLAlchemy", "PostgreSQL", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Multi-database support",
            "Version control",
            "Rollback capabilities",
            "Schema comparison",
            "Automated backups"
        ],
        screenshots: [
            "assets/screenshots/db-migration-1.jpg",
            "assets/screenshots/db-migration-2.jpg"
        ]
    },
    {
        id: 5,
        name: "Web Performance Analyzer",
        category: "web",
        description: "Advanced web performance analysis tool with lighthouse integration, performance budgets, and optimization suggestions.",
        icon: "fas fa-tachometer-alt",
        technologies: ["JavaScript", "Puppeteer", "Lighthouse", "Chart.js"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Performance auditing",
            "Lighthouse integration",
            "Performance budgets",
            "Optimization tips",
            "Historical tracking"
        ],
        screenshots: [
            "assets/screenshots/perf-analyzer-1.jpg",
            "assets/screenshots/perf-analyzer-2.jpg"
        ]
    },
    {
        id: 6,
        name: "Desktop Automation Suite",
        category: "desktop",
        description: "Cross-platform desktop automation tool with macro recording, task scheduling, and GUI automation capabilities.",
        icon: "fas fa-robot",
        technologies: ["Electron", "Python", "PyAutoGUI", "SQLite"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Macro recording",
            "Task scheduling",
            "GUI automation",
            "Cross-platform",
            "Script editor"
        ],
        screenshots: [
            "assets/screenshots/automation-1.jpg",
            "assets/screenshots/automation-2.jpg"
        ]
    },
    {
        id: 7,
        name: "Cloud Storage Manager",
        category: "utility",
        description: "Unified cloud storage management interface supporting multiple providers with sync, backup, and sharing features.",
        icon: "fas fa-cloud",
        technologies: ["Vue.js", "Node.js", "AWS SDK", "Google Cloud"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Multi-provider support",
            "File synchronization",
            "Automated backups",
            "Sharing controls",
            "Usage analytics"
        ],
        screenshots: [
            "assets/screenshots/cloud-manager-1.jpg",
            "assets/screenshots/cloud-manager-2.jpg"
        ]
    },
    {
        id: 8,
        name: "Real-time Chat Engine",
        category: "web",
        description: "Scalable real-time chat engine with message encryption, file sharing, and multi-platform support.",
        icon: "fas fa-comments",
        technologies: ["Socket.io", "Redis", "MongoDB", "React"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Real-time messaging",
            "End-to-end encryption",
            "File sharing",
            "Group chats",
            "Message history"
        ],
        screenshots: [
            "assets/screenshots/chat-engine-1.jpg",
            "assets/screenshots/chat-engine-2.jpg"
        ]
    },
    {
        id: 9,
        name: "AI Image Processor",
        category: "utility",
        description: "AI-powered image processing tool with background removal, upscaling, and batch processing capabilities.",
        icon: "fas fa-image",
        technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "AI background removal",
            "Image upscaling",
            "Batch processing",
            "Format conversion",
            "Quality enhancement"
        ],
        screenshots: [
            "assets/screenshots/ai-processor-1.jpg",
            "assets/screenshots/ai-processor-2.jpg"
        ]
    },
    {
        id: 10,
        name: "IoT Device Manager",
        category: "api",
        description: "Comprehensive IoT device management platform with real-time monitoring, remote control, and data analytics.",
        icon: "fas fa-microchip",
        technologies: ["MQTT", "InfluxDB", "Grafana", "Docker"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Device monitoring",
            "Remote control",
            "Data analytics",
            "Alert system",
            "Firmware updates"
        ],
        screenshots: [
            "assets/screenshots/iot-manager-1.jpg",
            "assets/screenshots/iot-manager-2.jpg"
        ]
    },
    {
        id: 11,
        name: "Video Conference Tool",
        category: "web",
        description: "WebRTC-based video conferencing solution with screen sharing, recording, and virtual backgrounds.",
        icon: "fas fa-video",
        technologies: ["WebRTC", "Socket.io", "MediaSoup", "React"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "HD video calls",
            "Screen sharing",
            "Meeting recording",
            "Virtual backgrounds",
            "Chat integration"
        ],
        screenshots: [
            "assets/screenshots/video-conf-1.jpg",
            "assets/screenshots/video-conf-2.jpg"
        ]
    },
    {
        id: 12,
        name: "Blockchain Explorer",
        category: "web",
        description: "Multi-chain blockchain explorer with transaction tracking, wallet analysis, and DeFi integration.",
        icon: "fas fa-link",
        technologies: ["Web3.js", "Ethereum", "Next.js", "GraphQL"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Multi-chain support",
            "Transaction tracking",
            "Wallet analysis",
            "DeFi integration",
            "Real-time updates"
        ],
        screenshots: [
            "assets/screenshots/blockchain-1.jpg",
            "assets/screenshots/blockchain-2.jpg"
        ]
    },
    {
        id: 13,
        name: "Password Manager Pro",
        category: "desktop",
        description: "Secure password manager with biometric authentication, secure sharing, and breach monitoring.",
        icon: "fas fa-key",
        technologies: ["Electron", "SQLCipher", "Argon2", "TypeScript"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Military-grade encryption",
            "Biometric unlock",
            "Secure sharing",
            "Breach monitoring",
            "Auto-fill support"
        ],
        screenshots: [
            "assets/screenshots/password-mgr-1.jpg",
            "assets/screenshots/password-mgr-2.jpg"
        ]
    },
    {
        id: 14,
        name: "Social Media Analytics",
        category: "api",
        description: "Comprehensive social media analytics platform with sentiment analysis, competitor tracking, and reporting.",
        icon: "fas fa-chart-line",
        technologies: ["Python", "Pandas", "Matplotlib", "Twitter API"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "Multi-platform analytics",
            "Sentiment analysis",
            "Competitor tracking",
            "Custom reports",
            "Trend prediction"
        ],
        screenshots: [
            "assets/screenshots/social-analytics-1.jpg",
            "assets/screenshots/social-analytics-2.jpg"
        ]
    },
    {
        id: 15,
        name: "Game Development Kit",
        category: "utility",
        description: "Complete 2D game development framework with physics engine, asset management, and cross-platform deployment.",
        icon: "fas fa-gamepad",
        technologies: ["C++", "OpenGL", "Box2D", "CMake"],
        demoUrl: "#",
        githubUrl: "#",
        downloadUrl: "#",
        features: [
            "2D physics engine",
            "Asset management",
            "Scene editor",
            "Cross-platform",
            "Scripting support"
        ],
        screenshots: [
            "assets/screenshots/game-kit-1.jpg",
            "assets/screenshots/game-kit-2.jpg"
        ]
    }
];

// Export for use in main.js
window.toolsData = toolsData;
