import { BlogPost, GalleryItem, ServiceDetail, Review, FAQItem } from "./types";

export const CLINIC_INFO = {
  name: "DoonVeda Healthcare Centre",
  branch: "Gurugram Branch",
  specialty: "Clinic for Sexual Disorders, Infertility & Cupping Therapy (Ayurvedic Treatment)",
  address: "Ground floor, A1, 31, Golf Course Rd, Huda, Sushant Lok 2, Sector 55, Gurugram, Haryana 122001",
  phone: "095605 95348",
  phoneDisplay: "095605 95348",
  email: "dr@doonveda.in",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.387974384074!2d77.09848467571343!3d28.437780075770355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b6e6c1e5d3%3A0xe5fcd0d6ebd516f!2sGolf%20Course%20Rd%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716800000000!5m2!1sen!2sin",
  whatsappUrl: "https://wa.me/919560595348?text=Hello%20DoonVeda%20Healthcare%20Gurugram%2C%20I%20would%20like%20to%20book%20a%20confidential%20consultation."
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "erectile-dysfunction",
    title: "Erectile Dysfunction (ED)",
    shortDesc: "Complete recovery from physical and psychological ED using pure Vajikarana herbs and targeted Ayurvedic micro-circulation therapies.",
    longDesc: "Erectile Dysfunction is treated at DoonVeda not merely as a symptom, but as an imbalance in the body's 'Vata' and 'Kapha' doshas, combined with under-nourished tissues ('Dhatus'). Our therapies combine ancient Ayurvedic science with modern lifestyle modifications to enhance penile blood circulation, strengthen nervous responses, and resolve underlying performance anxiety.",
    symptoms: [
      "Difficulty achieving or maintaining firm erections",
      "Reduced sexual desire or lower confidence",
      "Anxiety-driven performance blockages",
      "Premature fatigue and low physical endurance"
    ],
    benefits: [
      "Natural increase in blood circulation to the pelvic area",
      "Non-habit forming, safe botanical extracts",
      "Simultaneous resolution of performance stress and anxiety",
      "Permanent, root-cause resolution without synthetic side effects"
    ],
    ayurvedicApproach: "We prescribe custom formulations of potent Vajikarana herbs such as Ashwagandha, Safed Musli, Shatavari, and Shudh Shilajit, in conjunction with localized herbal basti procedures to pacify vitiated Apana Vayu.",
    confidentialityNote: "We maintain 100% confidential files. Your identity is fully secure, and medicines are shipped in discreet, unmarked medical packaging.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "premature-ejaculation",
    title: "Premature Ejaculation (PE)",
    shortDesc: "Regain natural control, stamina, and confidence. Holistic treatments to harmonize nerves and energy channels.",
    longDesc: "In Ayurveda, Premature Ejaculation is identified as 'Shukragata Vata', where hyperactive Vata Dosha destabilizes sensory retention. Rather than prescribing temporary numbing agents, DoonVeda focuses on re-educating the nervous system, managing psychological triggers, and balancing the local nervous reflexes through standardized Ayurvedic care.",
    symptoms: [
      "Ejaculation occurring with minimal stimulation",
      "Inability to sustain intercourse to mutual satisfaction",
      "Secondary anxiety and distress surrounding intimacy",
      "Physical stress and nervous exhaustion"
    ],
    benefits: [
      "Substantially enhanced neuro-muscular control",
      "Prolonged duration and improved structural resilience",
      "Quieter neurological baseline, ending frantic performance stress",
      "Strengthened pelvic floor and reproductive system"
    ],
    ayurvedicApproach: "Our course utilizes Vata-pacifying elements like Jaiphal, Jatamansi, and specialized Rasayanas. This is synchronized with personalized yogic breathing exercises (Pranayama) and pelvic-strengthening habits.",
    confidentialityNote: "Consultation occurs in a private, locked-door chambers with senior Ayurvedic sexologist in Gurugram.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "low-libido",
    title: "Low Libido & Vitality",
    shortDesc: "Revitalize natural drive, overall energy, and stamina. Overcome deep burnout, endocrine fatigue and age-related decline.",
    longDesc: "A decline in sexual desire is often linked to underlying systemic fatigue, poor cellular metabolism ('Agnimandya'), stressful work cultures, and hormonal imbalances. DoonVeda restores your inner masculine energy (Ojas) by purging accumulated metabolic toxins (Ama) and rebuilding cellular vitality.",
    symptoms: [
      "Chronic lack of sexual interest or excitement",
      "Unexplained fatigue, low vitality, and morning tiredness",
      "Brain og, mild depressiveness, and workplace burnout",
      "Poor physical strength and premature aging signs"
    ],
    benefits: [
      "Natural and sustained boost in free testosterone levels",
      "Significantly elevated Ojas (core vital energy)",
      "Better mood stability and sharper mental focus",
      "Enhanced overall muscular and nervous endurance"
    ],
    ayurvedicApproach: "We target tissue nourishment (Dhatu Pushti) starting from the plasma (Rasa) down to the reproductive essence (Shukra). Treatment incorporates organic Makaradhwaja, Gokshura, and premium saffron formulations.",
    confidentialityNote: "Your records, prescriptions, and medical reports are stored in encrypted digital vaults and accessible only to your treating physician.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "non-surgical-phimosis",
    title: "Phimosis Treatment (Non-Surgical)",
    shortDesc: "Gentle, non-invasive, pain-free Ayurvedic treatment to resolve tight foreskin without resorting to circumcision.",
    longDesc: "At DoonVeda Gurugram, we provide an effective, clinically proven non-surgical treatment for phimosis (tight prepuce structure). Using designated medical-grade stretching protocols under guidance, coupled with soothing anti-inflammatory Ayurvedic herbal oils, we relieve tight tissues comfortably and naturally, preserving physical integrity.",
    symptoms: [
      "Inability to retract the foreskin behind the glans fully",
      "Pain or high tension during erections or retraction attempts",
      "Localized redness, swelling, or recurrent infections (Balanitis)",
      "Difficulty during hygiene maintenance"
    ],
    benefits: [
      "100% pain-free and totally safe from surgical scars",
      "Preserves original anatomical structures fully",
      "No downtime from work or regular activities",
      "Highly affordable and highly successful clinic records"
    ],
    ayurvedicApproach: "Application of specialized herbal oils (such as Jatyadi Oil mixed with custom cellular softening herbs) combined with systematic, controlled home stretching instructions.",
    confidentialityNote: "Exams and procedures are handled with ultimate clinical sensitivity and patient privacy.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "male-infertility",
    title: "Male Infertility & Sperm Quality",
    shortDesc: "Scientific Ayurvedic protocols to substantially improve sperm count, motility, and normal morphology naturally.",
    longDesc: "Infertility can be emotionally taxing. DoonVeda provides a scientifically backed Ayurvedic protocol that improves the micro-environment of the testes. We aim to clear blocks in the semen-carrying channels (Shukravaha Srotas) and optimize cellular replication to deliver highly improved parameters.",
    symptoms: [
      "Inability to conceive after 12 months of unprotected intimacy",
      "Azoospermia (zero count) or Oligospermia (low count)",
      "Asthenozoospermia (poor sperm motility)",
      "Teratozoospermia (abnormal sperm shape/morphology)"
    ],
    benefits: [
      "Substantial rise in total sperm count within 3–4 cycles of treatment",
      "Remarkable enhancement in active forward sperm motility",
      "Improved DNA fragmentation index (DFI) score",
      "Avoidance of costly and stressful IVF/IUI cycles whenever possible"
    ],
    ayurvedicApproach: "We administer specialized 'Shodhana' (detoxification) protocols followed by premium 'Shukra Janana' (spermogenic) and 'Shukra Shodhana' (semen purifying) herbs like Chandraprabha Vati and Swarna Bhasma formulations under tight regulation.",
    confidentialityNote: "Couples consultations are arranged in quiet, calm ambient settings to respect your stress levels and personal parameters.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy (Hijama)",
    shortDesc: "An ancient, highly effective clinical detox therapy for physical pain, blood purification, skin health, and neurological relief.",
    longDesc: "Cupping Therapy (clinical Hijama) at DoonVeda Gurugram is performed under sterile, medical environments by trained therapist champions. By creating localized vacuum suction on meridian points, it stimulates sluggish blood flow, extracts chronic toxins, calms localized inflammatory cascades, and triggers rapid tissues remodeling.",
    symptoms: [
      "Migraines, stubborn headaches, and neck stiffness",
      "Chronic lower back pain, Sciatica, and muscular spasms",
      "Persistent hair loss, dandruff, and scalp congestion",
      "Skin issues like acne, chronic toxicity, or sluggish metabolism"
    ],
    benefits: [
      "Rapid and noticeable relief from severe musculoskeletal pain",
      "Intense cellular detox and deep dermal micro-circulation boost",
      "Improves scalp health to retard genetic hair loss and trigger growth",
      "Assists in clearing nervous pathway blockages for sciatica patients"
    ],
    ayurvedicApproach: "Combining traditional cupping points with Ayurvedic localized marma stimulation ensures that toxic blood ('Dushta Rakta') is safely and cleanly released, bringing deep balance to systemic Pitta and Rakta.",
    confidentialityNote: "We utilize single-use, 100% sterilized clinical cups and surgical-grade disposable medical blades. Maximum emphasis on modern hygiene and cleanliness.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    title: "Ayurvedic Treatment for Erectile Dysfunction: Root Cause vs Temporary Pills",
    category: "Sexual Wellness",
    summary: "Standard modern pills offer a quick fix with dangerous cardiovascular side effects. Learn how Ayurveda targets pelvic micro-circulation and Vata balance in Gurugram for a permanent, safe recovery.",
    content: [
      "Many men struggling with erectile issues in fast-paced cities like Gurugram resort to temporary over-the-counter pills. While these might provide immediate results, they ignore the root cause—poor blood circulation, pelvic tissue depletion, and psychological performance anxiety. More importantly, they carry potential risks for heart health and create physiological dependency.",
      "In Ayurveda, healthy erectile function relies on balanced 'Apana Vata' (the down-regulating energy movement) and rich 'Shukra Dhatu' (reproductive tissue). When stress, poor diet, and sedentary desk jobs consume Ojas (essential vitality), the pelvic tissues become malnourished.",
      "At DoonVeda Healthcare Centre Gurugram, our approach is systemic. We utilize Vajikarana medicines that safely relax pelvic muscle structures, naturally enhance safe nitric oxide synthesis to expand arterial walls, and nourish the nervous system with herbs like Ashwagandha and Shudh Shilajit.",
      "Results are progressive and structural. Along with herbal therapeutic protocols, we guide patients through specific micro-exercises and nutritional plans to maintain long-lasting strength without any chemical dependency. If you seek professional sexologist advice in Gurugram, prioritize root-cause care."
    ],
    author: "Senior Ayurvedic Expert",
    date: "May 25, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    slug: "ayurvedic-treatment-erectile-dysfunction-root-cause",
    seoKeywords: ["sexologist in Gurugram", "Ayurvedic sexologist Gurugram", "ED treatment Gurugram clinic", "Erectile dysfunction Ayurveda"]
  },
  {
    id: "blog-2",
    title: "The Clinical Healing Power of Hijama (Cupping Therapy) for Back Pain & Sciatica",
    category: "Cupping Therapy",
    summary: "Discover how clinical wet and dry cupping works on myofascial tissues to drain metabolic waste, reduce chronic inflammation, and yield fast relief from severe sciatica.",
    content: [
      "Cupping Therapy, known as Hijama, is an ancient clinical healing modality celebrated across classical traditions. Recent medical studies confirm what Ayurvedic practitioners have known for centuries: structured negative pressure suction pulls stagnant, oxygen-depleted blood and cellular trash out of deep muscle tissues into the cutaneous layer where it can be resolved.",
      "For individuals in Gurugram suffering from lower back spasms, neck tension, or shooting pain from Sciatica, cupping acts as an immediate physical release. It stretches the myofascial sheath, releases micro-adhesions, and directly reduces compressive force on the sciatic nerve branches.",
      "At DoonVeda Healthcare Centre, we maintain supreme hygiene. Every single-user cup is disposed of instantly, and premium certified diagnostic protocols ensure maximum safety. Our session setups are tailored to target precise therapeutic meridians.",
      "Patients often describe a profound sense of lightened mobility immediate after a session. By encouraging localized micro-trauma, cupping prompts the body to flood the target area with rich growth factors, anti-inflammatory cytokines, and fresh oxygenated blood, facilitating rapid cellular self-repair."
    ],
    author: "Cupping Therapy Specialist",
    date: "May 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    slug: "clinical-healing-power-hijama-cupping-therapy-sciatica",
    seoKeywords: ["cupping therapy Gurugram", "back pain treatment Gurugram", "hijama clinic Gurugram", "sciatica relief Gurugram"]
  },
  {
    id: "blog-3",
    title: "Overcoming Male Infertility: Improving Sperm Count and Motility via Shodhana & Rasayana",
    category: "Ayurvedic Solutions",
    summary: "Low sperm count (Oligospermia) is rising due to endocrine disruptors and high scrotum temperature. Ayurveda offers a complete clinical response to optimize semen morphology and count.",
    content: [
      "Sperm parameters globally have experienced a sharp downward trend over the last decade. Factors such as chronic corporate stress, late nights, electronic radiation, tight clothing, and heavy exposure to environmental toxins severely impair sperm production in the delicate testicular micro-environment.",
      "Traditional medicine categorizes these anomalies under 'Shukra Dosha'. To increase sperm count and motility effectively, we must accomplish two phases: 'Shodhana' (detoxification to cleanse the blockages in the cellular pathways) and 'Rasayana' (rejuvenation to feed the newly developed tissues).",
      "Through targeted clinical therapies, DoonVeda's specialized infertility protocols help suppress oxidative stress in semen. High-quality Rasayana formulations including Swarna Bhasma, Gokshura, and heavy-grade antioxidants naturally trigger healthy spermatogenesis.",
      "We recommend couples seek integrated care early rather than proceeding directly to exhausting, high-cost artificial fertilization procedures. Natural fertility restoration ensures robust embryo health and builds overall paternal vigor."
    ],
    author: "Ayurvedic Fertility Counsel",
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80",
    slug: "overcoming-male-infertility-improving-sperm-count-ayurveda",
    seoKeywords: ["male infertility treatment Gurugram", "Ayurvedic sexologist Gurugram", "low sperm count treatment", "azoospermia Gurugram"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Clinical consultation chamber",
    category: "Clinic",
    description: "Highly hygienic, serene, and absolutely confidential consultation chamber where patients meet with senior experts.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-2",
    title: "Sterile Cupping Therapy Session",
    category: "Treatment",
    description: "Clinical Hijama performed under highly sanitized environments, utilizing 100% single-use, biological-safe disposables.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-3",
    title: "Organic Ayurvedic Herbal Herbs",
    category: "Herbs & Therapy",
    description: "Carefully sourced, heavy-metal tested premium Ayurvedic herbs, roots, and minerals designed for deep therapeutic use.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-4",
    title: "Patient Comfort & Reception Lounge",
    category: "Clinic",
    description: "Welcoming reception lobby designed to offer peace of mind, silence, and swift appointments with absolute privacy.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-5",
    title: "Ayurvedic Oil Massage & Basti Utilities",
    category: "Herbs & Therapy",
    description: "Traditional therapeutic vessels and pure clinical oils used in customized panchakarma and tissue restoration therapies.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-6",
    title: "Confidential Pharmacy & Medicine dispensing desk",
    category: "Clinic",
    description: "In-house Ayurvedic pharmacy delivering authentic, pre-packaged, non-branded discreet medical boxes for dispatch.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Amit S.",
    rating: 5,
    comment: "Excellent experience. Visited for premature ejaculation treatment. The doctors are highly qualified, listened patiently for 30 minutes, and kept my entire file private. After 2 months of their organic remedies, I've seen miraculous recovery. Fully recommended sexologist in Gurugram.",
    date: "May 12, 2026",
    verified: true
  },
  {
    id: "rev-2",
    name: "Ramanpreet Singh",
    rating: 5,
    comment: "I took cupping therapy (Hijama) sessions here for chronic upper back pain and sciatica. The clinic is incredibly clean, and they opened fresh sterile blades and cups right in front of me. The stiffness is 90% gone. Very professional cupping therapy in Gurugram.",
    date: "April 28, 2026",
    verified: true
  },
  {
    id: "rev-3",
    name: "Vikram Y.",
    rating: 5,
    comment: "DoonVeda Gurugram branch helped me and my wife conceive. We were struggling with very low sperm count and motility issues. The Ayurvedic supplements and strict diet plans worked beautifully in 3 months. Avoided expensive IVF! Excellent male infertility treatment clinic.",
    date: "May 02, 2026",
    verified: true
  },
  {
    id: "rev-4",
    name: "Prakash M.",
    rating: 5,
    comment: "Non-surgical phimosis treatment at DoonVeda was simple and works. Visited for tight foreskin. Dr explained the stretching oil therapy clearly. Zero pain, no surgery, no circumcision. Excellent clinical behavior. 100% confidential.",
    date: "May 20, 2026",
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is my consultation at DoonVeda Healthcare Centre fully confidential?",
    answer: "Yes, 100%. We take patient privacy very seriously. All consultations take place behind strictly private, closed-door chambers. Your digital medical files are securely encrypted. Any medicine shipped to you is dispatched in sturdy, totally unmarked packaging with no mention of sexual disorders or specific treatments.",
    category: "Consultation"
  },
  {
    id: "faq-2",
    question: "Do you offer surgical treatment for Phimosis?",
    answer: "No, we specialize strictly in non-surgical phimosis management. Our treatment utilizes medicated Ayurvedic oils (like Jatyadi variations) along with a systematic stretching protocol. This has a very high success rate in resolving tight foreskin naturally without the risk, pain, or downtime associated with circumcision surgery.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "How long does it take to see results for sexual wellness treatments?",
    answer: "Since Ayurvedic treatments resolve the structural root causes of disorders rather than simply masking symptoms, improvements are progressive. Most patients notice positive differences in energy and pelvic strength within 2-3 weeks, with full stable benefits achieved over a 2 to 3-month course.",
    category: "Sexual Wellness"
  },
  {
    id: "faq-4",
    question: "Is clinical Cupping (Hijama) painful? Are the blades safe?",
    answer: "Cupping therapy involves tiny, superficial therapeutic scratches, not deep cuts, so it is virtually painless—most describe it as a light tickling or minor scratching sensation. We enforce surgical-grade safety guidelines: we only use brand-new, sterile disposable blades and single-use hygienic suction cups which are discarded immediately after your session.",
    category: "Cupping Therapy"
  },
  {
    id: "faq-5",
    question: "Can I book an appointment directly or do I need a reference?",
    answer: "You can book directly! Simply call our Gurugram branch directly at 095605 95348 or click 'Book Appointment' to reach our desk on WhatsApp. We welcome walk-ins, but reserving a slot guarantees immediate slot access without waiting times, protecting your premium confidential experience.",
    category: "Consultation"
  }
];
