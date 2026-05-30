import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, MapPin } from "lucide-react";
import { GALLERY_DATA, CLINIC_INFO } from "../data";
import { GalleryItem } from "../types";

import imageChamber from "../assets/images/fj.jpg";
import imageLounge from "../assets/images/fj.jpg";
import imageCupping from "../assets/images/fj.jpg";
import imageHerbs from "../assets/images/fj.jpg";
import imageDispensing from "../assets/images/ud.png";
import imagePE from "../assets/images/pe.png";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const getGalleryImage = (id: string, defaultFallback: string) => {
    switch (id) {
      case "gal-1":
        return imageChamber;
      case "gal-2":
        return imageCupping;
      case "gal-3":
        return imageHerbs;
      case "gal-4":
        return imageLounge;
      case "gal-5":
        return imagePE;
      case "gal-6":
        return imageDispensing;
      default:
        return defaultFallback;
    }
  };
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Clinic", "Treatment", "Herbs & Therapy"];

  const filteredItems = GALLERY_DATA.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_DATA.findIndex((g) => g.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % GALLERY_DATA.length;
      setLightboxIndex(nextIdx);
    }
  };

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
      setLightboxIndex(prevIdx);
    }
  };

  const activeLightboxItem = lightboxIndex !== null ? GALLERY_DATA[lightboxIndex] : null;

  return (
    <div className="bg-slate-50 py-12 md:py-16 pointer-events-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E7D32]">Visual Transparency</span>
          <h1 className="font-serif text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl leading-tight">
            Our Gurugram Clinic & Therapy Gallery
          </h1>
          <div className="h-1 w-12 bg-emerald-800 mx-auto"></div>
          <p className="text-sm text-slate-505 max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art facility on Golf Course Road. We maintain absolute cleanliness, sanitized equipment, and private rooms for all consulting visits.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#2E7D32] text-white shadow-xs"
                  : "bg-white text-slate-500 border border-slate-100/80 hover:bg-slate-50 hover:text-emerald-800"
              }`}
              id={`gallery-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Area */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-xs hover:shadow-md transition duration-300 relative flex flex-col justify-between"
                id={`gallery-card-${item.id}`}
              >
                <div>
                  {/* Image wrap with zoom hover & indicator */}
                  <div className="aspect-square relative overflow-hidden bg-slate-50">
                    <img
                      src={getGalleryImage(item.id, item.image)}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover zoom vector overlay */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <div className="rounded-full bg-white/95 p-3 text-emerald-800 shadow-lg transform scale-90 group-hover:scale-100 transition duration-300">
                        <Maximize2 className="h-5 w-5" />
                      </div>
                    </div>

                    <span className="absolute top-4 left-4 rounded-full bg-emerald-900 text-white text-[9px] font-bold px-2.5 py-1 tracking-wider uppercase shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-4 space-y-1.5">
                    <h3 className="font-serif text-sm font-bold text-slate-800 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-1.5 flex justify-between items-center text-[10px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-700"></span>
                    <span>Hygienic Outpatient Environment</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-100 max-w-sm mx-auto space-y-2">
            <span className="text-3xl">🖼️</span>
            <p className="font-serif font-bold text-slate-800 text-base">No Items Found</p>
            <p className="text-xs text-slate-400">Select a different category card to display clinic visual items.</p>
          </div>
        )}

        {/* Dynamic Lightbox Dialog Overlay */}
        {activeLightboxItem && (
          <div
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 p-4 md:p-8 select-none text-white cursor-zoom-out animate-fade-in"
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">🌿</span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {activeLightboxItem.category} • Tour
                </span>
              </div>
              
              {/* Close Trigger */}
              <button
                onClick={handleCloseLightbox}
                className="rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition cursor-pointer"
                id="lightbox-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Interactive Image Display Middle container */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full py-6">
              {/* Previous trigger arrow */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-0 md:-left-12 rounded-full bg-white/15 p-3.5 hover:bg-white/25 transition cursor-pointer"
                id="lightbox-prev"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Core Image element */}
              <img
                src={getGalleryImage(activeLightboxItem.id, activeLightboxItem.image)}
                alt={activeLightboxItem.title}
                className="max-h-[60vh] md:max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/5 cursor-default"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />

              {/* Next trigger arrow */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-0 md:-right-12 rounded-full bg-white/15 p-3.5 hover:bg-white/25 transition cursor-pointer"
                id="lightbox-next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Caption Block */}
            <div
              className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-white/5 text-center space-y-2 max-w-3xl mx-auto w-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="font-serif text-base font-bold text-white">
                {activeLightboxItem.title}
              </h4>
              <p className="text-xs text-slate-350 leading-relaxed max-w-xl mx-auto">
                {activeLightboxItem.description}
              </p>
              <span className="text-[10px] text-emerald-400 block tracking-wider font-semibold uppercase">
                Image {lightboxIndex! + 1} of {GALLERY_DATA.length}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
