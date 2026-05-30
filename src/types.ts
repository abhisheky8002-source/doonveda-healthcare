export interface BlogPost {
  id: string;
  title: string;
  category: "Sexual Wellness" | "Cupping Therapy" | "Ayurvedic Solutions";
  summary: string;
  content: string[]; // List of paragraphs for high-quality rich text display
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  seoKeywords: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic" | "Treatment" | "Herbs & Therapy";
  description: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  symptoms: string[];
  ayurvedicApproach: string;
  confidentialityNote: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Sexual Wellness" | "Cupping Therapy" | "Consultation";
}
