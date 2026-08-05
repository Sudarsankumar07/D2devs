export interface Project {
  id: string;
  category: 'WEB_PLATFORM' | 'MOBILE_APP' | 'AUTOMATION' | 'AI_ENGINEERING' | 'EDUCATION';
  categoryLabel: string;
  buildVersion: string;
  lat: string;
  title: string;
  description: string;
  fullDetails?: string;
  highlights?: string[];
  imageUrl: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  status: 'LIVE' | 'STAGING' | 'DEPLOYED' | 'PLANNED';
  link?: string;
  linkLabel?: string;
}

export interface TechnicalSpec {
  module: string;
  version: string;
  latency: string;
  throughput: string;
  status: 'OPTIMAL' | 'ACTIVE' | 'STANDBY';
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  code: string;
  priceLabel: string;
  periodLabel: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  description: string;
  deliverables: string[];
  lat: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  buildId: string;
}
