import { MapPin, Phone, Mail, Clock, HelpCircle } from "lucide-react";
import { CLINIC_INFO, FAQS_DATA } from "../data";

export default function ContactView() {
  return (
    <div className="bg-slate-50 py-12 md:py-16 pointer-events-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto w-full">
          
          {/* Left Column: Contact details + Google Map Embed */}
          <div className="space-y-6 flex flex-col justify-between">
            
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-100 space-y-6">
              <h2 className="font-serif text-lg font-bold text-slate-900">Gurugram Outpatient Center</h2>
              
              <div className="space-y-4 text-xs">
                {/* Address block */}
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[#2E7D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 font-semibold text-xs mb-0.5">Clinic Location Address</strong>
                    <address className="not-italic leading-relaxed text-slate-500">
                      Ground floor, A1, 31, Golf Course Rd,<br />
                      Huda, Sushant Lok 2, Sector 55,<br />
                      Gurugram, Haryana 122001
                    </address>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-[#2E7D32] shrink-0" />
                  <div>
                    <strong className="block text-slate-800 font-semibold text-xs mb-0.5">Inquiry Hotline (Call Now)</strong>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-rose-600 hover:text-rose-700 font-bold hover:underline">
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Click-to-call active. Instant operator forwarding.</span>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-[#2E7D32] shrink-0" />
                  <div>
                    <strong className="block text-slate-800 font-semibold text-xs mb-0.5">Secure Electronic Mail</strong>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-500 hover:text-emerald-800 hover:underline">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-[#2E7D32] shrink-0" />
                  <div>
                    <strong className="block text-slate-800 font-semibold text-xs mb-0.5 font-sans">Op-Desk Office Hours</strong>
                    <p className="text-slate-500">Monday - Sunday: 10:00 AM - 08:30 PM (No weekly holidays)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-white p-2 min-h-[300px] flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 block">Map Location: Golf Course Rd Gurugram</span>
              <div className="flex-1 w-full rounded-xl overflow-hidden relative min-h-[250px]">
                <iframe
                  title="DoonVeda Gurugram Google Map Embed"
                  src={CLINIC_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-x-0 inset-y-0"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* 100% Optional FAQ Accordion section to round up contact details */}
        <div className="mt-16 border-t border-slate-100 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider">Faq</span>
            <h3 className="font-serif text-2xl font-bold text-slate-900">Frequently Asked Clinical Questions</h3>
            <p className="text-xs text-slate-400 font-medium">Clear answers detailing your privacy, medicines, and Hijama sessions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS_DATA.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl p-5 border border-slate-100 space-y-2.5 shadow-xs"
              >
                <h4 className="font-serif text-sm font-bold text-slate-950 flex items-start gap-2">
                  <HelpCircle className="h-4.5 w-4.5 text-[#2E7D32] mt-0.5 shrink-0" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
