import { portfolioData } from "@/data/content";

export default function AboutPage() {
  const { skills } = portfolioData;

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">About Me</h1>
      <p className="text-lg text-slate-600 mb-12 leading-relaxed">
        I am an ambitious, outgoing, and hardworking individual with a strong commitment to meeting deadlines. 
        I am eager to contribute my skills in a professional environment that encourages innovation.
        I have completed my diploma in computing and software engineering and am currently working on my final project, "Auralyze."
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <h3 className="font-semibold text-blue-600 mb-4">Expert</h3>
          <div className="flex flex-wrap gap-2">
            {skills.expert.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <h3 className="font-semibold text-teal-600 mb-4">Intermediate</h3>
          <div className="flex flex-wrap gap-2">
            {skills.intermediate.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}