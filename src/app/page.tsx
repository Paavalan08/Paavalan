// // src/app/page.js
// import Link from "next/link";
// import { portfolioData } from "@/data/content";

// export default function Home() {
//   const { personal } = portfolioData;

//   return (
//     <main className="min-h-screen bg-white relative selection:bg-blue-100">
      
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
//       {/* FIX: Changed pt-32 to pt-24 and md:pt-48 to md:pt-32 to reduce the gap */}
//       <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-20">
        
//         {/* Status Line */}
//         <div className="flex items-center gap-2 mb-8 animate-fade-in">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//           </span>
//           <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">
//             Available for freelance work
//           </span>
//         </div>

//         {/* Headline */}
//         <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-4xl">
//           I build <span className="text-blue-600">accessible</span>, pixel-perfect web applications for the modern web.
//         </h1>

//         {/* The Pitch */}
//         <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
//           I am <strong>Paavalan Varathanathan</strong>, a Fullstack Developer specializing in 
//           <span className="text-slate-900 font-semibold"> React</span>, 
//           <span className="text-slate-900 font-semibold"> Next.js</span>, and 
//           <span className="text-slate-900 font-semibold"> Python</span>. 
//           I turn complex problems into simple, elegant software.
//         </p>
        
//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4">
//           <Link 
//             href="/projects"
//             className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
//           >
//             <span className="mr-2">View Projects</span>
//             <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </Link>
          
//           <a 
//             href={personal.resumeUrl} 
//             download="Paavalan_Resume.pdf" 
//             className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 font-medium text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
//           >
//              Download CV
//           </a>
//         </div>

//         {/* Social Proof */}
//         <div className="mt-16 pt-8 border-t border-slate-100 flex items-center gap-6">
//            <span className="text-sm font-semibold text-slate-400">CONNECT</span>
//            <div className="flex gap-4">
//              <a href={personal.social.github} target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
//                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
//              </a>
//              <a href={personal.social.linkedin} target="_blank" className="text-slate-400 hover:text-blue-700 transition-colors">
//                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//              </a>
//              <a href={personal.social.email} className="text-slate-400 hover:text-slate-900 transition-colors">
//                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//              </a>
//            </div>
//         </div>

//       </div>
//     </main>
//   );
// }


// src/app/page.js
import Link from "next/link";
import { portfolioData } from "@/data/content";
import GridBackground from "@/components/GridBackground"; // <--- 1. Import this

export default function Home() {
  const { personal } = portfolioData;

  return (
    <main className="min-h-screen bg-white relative selection:bg-blue-100">
      
      {/* 2. Use the new Smart Grid Component */}
      <GridBackground />
      
      {/* (Removed the old manual div lines here) */}

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-10 z-10">
        
        {/* Status Line */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">
            Available for freelance work
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-4xl">
          I build <span className="text-blue-600">accessible</span>, pixel-perfect web applications for the modern web.
        </h1>

        {/* Pitch */}
        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
          I am <strong>Paavalan Varathanathan</strong>, a Fullstack Developer specializing in 
          <span className="text-slate-900 font-semibold"> React</span>, 
          <span className="text-slate-900 font-semibold"> Next.js</span>, and 
          <span className="text-slate-900 font-semibold"> Python</span>. 
          I turn complex problems into simple, elegant software.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            <span className="mr-2">View Projects</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <a 
            href={personal.resumeUrl} 
            download="Paavalan_Resume.pdf" 
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 font-medium text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
             Download CV
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-10 pt-4 border-t border-slate-100 flex items-center gap-6">
           <span className="text-sm font-semibold text-slate-400">CONNECT</span>
           <div className="flex gap-4">
             <a href={personal.social.github} target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             </a>
             <a href={personal.social.linkedin} target="_blank" className="text-slate-400 hover:text-blue-700 transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
             <a href={personal.social.email} className="text-slate-400 hover:text-slate-900 transition-colors">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </a>
           </div>
        </div>

      </div>
    </main>
  );
}