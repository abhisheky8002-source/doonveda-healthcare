import { useState, useEffect } from "react";
import { Phone, MessageSquare, ClipboardCheck, ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import DisordersView from "./components/DisordersView";
import CuppingView from "./components/CuppingView";
import BlogsView from "./components/BlogsView";
import GalleryView from "./components/GalleryView";
import ContactView from "./components/ContactView";
import { CLINIC_INFO } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Top Scroll Floating Button
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case "about":
        return <AboutView />;
      case "disorders":
        return (
          <DisordersView
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case "cupping":
        return <CuppingView />;
      case "blogs":
        return <BlogsView />;
      case "gallery":
        return <GalleryView />;
      case "contact":
        return <ContactView />;
      default:
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between" id="app-root-container">
      {/* 1. STICKY HEADER */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 2. DYNAMIC MAIN BODY */}
      <main className="flex-1 pb-16 md:pb-0" id="main-content-stream">
        {renderActiveView()}
      </main>

      {/* 3. FOOTER COMPONENT */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* 4. FIXED CLICK-TO-CALL BOTTOM MOBILE REQUIREMENT */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 px-4 py-3 flex gap-3 shadow-2xl items-center pointer-events-auto" id="fixed-bottom-callbar">
        {/* Call Now light red action button (#E57373) as requested */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#E57373] text-white py-3.5 text-xs font-black uppercase tracking-wider text-center shadow-md active:bg-rose-600 focus:outline-none"
          id="mobile-sticky-phone-btn"
        >
          <Phone className="h-4 w-4 fill-white shrink-0 animate-bounce" />
          <span>Call Now: 095605 95348</span>
        </a>

        {/* Dynamic WhatsApp direct inquiry */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-emerald-700 text-white p-3 flex items-center justify-center shadow-md hover:bg-emerald-600 focus:outline-none shrink-0"
          id="mobile-sticky-whatsapp-btn"
          aria-label="WhatsApp consultation desk"
        >
          <MessageSquare className="h-5 w-5 fill-white" />
        </a>
      </div>

      {/* 5. FLOATING SCROLL TOP helper for desktop */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="hidden md:flex fixed bottom-6 right-6 z-40 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white p-3.5 shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
          id="scroll-to-top-floating"
          aria-label="Back to top contents"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
