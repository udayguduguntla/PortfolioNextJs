// Portfolio Data - Extracted from reference content
export const portfolioData = {
  personal: {
    name: "Uday Kumar Guduguntla",
    title: "Full Stack Developer & MCA Student",
    tagline: "Building the future, one line of code at a time.",
    description: "Technically proficient and driven professional with a results-oriented mindset. I have a solid background in web development, programming, and practical knowledge gained from industry workshops.",
    email: "contact@udayguduguntla.com",
    location: "India",
    avatar: "/images/profile.jpg",
    resume: "/documents/udayNewUAE.pdf"
  },

  social: {
    github: "https://github.com/udayguduguntla",
    linkedin: "https://linkedin.com/in/udayguduguntla",
    leetcode: "https://leetcode.com/u/udayguduguntla",
    codechef: "https://codechef.com/users/udayguduguntla"
  },

  skills: {
    "Programming Languages": [
      "Python", "Java", "JavaScript", "HTML5", "CSS3", "TypeScript"
    ],
    "Web Technologies": [
      "React", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL"
    ],
    "AI/ML & Computer Vision": [
      "OpenCV", "Machine Learning", "Computer Vision", "Data Analysis"
    ],
    "Tools & Frameworks": [
      "Git", "VS Code", "Postman", "Bootstrap", "Tailwind CSS", "Flask"
    ]
  },

  projects: [
    {
      id: "color-detection",
      title: "Live Camera Color Detection",
      description: "Revolutionary accessibility tool helping color-blind individuals identify colors in real-time through live camera feed with voice feedback. This project aims to make the digital world more inclusive for people with color vision deficiency.",
      image: "/images/projects/color-detection.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision", "Accessibility", "Machine Learning"],
      features: [
        "Real-time color detection using camera",
        "Voice feedback for identified colors",
        "High accuracy color recognition",
        "User-friendly interface",
        "Accessibility-focused design"
      ],
      github: "https://github.com/udayguduguntla/ColorDetention",
      demo: "https://github.com/udayguduguntla/ColorDetention",
      category: "Computer Vision",
      featured: true,
      status: "completed"
    },
    {
      id: "license-plate-recognition",
      title: "License Plate Recognition System",
      description: "Advanced Automatic Number Plate Recognition (ANPR) system using computer vision and OCR technology for automatic vehicle identification and traffic management.",
      image: "/images/projects/license-plate.jpg",
      technologies: ["Python", "OpenCV", "OCR", "Image Processing", "Computer Vision"],
      features: [
        "Automatic license plate detection",
        "OCR text recognition",
        "Multiple image format support",
        "High accuracy recognition",
        "Real-time processing"
      ],
      github: "https://github.com/udayguduguntla/LicencePlateDetention",
      demo: "https://github.com/udayguduguntla/LicencePlateDetention",
      category: "Computer Vision",
      featured: false,
      status: "completed"
    },
    {
      id: "face-attendance",
      title: "Face Recognition Attendance System",
      description: "Comprehensive attendance management system using facial recognition technology with Flask backend for educational institutions and organizations.",
      image: "/images/projects/face-attendance.jpg",
      technologies: ["Python", "Flask", "Face Recognition", "Machine Learning", "Web Development"],
      features: [
        "Real-time face recognition",
        "Automated attendance marking",
        "Web-based dashboard",
        "Student database management",
        "Attendance reports generation"
      ],
      github: "https://github.com/udayguduguntla/FaceReconitionBasedAttendence",
      demo: "https://github.com/udayguduguntla/FaceReconitionBasedAttendence",
      category: "Machine Learning",
      featured: false,
      status: "completed"
    },
    {
      id: "traffic-generation",
      title: "Website Traffic Generation System",
      description: "Sophisticated web automation tool built with Java and Selenium for generating website traffic with proxy management and analytics tracking capabilities.",
      image: "/images/projects/traffic-generation.jpg",
      technologies: ["Java", "Selenium", "Web Automation", "Analytics", "Multi-threading"],
      features: [
        "Automated web traffic generation",
        "Proxy server integration",
        "Analytics and reporting",
        "Configurable traffic patterns",
        "Multi-threading support"
      ],
      github: "https://github.com/udayguduguntla/BuildingTrafficeOnAWebsiteJava",
      demo: "https://github.com/udayguduguntla/BuildingTrafficeOnAWebsiteJava",
      category: "Web Automation",
      featured: false,
      status: "completed"
    }
  ],

  achievements: [
    {
      category: "Academic Excellence",
      items: [
        {
          title: "MCA Program",
          description: "Currently pursuing Master's in Computer Applications at Narayana Engineering College with strong academic performance",
          year: "2023 - Present",
          icon: "🎓"
        },
        {
          title: "Academic Excellence",
          description: "Consistent high performance in coursework and practical assignments",
          year: "2023 - Present",
          icon: "⭐"
        }
      ]
    },
    {
      category: "Programming & Development",
      items: [
        {
          title: "Open Source Contributions",
          description: "Active contributor to various open-source projects and personal repositories",
          year: "Ongoing",
          icon: "🔗"
        },
        {
          title: "Full Stack Projects",
          description: "Successfully developed and deployed multiple full-stack web applications",
          year: "2023 - Present",
          icon: "💻"
        },
        {
          title: "Computer Vision Projects",
          description: "Developed innovative computer vision applications including color detection and license plate recognition",
          year: "2024",
          icon: "👁️"
        }
      ]
    },
    {
      category: "Competitive Programming",
      items: [
        {
          title: "LeetCode Problem Solving",
          description: "Active problem solver on LeetCode platform with consistent practice",
          year: "Ongoing",
          icon: "🧩"
        },
        {
          title: "CodeChef Participation",
          description: "Regular participant in CodeChef contests and programming challenges",
          year: "Ongoing",
          icon: "🏆"
        }
      ]
    },
    {
      category: "Technical Proficiency",
      items: [
        {
          title: "Python Mastery",
          description: "Proficient in Python programming for web development, data analysis, and machine learning",
          year: "2023 - Present",
          icon: "🐍"
        },
        {
          title: "JavaScript & Web Technologies",
          description: "Strong command over modern JavaScript, React, and full-stack web development",
          year: "2023 - Present",
          icon: "🌐"
        },
        {
          title: "Database Management",
          description: "Experience with SQL and NoSQL databases for efficient data management",
          year: "2023 - Present",
          icon: "🗄️"
        }
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Narayana Engineering College",
      period: "2023 - Present",
      description: "Pursuing advanced studies in computer applications with focus on software development and emerging technologies.",
      status: "current"
    },
    {
      degree: "Bachelor's Degree",
      institution: "Previous Institution",
      period: "2020 - 2023",
      description: "Foundation in computer science and programming with strong academic performance.",
      status: "completed"
    }
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing web applications using modern technologies including React, Node.js, and various databases.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    }
  ],

  blogs: [
    {
      id: "accessible-ai",
      title: "Building Accessible AI Solutions",
      excerpt: "Exploring how AI can be made more accessible and inclusive for people with disabilities.",
      content: "Full blog content about accessible AI solutions...",
      publishedAt: "2024-01-15",
      readTime: "5 min read",
      tags: ["AI", "Accessibility", "Inclusion"],
      featured: true
    }
  ],

  contact: {
    email: "contact@udayguduguntla.com",
    phone: "+91-XXXXXXXXXX",
    location: "India",
    availability: "Available for freelance projects and full-time opportunities"
  }
};

export type Project = typeof portfolioData.projects[0];
export type Achievement = typeof portfolioData.achievements[0];
export type Blog = typeof portfolioData.blogs[0];