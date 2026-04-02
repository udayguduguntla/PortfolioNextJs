// Skills Data - Organized by category

export const skills = {
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
}

// Helper to get all skills as flat array
export function getAllSkills(): string[] {
  return Object.values(skills).flat()
}

// Helper to get skill categories
export function getSkillCategories(): string[] {
  return Object.keys(skills)
}
