import type { Project, TechnicalSpec, PricingTier, ServiceItem, Testimonial } from './types';

export const INITIAL_PROJECTS: Project[] = [
    {
    id: 'mcp-server',
    category: 'AI_ENGINEERING',
    categoryLabel: 'AI_ENGINEERING',
    buildVersion: 'BUILD_v0.1',
    lat: 'LAT: 10.8505° N',
    title: 'MCP Server & Context Planning',
    description: 'An MCP server that gives AI coding assistants a smarter way to work — instead of feeding the model an entire codebase, it plans exactly which code a task needs and sends only that. Faster answers, far fewer tokens, and edits that land on the right code every time.',
    highlights: [
      'An open, MCP-compatible context engine for coding AI',
      'The AI sees only the code it needs — never the whole repo',
      'Token-aware planning that cuts cost and response latency',
      'Plugs into any MCP-enabled assistant or LLM'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1645839057098-5ea8761a6b09?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    metrics: [
      { label: 'Protocol', value: 'MCP v0.1' },
      { label: 'Context', value: '128k tokens' },
      { label: 'Status', value: 'IN_PLAN' }
    ],
    techStack: ['MCP Protocol', 'TypeScript', 'Node.js', 'Tree-sitter', 'Graph Database', 'Git'],
    status: 'PLANNED'
  },
  {
    id: 'web-platform',
    category: 'WEB_PLATFORM',
    categoryLabel: 'WEB_PLATFORM',
    buildVersion: 'BUILD_v1.0',
    lat: 'LAT: 13.0827° N',
    title: 'Scalable Web Platforms',
    description: 'High-performance websites and web applications built with React, TypeScript and Node.js.',
    highlights: [
      'Responsive, accessible and SEO-optimized frontends',
      'React + TypeScript + Node.js full-stack architecture',
      'From marketing sites to complex SaaS dashboards',
      'Modern deployment pipelines with high uptime'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    metrics: [
      { label: 'Page Load', value: '< 1.2s' },
      { label: 'Lighthouse', value: '95+ / 100' },
      { label: 'Uptime', value: '99.9%' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite'],
    status: 'LIVE'
  },
  {
    id: 'mobile-app',
    category: 'MOBILE_APP',
    categoryLabel: 'MOBILE_APP',
    buildVersion: 'BUILD_v0.9',
    lat: 'LAT: 12.9716° N',
    title: 'React Native Mobile Apps',
    description: 'Cross-platform iOS & Android applications engineered for native performance from a single codebase.',
    highlights: [
      'Single TypeScript codebase for iOS & Android',
      'Offline-first architecture with smooth animations',
      'Native look and feel without duplicating code',
      'Performance-tuned: fast startup, crash-free runtime'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Startup Time', value: '< 1.8s' },
      { label: 'Crash-Free Rate', value: '99.5%' },
      { label: 'App Size', value: '< 25 MB' }
    ],
    techStack: ['React Native', 'TypeScript', 'JavaScript', 'Expo', 'Node.js'],
    status: 'STAGING'
  },
    {
    id: 'automation-tool',
    category: 'AUTOMATION',
    categoryLabel: 'AUTOMATION',
    buildVersion: 'BUILD_v0.7',
    lat: 'LAT: 11.0168° N',
    title: 'Workflow Automation Tools',
    description: 'Custom automation pipelines and intelligent bots that eliminate repetitive manual work.',
    highlights: [
      'Python & Node.js automation pipelines',
      'API integrations and scheduled workflows',
      'Report generators and intelligent task bots',
      'Saves hundreds of engineering hours monthly'
    ],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    metrics: [
      { label: 'Tasks Automated', value: '10k+/mo' },
      { label: 'Hours Saved', value: '300+/mo' },
      { label: 'Failure Rate', value: '< 0.5%' }
    ],
    techStack: ['Python', 'Node.js', 'TypeScript', 'REST APIs', 'Cron/Workflows'],
    status: 'STAGING'
  },
  {
    id: 'laptopkart',
    category: 'WEB_PLATFORM',
    categoryLabel: 'WEB_PLATFORM',
    buildVersion: 'BUILD_v1.0',
    lat: 'LAT: 13.0827° N',
    title: 'Laptopkart',
    description: 'An e-commerce website for buying certified refurbished laptops, desktops and tech accessories online — browse the catalog, add products to cart, and complete a multi-step checkout with delivery and payment.',
    highlights: [
      'Full storefront: product catalog with listings, stock and pricing',
      'Dynamic filtering by brand, RAM, grade and price',
      'Interactive shopping cart with quantity controls and coupon support',
      'Multi-step checkout: Address → Delivery → Payment → Confirmation',
      'Wishlist and side-by-side product comparison',
      'Responsive dark-mode UI with centralized COLOR_TOKENS theme'
    ],
    imageUrl: 'src/assets/Laptopkart logo.png',
    imageFit: 'contain',
    metrics: [
      { label: 'Checkout Flow', value: '4 Steps' },
      { label: 'Rendering', value: 'SSR' }
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Lucide React'],
    status: 'LIVE',
    link: 'https://laptopkart.in',
    linkLabel: 'Visit Live Site'
  },
  {
    id: 'action-reaction',
    category: 'MOBILE_APP',
    categoryLabel: 'MOBILE_APP',
    buildVersion: 'BUILD_v1.0',
    lat: 'LAT: 13.0827° N',
    title: 'Action Reaction',
    description: 'An interactive word-guessing game with 5 game modes, AI-powered hints and motion-controlled multiplayer.',
    highlights: [
      '5 game modes: Multiplayer, AI Hints, Time Attack, Memory Challenge & Practice',
      'Motion-controlled multiplayer — tilt face-down for correct, face-up to pass',
      'AI hints powered by Groq llama-3.3-70b-versatile with 4 progressive levels',
      '7 themed topics with 300+ words and full emoji support',
      'Auto online/offline switching with smart offline hint caching',
      'Firebase-secured AI: anonymous auth, auto-expiring JWTs, no keys in app'
    ],
    imageUrl: 'src/assets/charades.png',
    metrics: [
      { label: 'Game Modes', value: '5' },
      { label: 'Word Database', value: '300+' },
      { label: 'Themed Topics', value: '7' },
      { label: 'AI Hint Levels', value: '4' }
    ],
    techStack: ['React Native', 'Expo SDK 54', 'JavaScript', 'Groq LLM', 'AsyncStorage', 'NetInfo', 'Expo Sensors'],
    status: 'DEPLOYED',
    link: 'https://action-reaction.en.uptodown.com/android/download',
    linkLabel: 'Play / Download Game'
  }
];

export const TECHNICAL_SPECS: TechnicalSpec[] = [
  {
    module: 'Web Platform Engine',
    version: 'v1.0.0',
    latency: '< 1.2s',
    throughput: '300 req/s',
    status: 'OPTIMAL',
    description: 'React + TypeScript frontends with Node.js backends, optimized for speed, SEO and accessibility.'
  },
  {
    module: 'React Native Mobile Runtime',
    version: 'v0.9.0',
    latency: '< 1.8s',
    throughput: '60 FPS',
    status: 'ACTIVE',
    description: 'Cross-platform iOS & Android builds from a single TypeScript codebase with native performance.'
  },
  {
    module: 'Python Automation Pipeline',
    version: 'v0.7.0',
    latency: '2ms',
    throughput: '10k tasks/mo',
    status: 'ACTIVE',
    description: 'Scheduled jobs, API integrations and intelligent bots that remove repetitive manual work.'
  },
  {
    module: 'LLM Fine-Tuning Pipeline',
    version: 'v0.1.0',
    latency: '—',
    throughput: 'IN_PLAN',
    status: 'STANDBY',
    description: 'Planned: fine-tuning open-source language models for domain-specific AI assistants and agent workflows.'
  },
  {
    module: 'MCP Server Core',
    version: 'v0.1.0',
    latency: '—',
    throughput: 'IN_PLAN',
    status: 'STANDBY',
    description: 'Planned: our own Model Context Protocol server exposing tools and context to LLM-powered applications.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-mobile',
    code: 'SVC_01 // WEB & MOBILE',
    title: 'Website & App Development',
    description: 'Responsive websites, complex web applications and cross-platform mobile apps — designed and engineered end-to-end with React, React Native, TypeScript and Node.js.',
    deliverables: ['Custom Websites & Web Apps', 'iOS & Android Apps (React Native)', 'API & Backend Architecture'],
    lat: 'LAT: 13.0827° N'
  },
  {
    id: 'automation-ai',
    code: 'SVC_02 // AUTOMATION & AI',
    title: 'Automation & AI Engineering',
    description: 'Custom automation tools, AI-powered products, LLM fine-tuning and our own MCP server — built for real-world AI projects that ship.',
    deliverables: ['Workflow Automation Tools', 'LLM Fine-Tuning & AI Projects', 'Own MCP Server Build (IN_PLAN)'],
    lat: 'LAT: 12.9716° N'
  },
  {
    id: 'education',
    code: 'SVC_03 // EDUCATION',
    title: 'AI/ML & Python Education',
    description: 'Hands-on training in AI/ML and Python — from fundamentals to practical projects — so teams and students can build with modern AI themselves.',
    deliverables: ['AI/ML Training Programs', 'Python Programming Courses', 'Project-Based Learning'],
    lat: 'LAT: 11.0168° N'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'prototype',
    name: 'Genesis Prototype',
    code: 'BUILD_TIER // 01',
    priceLabel: 'Best Quotation',
    periodLabel: 'tailored to scope',
    description: 'Rapid engineering sprint to build an MVP website, app or automation tool in 3-4 weeks.',
    features: [
      'Full technical specification',
      'Production-ready frontend & backend',
      'Up to 3 core integrations',
      '1 year free maintenance',
      'Technical documentation & handoff'
    ]
  },
  {
    id: 'production',
    name: 'Enterprise System',
    code: 'BUILD_TIER // 02',
    priceLabel: 'Best Quotation',
    periodLabel: 'low cost · great quality',
    description: 'Full-scale digital ecosystem — web, mobile and automation — engineered for scale, plus AI integration when needed.',
    highlighted: true,
    features: [
      'End-to-end bespoke design & code',
      'Web + Mobile + Automation build',
      'AI & Machine Learning integration',
      '1 year free maintenance',
      'Dedicated engineering squad'
    ]
  },
  {
    id: 'retainer',
    name: 'Engineering Retainer',
    code: 'BUILD_TIER // 03',
    priceLabel: 'Best Quotation',
    periodLabel: 'monthly partnership',
    description: 'Continuous technical stewardship, feature expansion and performance optimization for your products.',
    features: [
      'Dedicated senior dev lead',
      'Bi-weekly feature release cycles',
      '24/7 incident response monitoring',
      '1 year free maintenance on builds',
      'Quarterly security & architecture audit'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'D²devs took us from a blank canvas to a fast, polished web platform. Their engineering discipline and attention to detail are exceptional.',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Aetheris Dynamics',
    buildId: 'd2_prod_v8'
  },
  {
    id: '2',
    quote: 'Their React Native app and automation tools shipped on schedule and immediately cut our manual workload by half.',
    author: 'Marcus Vance',
    role: 'VP of Product Strategy',
    company: 'Synthetix Global',
    buildId: 'd2_prod_v9'
  }
];
