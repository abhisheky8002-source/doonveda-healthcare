import { useState } from "react";
import { Search, Calendar, User, Clock, ArrowLeft, Phone, Share2, ClipboardCheck, ArrowRight } from "lucide-react";
import { BLOGS_DATA, CLINIC_INFO } from "../data";
import { BlogPost } from "../types";

import imageED from "../assets/images/ed.png";
import cuppingImg from "../assets/images/fj.jpg";
import imageInfertility from "../assets/images/er.png";

export default function BlogsView() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  
  const getBlogImage = (id: string, defaultFallback: string) => {
    switch (id) {
      case "blog-1":
        return imageED;
      case "blog-2":
        return cuppingImg;
      case "blog-3":
        return imageInfertility;
      default:
        return defaultFallback;
    }
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Sexual Wellness", "Cupping Therapy", "Ayurvedic Solutions"];

  const filteredBlogs = BLOGS_DATA.filter((blog) => {
    const matchesQuery =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.seoKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  const handleBlogClick = (blog: BlogPost) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If a blog is selected, render the high-quality blog detail viewpoint
  if (selectedBlog) {
    return (
      <article className="bg-white py-12 md:py-16 animate-fade-in pointer-events-auto">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Back Action Helper */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-705 shadow-xs hover:bg-slate-100 transition mb-8 focus:outline-none"
            id="blog-back-button"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Health Blogs</span>
          </button>

          {/* Article Header Meta info */}
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              {selectedBlog.category}
            </span>
            
            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
              {selectedBlog.title}
            </h1>

            {/* Micro details bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-100 pb-6">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-[#2E7D32]" />
                <span className="font-bold text-slate-600">{selectedBlog.author}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{selectedBlog.date}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{selectedBlog.readTime}</span>
              </span>
            </div>
          </div>

          {/* Large display poster image */}
          <div className="my-8 aspect-video w-full overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
            <img
              src={getBlogImage(selectedBlog.id, selectedBlog.image)}
              alt={selectedBlog.title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Core Content Grid structure split into Reader vs Call Capsule */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Article content */}
            <div className="lg:col-span-8 space-y-6 text-slate-750 font-sans text-sm md:text-base leading-relaxed">
              {selectedBlog.content.map((paragraph, index) => (
                <p key={index} className="text-slate-650 hover:text-slate-900 transition">
                  {paragraph}
                </p>
              ))}

              {/* SEO Tags drawer */}
              <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-bold text-slate-450 uppercase tracking-widest mr-2">Keywords:</span>
                {selectedBlog.seoKeywords.map((kw, idx) => (
                  <span key={idx} className="bg-slate-50 rounded-lg px-2.5 py-1 text-xs border border-slate-100 text-slate-500 font-mono">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Clinic Booking / In-article CTA Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit bg-emerald-50 rounded-2xl p-6 border border-emerald-100 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">Featured Clinic</span>
              <h3 className="font-serif font-bold text-slate-900 text-base">DoonVeda Gurugram</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Struggling with chronic sexual disorders or seeking clinical cupping in Gurugram? Speak directly with senior practitioners.
              </p>
              
              <div className="h-0.5 w-full bg-emerald-100"></div>
              
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-emerald-800" />
                  <span>100% Secure Consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-emerald-800" />
                  <span>Chemical-Free Herbs</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-emerald-800" />
                  <span>Discreet White Box parcel</span>
                </li>
              </ul>

              <div className="pt-2 gap-2 flex flex-col">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="rounded-lg bg-[#E57373] hover:bg-rose-500 text-white text-center py-2.5 text-xs font-bold shadow-xs transition"
                >
                  Call Now: {CLINIC_INFO.phoneDisplay}
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-center py-2.5 text-xs font-bold transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </article>
    );
  }

  // Else, render the Search and list page
  return (
    <div className="bg-slate-50 py-12 md:py-16 pointer-events-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E7D32]">Patient Educational Library</span>
          <h1 className="font-serif text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl leading-tight">
            Ayurvedic Insights and Health Articles
          </h1>
          <div className="h-1 w-12 bg-emerald-800 mx-auto"></div>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Read medical insights backed by centuries of classical texts and modern therapy trials. We advocate clinical integrity over hype.
          </p>
        </div>

        {/* Search and Category block */}
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles (e.g., ED, cupping)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-4 text-xs text-slate-700 focus:border-emerald-500 focus:bg-white focus:outline-none transition-all"
                id="blog-search-field"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#2E7D32] text-white shadow-xs"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-[#2E7D32]"
                  }`}
                  id={`cat-chip-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Articles Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
                className="group cursor-pointer rounded-2xl bg-white overflow-hidden shadow-xs border border-slate-100/80 hover:shadow-md transition duration-300 flex flex-col justify-between"
                id={`blog-card-${blog.id}`}
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="aspect-video w-full overflow-hidden bg-slate-50 relative">
                    <img
                      src={getBlogImage(blog.id, blog.image)}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-350 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
                      {blog.category}
                    </span>
                  </div>

                  {/* Text Container */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{blog.author}</span>
                      </span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-emerald-850 transition leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-550 leading-relaxed line-clamp-3">
                      {blog.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex justify-between items-center text-xs font-bold text-emerald-800">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 max-w-md mx-auto space-y-3">
            <span className="text-4xl">🔍</span>
            <h3 className="font-serif font-bold text-slate-800 text-lg">No Articles Found</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We couldn't find matching articles for "{searchQuery}". Try updating your category or typing a different query.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-2 text-xs font-bold text-[#2E7D32] hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
