import type { Project, TechnicalSpec, PricingTier, ServiceItem, Testimonial } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'web-platform',
    category: 'WEB_PLATFORM',
    categoryLabel: '[ WEB_PLATFORM ]',
    buildVersion: 'BUILD_v1.0',
    lat: 'LAT: 13.0827° N',
    title: 'Scalable Web Platforms',
    description: 'High-performance websites and web applications built with React, TypeScript and Node.js.',
    fullDetails: 'End-to-end web engineering: from marketing sites to complex SaaS dashboards. We ship responsive, accessible and fast web experiences using React and TypeScript, backed by robust Node.js APIs and modern deployment pipelines.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxsO_yuy3TWAGY2V_Sj1rvmGGhyiilputriBYKvkUc32bT13hhK3Dy3d1cF7coRzZosJ6UQRazzM78FMT5I7KAjZA8AShhUhYCoqLbydNMqroy4UxtIptYoCEmJjuOjAcOHkPKPoClwIfFeEiNcp3FIo9Yj9ogfbpm41KIYFysF8qNLzghYia8O043OZU2DJTDdisQSsAnnz0f8EkyZRcz6b7Goa1fbzl8F7f4hCeQLcqe8i6U2fD4ZA',
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
    categoryLabel: '[ MOBILE_APP ]',
    buildVersion: 'BUILD_v0.9',
    lat: 'LAT: 12.9716° N',
    title: 'React Native Mobile Apps',
    description: 'Cross-platform iOS & Android applications engineered for native performance from a single codebase.',
    fullDetails: 'We design and build mobile applications with React Native and TypeScript — shipping to iOS and Android simultaneously while preserving a native look and feel, smooth animations and offline-first architecture.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBsFwFZGc9LLB8JAHPVTLiq8lMpCjtdVgwxIv5xmUM2vS6Yf6HW2cRCswGptIXZWbqdLEWsVKXLJtEtdMb96IVv5QoCxLiCJAL-gRUP6s4fqfndWAySdaYv1hjcJ3m8BqwOkYU_zgqFDAXCYC2jDgcA2QBNzIHj8al6upkHf-CW3mDXDSXSh-LKPZwU80jYW5aqzLvxEUO9eYSxaz9Z4vw16ZM38Z7kOS8UEvlIN9gKQMwvK_q1oI3uA',
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
    categoryLabel: '[ AUTOMATION ]',
    buildVersion: 'BUILD_v0.7',
    lat: 'LAT: 11.0168° N',
    title: 'Workflow Automation Tools',
    description: 'Custom automation pipelines and intelligent bots that eliminate repetitive manual work.',
    fullDetails: 'We build tailored automation tools in Python and Node.js — data pipelines, report generators, API integrations and task bots — that plug into your existing systems and save hundreds of engineering hours every month.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYntfMzB_RIXMC6kpxasA7JZJulsx5ZryIIx0R2akWh74RCNY22D336BjoOIFrR5FSSRnAZ_1U16sCM1txVceiYsekADDcdxskfq6ClSVevNAG73a07yH7wrIZeo0dXw3XwKBR2M4lhdNxFH0AFkV6UNRctjX7yUM_D2EcfyBfMblY1DgIlFdasQ-wJqbZ3kAH-Q8I8BWaQttWrj9cF7tQHoDh_NSxD2efDjxtDLDhhgKZfYQkCbsMVA',
    metrics: [
      { label: 'Tasks Automated', value: '10k+/mo' },
      { label: 'Hours Saved', value: '300+/mo' },
      { label: 'Failure Rate', value: '< 0.5%' }
    ],
    techStack: ['Python', 'Node.js', 'TypeScript', 'REST APIs', 'Cron/Workflows'],
    status: 'STAGING'
  },
  {
    id: 'mcp-server',
    category: 'AI_ENGINEERING',
    categoryLabel: '[ AI_ENGINEERING ]',
    buildVersion: 'BUILD_v0.1',
    lat: 'LAT: 10.8505° N',
    title: 'MCP Server & LLM Fine-Tuning',
    description: 'Our own Model Context Protocol server and fine-tuned LLM pipelines for production-ready AI systems.',
    fullDetails: 'Currently in the planning phase: we are building our own Model Context Protocol (MCP) server plus fine-tuned language models to power real-world AI projects — custom assistants, retrieval pipelines and agentic workflows built with Python and modern AI tooling.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYntfMzB_RIXMC6kpxasA7JZJulsx5ZryIIx0R2akWh74RCNY22D336BjoOIFrR5FSSRnAZ_1U16sCM1txVceiYsekADDcdxskfq6ClSVevNAG73a07yH7wrIZeo0dXw3XwKBR2M4lhdNxFH0AFkV6UNRctjX7yUM_D2EcfyBfMblY1DgIlFdasQ-wJqbZ3kAH-Q8I8BWaQttWrj9cF7tQHoDh_NSxD2efDjxtDLDhhgKZfYQkCbsMVA',
    metrics: [
      { label: 'Protocol', value: 'MCP v0.1' },
      { label: 'Context', value: '128k tokens' },
      { label: 'Status', value: 'IN_PLAN' }
    ],
    techStack: ['Python', 'PyTorch', 'MCP Protocol', 'Node.js', 'TypeScript'],
    status: 'PLANNED'
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
