export interface ProjectRepo {
  name: string;
  url: string;
  created: string;
  updated: string;
  stars: number;
  description?: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  date: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  tech: string[];
  icon: string;
  color: string;
  status: "Active" | "In Development" | "Production";
  featured: boolean;
  repos: ProjectRepo[];
  highlights: ProjectHighlight[];
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "mypropey",
    name: "MyPropey",
    tagline: "Property management, reimagined",
    description:
      "A comprehensive property management platform for listing, tracking, and managing real estate portfolios with intelligent insights.",
    longDescription:
      "MyPropey is a full-stack property management application built for property owners and managers. It streamlines listings, tenant tracking, rent collection, and portfolio analytics into a single intuitive dashboard. The platform has been iterated through multiple versions with continuous guardian-level patching and a martech slave architecture for fleet-wide deployments.",
    category: "PropTech",
    tech: ["TypeScript", "TanStack Start", "Supabase", "Playwright", "PWA"],
    icon: "Home",
    color: "emerald",
    status: "Active",
    featured: true,
    repos: [
      { name: "MyPropey-", url: "https://github.com/vivekearthz/MyPropey-", created: "2026-05-11", updated: "2026-08-19", stars: 1, description: "MyPropey app" },
      { name: "mypropey", url: "https://github.com/vivekearthz/mypropey", created: "2026-07-11", updated: "2026-08-20", stars: 0 },
      { name: "mypropey-88326280", url: "https://github.com/vivekearthz/mypropey-88326280", created: "2026-06-16", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-ff3fbd4c", url: "https://github.com/vivekearthz/mypropey-ff3fbd4c", created: "2026-07-07", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-91ab3ad3", url: "https://github.com/vivekearthz/mypropey-91ab3ad3", created: "2026-07-28", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-65778849", url: "https://github.com/vivekearthz/mypropey-65778849", created: "2026-07-04", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-f0825cd2", url: "https://github.com/vivekearthz/mypropey-f0825cd2", created: "2026-06-08", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-e873b35c", url: "https://github.com/vivekearthz/mypropey-e873b35c", created: "2026-06-05", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-c398f79b", url: "https://github.com/vivekearthz/mypropey-c398f79b", created: "2026-06-28", updated: "2026-08-19", stars: 0 },
      { name: "mypropey-3074d75f", url: "https://github.com/vivekearthz/mypropey-3074d75f", created: "2026-07-17", updated: "2026-08-19", stars: 0 },
      { name: "old-200826-mypropey", url: "https://github.com/vivekearthz/old-200826-mypropey", created: "2026-06-01", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Initial Launch", description: "MyPropey v1 was created as a property management web app with TypeScript and TanStack Start.", date: "2026-05-11" },
      { title: "Fleet Expansion", description: "10+ parallel repository branches spawned for A/B testing and feature experimentation across the martech fleet.", date: "2026-06-01" },
      { title: "Guardian v56 Patch", description: "Canonical guardian patch applied across all MyPropey repositories, enforcing slave identity and martech compliance.", date: "2026-08-18" },
      { title: "Canonical v56 Patch", description: "Final canonical patch applied to the primary MyPropey repository, stabilizing the fleet.", date: "2026-08-19" },
    ],
    features: [
      "Property listing and catalog management",
      "Tenant tracking and rent collection dashboard",
      "Portfolio analytics with visual insights",
      "PWA support for mobile-first property management",
      "Fleet-wide guardian patching system",
      "Row-level security per property owner",
    ],
  },
  {
    slug: "debugmysoftware",
    name: "Debug My Software",
    tagline: "AI-powered QA testing engine",
    description:
      "An AI-powered end-to-end QA testing tool that runs automated test suites for auth, payments, email, WhatsApp, admin, and PWA, then generates downloadable bug reports.",
    longDescription:
      "Debug My Software is an intelligent QA automation platform that runs comprehensive end-to-end test suites across critical user flows. It covers authentication, payment processing, email delivery, WhatsApp integration, admin panels, and PWA functionality. After each test run, it generates a detailed, downloadable bug report with severity scoring, reproduction steps, and AI-suggested fixes.",
    category: "DevTools",
    tech: ["TypeScript", "TanStack Start", "Supabase", "Playwright", "AI/LLM"],
    icon: "Bug",
    color: "red",
    status: "Active",
    featured: true,
    repos: [
      { name: "debugmysoftware", url: "https://github.com/vivekearthz/debugmysoftware", created: "2026-06-03", updated: "2026-08-20", stars: 1 },
      { name: "cheerful-bug-finder-65221236", url: "https://github.com/vivekearthz/cheerful-bug-finder-65221236", created: "2026-07-05", updated: "2026-08-20", stars: 0 },
      { name: "cheerful-bug-finder-9fa3605b", url: "https://github.com/vivekearthz/cheerful-bug-finder-9fa3605b", created: "2026-06-16", updated: "2026-08-20", stars: 0 },
      { name: "cheerful-bug-finder-3a2c85dd", url: "https://github.com/vivekearthz/cheerful-bug-finder-3a2c85dd", created: "2026-07-03", updated: "2026-08-20", stars: 0 },
      { name: "cheerful-bug-finder-b36d874e", url: "https://github.com/vivekearthz/cheerful-bug-finder-b36d874e", created: "2026-06-28", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Project Created", description: "Debug My Software launched as an AI-powered QA testing tool with auth-gated access.", date: "2026-06-03" },
      { title: "Bug Finder Fleet", description: "4 parallel cheerful-bug-finder repositories created for distributed QA testing across different environments.", date: "2026-06-16" },
      { title: "Master Patch v59", description: "Master patch v59 applied with live-version loopback, enabling continuous testing against production.", date: "2026-08-20" },
      { title: "Active Development", description: "Repository actively maintained with 3 open issues being tracked and resolved.", date: "2026-08-20" },
    ],
    features: [
      "AI-powered end-to-end test suite runner",
      "Automated testing for auth, payments, email, WhatsApp, admin, and PWA",
      "Downloadable bug reports with severity scoring",
      "AI-suggested fixes for discovered issues",
      "Auth-gated access with RLS protection",
      "Master-sync loopback for live-version testing",
    ],
  },
  {
    slug: "grantgenius",
    name: "GrantGenius (GovSchemeOS)",
    tagline: "Government grant applications, automated",
    description:
      "An automation platform that fills every field on DPIIT, Udyam, SISFS, GeM, and Bharat Startup Challenge portals, stopping exactly one click before submit at the OTP/DSC wall.",
    longDescription:
      "GrantGenius (branded as GovSchemeOS) is a government grant application automation platform designed for Indian startups. It uses Playwright to autofill every field on DPIIT, Udyam, SISFS, GeM, and Bharat Startup Challenge portals from a saved user profile. For email-only EOIs, the pipeline sends the complete packet with attachments automatically. The tool automates 100% of data entry and packaging, stopping exactly at the government's OTP/DSC wall where a human must tap.",
    category: "GovTech",
    tech: ["TypeScript", "TanStack Start", "Supabase", "Playwright", "RLS"],
    icon: "FileCheck2",
    color: "blue",
    status: "Active",
    featured: true,
    repos: [
      { name: "grantgenius", url: "https://github.com/vivekearthz/grantgenius", created: "2026-07-05", updated: "2026-08-20", stars: 0 },
      { name: "grant-wizardry-26-b8983862", url: "https://github.com/vivekearthz/grant-wizardry-26-b8983862", created: "2026-08-08", updated: "2026-08-20", stars: 1 },
      { name: "grant-wizardry-26-d18b3c77", url: "https://github.com/vivekearthz/grant-wizardry-26-d18b3c77", created: "2026-07-13", updated: "2026-08-20", stars: 0 },
      { name: "grant-wizardry-26-59dda451", url: "https://github.com/vivekearthz/grant-wizardry-26-59dda451", created: "2026-08-13", updated: "2026-08-20", stars: 0 },
      { name: "grant-wizardry-26-c42d2878", url: "https://github.com/vivekearthz/grant-wizardry-26-c42d2878", created: "2026-07-19", updated: "2026-08-20", stars: 0 },
      { name: "grant-wizardry-26-fd1d1aa6", url: "https://github.com/vivekearthz/grant-wizardry-26-fd1d1aa6", created: "2026-08-02", updated: "2026-08-20", stars: 0 },
      { name: "innovexsis-grant-runner2", url: "https://github.com/vivekearthz/innovexsis-grant-runner2", created: "2026-07-21", updated: "2026-08-19", stars: 0, description: "Runnwr" },
      { name: "innovexsis-grant-runner3", url: "https://github.com/vivekearthz/innovexsis-grant-runner3", created: "2026-07-21", updated: "2026-08-19", stars: 0, description: "Fithub2" },
    ],
    highlights: [
      { title: "Platform Launch", description: "GrantGenius created as GovSchemeOS — automating government grant portal submissions for Indian startups.", date: "2026-07-05" },
      { title: "Grant Wizardry Fleet", description: "6 grant-wizardry-26 repositories spawned for parallel portal testing across DPIIT, Udyam, SISFS, and GeM.", date: "2026-07-13" },
      { title: "Grant Runner Infrastructure", description: "Dedicated grant runner repositories created for continuous automated submission pipeline.", date: "2026-07-21" },
      { title: "Born-Wired Agent", description: "Signed-nudge receiver and born-wired agent installed for automated master-sync across the fleet.", date: "2026-08-20" },
    ],
    features: [
      "Playwright-based portal autofill for DPIIT, Udyam, SISFS, GeM",
      "Zero-touch email EOI submissions with attachments",
      "Stops at OTP/DSC wall — government's human verification gate",
      "Per-user document siloing with row-level security",
      "Saved profile for one-click multi-portal submissions",
      "Automated master-sync across the grant wizardry fleet",
    ],
  },
  {
    slug: "samadhan-ai",
    name: "Samadhan AI",
    tagline: "AI-powered resolution and support system",
    description:
      "An AI-driven platform for automated resolution management, support ticketing, and intelligent grievance handling with authenticated workflows.",
    longDescription:
      "Samadhan AI is an intelligent resolution and support platform that uses AI to automate grievance handling, ticket routing, and resolution workflows. It features authenticated access with dedicated authenticated routes, AI-powered ticket classification, and automated resolution suggestions. The platform has been iterated through multiple versions with continuous guardian patching across a fleet of parallel repositories.",
    category: "AI/SaaS",
    tech: ["TypeScript", "TanStack Start", "Supabase", "AI/LLM", "RLS"],
    icon: "MessageSquare",
    color: "violet",
    status: "Active",
    featured: true,
    repos: [
      { name: "samadhan-ai-7db98b3a", url: "https://github.com/vivekearthz/samadhan-ai-7db98b3a", created: "2026-07-20", updated: "2026-08-20", stars: 0 },
      { name: "samadhanaie46e0aa1", url: "https://github.com/vivekearthz/samadhanaie46e0aa1", created: "2026-08-17", updated: "2026-08-20", stars: 0 },
      { name: "samadhan-ai-34d81bad", url: "https://github.com/vivekearthz/samadhan-ai-34d81bad", created: "2026-07-17", updated: "2026-08-20", stars: 0 },
      { name: "samadhan-ai-28c0b578", url: "https://github.com/vivekearthz/samadhan-ai-28c0b578", created: "2026-07-02", updated: "2026-08-20", stars: 0 },
      { name: "samadhan-ai-65652ff4", url: "https://github.com/vivekearthz/samadhan-ai-65652ff4", created: "2026-08-03", updated: "2026-08-20", stars: 0 },
      { name: "samadhan-ai-e04a60c5", url: "https://github.com/vivekearthz/samadhan-ai-e04a60c5", created: "2026-06-16", updated: "2026-08-20", stars: 0 },
      { name: "old-200826-samadhan-ai", url: "https://github.com/vivekearthz/old-200826-samadhan-ai", created: "2026-08-20", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Initial Release", description: "Samadhan AI launched with authenticated routes and AI-powered resolution workflows.", date: "2026-06-16" },
      { title: "Fleet Expansion", description: "7 parallel repositories created for testing different AI models and resolution strategies.", date: "2026-07-02" },
      { title: "Guardian v56 Patch", description: "Canonical guardian patch applied across all Samadhan AI repositories.", date: "2026-08-19" },
      { title: "Master Patch v59", description: "Latest master patch v59 applied, bringing the newest AI resolution capabilities.", date: "2026-08-20" },
    ],
    features: [
      "AI-powered grievance classification and routing",
      "Automated resolution suggestions with confidence scoring",
      "Authenticated workflow with role-based access",
      "Real-time ticket tracking and status updates",
      "Multi-channel support integration",
      "Fleet-wide guardian patching for consistency",
    ],
  },
  {
    slug: "bella-presenter-ai",
    name: "Bella Presenter AI",
    tagline: "AI anchor for daily marketing videos",
    description:
      "An AI Indian-lady anchor that records a daily 30-second educational marketing video for each Innovexsis startup, gated by one-tap WhatsApp approval, then dispatched to 24 social channels at 10pm IST.",
    longDescription:
      "Bella Presenter AI (also branded as Innovexsis Anchor) is a single-tenant content autopilot that uses an AI-generated Indian-lady presenter to create daily marketing videos. The pipeline scans each startup's site, uses Gemini to rank and write scripts, renders the anchor via Kling AI Avatar with Lovable AI voice (Hedra as fallback), composites three formats (9:16, 1:1, 16:9), sends WhatsApp approval, and auto-dispatches to 24 social channels at 10pm IST.",
    category: "AI/Content",
    tech: ["TypeScript", "TanStack Start", "Gemini AI", "Kling AI Avatar", "WhatsApp API"],
    icon: "Video",
    color: "amber",
    status: "Active",
    featured: true,
    repos: [
      { name: "bella-presenter-ai-bba6269b", url: "https://github.com/vivekearthz/bella-presenter-ai-bba6269b", created: "2026-07-12", updated: "2026-08-20", stars: 0 },
      { name: "bellapresenteraia1dff9b1", url: "https://github.com/vivekearthz/bellapresenteraia1dff9b1", created: "2026-08-15", updated: "2026-08-20", stars: 0 },
      { name: "bella-presenter-ai-7ee53ffa", url: "https://github.com/vivekearthz/bella-presenter-ai-7ee53ffa", created: "2026-07-07", updated: "2026-08-17", stars: 0 },
      { name: "innovexsis-ai-anchor", url: "https://github.com/vivekearthz/innovexsis-ai-anchor", created: "2026-06-29", updated: "2026-08-19", stars: 0, description: "Video avatae" },
      { name: "innovexsis-anchor", url: "https://github.com/vivekearthz/innovexsis-anchor", created: "2026-07-01", updated: "2026-08-20", stars: 0 },
      { name: "Videogirl", url: "https://github.com/vivekearthz/Videogirl", created: "2026-06-29", updated: "2026-08-19", stars: 0, description: "Video girl" },
    ],
    highlights: [
      { title: "AI Anchor Born", description: "Innovexsis AI Anchor and Video Girl projects created for AI-generated presenter videos.", date: "2026-06-29" },
      { title: "Bella Presenter Launch", description: "Bella Presenter AI launched with full 6-stage pipeline: discover, render, composite, approve, dispatch, analyze.", date: "2026-07-12" },
      { title: "24-Channel Dispatch", description: "Auto-dispatch to 24 social channels at 10pm IST with per-channel format optimization.", date: "2026-07-12" },
      { title: "Latest Iteration", description: "bellapresenteraia1dff9b1 created as the latest iteration with improved rendering pipeline.", date: "2026-08-15" },
    ],
    features: [
      "AI Indian-lady anchor via Kling AI Avatar with Lovable AI voice",
      "Daily Gemini-powered script generation from site scans",
      "Three composite formats: 9:16, 1:1, 16:9",
      "One-tap WhatsApp approval before publishing",
      "10pm IST cron dispatch to 24 social channels",
      "+24h and +72h analytics snapshots per channel",
    ],
  },
  {
    slug: "warmth-wave-ai",
    name: "Aura Companion (Warmth Wave AI)",
    tagline: "AI companion for mental well-being",
    description:
      "A mental well-being positioned AI companion product offering text, audio, and video-based chat for lonely people, with personalized conversations and near real-time communication.",
    longDescription:
      "Aura Companion (Warmth Wave AI) is an AI companion product positioned as a mental well-being tool that offers text, audio, and video-based chat services. It uses NVIDIA LLM models for near real-time two-way conversation, designed for lonely people seeking personalized discussion. The product is smartly positioned to pass legal regulatory and payment gateway reviews while offering companion services at the lowest possible cost.",
    category: "AI/Wellness",
    tech: ["TypeScript", "Lovable", "NVIDIA LLM", "Real-time Chat", "PWA"],
    icon: "Heart",
    color: "rose",
    status: "In Development",
    featured: false,
    repos: [
      { name: "warmth-wave-ai-08db8b34", url: "https://github.com/vivekearthz/warmth-wave-ai-08db8b34", created: "2026-08-08", updated: "2026-08-20", stars: 0 },
      { name: "warmth-wave-ai-270dd79f", url: "https://github.com/vivekearthz/warmth-wave-ai-270dd79f", created: "2026-08-03", updated: "2026-08-20", stars: 0 },
      { name: "warmth-wave-ai-11c6e7f3", url: "https://github.com/vivekearthz/warmth-wave-ai-11c6e7f3", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Concept Created", description: "Warmth Wave AI created as a mental well-being positioned AI companion with text, audio, and video chat.", date: "2026-07-28" },
      { title: "NVIDIA LLM Integration", description: "Near real-time two-way conversation enabled using NVIDIA LLM models for personalized discussions.", date: "2026-08-03" },
      { title: "Latest Iteration", description: "Latest repository iteration created with improved companion interaction capabilities.", date: "2026-08-08" },
    ],
    features: [
      "Text, audio, and video-based AI companion chat",
      "Near real-time two-way conversation with NVIDIA LLMs",
      "Mental well-being positioning for regulatory compliance",
      "Personalized discussion for lonely individuals",
      "Low-cost AI model usage for accessibility",
      "PWA support for mobile companion access",
    ],
  },
  {
    slug: "kimi-connect-core",
    name: "Kimi Connect Core",
    tagline: "Connectivity and communication platform",
    description:
      "A connectivity platform with authenticated workflows, API routes, and real-time communication capabilities built on TanStack Start.",
    longDescription:
      "Kimi Connect Core is a connectivity and communication platform built with TanStack Start. It features authenticated routes, API endpoints, and real-time communication capabilities. The platform has been iterated through multiple versions with the latest being kimi-connect-core-1075f8a3, described as 'Kimi latest'. It serves as a core connectivity layer for the Innovexsis ecosystem.",
    category: "Infrastructure",
    tech: ["TypeScript", "TanStack Start", "Supabase", "Real-time"],
    icon: "Network",
    color: "cyan",
    status: "Active",
    featured: false,
    repos: [
      { name: "kimi-connect-core", url: "https://github.com/vivekearthz/kimi-connect-core", created: "2026-06-01", updated: "2026-08-20", stars: 0 },
      { name: "kimi-connect-core-8aecc980", url: "https://github.com/vivekearthz/kimi-connect-core-8aecc980", created: "2026-08-03", updated: "2026-08-20", stars: 0 },
      { name: "kimi-connect-core-0b0d4d4d", url: "https://github.com/vivekearthz/kimi-connect-core-0b0d4d4d", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "kimi-connect-core-1075f8a3", url: "https://github.com/vivekearthz/kimi-connect-core-1075f8a3", created: "2026-08-16", updated: "2026-08-20", stars: 0, description: "Kimi latest" },
    ],
    highlights: [
      { title: "Core Platform", description: "Kimi Connect Core created as a connectivity platform with TanStack Start.", date: "2026-06-01" },
      { title: "Fleet Expansion", description: "Multiple iterations created for testing different connectivity approaches.", date: "2026-07-28" },
      { title: "Kimi Latest", description: "kimi-connect-core-1075f8a3 marked as 'Kimi latest' with the most up-to-date connectivity features.", date: "2026-08-16" },
    ],
    features: [
      "Authenticated workflow with route-level protection",
      "Real-time communication capabilities",
      "API endpoint infrastructure",
      "Supabase integration for data persistence",
      "Multi-iteration testing pipeline",
      "Core connectivity layer for Innovexsis ecosystem",
    ],
  },
  {
    slug: "cv-career-catalyst",
    name: "CV Career Catalyst",
    tagline: "AI-powered resume and career optimization",
    description:
      "An AI-powered career optimization platform for creating, optimizing, and managing professional resumes and CVs with intelligent suggestions.",
    longDescription:
      "CV Career Catalyst is an AI-powered career optimization platform that helps professionals create, optimize, and manage their resumes and CVs. It features intelligent suggestions for content improvement, keyword optimization for ATS systems, and professional formatting. The platform is part of a broader career tools ecosystem including Resume Fusion Craft and Executive Resume Architect.",
    category: "AI/HR",
    tech: ["TypeScript", "TanStack Start", "Supabase", "AI/LLM"],
    icon: "FileText",
    color: "teal",
    status: "Active",
    featured: false,
    repos: [
      { name: "cv-career-catalyst", url: "https://github.com/vivekearthz/cv-career-catalyst", created: "2026-06-01", updated: "2026-08-19", stars: 0 },
      { name: "resume-fusion-craft-0c4ef09b", url: "https://github.com/vivekearthz/resume-fusion-craft-0c4ef09b", created: "2026-08-18", updated: "2026-08-20", stars: 0 },
      { name: "resume-fusion-craft-3d46ffa7", url: "https://github.com/vivekearthz/resume-fusion-craft-3d46ffa7", created: "2026-08-17", updated: "2026-08-20", stars: 0 },
      { name: "resume-fusion-craft-64bfa529", url: "https://github.com/vivekearthz/resume-fusion-craft-64bfa529", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "resume-fusion-craft-c46ef403", url: "https://github.com/vivekearthz/resume-fusion-craft-c46ef403", created: "2026-07-25", updated: "2026-08-20", stars: 0 },
      { name: "executive-resume-architect", url: "https://github.com/vivekearthz/executive-resume-architect", created: "2026-07-09", updated: "2026-08-20", stars: 0 },
      { name: "march-date-audit", url: "https://github.com/vivekearthz/march-date-audit", created: "2026-06-01", updated: "2026-08-19", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "CV Career Catalyst and March Date Audit created for AI-powered resume optimization.", date: "2026-06-01" },
      { title: "Executive Tier", description: "Executive Resume Architect launched for senior-level resume optimization.", date: "2026-07-09" },
      { title: "Resume Fusion Craft", description: "4 Resume Fusion Craft repositories created for testing different AI optimization approaches.", date: "2026-07-25" },
      { title: "Latest Iteration", description: "Latest Resume Fusion Craft iteration created with improved ATS optimization.", date: "2026-08-18" },
    ],
    features: [
      "AI-powered resume content optimization",
      "ATS keyword matching and suggestions",
      "Professional formatting templates",
      "Executive-level resume architecture",
      "Multi-variant A/B testing for resume formats",
      "Career progression audit tools",
    ],
  },
  {
    slug: "my-secret-automagic",
    name: "My Secret Automagic",
    tagline: "Automation command center",
    description:
      "An automation command center for managing, orchestrating, and deploying automated workflows across the Innovexsis project fleet.",
    longDescription:
      "My Secret Automagic is an automation command center that orchestrates and manages automated workflows across the Innovexsis project ecosystem. It serves as the central hub for fleet management, automated patching, and deployment orchestration. The platform includes a command center interface and has been iterated through 10+ parallel repositories for testing different automation strategies.",
    category: "Automation",
    tech: ["TypeScript", "TanStack Start", "Supabase", "Automation"],
    icon: "Zap",
    color: "yellow",
    status: "Active",
    featured: false,
    repos: [
      { name: "my-secret-automagic", url: "https://github.com/vivekearthz/my-secret-automagic", created: "2026-06-03", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-413df91b", url: "https://github.com/vivekearthz/my-secret-automagic-413df91b", created: "2026-07-02", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-1a960dc0", url: "https://github.com/vivekearthz/my-secret-automagic-1a960dc0", created: "2026-06-05", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-cbd615b1", url: "https://github.com/vivekearthz/my-secret-automagic-cbd615b1", created: "2026-07-07", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-572b0143", url: "https://github.com/vivekearthz/my-secret-automagic-572b0143", created: "2026-06-23", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-414baf40", url: "https://github.com/vivekearthz/my-secret-automagic-414baf40", created: "2026-06-04", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-87f6802a", url: "https://github.com/vivekearthz/my-secret-automagic-87f6802a", created: "2026-07-05", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-automagic-71159f9f", url: "https://github.com/vivekearthz/my-secret-automagic-71159f9f", created: "2026-08-20", updated: "2026-08-20", stars: 0, description: "Command center" },
      { name: "my-secret-automagic-54495ffe", url: "https://github.com/vivekearthz/my-secret-automagic-54495ffe", created: "2026-08-15", updated: "2026-08-20", stars: 0, description: "Command center" },
      { name: "mysecretautomagic108a5ed3", url: "https://github.com/vivekearthz/mysecretautomagic108a5ed3", created: "2026-08-17", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Command Center Born", description: "My Secret Automagic created as the central automation command center for the Innovexsis fleet.", date: "2026-06-03" },
      { title: "Fleet Expansion", description: "10 parallel repositories created for testing different automation and orchestration strategies.", date: "2026-06-04" },
      { title: "Command Center UI", description: "Dedicated command center interface repositories created for fleet management dashboard.", date: "2026-08-15" },
      { title: "Latest Iteration", description: "Latest command center iteration created with improved fleet orchestration capabilities.", date: "2026-08-20" },
    ],
    features: [
      "Centralized fleet management dashboard",
      "Automated workflow orchestration",
      "Guardian patching across all repositories",
      "Deployment automation and scheduling",
      "Multi-strategy A/B testing for automation",
      "Real-time fleet status monitoring",
    ],
  },
  {
    slug: "innedge-flow",
    name: "Innedge Flow",
    tagline: "Workflow and process management",
    description:
      "A workflow and process management platform for orchestrating business processes, task flows, and operational pipelines across teams.",
    longDescription:
      "Innedge Flow is a workflow and process management platform designed to orchestrate business processes, task flows, and operational pipelines. It enables teams to define, execute, and monitor multi-step workflows with real-time status tracking. The platform has been iterated through multiple versions as part of the Innovexsis ecosystem.",
    category: "Workflow",
    tech: ["TypeScript", "TanStack Start", "Supabase"],
    icon: "Workflow",
    color: "indigo",
    status: "Active",
    featured: false,
    repos: [
      { name: "innedge-flow", url: "https://github.com/vivekearthz/innedge-flow", created: "2026-06-28", updated: "2026-08-20", stars: 0 },
      { name: "innedge-flow-5a0e7989", url: "https://github.com/vivekearthz/innedge-flow-5a0e7989", created: "2026-07-25", updated: "2026-08-20", stars: 0 },
      { name: "innedge-flow-d1579426", url: "https://github.com/vivekearthz/innedge-flow-d1579426", created: "2026-08-17", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "Innedge Flow created for workflow and process management.", date: "2026-06-28" },
      { title: "Fleet Iterations", description: "Multiple iterations created for testing different workflow orchestration approaches.", date: "2026-07-25" },
      { title: "Latest Iteration", description: "Latest Innedge Flow iteration created with improved process management capabilities.", date: "2026-08-17" },
    ],
    features: [
      "Multi-step workflow orchestration",
      "Real-time process status tracking",
      "Business process definition and execution",
      "Team-based task assignment",
      "Operational pipeline monitoring",
      "Supabase-backed process persistence",
    ],
  },
  {
    slug: "solo-marketing-muse",
    name: "Solo Marketing Muse",
    tagline: "AI-powered solo marketing automation",
    description:
      "An AI-powered marketing automation platform for solo founders and small teams, handling content creation, scheduling, and campaign management.",
    longDescription:
      "Solo Marketing Muse is an AI-powered marketing automation platform designed for solo founders and small teams. It handles content creation, social media scheduling, campaign management, and marketing analytics. The platform is part of a broader marketing tools ecosystem including My Secret Marketer and Caring Code Sparkle.",
    category: "Marketing",
    tech: ["TypeScript", "TanStack Start", "AI/LLM", "Supabase"],
    icon: "Megaphone",
    color: "pink",
    status: "Active",
    featured: false,
    repos: [
      { name: "solo-marketing-muse", url: "https://github.com/vivekearthz/solo-marketing-muse", created: "2026-07-02", updated: "2026-08-20", stars: 0 },
      { name: "solo-marketing-muse-423331f3", url: "https://github.com/vivekearthz/solo-marketing-muse-423331f3", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-marketer", url: "https://github.com/vivekearthz/my-secret-marketer", created: "2026-07-02", updated: "2026-08-20", stars: 0 },
      { name: "my-secret-marketer-08b72d59", url: "https://github.com/vivekearthz/my-secret-marketer-08b72d59", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "caring-code-sparkle-1651fb4f", url: "https://github.com/vivekearthz/caring-code-sparkle-1651fb4f", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "generate-your-gleam", url: "https://github.com/vivekearthz/generate-your-gleam", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "Solo Marketing Muse and My Secret Marketer created for AI-powered marketing automation.", date: "2026-07-02" },
      { title: "Marketing Fleet", description: "4 marketing-focused repositories created for different automation strategies.", date: "2026-07-28" },
      { title: "Gleam Generation", description: "Generate Your Gleam created for marketing content generation and campaign creation.", date: "2026-07-28" },
    ],
    features: [
      "AI-powered content creation and copywriting",
      "Social media scheduling and auto-posting",
      "Campaign management with analytics",
      "Solo founder marketing automation",
      "Multi-platform marketing distribution",
      "Marketing performance tracking",
    ],
  },
  {
    slug: "solo-project-guard",
    name: "Solo Project Guard",
    tagline: "Project security and monitoring",
    description:
      "A security and monitoring platform for guarding project integrity, enforcing compliance, and monitoring fleet health across repositories.",
    longDescription:
      "Solo Project Guard is a security and monitoring platform that guards project integrity across the Innovexsis repository fleet. It enforces compliance, monitors repository health, and provides gatekeeper functionality. The platform is part of the broader security ecosystem including Solo Gatekeeper and Secure Your Workspace.",
    category: "Security",
    tech: ["TypeScript", "TanStack Start", "Supabase"],
    icon: "ShieldCheck",
    color: "slate",
    status: "Active",
    featured: false,
    repos: [
      { name: "solo-project-guard", url: "https://github.com/vivekearthz/solo-project-guard", created: "2026-06-03", updated: "2026-08-20", stars: 0 },
      { name: "sologatekeeper", url: "https://github.com/vivekearthz/sologatekeeper", created: "2026-06-03", updated: "2026-08-20", stars: 0 },
      { name: "solo-gatekeeper-2411661a", url: "https://github.com/vivekearthz/solo-gatekeeper-2411661a", created: "2026-08-15", updated: "2026-08-20", stars: 0 },
      { name: "secure-your-workspace", url: "https://github.com/vivekearthz/secure-your-workspace", created: "2026-06-03", updated: "2026-08-20", stars: 0 },
      { name: "secure-ai-genesis-3e8660d0", url: "https://github.com/vivekearthz/secure-ai-genesis-3e8660d0", created: "2026-08-03", updated: "2026-08-20", stars: 0 },
      { name: "secureaigenesis4b3ee175", url: "https://github.com/vivekearthz/secureaigenesis4b3ee175", created: "2026-08-08", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Security Fleet Born", description: "Solo Project Guard, Solo Gatekeeper, and Secure Your Workspace created for fleet security.", date: "2026-06-03" },
      { title: "Secure AI Genesis", description: "Secure AI Genesis repositories created for AI-powered security monitoring.", date: "2026-08-03" },
      { title: "Latest Gatekeeper", description: "Latest Solo Gatekeeper iteration created with improved compliance enforcement.", date: "2026-08-15" },
    ],
    features: [
      "Repository fleet security monitoring",
      "Compliance enforcement across repositories",
      "Gatekeeper access control",
      "Workspace security management",
      "AI-powered security anomaly detection",
      "Real-time fleet health monitoring",
    ],
  },
  {
    slug: "lobi-social-spark",
    name: "Lobi Social Spark",
    tagline: "Social media engagement platform",
    description:
      "A social media engagement platform for managing, scheduling, and analyzing social media presence across multiple channels.",
    longDescription:
      "Lobi Social Spark is a social media engagement platform that manages, schedules, and analyzes social media presence across multiple channels. It enables teams to coordinate social media campaigns, track engagement metrics, and optimize content strategy. The platform has been iterated through multiple versions as part of the Innovexsis ecosystem.",
    category: "Social Media",
    tech: ["TypeScript", "TanStack Start", "Supabase"],
    icon: "Share2",
    color: "orange",
    status: "Active",
    featured: false,
    repos: [
      { name: "lobi-social-spark", url: "https://github.com/vivekearthz/lobi-social-spark", created: "2026-07-11", updated: "2026-08-20", stars: 0 },
      { name: "lobi-social-spark-2daf9acb", url: "https://github.com/vivekearthz/lobi-social-spark-2daf9acb", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "lobi-social-spark-6f86ed1d", url: "https://github.com/vivekearthz/lobi-social-spark-6f86ed1d", created: "2026-07-25", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "Lobi Social Spark created for multi-channel social media management.", date: "2026-07-11" },
      { title: "Fleet Iterations", description: "Multiple iterations created for testing different social media engagement strategies.", date: "2026-07-25" },
    ],
    features: [
      "Multi-channel social media management",
      "Content scheduling and auto-posting",
      "Engagement analytics and tracking",
      "Social media campaign coordination",
      "Cross-platform content optimization",
      "Real-time engagement monitoring",
    ],
  },
  {
    slug: "pahlastep",
    name: "Pahlastep",
    tagline: "Step-by-step process guidance",
    description:
      "A platform for creating, managing, and distributing step-by-step process guides and workflows for teams and users.",
    longDescription:
      "Pahlastep is a platform for creating, managing, and distributing step-by-step process guides and workflows. It enables teams to document processes, create interactive guides, and track step completion. The platform has been iterated through multiple versions as part of the Innovexsis ecosystem.",
    category: "Productivity",
    tech: ["TypeScript", "TanStack Start", "Supabase"],
    icon: "ListChecks",
    color: "lime",
    status: "Active",
    featured: false,
    repos: [
      { name: "pahlastep-7bf46170", url: "https://github.com/vivekearthz/pahlastep-7bf46170", created: "2026-06-28", updated: "2026-08-20", stars: 0 },
      { name: "pahlastep-bfe6b12a", url: "https://github.com/vivekearthz/pahlastep-bfe6b12a", created: "2026-07-07", updated: "2026-08-20", stars: 0 },
      { name: "pahlastep-cf4c4312", url: "https://github.com/vivekearthz/pahlastep-cf4c4312", created: "2026-07-13", updated: "2026-08-20", stars: 0 },
      { name: "pahlastep-487735dc", url: "https://github.com/vivekearthz/pahlastep-487735dc", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "pahlastepfb0c33a4", url: "https://github.com/vivekearthz/pahlastepfb0c33a4", created: "2026-08-15", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "Pahlastep created for step-by-step process guidance and workflow documentation.", date: "2026-06-28" },
      { title: "Fleet Iterations", description: "5 iterations created for testing different process guide approaches.", date: "2026-07-07" },
      { title: "Latest Iteration", description: "Latest Pahlastep iteration created with improved guide creation capabilities.", date: "2026-08-15" },
    ],
    features: [
      "Step-by-step process guide creation",
      "Interactive workflow documentation",
      "Step completion tracking",
      "Team process sharing",
      "Multi-format guide distribution",
      "Process analytics and completion metrics",
    ],
  },
  {
    slug: "kimisearch",
    name: "KimiSearch",
    tagline: "AI-powered search and discovery",
    description:
      "An AI-powered search and discovery platform with intelligent query processing, semantic search, and real-time result aggregation.",
    longDescription:
      "KimiSearch is an AI-powered search and discovery platform that provides intelligent query processing, semantic search capabilities, and real-time result aggregation. It has been iterated through 6 parallel repositories for testing different search algorithms and ranking strategies.",
    category: "AI/Search",
    tech: ["TypeScript", "TanStack Start", "AI/LLM", "Supabase"],
    icon: "Search",
    color: "sky",
    status: "Active",
    featured: false,
    repos: [
      { name: "kimisearch-32303a73", url: "https://github.com/vivekearthz/kimisearch-32303a73", created: "2026-06-10", updated: "2026-08-20", stars: 0 },
      { name: "kimisearch-e1807239", url: "https://github.com/vivekearthz/kimisearch-e1807239", created: "2026-07-03", updated: "2026-08-20", stars: 0 },
      { name: "kimisearch-c6c592ea", url: "https://github.com/vivekearthz/kimisearch-c6c592ea", created: "2026-07-07", updated: "2026-08-20", stars: 0 },
      { name: "kimisearch-b7855e7b", url: "https://github.com/vivekearthz/kimisearch-b7855e7b", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "kimisearch-3e8cb0e1", url: "https://github.com/vivekearthz/kimisearch-3e8cb0e1", created: "2026-07-04", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "KimiSearch created for AI-powered search and discovery.", date: "2026-06-10" },
      { title: "Fleet Expansion", description: "5 parallel repositories created for testing different search algorithms and ranking strategies.", date: "2026-07-03" },
    ],
    features: [
      "AI-powered semantic search",
      "Intelligent query processing",
      "Real-time result aggregation",
      "Multi-strategy search ranking",
      "Search analytics and insights",
      "Cross-platform search integration",
    ],
  },
  {
    slug: "simple-bill-sheets",
    name: "Simple Bill Sheets",
    tagline: "Simplified billing and invoicing",
    description:
      "A simplified billing and invoicing platform for managing bills, generating invoices, and tracking payments with spreadsheet-like simplicity.",
    longDescription:
      "Simple Bill Sheets is a billing and invoicing platform that brings spreadsheet-like simplicity to financial management. It enables users to manage bills, generate invoices, track payments, and maintain financial records. The platform includes a ledger component for comprehensive financial tracking.",
    category: "FinTech",
    tech: ["TypeScript", "TanStack Start", "Supabase"],
    icon: "Receipt",
    color: "green",
    status: "Active",
    featured: false,
    repos: [
      { name: "old-200826-simple-bill-sheets", url: "https://github.com/vivekearthz/old-200826-simple-bill-sheets", created: "2026-08-16", updated: "2026-08-20", stars: 0 },
      { name: "simple-bill-sheets-c1377306", url: "https://github.com/vivekearthz/simple-bill-sheets-c1377306", created: "2026-08-02", updated: "2026-08-02", stars: 0 },
      { name: "ledger", url: "https://github.com/vivekearthz/ledger", created: "2026-08-15", updated: "2026-08-20", stars: 0 },
      { name: "old-200826-midnight-money-maker", url: "https://github.com/vivekearthz/old-200826-midnight-money-maker", created: "2026-08-16", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Platform Launch", description: "Simple Bill Sheets created for simplified billing and invoicing.", date: "2026-08-02" },
      { title: "Ledger Component", description: "Ledger repository created for comprehensive financial tracking.", date: "2026-08-15" },
      { title: "Money Maker", description: "Midnight Money Maker created as a financial automation companion.", date: "2026-08-16" },
    ],
    features: [
      "Spreadsheet-like bill management",
      "Automated invoice generation",
      "Payment tracking and reconciliation",
      "Financial ledger management",
      "Financial reporting and analytics",
      "Multi-account financial tracking",
    ],
  },
  {
    slug: "martech-fleet-registry",
    name: "Martech Fleet Registry",
    tagline: "Fleet registry and management",
    description:
      "A martech fleet registry for auto-managing the Innovexsis repository fleet, tracking versions, patches, and deployments across all projects.",
    longDescription:
      "Martech Fleet Registry is the central registry that auto-manages the Innovexsis repository fleet. It tracks versions, patches, deployments, and slave identity across all repositories. The registry enforces guardian-level compliance and maintains the canonical patch pointers that keep the entire fleet in sync.",
    category: "Infrastructure",
    tech: ["TypeScript", "Automation", "GitHub API"],
    icon: "Server",
    color: "zinc",
    status: "Active",
    featured: false,
    repos: [
      { name: "martech-fleet-registry", url: "https://github.com/vivekearthz/martech-fleet-registry", created: "2026-07-24", updated: "2026-08-20", stars: 0, description: "Martech fleet registry backup — auto-managed by master." },
      { name: "brand-refresh", url: "https://github.com/vivekearthz/brand-refresh", created: "2026-06-01", updated: "2026-08-19", stars: 0 },
      { name: "home-base-hunter", url: "https://github.com/vivekearthz/home-base-hunter", created: "2026-07-28", updated: "2026-08-20", stars: 0 },
      { name: "pulse", url: "https://github.com/vivekearthz/pulse", created: "2026-07-11", updated: "2026-08-20", stars: 0 },
      { name: "findataspider504a6d57", url: "https://github.com/vivekearthz/findataspider504a6d57", created: "2026-08-15", updated: "2026-08-20", stars: 0 },
    ],
    highlights: [
      { title: "Registry Created", description: "Martech Fleet Registry created as the central auto-managed fleet registry.", date: "2026-07-24" },
      { title: "Fleet Management", description: "Registry manages 200+ repositories with automated version tracking and patch deployment.", date: "2026-07-24" },
      { title: "Active Maintenance", description: "Registry actively maintained with continuous guardian patch deployment across the fleet.", date: "2026-08-20" },
    ],
    features: [
      "Auto-managed fleet registry for 200+ repositories",
      "Version tracking and patch pointer management",
      "Guardian-level compliance enforcement",
      "Slave identity management across the fleet",
      "Automated deployment coordination",
      "Fleet health monitoring and reporting",
    ],
  },
];

export const stats = {
  totalRepos: 214,
  totalProjects: projects.length,
  totalReposTracked: projects.reduce((sum, p) => sum + p.repos.length, 0),
  activeProjects: projects.filter((p) => p.status === "Active").length,
  categories: [...new Set(projects.map((p) => p.category))].length,
  foundedYear: 2025,
  latestPatch: "v59",
};

export const categories = [...new Set(projects.map((p) => p.category))].sort();
