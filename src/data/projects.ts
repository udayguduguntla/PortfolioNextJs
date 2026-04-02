// Projects Data - Each project has a date for sorting (latest first)
// To add a new project, simply add it to this array with a date field

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  github: string
  demo: string
  category: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  date: string // Format: YYYY-MM-DD - Used for sorting (latest first)
}

export const projects: Project[] = [
  {
    id: "color-detection",
    title: "Live Camera Color Detection",
    description: "Accessibility tool helping color-blind individuals identify colors in real-time through live camera feed with voice feedback.",
    image: "/images/projects/color-detection.jpg",
    technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
    features: [
      "Real-time color detection using camera",
      "Voice feedback for identified colors",
      "High accuracy color recognition",
      "User-friendly interface"
    ],
    github: "https://github.com/udayguduguntla/ColorDetention",
    demo: "https://github.com/udayguduguntla/ColorDetention",
    category: "Computer Vision",
    featured: true,
    status: "completed",
    date: "2024-03-15"
  },
  {
    id: "license-plate-recognition",
    title: "License Plate Recognition System",
    description: "Automatic Number Plate Recognition (ANPR) system using computer vision and OCR technology for vehicle identification.",
    image: "/images/projects/license-plate.jpg",
    technologies: ["Python", "OpenCV", "OCR", "Image Processing"],
    features: [
      "Automatic license plate detection",
      "OCR text recognition",
      "Multiple image format support",
      "Real-time processing"
    ],
    github: "https://github.com/udayguduguntla/LicencePlateDetention",
    demo: "https://github.com/udayguduguntla/LicencePlateDetention",
    category: "Computer Vision",
    featured: false,
    status: "completed",
    date: "2024-02-20"
  },
  {
    id: "face-attendance",
    title: "Face Recognition Attendance System",
    description: "Attendance management system using facial recognition technology with Flask backend for educational institutions.",
    image: "/images/projects/face-attendance.jpg",
    technologies: ["Python", "Flask", "Face Recognition", "Machine Learning"],
    features: [
      "Real-time face recognition",
      "Automated attendance marking",
      "Web-based dashboard",
      "Attendance reports generation"
    ],
    github: "https://github.com/udayguduguntla/FaceReconitionBasedAttendence",
    demo: "https://github.com/udayguduguntla/FaceReconitionBasedAttendence",
    category: "Machine Learning",
    featured: false,
    status: "completed",
    date: "2024-01-10"
  },
  {
    id: "traffic-generation",
    title: "Website Traffic Generation System",
    description: "Web automation tool built with Java and Selenium for generating website traffic with proxy management.",
    image: "/images/projects/traffic-generation.jpg",
    technologies: ["Java", "Selenium", "Web Automation", "Multi-threading"],
    features: [
      "Automated web traffic generation",
      "Proxy server integration",
      "Analytics and reporting",
      "Multi-threading support"
    ],
    github: "https://github.com/udayguduguntla/BuildingTrafficeOnAWebsiteJava",
    demo: "https://github.com/udayguduguntla/BuildingTrafficeOnAWebsiteJava",
    category: "Web Automation",
    featured: false,
    status: "completed",
    date: "2023-11-05"
  }
]

// Helper function to get projects sorted by date (latest first)
export function getProjectsSortedByDate(): Project[] {
  return [...projects].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return getProjectsSortedByDate().filter(p => p.featured)
}

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}
