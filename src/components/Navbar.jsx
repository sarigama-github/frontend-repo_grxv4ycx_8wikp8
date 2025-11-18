import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg" />
          <span className="font-semibold text-slate-900">Elguide</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-blue-600 transition">Funktioner</a>
          <a href="#how" className="hover:text-blue-600 transition">Sådan fungerer det</a>
          <a href="#download" className="hover:text-blue-600 transition">Hent app</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
