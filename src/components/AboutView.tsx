import { Sparkles, ShieldCheck, HeartHandshake, Eye, MapPin, Award } from "lucide-react";
import { CLINIC_INFO } from "../data";
import aboutVedaImg from "../assets/images/regenerated_image_1779947684285.png";

export default function AboutView() {
  return (
    <div className="bg-white py-12 md:py-16 pointer-events-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner/Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E7D32]">Our Healing Mission</span>
          <h1 className="font-serif text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl leading-tight">
            Scientific Ayurveda Combined with Maximum Patient Discretion
          </h1>
          <div className="h-1 w-20 bg-[#2E7D32] mx-auto"></div>
          <p className="text-sm md:text-md text-slate-500 max-w-2xl mx-auto leading-relaxed">
            DoonVeda Healthcare Centre Gurugram represents a premium league of Ayurvedic expertise, focused entirely on restoring vitality, confidence, and natural reproductive harmony.
          </p>
        </div>

        {/* Multi-grid Narrative section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Breaking the Stigma, Resolving the Core Imbalances
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For generations, issues concerning male sexual health, penile tight tissues, and infertility have been avoided or met with superficial, unsafe immediate-satisfaction chemicals. At DoonVeda, we change this dynamic entirely.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We treat these concerns with the same clinical accuracy as any other systemic endocrine or metabolic disorder. By reviewing the patient's holistic cellular balance (Dhatus), lifestyle patterns, and mental stresses, our doctors uncover the organic reason behind the stagnation.
            </p>
            <p className="text-sm text-slate-650 leading-relaxed italic bg-emerald-50/50 p-4 rounded-xl border-l-[4px] border-[#2E7D32] text-slate-700">
              "Ayurveda doesn't believe in forcing quick pressure changes that exhaust the heart. It focuses on strengthening the base tissues, nourishing the pelvic nerves, and restoring peace of mind. True vitality is a natural consequence of cellular health."
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={aboutVedaImg}
                alt="Ayurvedic consultation clinical environment at Gurugram"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">DoonVeda Gurugram</p>
                <p className="font-serif text-lg font-bold">100% Safe outpatient consulting protocols</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Three Core Pillars */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Our Pillars of Medical Integrity</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              DoonVeda is modeled strictly on transparency, supreme hygiene, and clinically backed natural solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 bg-white p-6 rounded-xl shadow-xs border border-slate-100">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-[#2E7D32]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-slate-900">100% Clean Sourcing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                All herbs, rasayanas, and mineral preparations utilized at DoonVeda are tested rigorously for purity. We completely reject the use of adulterated, unchecked metallic mixtures or fast drug additives.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl shadow-xs border border-slate-100">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-[#2E7D32]">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-slate-900">Empathetic Doctor Consultation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We design an open, non-judgmental environment. Our doctors listen to your deep personal case details for as long as it takes to understand your lifestyle and specific condition stress fully.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl shadow-xs border border-slate-100">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-[#2E7D32]">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-slate-900">Absolute discretion</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We understand that privacy is your highest priority. Case files are private and locked securely. There is never any exposure of your clinical details to third-party tracking portals.
              </p>
            </div>
          </div>
        </div>

        {/* Gurugram Location context mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-slate-100 pt-16">
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
            <div className="inline-block p-2 bg-emerald-50 rounded-full text-[#2E7D32] mb-1">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Our Gurugram branch</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We operate exclusively at Sushant Lok Phase 2, right alongside Golf Course Road, making our clinic incredibly accessible from anywhere across Delhi NCR, Haryana, and Noida.
            </p>
            <p className="text-xs font-bold text-rose-500 uppercase tracking-wider pt-2">
              📍 Ground Floor, A1, 31, Golf Course Rd
            </p>
          </div>

          <div className="lg:col-span-8 bg-emerald-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-300">Ministry of AYUSH Guidance</span>
              </div>
              <h4 className="font-serif text-xl font-bold md:text-2xl max-w-lg">
                Your Road to Chemical-Free Strength Starts right here
              </h4>
              <p className="text-xs text-emerald-100/80 leading-relaxed max-w-xl">
                Ready to consult a senior Ayurvedic expert in Gurugram? Reserve a slot for an in-person diagnostic meeting or avail secure home-delivered medicine options under proper guidance.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="rounded-full bg-[#E57373] text-center text-white px-6 py-3 text-xs font-bold hover:bg-rose-500 transition"
                >
                  Book Secure Slot
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-800 text-center border border-emerald-700 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold transition"
                >
                  Let's WhatsApp
                </a>
              </div>
            </div>
            {/* Ambient decorative blur */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-800/40 blur-2xl"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
