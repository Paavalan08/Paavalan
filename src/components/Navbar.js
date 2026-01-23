// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* FIX 3: Full Name instead of VP */}
        <Link href="/" className="font-bold text-lg md:text-xl tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
          Paavalan Varathanathan
        </Link>
        
        {/* FIX 1: Added HOME button */}
        <div className="flex gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}