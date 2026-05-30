import { useEffect } from "react";
import { 
  ShieldAlert, 
  Heart, 
  Flame, 
  Clock, 
  Activity, 
  RefreshCw, 
  Microscope, 
  Sparkles, 
  Leaf, 
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { CLINIC_INFO } from "../data";
import vaginalTighteningImg from "../assets/images/regenerated_image_1780067392056.png";
import femaleLowLibidoImg from "../assets/images/regenerated_image_1780067775831.png";
import erectileDysfunctionImg from "../assets/images/regenerated_image_1780067783791.png";
import prematureEjaculationImg from "../assets/images/regenerated_image_1780067791400.png";
import nonSurgicalPhimosisImg from "../assets/images/regenerated_image_1780067793840.png";
import lowLibidoImg from "../assets/images/regenerated_image_1780067795569.png";
import maleInfertilityImg from "../assets/images/regenerated_image_1780067797584.png";
import malePenisHealthImg from "../assets/images/regenerated_image_1780067799503.png";

interface DisordersViewProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
}

export default function DisordersView({ selectedServiceId, setSelectedServiceId }: DisordersViewProps) {
  // Auto scroll to card if matching selection ID
  useEffect(() => {
    if (selectedServiceId) {
      const element = document.getElementById(`disorder-${selectedServiceId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [selectedServiceId]);

  const femaleDisorders = [
    {
      id: "female-vaginal-tightening",
      title: "Vaginal Tightening (Non-Surgical)",
      description: "Vaginal tightening can help with symptoms like vaginal looseness, lack of lubrication, and reduced sexual satisfaction. At DoonVeda, we do it as per the natural Ayurveda Way and with the help of Advance Machines, which is completely non-surgical.",
      image: vaginalTighteningImg,
      icon: Sparkles,
    },
    {
      id: "female-low-libido",
      title: "Low Libido (Female Sexual Desire)",
      description: "May be caused by hormonal changes, stress, or lifestyle factors. Focus on natural hormonal balance, revitalizing energy, and clinical wellness.",
      image: femaleLowLibidoImg,
      icon: Flame,
    },
    {
      id: "female-breast-upliftment",
      title: "Breast Upliftment (Non-Surgical)",
      description: "A non-surgical procedure by DoonVeda that reshapes and raises breasts. Supports firmness and shape improvement using natural Ayurvedic wellness and firming methods. It can help with sagging breasts caused by weight loss, pregnancy, breastfeeding, genetics, or aging.",
      image: "https://res.cloudinary.com/dr5obadvt/image/upload/v1780145395/Breast_Upliftment.jpg_neqvob.png",
      icon: Leaf,
    },
  ];

  const maleDisorders = [
    {
      id: "erectile-dysfunction",
      title: "Erectile Dysfunction (ED)",
      description: "Focus on improving circulation, stamina, energy, and hormonal balance using a certified Ayurvedic clinical wellness approach.",
      image: erectileDysfunctionImg,
      icon: Activity,
    },
    {
      id: "premature-ejaculation",
      title: "Premature Ejaculation",
      description: "Supports stamina, performance confidence, and control through holistic Ayurvedic care and targeted therapies.",
      image: prematureEjaculationImg,
      icon: Clock,
    },
    {
      id: "non-surgical-phimosis",
      title: "Phimosis (Non-Surgical Care)",
      description: "Helps reduce discomfort, improves natural tissue flexibility, and provides supportive organic care.",
      image: nonSurgicalPhimosisImg,
      icon: RefreshCw,
    },
    {
      id: "low-libido",
      title: "Low Libido (Male Sexual Desire)",
      description: "Helps improve energy levels, natural hormone levels, physical drive, and overall vitality.",
      image: lowLibidoImg,
      icon: Flame,
    },
    {
      id: "male-infertility",
      title: "Male Infertility",
      description: "Recognizing issues to improve reproductive health, cellular health, and sperm quality through natural Ayurvedic therapies.",
      image: maleInfertilityImg,
      icon: Microscope,
    },
    {
      id: "male-penis-health",
      title: "Penis Health & Performance Support",
      description: "Holistic wellness approach designed to optimize structural confidence, vascular strength, and reproductive integrity.",
      image: malePenisHealthImg,
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-slate-50 py-12 md:py-16 pointer-events-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Head */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E7D32]">Certified Outpatient Care</span>
          <h1 className="font-serif text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Sexual Health Disorders Treatment
          </h1>
          <div className="mx-auto h-1 w-12 bg-emerald-800 animate-pulse"></div>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Highly effective, clinical, and certified Ayurvedic therapies tailored to restore vitality and intimate balance. Our treatments are completely non-surgical and strictly confidential.
          </p>
        </div>

        {/* FEMALE DISORDERS SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-rose-100 pb-3">
            <span className="p-1.5 bg-rose-50 rounded-lg text-rose-600">
              <Heart className="h-5 w-5 fill-rose-100" />
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-800">
              Female Disorders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {femaleDisorders.map((disorder) => {
              const IconComp = disorder.icon;
              const isSelected = selectedServiceId === disorder.id;
              return (
                <div
                  key={disorder.id}
                  id={`disorder-${disorder.id}`}
                  className={`bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected 
                      ? "border-emerald-600 ring-2 ring-emerald-50 shadow-md" 
                      : "border-slate-100/80 shadow-xs hover:shadow-md hover:border-emerald-100"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Visual Media with elegant absolute Icon Badge */}
                    <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100 aspect-video shrink-0">
                      <img
                        src={disorder.image}
                        alt={disorder.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs p-2 rounded-lg shadow-sm text-pink-600 border border-pink-50 flex items-center justify-center">
                        <IconComp className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                        {disorder.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                        {disorder.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ayurvedic Method</span>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E7D32] hover:text-emerald-950 font-semibold flex items-center gap-1 transition"
                    >
                      Consult Discreetly &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MALE DISORDERS SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-emerald-100 pb-3">
            <span className="p-1.5 bg-emerald-50 rounded-lg text-[#2E7D32]">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-800">
              Male Disorders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maleDisorders.map((disorder) => {
              const IconComp = disorder.icon;
              const isSelected = selectedServiceId === disorder.id;
              return (
                <div
                  key={disorder.id}
                  id={`disorder-${disorder.id}`}
                  className={`bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected 
                      ? "border-emerald-600 ring-2 ring-emerald-50 shadow-md" 
                      : "border-slate-100/80 shadow-xs hover:shadow-md hover:border-emerald-100"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Visual Media with elegant absolute Icon Badge */}
                    <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100 aspect-video shrink-0">
                      <img
                        src={disorder.image}
                        alt={disorder.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs p-2 rounded-lg shadow-sm text-[#2E7D32] border border-emerald-50 flex items-center justify-center">
                        <IconComp className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2 font-normal">
                      <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                        {disorder.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                        {disorder.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ayurvedic Care</span>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E7D32] hover:text-emerald-950 font-semibold flex items-center gap-1 transition"
                    >
                      Consult Discreetly &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner with medical standard certification note */}
        <div className="mt-16 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <ShieldAlert className="h-5 w-5 text-emerald-800" />
              <span>100% Confidential Online & Clinic Consultations</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We understand the sensitive nature of sexual health concerns. Consultations are conducted inside private chambers. Any prescribed medication is shipped in secure, completely plain, and unbranded packaging to protect your discretion.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-[#E57373] text-white font-bold text-xs text-center hover:bg-rose-500 transition-all shadow-xs"
            >
              Call Clinic
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#2E7D32] text-white font-bold text-xs text-center hover:bg-emerald-900 transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
