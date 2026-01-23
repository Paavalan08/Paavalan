// src/data/content.js
export const portfolioData = {
  personal: {
    name: "Paavalan Varathanathan",
    role: "Freelance Fullstack Developer",
    resumeUrl: "/resume.pdf",
    social: {
      github: "https://github.com/Paavalan08",
      linkedin: "https://www.linkedin.com/in/paavalan-varathanathan-212951312/",
      email: "mailto:varathanathanpaavalan@gmail.com"
    }
  },
  skills: {
    expert: ["PHP", "JavaScript", "MySQL", "PostgreSQL", "HTML/CSS", "Tailwind CSS"],
    intermediate: ["ReactJS", "NodeJS", "Python", "Angular", "Java"]
  },
  projects: [
    {
      title: "Conserve",
      role: "Fullstack Developer",
      desc: "A full-stack web application for user management, including profile management and role-based access control.",
      tech: ["Angular", "Django", "GraphQL", "Tailwind"]
    },
    {
      title: "Restaurant Management System",
      role: "Developer",
      desc: "A complete system for managing restaurant operations, hosted locally using XAMPP.",
      tech: ["PHP", "MySQL", "Apache"]
    },
    {
      title: "Online Ecommerce Platform",
      role: "HND Course Project",
      desc: "An online dress ordering system enabling seamless selection and ordering for users.",
      tech: ["Web Technologies", "Database"]
    }
  ]
};