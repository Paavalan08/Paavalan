// src/app/page.js
import Link from "next/link";
import { portfolioData } from "@/data/content";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      
      {/* 1. The "Badge" */}
      <div className="mb-6 animate-pulse">
        <span className="px-3 py-1 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
          Open to Work
        </span>
      </div>

      {/* 2. Your Name (Big & Bold) */}
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6">
        Paavalan <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
          Varathanathan
        </span>
      </h1>

      {/* 3. The One-Liner */}
      <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl font-light">
        Building modern web applications with <span className="font-medium text-slate-800">React</span> & <span className="font-medium text-slate-800">Next.js</span>.
      </p>
      
      {/* 4. Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link 
          href="/projects"
          className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          View My Work
        </Link>
        <a 
          href={personal.resumeUrl} 
          download="Paavalan_Resume.pdf" 
          className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
        >
          Download Resume
        </a>
      </div>

    </main>
  );
}