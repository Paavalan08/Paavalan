// src/app/projects/page.js
import Link from "next/link";
import { portfolioData } from "@/data/content";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Projects</h1>
      
      <div className="grid gap-8">
        {portfolioData.projects.map((project) => (
          // WRAPPER LINK
          <Link href={`/projects/${project.id}`} key={project.id} className="block group">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">
                {project.role}
              </p>
              <p className="text-slate-600 mb-6 line-clamp-2">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}