// src/app/page.js
import Image from "next/image";

export default function Home() {
  
  // --- 1. YOUR DATA (The Brain) ---
  
  const skills = {
    expert: ["PHP", "JavaScript", "MySQL", "PostgreSQL", "HTML/CSS", "Tailwind CSS"],
    intermediate: ["ReactJS", "NodeJS", "Python", "Angular", "Java"]
  };

  const projects = [
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
  ];

  // --- 2. THE WEBSITE (The Body) ---
  
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* SECTION 1: HERO & DOWNLOAD */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Paavalan Varathanathan
        </h1>
        <p className="text-xl text-blue-600 font-medium mb-6">
          Freelance Fullstack Developer
        </p>
        <p className="max-w-2xl text-gray-600 mx-auto leading-relaxed mb-8">
          I am an ambitious, outgoing, and hardworking individual with a strong commitment to meeting deadlines. 
          I am eager to contribute my skills in a professional environment that encourages innovation.
        </p>
        
        <a
          href="/resume.pdf" 
          download="Paavalan_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download CV
        </a>
      </section>

      {/* SECTION 2: SKILLS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-2">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Expert Skills */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Expert</h3>
            <div className="flex flex-wrap gap-2">
              {skills.expert.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Intermediate Skills */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Intermediate</h3>
            <div className="flex flex-wrap gap-2">
              {skills.intermediate.map((skill, index) => (
                <span key={index} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-2">Featured Projects</h2>
        
        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <span className="text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded uppercase tracking-wide">
                  {project.role}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center mt-12">
        <p>© 2025 Paavalan Varathanathan. Built with Next.js & Tailwind.</p>
      </footer>

    </main>
  );
}