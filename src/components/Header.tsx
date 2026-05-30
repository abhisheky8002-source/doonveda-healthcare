import { useState } from "react";
import { Phone, Menu, X, Shield, CalendarDays } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Sexual disorders", id: "disorders" },
    { name: "Cupping Therapy", id: "cupping" },
    { name: "Blogs", id: "blogs" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-50 bg-white/95 backdrop-blur-md">
      {/* Top micro bar for Confidentiality promise */}
      <div className="bg-emerald-800 py-1.5 text-center text-xs text-white px-4 flex items-center justify-center gap-1.5 font-medium tracking-wide">
        <Shield className="h-3.5 w-3.5 text-emerald-300" />
        <span>100% Secure & Private Consultation • Discreet Chemical-Free Ayurvedic Treatment</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Brand Group */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex flex-col text-left group focus:outline-none"
          id="logo-button"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-serif text-xl font-bold tracking-tight text-emerald-900 md:text-2xl">
              DoonVeda
            </span>
            <span className="hidden rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-800 uppercase sm:inline-block">
              Gurugram
            </span>
          </div>
          <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase sm:text-xs">
            Healthcare Centre • Sexual Wellness & Hijama
          </p>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`rounded-md px-3 py-2 transition-all duration-200 ${
                currentPage === link.id
                  ? "bg-emerald-50 text-emerald-800 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-emerald-800"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Call & Booking actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 transition hover:bg-rose-100 hover:shadow-sm"
          >
            <Phone className="h-3.5 w-3.5 fill-rose-700" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-800 hover:shadow-md"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-slate-700 hover:bg-slate-100 lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          id="hamburger-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white shadow-xl lg:hidden animate-fade-in absolute w-full left-0">
          <div className="space-y-1.5 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  currentPage === link.id
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {currentPage === link.id && <span className="text-emerald-700">●</span>}
              </button>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 py-3 text-center text-xs font-bold text-rose-700"
              >
                <Phone className="h-4 w-4 fill-rose-700" />
                <span>Call Clinic</span>
              </a>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-700 py-3 text-center text-xs font-bold text-white"
              >
                <CalendarDays className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
