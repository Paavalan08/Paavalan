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
      id: "conserve", // <--- NEW: Unique ID for the URL
      title: "Conserve",
      role: "Fullstack Developer",
      desc: "A full-stack web application for user management, including profile management and role-based access control.",
      tech: ["Angular", "Django", "GraphQL", "Tailwind"],
      github: "https://github.com/Paavalan08",
      content: `
        <h3 class="text-2xl font-bold mb-4">The Challenge</h3>
        <p class="mb-6">Managing user roles in large organizations is complex. I needed to build a system that was secure, fast, and easy for non-technical HR staff to use.</p>
        
        <h3 class="text-2xl font-bold mb-4">The Solution</h3>
        <p class="mb-6">I chose <strong>Angular</strong> for the frontend because of its strict typing and modularity, which helps prevent bugs in large forms. For the backend, <strong>Django</strong> provided built-in security features that saved weeks of development time.</p>
        
        <h3 class="text-2xl font-bold mb-4">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 mb-6">
          <li>Role-Based Access Control (RBAC) to restrict sensitive data.</li>
          <li>Real-time user activity tracking using GraphQL subscriptions.</li>
          <li>Responsive dashboard built with Tailwind CSS.</li>
        </ul>
      `
    },
    {
      id: "auralyze",
      title: "Auralyze",
      role: "Final Year Project",
      desc: "Music and lyric analysis tool using AI models to detect sentiment and patterns.",
      tech: ["Python", "AI Model", "React", "FastAPI"],
      github: "https://github.com/Paavalan08",
      content: `
        <h3 class="text-2xl font-bold mb-4">The Vision</h3>
        <p class="mb-6">Music is subjective, but I wanted to see if we could quantify the emotional impact of lyrics using Natural Language Processing (NLP).</p>
        
        <h3 class="text-2xl font-bold mb-4">How it Works</h3>
        <p class="mb-6">The user inputs a song or artist. The Python backend scrapes the lyrics and feeds them into a custom-trained AI model. The results are sent to a React frontend which visualizes the "Mood Score" of the song.</p>
      `
    },
    {
      id: "restaurant-system",
      title: "Restaurant Management System",
      role: "Developer",
      desc: "A complete system for managing restaurant operations, hosted locally using XAMPP.",
      tech: ["PHP", "MySQL", "Apache"],
      github: "https://github.com/Paavalan08",
      content: `
        <h3 class="text-2xl font-bold mb-4">Overview</h3>
        <p class="mb-6">Built to help local restaurants manage orders and inventory without relying on expensive cloud subscriptions.</p>
      `
    }
  ]
};