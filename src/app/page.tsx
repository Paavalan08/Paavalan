// src/app/page.js
import Image from "next/image";

export default function Home() {
  
  // --- DATA ---
  const socialLinks = {
    github: "https://github.com/Paavalan08",
    linkedin: "https://www.linkedin.com/in/paavalan-varathanathan-212951312/",
    email: "mailto:varathanathanpaavalan@gmail.com"
  };

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

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      
      {/* 1. NAVBAR (Sticky at the top) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-blue-600">PV.</span>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        
        {/* 2. HERO SECTION */}
        <section id="about" className="py-24 md:py-32 flex flex-col items-start max-w-2xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Available for work
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Paavalan Varathanathan
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Freelance <span className="text-blue-600 font-semibold">Fullstack Developer</span> specializing in modern web technologies. I build software that is clean, fast, and accessible.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download="Paavalan_Resume.pdf" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>
            <a href={socialLinks.email} className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-blue-300 hover:text-blue-600 transition-all">
              Contact Me
            </a>
            <div className="flex items-center gap-2 pl-2">
               {/* Simple Social Links */}
               <a href={socialLinks.github} target="_blank" className="p-2 text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               </a>
               <a href={socialLinks.linkedin} target="_blank" className="p-2 text-slate-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="py-16 border-t border-slate-100">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">My Toolkit</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.expert.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Comfortable With</h3>
              <div className="flex flex-wrap gap-2">
                {skills.intermediate.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-sm hover:border-blue-200 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="py-16 border-t border-slate-100">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <a href={socialLinks.github} target="_blank" className="hidden md:flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
              View Github <span className="ml-1">→</span>
            </a>
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{project.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs font-mono bg-slate-50 text-slate-600 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FOOTER */}
        <footer className="py-12 border-t border-slate-100 mt-12 text-center text-slate-500 text-sm">
          <p>© 2025 Paavalan Varathanathan. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}