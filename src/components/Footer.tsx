import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pointer-events-auto">
      {/* Top clinical seal bar */}
      <div className="border-b border-slate-800 bg-slate-950/50 py-8 px-4">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <ShieldCheck className="h-5 w-5" />
              <span>100% Confidentiality Ensured</span>
            </div>
            <p className="text-xs text-slate-400">All communication, files, and parcel shipping are completely discreet.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <ShieldCheck className="h-5 w-5" />
              <span>Certified Ayurvedic Experts</span>
            </div>
            <p className="text-xs text-slate-400">Dr-guided formulations certified by traditional wisdom & safety metrics.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <ShieldCheck className="h-5 w-5" />
              <span>Sterile Cupping Protocol</span>
            </div>
            <p className="text-xs text-slate-400">Hijama is conducted strictly with single-use, biological sterile setups.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Clinic Brand intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-serif text-xl font-bold tracking-tight text-white">DoonVeda</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Gurugram's premier clinical branch for classical Ayurvedic sexual wellness, non-surgical phimosis support, male infertility solutions, and professional sterile Hijama (cupping) treatments. Delivering hope, vitality, and root-cause restoration.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Mon - Sun: 10:00 AM - 08:30 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-emerald-400 transition">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-emerald-400 transition">
                  About the Clinic
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("disorders")} className="hover:text-emerald-400 transition">
                  Sexual Wellness Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("cupping")} className="hover:text-emerald-400 transition">
                  Hijama Cupping Therapy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("blogs")} className="hover:text-emerald-400 transition">
                  Our Health Blogs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("gallery")} className="hover:text-emerald-400 transition">
                  Clinic Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="hover:text-emerald-400 transition">
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Specialties */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Core Focus Areas</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Erectile Dysfunction (ED)</li>
              <li>Premature Ejaculation (PE)</li>
              <li>Low Sperms & Semen Motility</li>
              <li>Azoospermia / Oligospermia</li>
              <li>Non-Surgical Phimosis Stretching</li>
              <li>Hijama for Sciatica & Migraine</li>
              <li>Chronic Pain & Hair Loss support</li>
            </ul>
          </div>

          {/* Column 4: Contact Core */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact Details</h3>
            <div className="space-y-3 text-xs">
              <div className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-slate-400">
                  Ground floor, A1, 31, Golf Course Rd,<br />
                  Huda, Sushant Lok 2, Sector 55,<br />
                  Gurugram, Haryana 122001
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-emerald-400 transition">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-emerald-400 transition">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Meta Footprint */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-[11px] text-slate-500">
          <p className="max-w-4xl mx-auto leading-relaxed">
            DoonVeda Healthcare Centre is recognized as the leading destination for Ayurvedic sexologist consultation in Gurugram, India. We offer authentic non-surgical solutions for phimosis, clinical cupping therapy (Hijama) on Golf Course Road for back pain, migraines, and advanced male infertility treatment regarding azoospermia or low sperm count issues.
          </p>
        </div>

        {/* Disclaimer Board */}
        <div className="mt-6 rounded-lg bg-slate-950/40 p-4 border border-slate-800 text-[10px] text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-400 block mb-1">MEDICAL INTEGRITY DISCLAIMER:</span>
          Ayurvedic concepts are holistic and based on traditional rasayana and Shastras. All diagnostic terms are mapped from ancient texts like Charaka Samhita. Individual therapy experiences and timing might vary depending on unique body Prakriti (constitution), genetic trends, habits, and stage of condition. We strictly reject fast-action steroid claims or exaggerations.
        </div>

        {/* Copy Bar */}
        <div className="mt-8 border-t border-slate-800/40 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} DoonVeda Healthcare Centre – Gurugram. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Made with Care for Sexual Health & Lifeforce</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
