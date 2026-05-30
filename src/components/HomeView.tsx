import { Shield, Sparkles, Star, Users, CheckCircle, Phone, Award, Lock, ExternalLink } from "lucide-react";
import { CLINIC_INFO, SERVICES_DATA, REVIEWS_DATA } from "../data";
import DiscreetBookingSection from "./DiscreetBookingSection";
import heroVedaImg from "../assets/images/regenerated_image_1779947129742.png";
import imageED from "../assets/images/ed.png";
import imagePE from "../assets/images/pe.png";
import imageLibido from "../assets/images/ud.png";
import imagePhimosis from "../assets/images/pd.png";
import imageInfertility from "../assets/images/er.png";
import cuppingImg from "../assets/images/fj.jpg";

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  setSelectedServiceId: (id: string | null) => void;
}

export default function HomeView({ setCurrentPage, setSelectedServiceId }: HomeViewProps) {
  const getServiceImage = (id: string, defaultFallback: string) => {
    switch (id) {
      case "erectile-dysfunction":
        return imageED;
      case "premature-ejaculation":
        return imagePE;
      case "low-libido":
        return imageLibido;
      case "non-surgical-phimosis":
        return imagePhimosis;
      case "male-infertility":
        return imageInfertility;
      case "cupping-therapy":
        return cuppingImg;
      default:
        return defaultFallback;
    }
  };
  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage("disorders");
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleCuppingClick = () => {
    setCurrentPage("cupping");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pointer-events-auto">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/20 py-16 lg:py-24">
        {/* Subtle decorative background blur shapes */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl"></div>
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-rose-50/50 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <Shield className="h-3.5 w-3.5 fill-emerald-800 text-emerald-100" />
                <span>Gurugram's Most Trusted Ayurvedic Wellness Center</span>
              </div>

              <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl leading-[1.12]">
                Leading Ayurvedic Clinic for{" "}
                <span className="text-[#2E7D32] underline decoration-emerald-200 decoration-4 underline-offset-4">
                  Sexual Wellness
                </span>{" "}
                &{" "}
                <span className="text-[#2E7D32] underline decoration-emerald-200 decoration-4 underline-offset-4">
                  Cupping Therapy
                </span>{" "}
                in Gurugram
              </h1>

              <p className="mx-auto lg:mx-0 max-w-2xl text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
                DoonVeda offers doctor-guided, 100% confidential, and result-oriented natural treatments for chronic sexual disorders, male infertility, and sterile cupping (Hijama) right on Golf Course Road.
              </p>

              {/* Special Clinical Badges */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0 pt-2 text-center">
                <div className="rounded-lg bg-white/80 p-3 shadow-xs border border-emerald-50">
                  <span className="block text-xl font-bold text-emerald-800">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Confidential</span>
                </div>
                <div className="rounded-lg bg-white/80 p-3 shadow-xs border border-emerald-50">
                  <span className="block text-xl font-bold text-emerald-800">Pure</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Ayurvedic</span>
                </div>
                <div className="rounded-lg bg-white/80 p-3 shadow-xs border border-emerald-50">
                  <span className="block text-xl font-bold text-emerald-800">Sterile</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Hijama Set</span>
                </div>
              </div>

              {/* CTA Buttons Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                {/* CALL NOW: Primary Light Red Button as requested */}
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#E57373] text-white px-8 py-4 text-sm font-bold shadow-md hover:bg-rose-500 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  id="hero-call-now"
                >
                  <Phone className="h-4.5 w-4.5 fill-white" />
                  <span>Call Now: 095605 95348</span>
                </a>

                {/* BOOK APPOINTMENT: Green WhatsApp Button */}
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-[#2E7D32] text-white px-8 py-4 text-sm font-bold shadow-sm hover:bg-[#1E5A22] hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  id="hero-book-now"
                >
                  <svg className="h-4.5 w-4.5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.154-.172.206-.296.308-.493.102-.197.051-.369-.024-.518-.076-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Patient Trust Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 pt-2">
                <div className="flex text-amber-500">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                </div>
                <span>Over 1,400+ Satisfied Patient Consultations in Gurugram NCR</span>
              </div>
            </div>

            {/* Right Column Illustration Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden bg-white p-4 shadow-xl border border-emerald-100">
                <img
                  src={heroVedaImg}
                  alt="Ayurvedic herbs and holistic lifestyle setup"
                  className="w-full h-64 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Seal */}
                <div className="absolute top-8 right-8 bg-emerald-800 text-white rounded-lg p-2.5 text-center shadow-md">
                  <Award className="h-5 w-5 mx-auto text-emerald-300" />
                  <span className="text-[9px] font-bold uppercase tracking-wider block mt-1">100% Legal</span>
                  <span className="text-[8px] text-emerald-200 block">Ministry of AYUSH</span>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2E7D32] font-semibold">
                    <Lock className="h-3.5 w-3.5 shrink-0" />
                    <span>Strict HIPAA-Level Patient Privacy & Silence</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-800">DoonVeda Gurugram Clinic</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Centrally located on Golf Course Road, Sushant Lok Phase 2. Step in to receive personalized, natural, and root-cause solutions devoid of heavy metal toxicity or fast chemical shocks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US BRIEF SECTION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Brief Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">Our Clinical Philosophy</span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl leading-snug">
                Reclaiming Health and Stamina Through Authentic Ayurvedic Science
              </h2>
              <div className="h-1 w-20 bg-[#2E7D32]"></div>
              <p className="text-sm text-slate-600 leading-relaxed">
                DoonVeda Healthcare Centre was founded with a singular commitment: to deliver top-tier clinical natural medical options for critical sexual disorders, male infertility, and therapeutic detoxification.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under senior doctors, we eliminate the shame around sexual disorders. We treat the core system root, not just symptoms, ensuring lasting vigor and total organic safety.
              </p>
              <button
                onClick={() => { setCurrentPage("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2E7D32] hover:text-emerald-950 transition group"
                id="home-about-learn-more"
              >
                <span>Learn more about our methods</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Right Pillars list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 p-6 border border-slate-100 space-y-2">
                <span className="text-2xl">👨‍⚕️</span>
                <h3 className="font-serif font-bold text-slate-800">Senior Sexologist Guidance</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every counseling session and drug schedule is guided directly by senior practitioners with decades of combined clinical work.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-6 border border-slate-100 space-y-2">
                <span className="text-2xl">🌱</span>
                <h3 className="font-serif font-bold text-slate-800">Zero Synthetic Compounds</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We use strictly chemical-free, laboratory-tested natural extracts. No steroid triggers or temporary synthetic stimulants.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-6 border border-slate-100 space-y-2">
                <span className="text-2xl">🤐</span>
                <h3 className="font-serif font-bold text-slate-800">100% Sealed Privacy</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your case files, names, and shipping packages are highly encrypted. Deliveries arrive in plain white boxes with no markers.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-6 border border-slate-100 space-y-2">
                <span className="text-2xl">🎯</span>
                <h3 className="font-serif font-bold text-slate-800">Symptom Root Elimination</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Ayurvedic herbs correct pelvic circulation, nervous coordination, and nutritional pathways to ensure permanent healing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION (SEO Optimize grid) */}
      <section className="bg-emerald-900 text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Why Choose DoonVeda Gurugram</span>
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              A Clinically Sound, Trusted Alternative to Synthetic Medications
            </h2>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              We specialize in sexual wellness and clinical cupping therapy within a professional outpatient environment on Golf Course Road. Here is what defines our standard of excellence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="rounded-xl bg-emerald-800/40 p-6 border border-emerald-700/60 text-center space-y-2">
              <span className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-emerald-800 text-emerald-300 text-lg font-extrabold font-serif">1</span>
              <h3 className="font-bold text-sm tracking-tight pt-1">Expert Doctor-Guided Care</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Direct supervision by certified, skilled experts specializing in Ayurvedic medical and physical sexual therapies.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-800/40 p-6 border border-emerald-700/60 text-center space-y-2">
              <span className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-emerald-800 text-emerald-300 text-lg font-extrabold font-serif">2</span>
              <h3 className="font-bold text-sm tracking-tight pt-1">Ayurvedic Natural Treatment</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Sourced from authenticated wild herbs, formulated for safety, and completely clear of chemical dependency.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-800/40 p-6 border border-emerald-700/60 text-center space-y-2">
              <span className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-emerald-800 text-emerald-300 text-lg font-extrabold font-serif">3</span>
              <h3 className="font-bold text-sm tracking-tight pt-1">100% Confidential Consultation</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                No judgment, safe and sound environment. No data sharing with insurers or external networks. Your secret is safe.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-800/40 p-6 border border-emerald-700/60 text-center space-y-2">
              <span className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-emerald-800 text-emerald-300 text-lg font-extrabold font-serif">4</span>
              <h3 className="font-bold text-sm tracking-tight pt-1">Root Cause Treatment</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Targeting pelvic arterial supply, nervous health, performance distress, and tissue vitality as guided by Charaka texts.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-800/40 p-6 border border-emerald-700/60 text-center space-y-2">
              <span className="h-10 w-10 mx-auto flex items-center justify-center rounded-full bg-emerald-800 text-emerald-300 text-lg font-extrabold font-serif">5</span>
              <h3 className="font-bold text-sm tracking-tight pt-1">Personalized Treatment Plans</h3>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Custom dosages tailored specifically to your physical Prakriti, dietary habits, stress index, and severity level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (Grid with custom CTAs) */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">Our Clinical Services</span>
            <h2 className="font-serif text-3xl font-extrabold text-slate-900">
              Targeted Ayurvedic treatments for sexual wellness and clinical Hijama (cupping therapy)
            </h2>
            <div className="h-1 w-12 bg-[#2E7D32] mx-auto"></div>
            <p className="text-sm text-slate-600 leading-relaxed">
              DoonVeda Gurugram offers specialized and highly successful natural treatments. Choose your category to read clinical details, symptoms, and medical approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-xs border border-slate-100 hover:shadow-md transition duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Service Image banner container */}
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={getServiceImage(service.id, service.image)}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition">
                    {service.title}
                  </h3>
                  <div className="my-2 h-0.5 w-8 bg-emerald-700"></div>
                  <p className="text-xs text-slate-600 leading-relaxed py-1 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  {service.id === "cupping-therapy" ? (
                    <button
                      onClick={handleCuppingClick}
                      className="text-xs font-bold text-[#2E7D32] hover:text-emerald-950 flex items-center gap-1 focus:outline-none"
                    >
                      <span>Explore Cupping Info</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className="text-xs font-bold text-[#2E7D32] hover:text-emerald-950 flex items-center gap-1 focus:outline-none"
                    >
                      <span>Read Treatment details</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  )}
                  
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition"
                  >
                    Discuss Case
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOOGLE REVIEW STYLE CARDS */}
      <section id="google-reviews-section" className="bg-slate-50/50 py-16 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Patient Stories Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Patient Stories & Google Reviews
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Confidential care. Genuine experiences. Trusted outcomes.
            </p>
          </div>
          
          {/* TOP GOOGLE TRUST CARD */}
          <div className="bg-white rounded-3xl border border-emerald-100/65 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-500 mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              
              {/* Google Brand Info (Left / Top) */}
              <div className="md:col-span-5 flex items-start gap-4">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-[#F8F9FA] shadow-xs border border-slate-100 flex items-center justify-center">
                  {/* Premium Official-style Google G Vector Logo */}
                  <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.67-.35-1.37-.35-2.09z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900 leading-none">Google Reviews</h3>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]/40 uppercase tracking-wider">Clinic Verified</span>
                  </div>
                  
                  {/* Rating Display */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-2xl font-extrabold text-slate-800 tracking-tight leading-none">4.9</span>
                    <div className="flex gap-0.5 text-[#F4B400]">
                      <Star className="h-4.5 w-4.5 fill-[#F4B400] text-[#F4B400]" />
                      <Star className="h-4.5 w-4.5 fill-[#F4B400] text-[#F4B400]" />
                      <Star className="h-4.5 w-4.5 fill-[#F4B400] text-[#F4B400]" />
                      <Star className="h-4.5 w-4.5 fill-[#F4B400] text-[#F4B400]" />
                      <Star className="h-4.5 w-4.5 fill-[#F4B400] text-[#F4B400]" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 ml-1">150+ reviews</span>
                  </div>
                  
                  <p className="text-xs font-bold text-[#2E7D32]">Trusted by Patients</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Based on verified Google patient experiences and clinic feedback.
                  </p>
                </div>
              </div>

              {/* Trust Badges (Middle) */}
              <div className="md:col-span-3 flex flex-col gap-2.5 py-4 md:py-0 border-y md:border-y-0 md:border-x border-slate-100 md:px-6">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="text-emerald-600 font-sans font-bold">✓</span>
                  <span>Verified Feedback</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="text-emerald-600 font-sans font-bold">✓</span>
                  <span>Confidential Care</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="text-emerald-600 font-sans font-bold">✓</span>
                  <span>Patient Satisfaction</span>
                </div>
              </div>

              {/* Two Premium Action Buttons (Right) */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <a
                  href="https://www.google.com/search?sca_esv=37037dcbf46c071d&sxsrf=ANbL-n6ycGllpq92STfUAS8g6zN2aAedJA:1779946978888&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWvnhmIzoSUavAb__YD9JjpC0F9mBHzLLi4g0C_3P9u6B6ukQV-0iiZu9YuqqL_sqP_MkSVG5wFZ5zzU3nTC6hEbOXd5LfvvSk280qC5icNw7aD8tqRf8r84jPEE8GaYrDLMUBWJS3Oe1Zx_YXU7uB4vvPI26NGR2zRC2pH10ClLeN2P6A%3D%3D&q=Dr.Arora+%E2%9C%85+Erection+%26+Early+Discharge+-+Best+Male+Sexology+DoonVeda+Clinic+Reviews&sa=X&ved=2ahUKEwiG55Sbo9uUAxVFbmwGHTfMHjAQ0bkNegQIKRAH&biw=1280&bih=551&dpr=1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-xl bg-[#e8edff] hover:bg-[#dbe4ff] border border-blue-105 text-blue-900 px-5 py-3.5 text-xs font-bold shadow-xs hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>⭐ View All Google Reviews</span>
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-xl bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-5 py-3.5 text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Book Consultation</span>
                </a>
              </div>

            </div>
          </div>

          {/* Upgraded Custom Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS_DATA.slice(0, 4).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-100/80 p-6 space-y-4 flex flex-col justify-between hover:border-[#2E7D32]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-[#E8F5E9] text-[#2E7D32] font-bold px-2.5 py-0.5 rounded-full border border-[#C8E6C9]/20 tracking-wide font-mono">
                      Verified Patient
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-3 group-hover:text-slate-800">
                    "{review.comment}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[10px] text-slate-400">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-xs">{review.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium">Verified Visitor</span>
                  </div>
                  <span className="flex items-center gap-1 font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5B. DISCREET BOOKING SECTION */}
      <DiscreetBookingSection />

      {/* 6. CONTACT CTA SECTION */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white py-16 text-center relative overflow-hidden">
        {/* Subtle glowing ring backgrounds */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full border border-emerald-700/30"></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full border border-emerald-700/20"></div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">Start Your Healing Journey Today</span>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Want to Discuss Your Case Anonymously?
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-emerald-100/90 leading-relaxed">
            Fill our quick secure inquiry form, call active clinical lines directly, or connect immediately over WhatsApp. All queries receive response directly from senior doc panels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#E57373] text-white px-8 py-3.5 text-sm font-bold shadow-md hover:bg-rose-500 transition"
              id="cta-call-now"
            >
              <Phone className="h-4 w-4 fill-white" />
              <span>Call Now: {CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3.5 text-sm font-bold transition"
              id="cta-whatsapp"
            >
              <svg className="h-4.5 w-4.5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.154-.172.206-.296.308-.493.102-.197.051-.369-.024-.518-.076-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-emerald-300/80 tracking-wide font-medium">
            📍 Golf Course Road, Gurugram Branch • Walk-ins & Scheduled slot allocations open.
          </p>
        </div>
      </section>
    </div>
  );
}
