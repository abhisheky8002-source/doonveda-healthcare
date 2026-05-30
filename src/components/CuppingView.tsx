import { 
  ShieldAlert, 
  Activity, 
  Heart,
  MessageSquare,
  Sparkles,
  Zap,
  Timer,
  Brain,
  ShieldCheck,
  Smile,
  Feather,
  Flame,
  TrendingUp,
  Droplet
} from "lucide-react";
import { CLINIC_INFO } from "../data";
import cuppingImg from "../assets/images/fj.jpg";

export default function CuppingView() {
  const treatments = [
    {
      title: "Back Pain / Shoulder Pain",
      description: "Cupping therapy or Hijama for back pain is an effective and safe approach that helps relieve muscle stiffness, improve blood circulation, and reduce tension in affected areas. It supports natural pain relief and relaxation through targeted therapy designed for holistic wellness and long-term comfort.",
      icon: Zap,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145394/Back_Pain_Shoulder_pain.jpg_oziesj.png",
      tag: "Pain Management"
    },
    {
      title: "Sciatica",
      description: "Sciatica can be supported through cupping therapy, which focuses on reducing nerve-related pain, muscle tightness, and inflammation. By improving blood flow and releasing tension along affected areas, it helps ease discomfort and supports better mobility.",
      icon: ShieldAlert,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145393/Sciatica.jpg_e45b4v.png",
      tag: "Pain Management"
    },
    {
      title: "Leg Pain",
      description: "Cupping therapy can provide relief from different types of leg pain, including muscle cramps, soreness, and stiffness. It is commonly used by athletes and individuals with chronic discomfort to improve circulation, reduce pain, and support better movement.",
      icon: Timer,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145396/Leg_Pain.jpg_rqhflz.png",
      tag: "Pain Management"
    },
    {
      title: "Migraine",
      description: "Cupping therapy may help reduce the frequency and intensity of migraines by addressing muscle tension and improving circulation. This holistic approach supports relaxation of the nervous system and helps reduce common migraine triggers.",
      icon: Brain,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145395/Migraine.jpg_wbtkm8.png",
      tag: "Neurological"
    },
    {
      title: "Immune System Support",
      description: "Cupping therapy is believed to support the body’s natural detoxification process by improving circulation and lymphatic flow. This helps maintain overall balance in the body and supports general wellness and immunity.",
      icon: ShieldCheck,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145395/Immunity_System_Booster.jpg_wpjd2o.png",
      tag: "Immunity"
    },
    {
      title: "Skin Problems (Acne / Pimples)",
      description: "Cupping therapy may help improve skin health by increasing blood circulation and reducing inflammation. It supports detoxification of the skin, which can help improve conditions like acne, pimples, and uneven skin texture.",
      icon: Sparkles,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145394/Skin_problems.jpg_rqqjfy.png",
      tag: "Skin Care"
    },
    {
      title: "Facial Cupping",
      description: "Facial cupping helps improve blood flow to facial tissues, supports collagen production, and promotes lymphatic drainage. It may help reduce puffiness, improve skin texture, and give a more refreshed and healthy appearance.",
      icon: Smile,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145394/Facial_Cupping.jpg_yirxv1.png",
      tag: "Cosmetic"
    },
    {
      title: "Cellulite",
      description: "Cupping therapy may help improve the appearance of cellulite by increasing circulation and supporting tissue stimulation. Over time, it can help improve skin texture and smoothness in affected areas.",
      icon: Droplet,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145395/Cellulite.jpg_aczm4m.png",
      tag: "Cosmetic"
    },
    {
      title: "Hair Loss Support",
      description: "Cupping therapy may help support hair health by improving blood circulation to the scalp and enhancing nutrient delivery to hair follicles. This can help strengthen hair roots, support natural growth, and reduce scalp tension that is often linked with hair fall and thinning.",
      icon: TrendingUp,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145395/Hair_Loss.jpg_pvqk14.png",
      tag: "Hair & Scalp"
    },
    {
      title: "Erectile Dysfunction Support",
      description: "Cupping therapy may support male wellness by improving blood circulation and energy flow in the body. It is used as part of a holistic approach to help support confidence, stamina, and overall vitality.",
      icon: Flame,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145394/Erectile_Dysfunction_Support.jpg_fbwjce.jpg",
      tag: "Men's Wellness"
    },
    {
      title: "General Men’s Health Support",
      description: "This therapy supports overall male wellness by promoting better circulation, balance, and energy levels. It is designed to support physical and mental well-being through natural therapeutic methods.",
      icon: ShieldCheck,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145395/General_Men_s_Health_Support.jpg_qbcznh.jpg",
      tag: "Men's Wellness"
    },
    {
      title: "Breast Wellness & Body Confidence Support",
      description: "Cupping therapy is sometimes used as part of holistic wellness approaches that support body confidence, circulation, and overall balance. It focuses on natural wellness support rather than aggressive or surgical methods.",
      icon: Heart,
      illustration: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145394/Breast_Enlargement_by_Cupping_Ayurveda.jpg_sydcvu.png",
      tag: "Women's Wellness"
    }
  ];

  return (
    <div className="bg-white py-12 md:py-16 pointer-events-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Activity className="h-3.5 w-3.5" />
              <span>Certified Hygienic Clinical Hijama (Cupping) Clinic in Gurugram</span>
            </div>
                    <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
              Cupping Therapy (Hijama) Treatments
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed font-light">
              Cupping Therapy (Hijama) is a traditional therapeutic method that supports natural healing by improving blood circulation, reducing muscle tension, and promoting overall wellness. At DoonVeda Healthcare Centre, Gurugram, we follow strict sterile protocols and clinical hygiene standards to ensure safe and effective treatment.
            </p>

            <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100/80 inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
              <span className="text-3xl">🛡️</span>
              <div className="space-y-1">
                <p className="font-bold text-emerald-900 uppercase tracking-wider">Safety & Hygiene Standards</p>
                <p className="text-slate-600 leading-relaxed">
                  100% sterile, single-use equipment is used for every patient. All surgical blades and cups are disposable and never reused. Procedures are performed under clinical supervision with strict hygiene protocols, ensuring complete safety and confidentiality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="rounded-full bg-[#E57373] text-white px-7 py-3 text-sm font-bold shadow-sm hover:bg-rose-500 transition"
                id="cupping-hero-call-btn"
              >
                Call Clinic Now
              </a>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-700 text-white px-7 py-3 text-sm font-bold shadow-sm hover:bg-emerald-950 transition"
                id="cupping-hero-whatsapp-btn"
              >
                Book Hijama Session
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 p-3">
              <img
                src={cuppingImg}
                alt="Clean Hijama session setup"
                className="w-full h-80 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
                id="cupping-hero-media"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-emerald-50 text-slate-800 flex justify-between">
                <div>
                  <span className="block font-serif text-lg font-bold text-emerald-900">100% Sterile</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold text-center md:text-left block font-sans">Surgical Blades</span>
                </div>
                <div className="text-right">
                  <span className="block font-serif text-lg font-bold text-emerald-900">Disposable</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block font-sans">Single-user Cups</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION HEADER FOR DISORDERS CATALOGUE */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 border-t border-slate-200/65 pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E7D32]">Therapeutic Classifications</span>
          <h2 className="font-serif text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight leading-none" id="cupping-title-heading">
            Cupping Therapy (Hijama) Treatments
          </h2>
          <div className="mx-auto h-1 w-12 bg-emerald-800"></div>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Understand how clinical Hijama addresses diverse metabolic, muscular, skincare, and reproductive well-being pathways as per traditional systems.
          </p>
        </div>

        {/* THE FLAT TREATMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="cupping-treatments-grid">
          {treatments.map((item, itemIdx) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={itemIdx}
                className="bg-white rounded-2xl p-5 border border-slate-100/85 shadow-sm hover:shadow-md hover:border-emerald-100/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Image Thumbnail with absolute icon overlay */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100 aspect-video shrink-0">
                    <img
                      src={item.illustration}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs p-2 rounded-xl shadow-xs text-[#2E7D32] border border-emerald-50 flex items-center justify-center">
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    {/* Badge category tag */}
                    <div className="absolute top-2.5 right-2.5 bg-emerald-850/90 text-white text-[9px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm backdrop-blur-xs">
                      {item.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="font-serif text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom action bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hijama Support</span>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E7D32] hover:text-emerald-950 font-semibold flex items-center gap-1 transition"
                  >
                    Inquire Now &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </div>
  );
}
