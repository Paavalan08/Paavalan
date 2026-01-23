import { portfolioData } from "@/data/content";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Projects</h1>
      
      <div className="grid gap-8">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h2>
            <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">{project.role}</p>
            <p className="text-slate-600 mb-6">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}