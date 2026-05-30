import React, { useState } from "react";
import { ShieldCheck, Loader2, CheckCircle2, Lock, Sparkles, PhoneCall } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client with the provided credentials
const supabase = createClient(
  "https://sifibqmctqjmudwgyijb.supabase.co",
  "sb_publishable_k2w5o7Fe4aabgAuh0bCl3A_YQI148sI"
);

export default function DiscreetBookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    treatment: "Erectile Dysfunction (ED)",
    symptoms: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const treatments = [
    "Erectile Dysfunction (ED)",
    "Premature Ejaculation (PE)",
    "Infertility Consultation",
    "Phimosis Support",
    "Cupping Therapy (Hijama)",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, age, phone, treatment, symptoms } = formData;

    // Client-side validations
    if (!name.trim() || !age || !phone.trim() || !treatment) {
      setErrorMsg("Please complete all required fields securely.");
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18) {
      setErrorMsg("Patient age must be 18 or above for scheduling consultations.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      // 1. Check if a pending appointment with the same phone and treatment already exists
      const { data: existing, error: checkError } = await supabase
        .from("appointments")
        .select("id")
        .eq("phone", phone.trim())
        .eq("treatment", treatment)
        .eq("status", "pending")
        .limit(1);

      if (checkError) {
        throw new Error(checkError.message);
      }

      if (existing && existing.length > 0) {
        setErrorMsg(
          "You already have a pending appointment request for this treatment. Our clinic team will contact you shortly."
        );
        setLoading(false);
        return;
      }

      // 2. Direct insertion into the Supabase table 'appointments'
      const { error } = await supabase
        .from("appointments")
        .insert([
          {
            name: name.trim(),
            age: ageNum,
            phone: phone.trim(),
            treatment: treatment,
            symptoms: symptoms.trim() || null,
            status: "pending",
          },
        ]);

      if (error) {
        throw error;
      }

      // Success behavior
      setIsSuccess(true);
      setFormData({
        name: "",
        age: "",
        phone: "",
        treatment: "Erectile Dysfunction (ED)",
        symptoms: "",
      });
    } catch (err: any) {
      console.error("Supabase Error:", err);
      
      const isDuplicate = 
        err.code === "23505" || 
        err.message?.toLowerCase().includes("duplicate") || 
        err.message?.toLowerCase().includes("unique constraint") ||
        err.message?.toLowerCase().includes("already exists") ||
        err.details?.toLowerCase().includes("already exists") ||
        err.hint?.toLowerCase().includes("unique") ||
        err.message?.toLowerCase().includes("pending");

      if (isDuplicate) {
        setErrorMsg(
          "You already have a pending appointment request. Our clinic team will contact you shortly."
        );
      } else {
        // Fallback message to guide user if there is a network or RLS configuration issue
        setErrorMsg(
          err.message || "Unable to securely transmit case files now. Please check network/credentials."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="discreet-booking" 
      className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 border-t border-slate-100"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-100/50">
            <Lock className="h-3.5 w-3.5 text-emerald-700 animate-pulse" />
            <span>Encrypted Case Intake Portal</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            100% confidential. Your detail is never shared with third-party networks.
          </p>
        </div>

        {/* CONTAINER FOR FORM OR SUCCESS */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden relative">
          
          {/* Accent indicator top ribbon */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-650 to-[#2E7D32]" />
          
          <div className="p-6 md:p-10">
            {isSuccess ? (
              <div 
                className="text-center py-8 space-y-6 animate-fade-in" 
                id="booking-success-message"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 shadow-inner">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Your confidential request has been submitted securely.
                  </h3>
                  <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
                    A certified medical desk officer will review your parameters discreetly. Expect a phone callback in an unmarked private container within 2 hours.
                  </p>
                </div>

                <div className="max-w-md mx-auto p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/40 text-left space-y-2.5">
                  <div className="flex gap-2 items-center text-xs font-bold text-[#2E7D32]">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>Active Security Standards Enabled</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    This file entry has been sealed. Patient records remain anonymous and are only processed by the physical DoonVeda senior clinical panel.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:border-emerald-600 text-xs font-bold text-slate-650 hover:text-[#2E7D32] transition duration-300"
                  >
                    <span>File Another Confidential Slot</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6" id="supreme-booking-form">
                
                {/* Form Warnings/Error Alerts */}
                {errorMsg && (
                  <div className="rounded-xl bg-rose-50 border border-rose-100/80 p-4 text-xs text-rose-700 font-bold flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Patient Information Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name / Pseudonym */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-700 tracking-wide flex justify-between">
                      <span>Full Name (or Pseudonym) <span className="text-rose-500">*</span></span>
                      <span className="text-[10px] text-slate-400 font-normal font-mono">Alias Allowed</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Patient S"
                      className="w-full text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#2E7D32]/85 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/10 transition-all font-medium"
                      id="booking-name-field"
                    />
                  </div>

                  {/* Patient Age */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-700 tracking-wide flex justify-between">
                      <span>Patient Age <span className="text-rose-500">*</span></span>
                      <span className="text-[10px] text-slate-400 font-normal font-mono">Min age: 18</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="18"
                      max="115"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="e.g., 28"
                      className="w-full text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#2E7D32]/85 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/10 transition-all font-medium"
                      id="booking-age-field"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Secure Telephone */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-700 tracking-wide flex justify-between">
                      <span>Phone Number <span className="text-rose-500">*</span></span>
                      <span className="text-[10px] text-emerald-700 font-bold font-mono">End-to-End Private</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., 095605 95348"
                      className="w-full text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[#2E7D32]/85 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/10 transition-all font-medium"
                      id="booking-phone-field"
                    />
                  </div>

                  {/* Treatment Specialty Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-700 tracking-wide block">
                      Treatment Specialty <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className="w-full text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-800 focus:border-[#2E7D32]/85 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/10 transition-all font-medium appearance-none cursor-pointer"
                        id="booking-treatment-field"
                      >
                        {treatments.map((t) => (
                          <option key={t} value={t} className="text-slate-805">
                            {t}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Optional Symptoms Descriptions text area */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 tracking-wide flex justify-between">
                    <span>Symptoms <span className="text-slate-400 font-normal font-sans">(Optional)</span></span>
                    <span className="text-[10px] text-slate-400 font-normal">Encrypted Parameters</span>
                  </label>
                  <textarea
                    name="symptoms"
                    rows={3}
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your symptoms (optional & secure)..."
                    className="w-full text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-slate-800 placeholder-slate-400 focus:border-[#2E7D32]/85 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/10 transition-all font-medium resize-none"
                    id="booking-symptoms-field"
                  />
                </div>

                {/* Submit Trigger Actions box */}
                <div className="pt-4 border-t border-slate-50 flex flex-col items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:pointer-events-none disabled:-translate-y-0 disabled:shadow-md cursor-pointer"
                    id="booking-submit-btn"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4.5 w-4.5 animate-spin" />
                        <span>Filing Secure Entry...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="h-4.5 w-4.5 text-emerald-300" />
                        <span>File Case Securely</span>
                      </>
                    )}
                  </button>

                  {/* HIPAA bottom sub-text */}
                  <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed text-center max-w-2xl font-medium">
                    🔒 HIPAA & GDPR Compliant Security: Your submission is securely transmitted. We do not share data with third parties. All records remain encrypted and confidential.
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
