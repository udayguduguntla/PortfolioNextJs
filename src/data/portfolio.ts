// Main Portfolio Data - Combines all data from separate files
// This file re-exports everything for backward compatibility

import { personal, social, contact } from './personal'
import { projects, getProjectsSortedByDate, getFeaturedProjects, getProjectById, type Project } from './projects'
import { skills } from './skills'

// Re-export types
export type { Project }

// Combined portfolio data for backward compatibility
export const portfolioData = {
  personal,
  social,
  skills,
  
  // Projects are automatically sorted by date (latest first)
  get projects() {
    return getProjectsSortedByDate()
  },

  achievements: [
    {
      category: "Academic Excellence",
      items: [
        {
          title: "MCA Program",
          description: "Currently pursuing Master's in Computer Applications at Narayana Engineering College",
          year: "2023 - Present",
          icon: "graduation"
        },
        {
          title: "Academic Excellence",
          description: "Consistent high performance in coursework and practical assignments",
          year: "2023 - Present",
          icon: "star"
        }
      ]
    },
    {
      category: "Programming & Development",
      items: [
        {
          title: "Open Source Contributions",
          description: "Active contributor to various open-source projects",
          year: "Ongoing",
          icon: "code"
        },
        {
          title: "Full Stack Projects",
          description: "Successfully developed and deployed multiple full-stack web applications",
          year: "2023 - Present",
          icon: "laptop"
        },
        {
          title: "Computer Vision Projects",
          description: "Developed innovative computer vision applications",
          year: "2024",
          icon: "eye"
        }
      ]
    },
    {
      category: "Competitive Programming",
      items: [
        {
          title: "LeetCode Problem Solving",
          description: "Active problem solver on LeetCode platform",
          year: "Ongoing",
          icon: "puzzle"
        },
        {
          title: "CodeChef Participation",
          description: "Regular participant in CodeChef contests",
          year: "Ongoing",
          icon: "trophy"
        }
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Narayana Engineering College",
      period: "2023 - Present",
      description: "Pursuing advanced studies in computer applications with focus on software development.",
      status: "current"
    },
    {
      degree: "Bachelor's Degree",
      institution: "Previous Institution",
      period: "2020 - 2023",
      description: "Foundation in computer science and programming.",
      status: "completed"
    }
  ],

  contact
}

// Export helper functions
export { getProjectsSortedByDate, getFeaturedProjects, getProjectById }
