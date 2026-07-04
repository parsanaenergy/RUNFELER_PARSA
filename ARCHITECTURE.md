# Parsa Energy — Software Architecture Blueprint

> **Document version:** 1.0
> **Status:** Draft for engineering review
> **Audience:** Engineering, product, content, and SEO teams
> **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Prisma ORM · Zustand · TanStack Query · Headless CMS

This document specifies the **full production architecture** of the Parsa Energy corporate
website — a scalable, multi-page, headless-CMS-driven, AI-search-optimized platform for a
solar microgrid & power-electronics engineering company.

> **Note on environment:** The current deployment runs as a comprehensive single-page
> experience at `/` for demo/sandbox reasons. This document describes the **target
> production architecture** as if all routes were live. Section mapping notes explain how
> the single-page demo maps onto the full sitemap.

---

## Table of Contents

1. [Website Architecture](#1-website-architecture)
2. [Service Architecture](#2-service-architecture)
3. [Product Architecture](#3-product-architecture)
4. [Knowledge Center](#4-knowledge-center)
5. [Lead Generation Strategy](#5-lead-generation-strategy)
6. [Interactive Engineering Tools](#6-interactive-engineering-tools)
7. [SEO Strategy](#7-seo-strategy)
8. [AI Search Optimization](#8-ai-search-optimization)
9. [Database & CMS Structure](#9-database--cms-structure)
10. [Component Library](#10-component-library)
11. [Design System](#11-design-system)
12. [Future Roadmap](#12-future-roadmap)

---

## 1. Website Architecture

### 1.1 Goals

- **Discoverability**: Every commercial intent (service, product, repair request, quote)
  resolves to a single, semantically unambiguous URL.
- **Topical Authority**: Knowledge Center silos demonstrate expertise to search engines
  and LLMs.
- **Conversion Density**: Every page carries a context-aware primary + secondary CTA.
- **AI Crawlability**: Flat, predictable URLs with structured data on every route.

### 1.2 Sitemap (ASCII Page-Hierarchy Tree)

```
/                                              Home (pillar hub)
│
├── /about                                      Company overview
│   ├── /about/team                             Leadership & engineers
│   ├── /about/history                          Company timeline
│   ├── /about/certifications                   ISO, IEC, partner certs
│   ├── /about/partners                         Manufacturers & vendors
│   └── /about/sustainability                   ESG / environmental policy
│
├── /services                                   Services index (hub)
│   ├── /services/solar-plant-design            ← individual service pages
│   ├── /services/installation
│   ├── /services/commissioning
│   ├── /services/maintenance
│   ├── /services/preventive-maintenance
│   ├── /services/microgrid-consulting
│   ├── /services/battery-systems
│   ├── /services/energy-storage
│   ├── /services/solar-inverter-repair
│   ├── /services/electronic-board-repair
│   ├── /services/monitoring-systems
│   ├── /services/electrical-testing
│   └── /services/consulting                    Engineering consulting hub
│
├── /products                                   Products index
│   ├── /products/category/[category]           Category page (panels, inverters…)
│   ├── /products/[slug]                        Individual product page
│   ├── /products/brands                        Brand/manufacturer index
│   └── /products/brands/[brand]                Brand page
│
├── /projects                                   Project portfolio index
│   ├── /projects/[slug]                        Case study detail
│   └── /projects/map                           Interactive project map
│
├── /knowledge                                  Knowledge Center hub
│   ├── /knowledge/[category]                   Category landing
│   ├── /knowledge/[category]/[article-slug]    Article detail
│   ├── /knowledge/glossary                     Solar/engineering glossary
│   └── /knowledge/calculators                  Calculator index (see §6)
│
├── /blog                                       Company blog / industry news
│   └── /blog/[slug]
│
├── /case-studies                               Case study index (alias hub)
│
├── /downloads                                  Datasheets, manuals, whitepapers
│   ├── /downloads/datasheets
│   ├── /downloads/manuals
│   ├── /downloads/whitepapers
│   └── /downloads/certificates
│
├── /faq                                        FAQ hub (searchable)
│   └── /faq/[category]
│
├── /contact                                    Contact + multi-form hub
│   ├── /contact/quote                          Request quotation
│   ├── /contact/callback                       Request callback
│   ├── /contact/repair                         Repair intake form
│   └── /contact/consultation                   Free consultation booking
│
├── /careers                                    Careers landing
│   ├── /careers/[job-slug]                     Job detail
│   └── /careers/internships
│
├── /tools                                      Engineering tools hub
│   ├── /tools/solar-system-size
│   ├── /tools/battery-capacity
│   ├── /tools/cable-size
│   ├── /tools/voltage-drop
│   ├── /tools/solar-angle
│   ├── /tools/panel-tilt
│   ├── /tools/energy-consumption
│   ├── /tools/backup-time
│   ├── /tools/roi
│   └── /tools/microgrid-cost-estimator
│
├── /search                                     Site search results
│
├── /legal
│   ├── /legal/privacy                          Privacy Policy
│   ├── /legal/terms                            Terms of Service
│   ├── /legal/cookies                          Cookie Policy
│   └── /legal/warranty                         Warranty Terms
│
├── /sitemap.xml                                XML sitemap
├── /robots.txt                                 Crawl directives
├── /manifest.webmanifest                       PWA manifest
└── /404                                        Custom 404 (with search + top links)
```

### 1.3 Route Implementation Notes (Next.js App Router)

| Route segment             | Render strategy     | Data source                | Notes                                            |
| ------------------------- | ------------------- | -------------------------- | ------------------------------------------------ |
| `/`                       | ISR (60 min)        | CMS + DB                   | Hero, services, featured projects, calculators   |
| `/services/[slug]`        | ISR (24 h)          | CMS (Service content type) | On-demand revalidate via webhook                 |
| `/products/[slug]`        | SSG + ISR (6 h)     | CMS (Product)              | Structured data `Product` schema                 |
| `/knowledge/[cat]/[slug]` | SSG + ISR (12 h)    | CMS (Article)              | MDX body, breadcrumbs, TOC                       |
| `/projects/[slug]`        | SSG                 | CMS (Project)              | Gallery, specs, testimonial                      |
| `/tools/[slug]`           | CSR + Server Action | Static config + DB (leads) | Client-side calc; lead capture POSTs to `/api/lead` |
| `/contact/*`              | CSR                 | Form schema (Zod)          | Server Action → DB + email                       |
| `/search`                 | CSR                 | Algolia / Meilisearch      | Query param `?q=`                                |
| `/api/lead`               | Edge                | Server Action              | Captcha + rate limit                             |
| `/api/revalidate`         | Edge                | CMS webhook                | `?tag=&secret=`                                  |

### 1.4 Navigation Model

**Primary nav** (desktop): `Services ▾ · Products ▾ · Projects · Knowledge ▾ · Tools ▾ · About · Contact · [Get a Quote]`

**Mega-menu** under `Services` and `Knowledge` is data-driven from the CMS category tree.
**Mobile**: drawer with accordion; sticky bottom bar with `Call · WhatsApp · Quote`.

### 1.5 URL Conventions

- All lowercase, hyphen-separated, no trailing slash.
- Slugs max 60 chars, ASCII-only (transliterate Farsi/Arabic in future i18n route).
- Breadcrumbs match URL path 1:1.
- Localized future routes use `/en/...` and `/fa/...` prefix (i18n-ready).

---

## 2. Service Architecture

Each service is a **commercial landing page** with one job: convert a specific intent into a
qualified lead. All service pages share a template (see §2.2) but are customized via CMS
fields.

### 2.1 Service Page Inventory

| #  | Service                          | URL                                            | Hero CTA               | Trust Elements                            | Primary Lead Form                |
| -- | -------------------------------- | ---------------------------------------------- | ---------------------- | ----------------------------------------- | -------------------------------- |
| 1  | Solar Plant Design               | `/services/solar-plant-design`                 | Request Design Quote   | 120+ plants, PE-stamped drawings          | Design Intake                    |
| 2  | Installation                     | `/services/installation`                       | Book Site Survey       | Certified installers, ISO 9001            | Site Survey Booking              |
| 3  | Commissioning                    | `/services/commissioning`                      | Schedule Commissioning | IEC 62446 compliance reports              | Commissioning Request            |
| 4  | Maintenance                      | `/services/maintenance`                        | Request Maintenance    | SLA, 24/7 monitoring, MTTR stats          | Maintenance Plan Selector        |
| 5  | Preventive Maintenance           | `/services/preventive-maintenance`             | Start Service Plan     | Annual contract tiers, KPI dashboard      | Plan Chooser                     |
| 6  | Microgrid Consulting             | `/services/microgrid-consulting`               | Book Consulting        | Case studies, NREL-aligned methodology    | Consultation Booking             |
| 7  | Battery Systems                  | `/services/battery-systems`                    | Size My Battery Bank   | BMS compatibility, cycle-life warranty    | Battery Sizing Wizard            |
| 8  | Energy Storage                   | `/services/energy-storage`                     | Get Storage Quote      | BESS projects, UL-9540 units              | Storage Quote                    |
| 9  | Solar Inverter Repair            | `/services/solar-inverter-repair`              | Start Repair Ticket    | Brands serviced, turnaround time, warranty| Repair Intake Form               |
| 10 | Electronic Board Repair          | `/services/electronic-board-repair`            | Ship Board for Repair  | Component-level repair, SMD station       | Repair Intake Form               |
| 11 | Monitoring Systems               | `/services/monitoring-systems`                 | Request Demo           | IoT dashboards, alerting examples         | Demo Request                     |
| 12 | Electrical Testing               | `/services/electrical-testing`                 | Book Testing           | Megger, IR, ground resistance reports     | Testing Booking                  |
| 13 | Engineering Consulting (hub)     | `/services/consulting`                         | Talk to an Engineer    | Licenses, prior engagements               | Consultation Booking             |

### 2.2 Service Page Template (sections, top → bottom)

1. **Hero Section** — Headline (H1, intent-matched), sub-headline, primary + secondary CTA,
   hero image/video, trust micro-bar (certifications, years, projects count).
2. **Problem / Promise** — 2-column: pain point + Parsa's differentiated answer.
3. **Service Scope** — Feature grid (3–6 cards) with icon, title, 2-line description.
4. **Process Timeline** — 4–6 step horizontal timeline (e.g., Survey → Design → Install → Commission → Monitor).
5. **Trust Elements** — Stats strip (e.g., "120+ plants · 15 MWp deployed · 99.4% uptime").
6. **Case Studies Carousel** — 3 related projects pulled via `relatedProjects` CMS field.
7. **Equipment / Brands** — Logos of relevant manufacturers serviced.
8. **FAQ** — 6–10 Q&A blocks (accordion) implementing `FAQPage` schema (see §7.4).
9. **SEO Content Block** — 600–900 word long-form section covering intent, semantically
   related subtopics, internal links to Knowledge Center.
10. **Primary CTA Band** — Full-width colored band, single CTA, calendar embed (Cal.com).
11. **Related Services** — 3 cards linking to sibling services.
12. **Lead Form** — Context-tuned form (see §5) with progressive profiling.

### 2.3 Example JSON-LD: Service Page

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Solar Inverter Repair",
  "provider": {
    "@type": "Organization",
    "name": "Parsa Energy",
    "url": "https://parsaenergy.com"
  },
  "areaServed": { "@type": "Country", "name": "Iran" },
  "audience": { "@type": "BusinessAudience" },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "IRR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "IRR",
      "valueAddedTaxIncluded": false
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  }
}
```

### 2.4 SEO Content Structure (per service page)

| Element          | Specification                                                            |
| ---------------- | ------------------------------------------------------------------------ |
| `<title>`        | `{Service Name} in {Region} \| Parsa Energy` (≤ 60 chars)                |
| Meta description | 150–160 chars, includes service + location + CTA verb                   |
| H1               | Exactly one; matches search intent                                       |
| H2               | 4–7 sections, keyword variants                                           |
| Word count       | 1,200–1,800 words (SEO block + FAQs)                                    |
| Internal links   | Min. 5 to Knowledge Center, 2 to related services, 1 to contact         |
| Images           | `loading="lazy"`, WebP/AVIF, descriptive `alt`, `width`/`height` set    |
| Schema           | `Service` + `FAQPage` + `BreadcrumbList`                                 |

---

## 3. Product Architecture

### 3.1 Goals

- Scalable to 1,000+ SKUs across categories (panels, inverters, batteries, controllers,
  cables, mounting, protection, monitoring).
- Each product page is a self-contained lead-gen landing page (no e-commerce checkout —
  Parsa sells via quotation).
- Programmatic SEO friendly (template-driven structured data).

### 3.2 Product Taxonomy

```
products
├── solar-panels           (mono, poly, bifacial, flexible)
├── inverters              (string, micro, hybrid, off-grid, central)
├── batteries              (LiFePO4, AGM, GEL, salt-water)
├── charge-controllers     (MPPT, PWM)
├── mounting               (roof, ground, pole, tracker)
├── cables-connectors      (PV wire, MC4, AC)
├── protection             (breakers, surge, fuses, SPD)
├── monitoring             (gateways, sensors, current shunts)
└── accessories            (tools, labels, conduit)
```

### 3.3 Product Page Template

| #  | Section                | Content                                                                                 | Schema field(s)                              |
| -- | ---------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| 1  | Breadcrumb             | Home › Products › Category › Brand › Product                                            | `BreadcrumbList`                             |
| 2  | Hero / Gallery         | Image carousel (5+), brand badge, model code, short tagline, "Request Quote" CTA        | `Product.image`                              |
| 3  | Quick Specs Strip      | Key specs (capacity, voltage, efficiency, warranty)                                     | `Product.additionalProperty`                |
| 4  | Full Specifications    | Tabbed table (Electrical / Mechanical / Thermal / Certifications)                       | `Product.additionalProperty`                |
| 5  | Applications           | 4–6 use-case cards with links to relevant services/knowledge                            | —                                            |
| 6  | Downloads              | Datasheet (PDF), manual, CAD file, certification PDFs                                   | `Product.subjectOf` (DataDownload)          |
| 7  | Videos                 | Embedded YouTube/Vimeo with `VideoObject` schema                                        | `VideoObject`                                |
| 8  | Installation Guide     | Step list + safety notes + link to `/services/installation`                             | `HowTo`                                      |
| 9  | Related Products       | 4-card grid by shared category or `relatedProducts` CMS field                           | —                                            |
| 10 | FAQ                    | 5–8 product-specific Q&As                                                               | `FAQPage`                                    |
| 11 | Related Articles       | 3 Knowledge Center articles by tag overlap                                              | —                                            |
| 12 | Lead Gen CTA           | "Request Quote" form + "Ask an Engineer" live chat                                       | —                                            |

### 3.4 Example Product JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ParsaSun PS-450M Half-Cut Mono 450W",
  "sku": "PS-450M",
  "brand": { "@type": "Brand", "name": "ParsaSun" },
  "category": "Solar Panels > Monocrystalline",
  "image": ["https://parsaenergy.com/img/products/ps-450m.jpg"],
  "description": "450W half-cut monocrystalline PV module, 21.3% efficiency, 25-year linear power warranty.",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Rated Power", "value": "450 W" },
    { "@type": "PropertyValue", "name": "Efficiency", "value": "21.3%" },
    { "@type": "PropertyValue", "name": "Cell Type", "value": "Monocrystalline Half-Cut" },
    { "@type": "PropertyValue", "name": "Warranty", "value": "25 years" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": false
    },
    "availability": "https://schema.org/PreOrder",
    "seller": { "@type": "Organization", "name": "Parsa Energy" }
  }
}
```

### 3.5 Product Lead Generation

- No "Add to cart". Primary CTA = **Request Quote** (per-product form pre-fills SKU).
- Secondary CTA = **Add to Equipment Selection Wizard** (multi-product RFQ, see §5).
- Tertiary CTA = **Download Datasheet** (gated by email = lead).

### 3.6 Programmatic SEO

Long-tail pages auto-generated from `Brand × Category × Application`:

```
/products/brands/[brand]/[category]      e.g. /products/brands/victron/inverters
/products/category/[category]/[application]  e.g. /products/category/inverters/off-grid
```

Each generated page has unique H1, intro paragraph (LLM-assisted draft, human-reviewed),
comparison table, and canonical tag pointing to itself.

---

## 4. Knowledge Center

### 4.1 Purpose

The Knowledge Center is the **topical authority engine**. It demonstrates expertise to
Google, LLMs, and human visitors. Each article is **entity-rich**, **answer-first**, and
**internally linked** within a cluster.

### 4.2 Categories

| Category              | Scope                                                | Example articles                                                       |
| --------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| Solar Basics          | PV effect, panel types, system anatomy               | "How Do Solar Panels Work?", "Mono vs Poly vs Bifacial"                |
| Microgrids            | AC/DC microgrids, islanding, grid-tie vs hybrid       | "What Is a Solar Microgrid?", "Hybrid vs Off-Grid Systems"             |
| Battery Technologies  | LiFePO4, lead-acid, salt-water, BMS                   | "LiFePO4 vs Lead-Acid for Solar", "Understanding Depth of Discharge"   |
| Inverters             | String, micro, hybrid, off-grid; sizing; selection    | "How to Size a Solar Inverter", "Hybrid Inverter Buying Guide"         |
| Charge Controllers    | MPPT vs PWM, sizing, parallel operation               | "MPPT vs PWM: Which Do You Need?"                                      |
| Cables                | PV wire vs USE-2, sizing, ampacity                    | "Solar Cable Sizing Guide"                                             |
| Protection            | Breakers, fuses, SPDs, AFCIs                          | "Solar PV Surge Protection Design"                                     |
| Grounding             | Equipment grounding, lightning, GEC                   | "Solar Plant Grounding Best Practices"                                 |
| Maintenance           | Cleaning, IR scans, IV curves                         | "Annual Solar Maintenance Checklist"                                   |
| Troubleshooting       | Fault codes, low yield, inverter errors               | "Common Inverter Fault Codes Explained"                                |
| Industry News         | Regulation, market, tech                              | "Iran 2024 Solar Feed-in Tariff Update"                                |
| Engineering Calculations | Worked examples for every tool in §6               | "How to Calculate Solar System Size — Worked Example"                  |

### 4.3 Content Cluster Map (ASCII)

```
                        ┌──────────────────────────────────┐
                        │   PILLAR: /knowledge/solar-basics │
                        │   "Solar Energy Fundamentals"     │
                        └─────────────────┬─────────────────┘
                                          │
        ┌────────────────┬────────────────┼────────────────┬────────────────┐
        ▼                ▼                ▼                ▼                ▼
   /knowledge/       /knowledge/      /knowledge/      /knowledge/      /knowledge/
   solar-basics/     solar-basics/    solar-basics/    solar-basics/    solar-basics/
   pv-effect         panel-types      system-anatomy   sizing-basics    cost-basics
        │                │                │                │                │
        └────────┬───────┴─────┬──────────┴────────┬───────┴────────┬───────┘
                 │             │                   │                │
                 ▼             ▼                   ▼                ▼
            /tools/solar   /products/         /services/       /knowledge/
            -system-size   solar-panels       installation     microgrids/
                                                                (sibling cluster)


SIBLING CLUSTERS (each has its own pillar):
  • Microgrids ────────────► /services/microgrid-consulting, /tools/microgrid-cost-estimator
  • Battery Technologies ──► /services/battery-systems, /tools/battery-capacity
  • Inverters ─────────────► /services/solar-inverter-repair, /products/category/inverters
  • Charge Controllers ────► /products/category/charge-controllers
  • Cables ────────────────► /tools/cable-size, /tools/voltage-drop
  • Protection ────────────► /services/electrical-testing
  • Grounding ─────────────► /services/electrical-testing
  • Maintenance ───────────► /services/maintenance, /services/preventive-maintenance
  • Troubleshooting ───────► /services/solar-inverter-repair, /contact/repair
  • Engineering Calculations ► /tools/* (all calculators)
  • Industry News ─────────► /blog
```

### 4.4 Article Anatomy

1. **H1** — Question or statement, ≤ 60 chars.
2. **TL;DR / Key Answer** — 2–3 sentence answer-first paragraph (LLM-citable).
3. **Table of Contents** — Auto-generated from H2s, sticky on desktop.
4. **Body** — 1,500–2,500 words, H2/H3 hierarchy, every H2 answers a sub-question.
5. **Tables, diagrams, code/math blocks** — at least 2 visual elements.
6. **Worked Example** — Concrete numbers, ties to a calculator in §6.
7. **FAQ** — 4–6 Q&A blocks at end (`FAQPage` schema).
8. **Author Box** — E-E-A-T signal: name, role, credentials, photo, `Person` schema.
9. **Last Updated** — Visible date + `dateModified` schema.
10. **Related Articles** — 3 cards within same cluster.
11. **CTA** — Context-aware (e.g., Maintenance article → /services/maintenance).

### 4.5 Article Schema Example

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "How to Size a Solar Inverter: Complete Guide",
  "author": {
    "@type": "Person",
    "name": "Eng. Reza Parsa",
    "jobTitle": "Principal Power Electronics Engineer",
    "url": "https://parsaenergy.com/about/team/reza-parsa"
  },
  "datePublished": "2024-09-12",
  "dateModified": "2025-02-03",
  "proficiencyLevel": "Expert",
  "dependencies": "Basic understanding of PV systems",
  "about": ["Solar Inverters", "Sizing", "PV Design"],
  "mainEntityOfPage": "https://parsaenergy.com/knowledge/inverters/sizing-a-solar-inverter"
}
```

---

## 5. Lead Generation Strategy

### 5.1 Lead Capture Inventory

| #  | Lead Type                | Trigger                                | Where it lives                                  | Form fields (progressive)              |
| -- | ------------------------ | -------------------------------------- | ----------------------------------------------- | -------------------------------------- |
| 1  | Free Consultation        | CTA on service & home pages            | Modal + `/contact/consultation`                 | Name, email, phone, topic, message     |
| 2  | Project Cost Estimator   | Hero on `/` & `/services/*`            | `/tools/microgrid-cost-estimator` (gated result)| Email → reveal estimate                |
| 3  | Contact Form             | `/contact`                             | Page                                            | Name, email, message, topic            |
| 4  | Callback Request         | Sticky mobile bar + footer             | Modal (tel input)                               | Name, phone, preferred time            |
| 5  | Equipment Selection Wizard | `/products` & product pages          | Multi-step wizard                               | Use case, budget, qty, contact         |
| 6  | Newsletter               | Footer + blog end                      | Inline form                                     | Email only                             |
| 7  | Downloadable Guides      | `/downloads`, article CTAs             | Gated PDF                                       | Name, email, company                   |
| 8  | Quotation Request        | Product pages, `/contact/quote`        | Per-product or generic                          | Product(s), qty, site, contact         |
| 9  | Maintenance Request      | `/services/maintenance`                | Form                                            | Site address, system size, issue, contact |
| 10 | Repair Request           | `/services/solar-inverter-repair`, `/contact/repair` | Repair intake                       | Brand, model, fault, photo upload      |
| 11 | Live Chat                | All pages, bottom-right                | Tawk.to / Intercom                              | Free text → agent handoff              |
| 12 | WhatsApp                 | Sticky button (mobile) + footer        | `wa.me` deep link                               | Pre-filled message                     |

### 5.2 Lead Flow Diagram (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              VISITOR                                     │
└─────────────────────────────────────┬───────────────────────────────────┘
                                      │
            ┌─────────────────────────┼─────────────────────────┐
            ▼                         ▼                         ▼
     [Browse page]              [Calculator]              [Download CTA]
            │                         │                         │
            ▼                         ▼                         ▼
     Lead CTA clicked           Result gated               Email gate
            │                         │                         │
            └────────────┬────────────┴────────────┬────────────┘
                         ▼                         ▼
                ┌────────────────┐         ┌────────────────┐
                │  Form (RHF +   │         │ WhatsApp /     │
                │  Zod)          │         │ Live Chat      │
                └───────┬────────┘         └───────┬────────┘
                        │                          │
                        ▼                          │
              ┌──────────────────┐                 │
              │ Server Action    │                 │
              │ /api/lead        │                 │
              └──────┬───────────┘                 │
                     │                             │
        ┌────────────┼─────────────┬───────────────┘
        ▼            ▼             ▼
  ┌──────────┐ ┌──────────┐ ┌────────────┐
  │ Prisma   │ │ Email    │ │ CRM webhook│
  │ Lead tbl │ │ (SMTP)   │ │ (HubSpot)  │
  └──────────┘ └──────────┘ └────────────┘
        │
        ▼
  ┌──────────────────────┐
  │ Lead scoring (Zustand│
  │ + server rules)      │
  │ → routes to Sales /  │
  │   Engineering /      │
  │   Repair queue       │
  └──────────────────────┘
```

### 5.3 Lead Scoring Model

| Signal                         | Points | Notes                                  |
| ------------------------------ | ------ | -------------------------------------- |
| Visited `/services/*` ≥ 2      | 10     | High intent                            |
| Used a calculator              | 15     | Buyer-stage signal                     |
| Submitted quote form           | 30     | Bottom-of-funnel                       |
| Downloaded datasheet           | 8      | Mid-funnel                             |
| Returned within 7 days         | 10     | Engagement                             |
| Company email (not gmail)      | 5      | B2B signal                             |
| **Sum ≥ 40**                   | Hot    | Routed to sales within 1 hour          |
| **20–39**                      | Warm   | Nurturing sequence                     |
| **< 20**                       | Cold   | Newsletter only                        |

### 5.4 Progressive Profiling

First-touch forms ask: `name + email`. Subsequent forms in the same browser (cookie
`pe_lead_id`) progressively ask: `phone → company → system size → budget → timeline`.
Returning visitors see pre-filled forms.

### 5.5 Compliance

- GDPR/PEPL consent banner before any non-essential form.
- Checkbox: "I agree to be contacted about my inquiry."
- Marketing opt-in is **separate** and optional.
- All leads stored encrypted at rest; 30-day retention for IP/user-agent.

---

## 6. Interactive Engineering Tools

### 6.1 Strategy

Calculators are **lead magnets**: each computes a useful result, but the **detailed report**
(generated client-side or via a Server Action) is gated behind an email. Each tool page also
doubles as a long-tail SEO landing page (`/tools/[slug]`).

### 6.2 Calculator Inventory

| #  | Tool                       | URL                              | Computes                                | Key Inputs                                            | Key Output(s)                                            | Core Formula                                                                                       | Lead Capture                                   |
| -- | -------------------------- | -------------------------------- | --------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1  | Solar System Size          | `/tools/solar-system-size`       | Required PV array size (kWp)            | Daily Wh consumption, sun hours, system losses (%)    | kWp, # panels, roof area (m²)                            | `kWp = (Wh/day) / (PeakSunHours × (1 − losses))`                                                   | Email → full sizing report PDF                 |
| 2  | Battery Capacity           | `/tools/battery-capacity`        | Battery bank Ah & kWh                   | Load (W), backup hours, system V, DoD (%)             | Ah, kWh, # batteries series/parallel                     | `Ah = (W × h) / (V × DoD × inverter_eff)`                                                          | Email → battery spec sheet                     |
| 3  | Cable Size                 | `/tools/cable-size`              | Required copper cable cross-section     | Current (A), length (m), allowable drop (V)           | AWG / mm², voltage drop (V), % drop                      | `A = (2 × I × L × ρ) / V_drop`  (ρ = 0.0175 Ω·mm²/m for Cu)                                        | Email → cable bill of materials               |
| 4  | Voltage Drop               | `/tools/voltage-drop`            | Voltage drop & % loss                   | Current, length, cross-section, phases                | V_drop, % loss, power loss (W)                           | `V_drop = (2 × L × I × ρ) / A`                                                                      | Inline result; email → full report             |
| 5  | Solar Angle                | `/tools/solar-angle`             | Optimal tilt & azimuth by lat           | Latitude                                              | Tilt (°) summer/winter/annual, azimuth (°)               | `Tilt_annual ≈ Latitude`; `Tilt_winter = Lat + 15°`; `Tilt_summer = Lat − 15°`                     | Email → seasonal angle calendar               |
| 6  | Panel Tilt                 | `/tools/panel-tilt`              | Energy yield at given tilt              | Tilt, azimuth, lat, system size                       | Annual kWh, monthly yield table                          | Irradiance integration via PVGIS-like API (or simplified `I(tilt) = I_max × cos(θ_incidence)` )    | Email → yield comparison chart                |
| 7  | Energy Consumption         | `/tools/energy-consumption`      | Daily/monthly Wh                        | Appliance list (W × qty × h/day)                      | Wh/day, kWh/month, peak W                                | `Wh/day = Σ (W_i × qty_i × h_i)`                                                                   | Inline; exports to system-size tool            |
| 8  | Backup Time                | `/tools/backup-time`             | Runtime on battery                      | Battery Ah, system V, load (W), inverter eff          | Hours of runtime                                         | `t = (Ah × V × DoD × η) / W`                                                                       | Inline; email → battery sizing recommendation |
| 9  | ROI                        | `/tools/roi`                     | Payback period & NPV                    | System cost, annual savings, tariff, discount rate    | Payback (yrs), 25-yr NPV, IRR                            | `NPV = Σ (Savings_t / (1+r)^t) − C_0` ; Payback when cumulative savings ≥ C_0                       | Email → ROI report + financing options        |
| 10 | Microgrid Cost Estimator   | `/tools/microgrid-cost-estimator`| Project budget estimate (range)        | Load profile, autonomy days, PV size, battery, gen    | Low/mid/high cost (USD), itemized                        | Bottom-up cost model: `Σ (qty_i × unit_cost_i) × (1 + soft_cost %)`                                | Email → itemized quote + consultation booking |

### 6.3 Tool Architecture

- **Client-side**: React Hook Form + Zod input schema → calculation in TS module under
  `src/lib/calculators/*.ts` (pure, unit-tested).
- **Server Action**: `submitToolLead(input, result)` writes to `Lead` table, returns a
  signed URL to download the full PDF report (rendered via `@react-pdf/renderer`).
- **State**: Zustand store `useCalculatorStore` keeps last result for cross-tool chaining
  (e.g., consumption → system size → battery).
- **Persistence**: Anonymous results cached in `localStorage`; on email submit, migrated to
  server `Lead` record.

### 6.4 Tool Page SEO Template

Each tool page contains: H1 with intent (`"Solar System Size Calculator"`), 200-word intro
explaining what the tool does and the formula, the interactive tool, a 600-word "How it
works" section, FAQ (4 Q&As), and related-articles list (3 from Knowledge Center).

---

## 7. SEO Strategy

### 7.1 Topical Authority Design

Parsa Energy owns **four pillar topics** aligned with business lines:

1. **Solar Microgrids** (pillar: `/knowledge/microgrids`)
2. **Solar Inverter & Electronics Repair** (pillar: `/services/solar-inverter-repair`)
3. **Battery & Energy Storage** (pillar: `/knowledge/battery-technologies`)
4. **Solar Engineering Calculations** (pillar: `/knowledge/engineering-calculations`)

Each pillar has 12–20 supporting cluster articles (see §4.3) that **link up to the pillar**
and **across to siblings**. Pillars link down to clusters and to commercial pages (services,
products, tools).

### 7.2 Pillar Pages

| Pillar                            | URL                                            | Cluster size | Word count | Links to commercial |
| --------------------------------- | ---------------------------------------------- | ------------ | ---------- | ------------------- |
| Solar Microgrids 101              | `/knowledge/microgrids`                        | 18 articles  | 3,500+     | 4 services, 2 tools |
| Solar Inverter & Board Repair     | `/services/solar-inverter-repair` (extended)   | 12 articles  | 3,000+     | 2 services, 1 tool  |
| Battery & Energy Storage          | `/knowledge/battery-technologies`              | 14 articles  | 3,200+     | 2 services, 2 tools |
| Solar Engineering Calculations    | `/knowledge/engineering-calculations`          | 10 articles  | 2,800+     | 10 tools            |

### 7.3 Internal Linking Strategy

- **Hub-and-spoke**: every cluster article links to its pillar (1×) and to ≥2 siblings.
- **Commercial bridging**: every cluster article links to ≥1 service or product page.
- **Anchor text rules**: descriptive, varied, never keyword-stuffed; ≤ 5 words.
- **Footer "Related" block**: server-rendered, top-5 by semantic similarity (cosine on
  embedding vectors stored in CMS).
- **Orphan check**: CI script (`scripts/check-internal-links.ts`) fails build if any page
  has < 2 inbound internal links.

### 7.4 Breadcrumb Strategy

Every page renders a `BreadcrumbList` JSON-LD matching its URL path:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://parsaenergy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Knowledge", "item": "https://parsaenergy.com/knowledge" },
    { "@type": "ListItem", "position": 3, "name": "Inverters", "item": "https://parsaenergy.com/knowledge/inverters" },
    { "@type": "ListItem", "position": 4, "name": "Sizing a Solar Inverter", "item": "https://parsaenergy.com/knowledge/inverters/sizing-a-solar-inverter" }
  ]
}
```

Visual breadcrumb component sits above H1 on every page except Home.

### 7.5 Schema Strategy

| Page type        | Schema types applied                                       |
| ---------------- | ---------------------------------------------------------- |
| Home             | `Organization`, `WebSite`, `SearchAction`                  |
| Service          | `Service`, `FAQPage`, `BreadcrumbList`                     |
| Product          | `Product`, `Offer`, `BreadcrumbList`, optionally `Review`  |
| Project / Case Study | `CaseStudy`, `BreadcrumbList`                          |
| Article          | `TechArticle`/`Article`, `Person` (author), `FAQPage`, `BreadcrumbList` |
| FAQ              | `FAQPage`                                                  |
| Tool / Calculator| `SoftwareApplication`, `HowTo`, `FAQPage`                  |
| Video            | `VideoObject`                                              |
| How-To guide     | `HowTo` with `HowToStep`                                   |
| Local business   | `LocalBusiness` (if physical workshop shown)               |

A sitewide `Organization` graph links all entities via `@id` references to form a **Knowledge
Graph** (see §8).

### 7.6 Image SEO

- Format: **AVIF** first, WebP fallback, JPEG fallback (via Next.js `<Image>`).
- `alt` text: descriptive, includes entity when natural; never keyword-stuffed.
- `width`/`height` set to prevent CLS.
- Filename: `solar-microgrid-installation-2024.jpg` (slug-style).
- `loading="lazy"` for below-the-fold; `priority` for LCP image.
- EXIF stripped; structured caption via `caption` field in CMS.
- `ImageObject` schema on hero images of articles.

### 7.7 Video SEO

- Self-host or YouTube with `VideoObject` schema.
- `thumbnailUrl`, `uploadDate`, `duration` (ISO 8601), `contentUrl` or `embedUrl`.
- Transcript published on page (boosts accessibility + LLM ingestion).
- Video sitemap at `/sitemap-video.xml`.

### 7.8 Technical SEO

- **Core Web Vitals targets**: LCP < 1.8s · INP < 200ms · CLS < 0.05.
- **Caching**: ISR with tags; static assets 1-year immutable.
- **Fonts**: `next/font` self-hosted, `display=swap`, subset to latin.
- **JS budget**: ≤ 170 KB gzip initial; calculators code-split.
- **Sitemaps**: split into `sitemap-main.xml`, `sitemap-products.xml`, `sitemap-knowledge.xml`,
  `sitemap-tools.xml`, `sitemap-news.xml`.
- **Robots**: disallow `/api/*`, `/admin/*`, `/search?`; allow everything else.
- **Canonical**: every page self-canonical; paginated lists use `rel="next/prev"`.
- **Hreflang**: ready for `/en/` `/fa/` (future).
- **Redirects**: `next.config.ts` `redirects()` for renamed slugs; 301 only.

### 7.9 Core Web Vitals Strategy

| Metric | Target          | Tactics                                                       |
| ------ | --------------- | ------------------------------------------------------------- |
| LCP    | < 1.8s          | Hero image priority, AVIF, ISR, edge CDN                      |
| INP    | < 200ms         | React 19, deferred non-critical JS, `requestIdleCallback`     |
| CLS    | < 0.05          | Reserve image dimensions, sticky element reserves, no font swap shift |
| TTFB   | < 600ms         | Edge runtime, KV cache for CMS responses                      |
| FID    | n/a (replaced)  | —                                                             |

### 7.10 Programmatic SEO

Generate **comparison pages** from CMS data:

```
/knowledge/compare/[a]-vs-[b]      e.g. /knowledge/compare/lifepo4-vs-lead-acid
/products/compare/[a]-vs-[b]       e.g. /products/compare/victron-mppt-vs-epsolar-mppt
/services/[city]/[service]         e.g. /services/tehran/solar-inverter-repair  (geo pages)
```

Each generated page: unique H1 + intro, comparison table (data-driven), FAQ, canonical,
internal links. CI linter rejects pages with thin content (< 600 words or duplicate intro
hash).

---

## 8. AI Search Optimization

AI search engines (Google AI Overview, ChatGPT, Perplexity, Gemini, Claude) reward content
that is **machine-readable, citation-friendly, and entity-rich**. The architecture is
designed from day one to be ingested by LLMs.

### 8.1 Strategy Pillars

| Pillar                       | Implementation                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| Semantic HTML                | Use `<article>`, `<section>`, `<aside>`, `<nav>`, `<figure>`, `<time>` correctly   |
| Structured Content           | JSON-LD on every page; consistent entity `@id` URIs                                |
| Q&A Sections                 | Every article & service ends with FAQ blocks; answer-first opening paragraph       |
| Entity-based Content         | Defined entities (Organization, Services, Tools, Authors) with stable `@id` URIs   |
| Schema.org Knowledge Graph   | Sitewide graph linking Organization → Services → Products → Articles → Authors     |
| Machine-readable pages       | `/llms.txt`, AI-friendly sitemap, embedded JSON-LD                                  |
| Chunk-friendly content       | Short paragraphs (≤ 4 sentences), H2/H3 every 200–300 words, clear topic boundaries |
| Knowledge Graph readiness    | Wikidata-aligned entity types; `sameAs` to LinkedIn, YouTube, Google Business      |
| Citation-friendly writing    | Direct factual statements with attribution; data sources cited inline              |
| LLM-friendly formatting      | Tables, bullet lists, definition lists; ASCII diagrams where appropriate           |

### 8.2 `/llms.txt` File

A markdown file at `/llms.txt` (industry convention) that gives LLMs a curated map of the
site's most important content:

```markdown
# Parsa Energy

Parsa Energy designs, installs, and maintains solar microgrid power plants,
off-grid and hybrid solar systems, and provides solar inverter & electronic
board repair services.

## Services
- /services/solar-plant-design
- /services/installation
- /services/solar-inverter-repair
- /services/electronic-board-repair
- /services/microgrid-consulting
- /services/battery-systems

## Engineering Tools (interactive)
- /tools/solar-system-size
- /tools/battery-capacity
- /tools/microgrid-cost-estimator

## Knowledge Center
- /knowledge/solar-basics
- /knowledge/microgrids
- /knowledge/inverters
- /knowledge/battery-technologies

## About
- /about
- /about/team
- /about/certifications
```

### 8.3 Knowledge Graph Implementation

Each major entity has a stable `@id` URI on `parsaenergy.com`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://parsaenergy.com/#organization",
      "name": "Parsa Energy",
      "url": "https://parsaenergy.com/",
      "logo": "https://parsaenergy.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/parsa-energy",
        "https://www.youtube.com/@parsaenergy",
        "https://twitter.com/parsaenergy"
      ],
      "knowsAbout": [
        "Solar Microgrids", "Off-grid Solar Systems",
        "Solar Inverter Repair", "Electronic Board Repair",
        "Battery Energy Storage"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://parsaenergy.com/services/solar-inverter-repair#service",
      "name": "Solar Inverter Repair",
      "provider": { "@id": "https://parsaenergy.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://parsaenergy.com/about/team/reza-parsa#person",
      "name": "Eng. Reza Parsa",
      "worksFor": { "@id": "https://parsaenergy.com/#organization" },
      "knowsAbout": ["Power Electronics", "Inverter Repair"]
    }
  ]
}
```

### 8.4 Chunk-friendly Content Rules

- **Short paragraphs**: ≤ 4 sentences, ≤ 80 words each.
- **Frequent headings**: H2 every 200–300 words; H3 every 100–150 words.
- **Definition lists** for glossary terms (`<dl><dt><dd>`).
- **Tables** for comparisons; LLMs parse them reliably.
- **One idea per paragraph**: keeps retrievable chunks coherent.
- **Atomic facts**: numeric facts stated once, e.g., "Parsa Energy has commissioned 120+ solar
  microgrid plants since 2014." — easy to cite verbatim.

### 8.5 Citation-friendly Writing

- State claims as standalone sentences, not buried in dependent clauses.
- Cite data sources inline: `"According to IEC 62446, ..."`
- Use direct, declarative voice.
- Provide explicit "Key takeaway" boxes summarizing each section.

### 8.6 Q&A Optimization (for AI Overviews)

Every article opens with a **direct answer paragraph** (40–60 words) to the article's
implicit question. This paragraph is what AI Overviews cite. Example:

> **How do you size a solar inverter?**
> Size a solar inverter by matching its DC input rating to 1.0–1.3× the PV array's STC
> wattage, ensuring the array voltage stays within the inverter's MPPT range across all
> operating temperatures, and verifying the AC output doesn't exceed the grid or load
> connection limit. For Parsa Energy projects we typically target a DC/AC ratio of 1.15.

### 8.7 Machine-readable Endpoints

| Endpoint                  | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `/llms.txt`               | Markdown index for LLM crawlers                      |
| `/sitemap.xml`            | XML sitemap index                                    |
| `/api/v1/entities.jsonld` | JSON-LD dump of all entities (for KG builders)       |
| `/api/v1/faq.json`        | Aggregated FAQ list (Q/A pairs) for AI training      |
| `/robots.txt`             | Explicit `Allow: /` for `GPTBot`, `ClaudeBot`, `PerplexityBot` |

### 8.8 LLM Crawler Allowlist (`robots.txt`)

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /search?
```

---

## 9. Database & CMS Structure

### 9.1 Headless CMS Comparison & Recommendation

| CMS            | License   | Self-host | Editor UX | Type system | i18n | API                | Best for                          |
| -------------- | --------- | --------- | --------- | ----------- | ---- | ------------------ | --------------------------------- |
| **Sanity**     | Proprietary (free tier) | No (SaaS) | Excellent | Strong (GROQ + TS) | Strong | REST + GROQ + GraphQL | Editorial teams, real-time        |
| **Contentful** | Proprietary | No        | Good      | Strong      | Strong | REST + GraphQL     | Enterprise, large orgs            |
| **Strapi**     | Open-source (MIT) | Yes      | Good      | Moderate    | Moderate | REST + GraphQL     | Self-hosted, full control         |
| **Payload CMS**| Open-source (MIT) | Yes      | Excellent | Excellent (TS-native) | Growing | REST + GraphQL + Local API | TypeScript-first teams        |
| **Hygraph**    | Proprietary (free tier) | No (SaaS) | Good      | Excellent (relational) | Strong | GraphQL             | Highly relational content         |

#### Recommendation: **Payload CMS**

**Justification:**

1. **TypeScript-native** — matches our stack (Next.js 16, TS, Prisma). Payload's local API
   can be called directly in Server Components with full type inference; no separate SDK
   needed.
2. **Self-hostable** — runs in the same Next.js process; no external SaaS dependency,
   reducing latency, cost, and GDPR/PEPL risk for Iranian operations.
3. **Local API** — Server Components can fetch content synchronously with zero network
   hop; ideal for ISR and edge.
4. **Block-based editor** — supports the rich content structures we need (spec tables,
   FAQ blocks, calculators embeds, CTAs).
5. **Access control & versioning** — built-in workflow, drafts, multi-role.
6. **Open-source (MIT)** — no per-seat license costs as team scales.
7. **First-class Next.js integration** — official plugin, app-router patterns documented.

> **Trade-off accepted**: Payload's cloud-hosted collaboration is younger than Sanity's,
> and the editor UX for non-technical content authors is slightly less polished. We mitigate
> with custom admin training and a strict content model.

> **Fallback**: If editorial collaboration becomes a bottleneck (e.g., 5+ concurrent authors
> across time zones), migrate to Sanity — the content model below is portable.

### 9.2 Prisma Schema Sketch (content model)

The following Prisma schema models the **production** data layer. In production, Payload CMS
uses its own Mongo/Postgres store; this Prisma schema is the **application's read model**
synced from Payload via webhook (or directly using Payload's Postgres adapter with Prisma as
a thin query layer). For the sandbox demo we use SQLite.

```prisma
// prisma/schema.prisma — Parsa Energy content model

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // production; sqlite for sandbox
  url      = env("DATABASE_URL")
}

// ─── Taxonomy ────────────────────────────────────────────────────────────────

model Category {
  id          String    @id @default(cuid())
  slug        String    @unique
  name        String
  description String?
  type        CategoryType // service | product | knowledge | project | download
  parentId    String?
  parent      Category?  @relation("CategoryTree", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryTree")
  order       Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  services    Service[]
  products    Product[]
  articles    Article[]
  projects    Project[]
  downloads   Download[]

  @@index([type, parentId])
}

enum CategoryType {
  SERVICE
  PRODUCT
  KNOWLEDGE
  PROJECT
  DOWNLOAD
  FAQ
}

model Tag {
  id        String     @id @default(cuid())
  slug      String     @unique
  name      String
  articles  Article[]
  products  Product[]
}

// ─── Content ─────────────────────────────────────────────────────────────────

model Service {
  id              String   @id @default(cuid())
  slug            String   @unique
  title           String
  summary         String   @db.VarChar(500)
  heroImage       String?
  heroVideoUrl    String?
  heroCtaLabel    String
  heroCtaHref     String
  body            Json     // Portable Text / MDX blocks
  processSteps    Json     // [{title, description, icon}]
  faq             Json     // [{q, a}]
  seo             Json?    // {title, description, ogImage, canonical, noindex}
  categoryId      String
  category        Category @relation(fields: [categoryId], references: [id])
  relatedServices Service[] @relation("RelatedServices")
  relatedProjectIds String[]
  published       Boolean  @default(false)
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  leads Lead[]
  @@index([categoryId, published])
}

model Product {
  id              String   @id @default(cuid())
  slug            String   @unique
  sku             String   @unique
  name            String
  shortDescription String  @db.VarChar(300)
  longDescription String
  brandId         String
  brand           Brand    @relation(fields: [brandId], references: [id])
  categoryId      String
  category        Category @relation(fields: [categoryId], references: [id])
  images          String[] // ordered list
  specifications  Json     // [{group, fields:[{name,value,unit}]}]
  applications    String[] // use case slugs
  datasheetUrl    String?
  manualUrl       String?
  videos          Json?    // [{title, url, duration}]
  installGuide    Json?    // HowTo steps
  faq             Json?
  relatedProductIds String[]
  relatedArticleIds String[]
  seo             Json?
  priceOnRequest  Boolean  @default(true)
  currency        String   @default("USD")
  published       Boolean  @default(false)
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  tags Tag[]
  leads Lead[]

  @@index([categoryId, published])
  @@index([brandId])
}

model Brand {
  id          String    @id @default(cuid())
  slug        String    @unique
  name        String
  logoUrl     String?
  country     String?
  websiteUrl  String?
  description String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  products Product[]
}

model Project {
  id           String   @id @default(cuid())
  slug         String   @unique
  title        String
  client       String?
  location     String
  capacityKwp  Float?
  systemType   String   // off-grid | hybrid | grid-tie | microgrid
  completedAt  DateTime?
  duration     String?
  summary      String   @db.VarChar(500)
  challenge    String?
  solution     String?
  results      Json?    // [{metric, value, unit}]
  gallery      String[]
  testimonialId String?
  testimonial  Testimonial? @relation(fields: [testimonialId], references: [id])
  categoryId   String
  category     Category @relation(fields: [categoryId], references: [id])
  published    Boolean  @default(false)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([categoryId, published])
}

model Testimonial {
  id         String   @id @default(cuid())
  clientName String
  clientRole String?
  clientCompany String?
  avatarUrl  String?
  quote      String
  rating     Int      @default(5)
  projectId  String?  @unique
  project    Project?
  approved   Boolean  @default(false)
  createdAt  DateTime @default(now())
}

model Article {
  id           String   @id @default(cuid())
  slug         String   @unique
  title        String
  summary      String   @db.VarChar(300)
  body         Json     // MDX or Portable Text
  coverImage   String?
  categoryId   String
  category     Category @relation(fields: [categoryId], references: [id])
  authorId     String
  author       Author   @relation(fields: [authorId], references: [id])
  tags         Tag[]
  faq          Json?
  relatedArticleIds String[]
  readingTime  Int?
  seo          Json?
  published    Boolean  @default(false)
  publishedAt  DateTime?
  updatedAt    DateTime @updatedAt
  createdAt    DateTime @default(now())

  @@index([categoryId, publishedAt])
  @@index([authorId])
}

model Author {
  id           String   @id @default(cuid())
  slug         String   @unique
  name         String
  role         String
  bio          String?
  avatarUrl    String?
  linkedinUrl  String?
  email        String?
  createdAt    DateTime @default(now())

  articles Article[]
}

model Download {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  description String?
  fileUrl     String
  fileType    String   // pdf | docx | xlsx | dwg | zip
  fileSizeKb  Int
  gated       Boolean  @default(false) // email required?
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  downloadCount Int    @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  leads Lead[]
}

model FAQ {
  id         String   @id @default(cuid())
  slug       String   @unique
  question   String
  answer     String
  categoryId String?
  category   Category? @relation(fields: [categoryId], references: [id])
  published  Boolean  @default(true)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

// ─── Lead Generation ─────────────────────────────────────────────────────────

model Lead {
  id          String   @id @default(cuid())
  type        LeadType
  source      String   // page URL where form was submitted
  name        String?
  email       String?
  phone       String?
  company     String?
  message     String?
  payload     Json     // full form data
  score       Int      @default(0)
  status      LeadStatus @default(NEW)
  productId   String?
  product     Product? @relation(fields: [productId], references: [id])
  serviceId   String?
  service     Service? @relation(fields: [serviceId], references: [id])
  downloadId  String?
  download    Download? @relation(fields: [downloadId], references: [id])
  calculatorResult Json?
  ipHash      String?
  userAgent   String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([type, status, createdAt])
  @@index([email])
}

enum LeadType {
  CONSULTATION
  QUOTE
  CALLBACK
  REPAIR
  MAINTENANCE
  NEWSLETTER
  DOWNLOAD
  CONSULTING
  WIZARD
  CALCULATOR
  CHAT
  WHATSAPP
}

enum LeadStatus {
  NEW
  CONTACTED
  QUALIFIED
  WON
  LOST
  SPAM
}

// ─── System ──────────────────────────────────────────────────────────────────

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      UserRole @default(EDITOR)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum UserRole {
  ADMIN
  EDITOR
  AUTHOR
  SALES
  ENGINEER
}
```

### 9.3 Sync Architecture (Payload → Prisma)

```
┌──────────────┐  webhook   ┌─────────────────┐  upsert   ┌────────────┐
│ Payload CMS  │ ─────────► │ /api/revalidate │ ────────► │ Prisma DB  │
│ (Postgres)   │            │ (Server Action) │           │ (read model)│
└──────────────┘            └─────────────────┘           └────────────┘
                                                                  │
                                                                  ▼
                                                          ┌──────────────┐
                                                          │ ISR revalidate│
                                                          │ (tag-based)  │
                                                          └──────────────┘
```

- Payload publishes content → fires webhook → `/api/revalidate` updates Prisma read model
  and calls `revalidateTag(slug)`.
- Public site reads **only** from Prisma (never directly from Payload) for performance and
  caching simplicity.

---

## 10. Component Library

All components live under `src/components/`. shadcn/ui primitives under `src/components/ui/`.
Composite components under `src/components/blocks/`.

| Component                | Purpose                                                        | Key Props                                                                                                  |
| ------------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Hero`                   | Page hero with title, sub, CTA, media                          | `title`, `subtitle`, `cta: {label, href}[]`, `media?: {image\|video}`, `variant`                           |
| `CtaBand`                | Full-width conversion band                                     | `title`, `description`, `primary`, `secondary`, `tone: "blue"\|"orange"\|"dark"`                            |
| `ServiceCard`            | Service link card with icon, title, summary                    | `service: Service`, `icon`                                                                                  |
| `ProductCard`            | Product preview card                                           | `product: Product`, `showPrice?`                                                                            |
| `ProjectCard`            | Project showcase card with image overlay                       | `project: Project`, `aspect?`                                                                               |
| `ArticleCard`            | Knowledge/blog article card                                    | `article: Article`, `showAuthor?`, `showDate?`                                                              |
| `FeatureGrid`            | Responsive grid of icon+title+desc items                       | `items: {icon, title, description}[]`, `columns`                                                            |
| `ProcessTimeline`        | Horizontal or vertical step timeline                           | `steps: {title, description, icon}[]`, `orientation`                                                       |
| `FaqAccordion`           | Accordion FAQ block with schema injection                      | `items: {q, a}[]`, `schema?: boolean`                                                                       |
| `Gallery`                | Image carousel/lightbox                                        | `images: {url, alt, caption?}[]`, `layout: "carousel"\|"grid"`                                              |
| `TestimonialCard`        | Client testimonial with rating                                 | `testimonial: Testimonial`                                                                                  |
| `TestimonialCarousel`    | Multiple testimonials                                          | `items: Testimonial[]`                                                                                      |
| `StatsStrip`             | Row of big-number stats                                        | `stats: {value, label, suffix?}[]`                                                                          |
| `BrandLogos`             | Marquee of brand logos                                         | `brands: Brand[]`, `speed?`                                                                                 |
| `DownloadBox`            | Gated download card with email form                            | `download: Download`, `gated`                                                                               |
| `CalculatorShell`        | Layout wrapper for engineering tools                           | `title`, `description`, `children`, `resultSlot`                                                            |
| `FormField`              | RHF + Zod form field wrapper                                   | `name`, `label`, `type`, `validation`                                                                       |
| `LeadForm`               | Configurable lead form (Server Action)                         | `type: LeadType`, `fields: Field[]`, `productId?`, `serviceId?`                                             |
| `SearchBox`              | Site search with cmdk                                          | `placeholder`, `variant: "nav"\|"page"`                                                                     |
| `SearchResults`          | Search results list                                            | `query`, `results`                                                                                          |
| `Breadcrumb`             | Breadcrumb with schema                                         | `items: {name, url}[]`                                                                                      |
| `TableOfContents`        | Sticky TOC from H2s                                            | `items: {id, label, level}[]`                                                                               |
| `AuthorBox`              | Author bio card with `Person` schema                           | `author: Author`                                                                                            |
| `ArticleBody`            | MDX renderer with custom components                            | `content: MDX`, `components`                                                                                |
| `ComparisonTable`        | Generic comparison table                                       | `columns: string[]`, `rows: Cell[][]`                                                                       |
| `PricingTier`            | Service plan tier card                                         | `tier: {name, price, features[], cta}`                                                                      |
| `ProjectShowcase`        | Large alternating image/text project feature                   | `project`, `reverse?`                                                                                       |
| `CalculatorWidget`       | Embeddable mini calculator (for use on other pages)            | `tool: ToolId`, `compact?`                                                                                  |
| `LiveChat`               | Tawk.to / Intercom launcher                                    | `provider`, `options`                                                                                       |
| `WhatsAppButton`         | Floating WhatsApp CTA                                          | `phone`, `prefilledMessage`                                                                                 |
| `CookieConsent`          | GDPR banner                                                   | `policyUrl`                                                                                                 |
| `NewsletterForm`         | Email-only newsletter signup                                   | `endpoint`                                                                                                  |
| `NotFound`               | 404 layout with search + top links                             | `links`                                                                                                     |
| `MaintenanceBanner`      | Site-wide dismissible banner                                   | `message`, `tone`                                                                                           |
| `JsonLd`                 | Server component injecting `<script type="application/ld+json">` | `data: object \| object[]`                                                                                  |
| `BreadcrumbsSchema`      | Auto-generates `BreadcrumbList` from path                      | `items: {name, url}[]`                                                                                      |

### 10.1 Component Naming Conventions

- PascalCase, one component per file.
- Composable: `<Hero.Cta>`, `<Card.Header>` where idiomatic.
- Props typed via `interface` (not inline `type`) for editor hover quality.
- All composite components accept `className` and spread `...rest` to root.

### 10.2 Storybook

Every composite component has a `.stories.tsx` file under `src/components/blocks/__stories__/`.
Storybook runs in CI; visual regression via Chromatic.

---

## 11. Design System

### 11.1 Color Palette

Brand colors are foundational; the rest of the palette is built around them using OKLCH.

| Token            | Light            | Dark             | Usage                                  |
| ---------------- | ---------------- | ---------------- | -------------------------------------- |
| `--brand-blue`   | `#3498db`        | `#4aa8e8`        | Primary actions, links, brand accents  |
| `--brand-orange` | `#e74c3c`        | `#ff6450`        | Primary CTAs, highlights, urgency      |
| `--brand-blue-fg`| `#ffffff`        | `#0a1b2a`        | Text on blue background                |
| `--brand-orange-fg` | `#ffffff`     | `#1a0a08`        | Text on orange background              |
| `--background`   | `#ffffff`        | `#0a0f1a`        | Page background                        |
| `--foreground`   | `#0f172a`        | `#e2e8f0`        | Body text                              |
| `--muted`        | `#f1f5f9`        | `#1e293b`        | Muted surfaces, cards                  |
| `--muted-foreground` | `#64748b`     | `#94a3b8`        | Secondary text                         |
| `--border`       | `#e2e8f0`        | `#1e293b`        | Borders, dividers                      |
| `--success`      | `#16a34a`        | `#22c55e`        | Success states                         |
| `--warning`      | `#f59e0b`        | `#fbbf24`        | Warning states                         |
| `--destructive`  | `#dc2626`        | `#ef4444`        | Errors                                 |
| `--solar-yellow` | `#f7c948`        | `#ffd95c`        | Solar thematic accent (icons, charts)  |

Tailwind CSS 4 (`@theme`) registers these as CSS variables; `bg-brand-blue`,
`text-brand-orange`, etc. work out of the box.

### 11.2 Typography

| Role              | Font                | Weights       | Sizes (rem)                                                  |
| ----------------- | ------------------- | ------------- | ------------------------------------------------------------ |
| Display / H1      | Geist Sans          | 700           | clamp(2.25rem, 1.5rem + 3vw, 3.5rem)                         |
| H2                | Geist Sans          | 600           | clamp(1.5rem, 1.25rem + 1vw, 2rem)                           |
| H3                | Geist Sans          | 600           | 1.25rem                                                       |
| Body              | Geist Sans          | 400, 500      | 1rem (16px), line-height 1.6                                 |
| Small / Caption   | Geist Sans          | 400           | 0.875rem                                                      |
| Code / Mono       | Geist Mono          | 400, 500      | 0.9em                                                         |
| Numerals (specs)  | Geist Mono (tabular)| 500           | tabular-nums for spec tables and calculator outputs          |

- Farsi (RTL, future): Vazirmatn via `next/font/google`, swapped via `lang="fa"`.
- All headings have `text-wrap: balance` for nicer line breaks.

### 11.3 Spacing & Grid

- Base unit: **4px** (`--space-1 = 0.25rem`).
- Spacing scale: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24` (×4px).
- Container max width: **1280px** with 24px horizontal padding (mobile 16px).
- Grid: 12-column desktop, 8-column tablet, 4-column mobile.
- Section vertical rhythm: `py-16 md:py-24` between major sections.

### 11.4 Iconography

- **lucide-react** for UI icons (already in stack).
- Custom solar/engineering icons (panel, inverter, battery, microgrid, multimeter) as SVG
  components in `src/components/icons/`.
- Stroke 1.5px default; 24×24 viewBox; `currentColor` for theming.
- Brand logo: dual-arc mark + wordmark, served as inline SVG for color theming.

### 11.5 Accessibility (WCAG 2.2 AA)

- Color contrast: ≥ 4.5:1 body, ≥ 3:1 large text & UI components.
- All interactive elements keyboard-accessible with visible focus ring
  (`:focus-visible` outline 2px brand-blue).
- Skip-to-content link on every page.
- `aria-label` on icon-only buttons; `aria-current` on active nav.
- Form errors announced via `aria-live="polite"`.
- Motion: respect `prefers-reduced-motion` (disable Framer Motion animations).
- All images have `alt` (decorative → `alt=""`).
- Heading hierarchy: never skip levels; one H1 per page.
- Tested with axe-core in CI; Lighthouse a11y ≥ 95.

### 11.6 Dark Mode

- Default: light. Respects system preference via `next-themes`.
- Toggle in header; preference persisted in `localStorage`.
- All brand colors have darker-mode variants (see §11.1).
- Images: hero images have dark variants or strong overlay to ensure text contrast.
- Diagrams/infographics: provide dark-mode SVGs with `currentColor` strokes.

### 11.7 Motion & Micro-interactions

- Framer Motion for entrance animations (`fade-up`, `stagger`), kept < 400ms.
- Hover states: subtle `translateY(-2px)` + shadow on cards.
- No auto-playing video with sound. Hero video muted + `playsinline`.

---

## 12. Future Roadmap

### 12.1 Five-Year Evolution

| Year | Theme                      | Key Initiatives                                                                                          | Outcome                                                |
| ---- | -------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Y1   | Foundation & Authority     | Launch full multi-page site; Knowledge Center 50+ articles; 10 engineering tools; headless CMS migration | Topical authority in solar engineering; lead flow live |
| Y2   | Customer Portal            | Authenticated portal for clients: project status, contracts, invoices, monitoring dashboards, ticket history | Reduce support load; increase retention                |
| Y3   | IoT & Predictive Maintenance | Real-time IoT data ingestion from inverters/BMS; predictive maintenance alerts; anomaly detection ML     | Service revenue + uptime SLA product                   |
| Y4   | Marketplace & Training     | Online equipment marketplace (multi-vendor); LMS for installer training & certification                   | New revenue lines; partner ecosystem                   |
| Y5   | AI Agents & Knowledge Graph| Autonomous AI agent for site design, quotation, troubleshooting chat; full semantic KG of all assets       | AI-first differentiator; defensible data moat          |

### 12.2 Initiative Details

#### Y2 — Customer Portal

- NextAuth.js (already in deps) with role-based access (`CLIENT`, `INSTALLER`, `ADMIN`).
- Routes: `/portal`, `/portal/projects/[id]`, `/portal/invoices`, `/portal/tickets`,
  `/portal/monitoring`.
- Powered by existing Prisma models + new `ProjectMembership`, `Invoice`, `Ticket`.

#### Y3 — IoT Monitoring Dashboard

- Ingest via MQTT broker → time-series DB (TimescaleDB or InfluxDB).
- Real-time charts with Recharts (already in deps) + WebSocket (examples present in repo).
- Alerts → portal notification + WhatsApp/SMS.
- Predictive maintenance: anomaly detection (Isolation Forest / Prophet) on yield and
  inverter telemetry; trained models served via `/api/v1/predict`.

#### Y4 — Equipment Marketplace

- Multi-vendor catalog (extends `Product` with vendor-owned records).
- Vendor portal for self-service product management.
- Cart → quote request → fulfillment workflow.
- LMS (Moodle-style or custom Next.js + Prisma) for certified installer training, with
  badging tied to `User.role`.

#### Y5 — AI Agents & Knowledge Graph

- **AI Agent**: LLM-driven assistant available on every page; can:
  - Answer technical questions from Knowledge Center (RAG).
  - Generate draft quotations from `tools/microgrid-cost-estimator` + CRM data.
  - Triage repair requests from photo + symptom (vision model).
- **Knowledge Graph**: All content (services, products, projects, articles, tools, leads)
  stored as a unified RDF/JSON-LD graph; enables:
  - Cross-sell recommendations
  - Automated internal linking
  - Rich LLM-grounding for AI search
- **API Ecosystem**: Public REST/GraphQL API for partners, IoT vendors, and government
  energy platforms; OAuth2 + rate limits + usage analytics.

### 12.3 Cross-Year Enablers

| Enabler                       | Started in | Matures in |
| ----------------------------- | ---------- | ---------- |
| Headless CMS + structured content | Y1     | Y3         |
| Schema.org Knowledge Graph    | Y1         | Y5         |
| Lead scoring & CRM webhook    | Y1         | Y2         |
| Server Actions / API platform | Y1         | Y5         |
| IoT telemetry pipeline        | Y3         | Y5         |
| RAG over Knowledge Center     | Y4         | Y5         |

### 12.4 Risk & Mitigation

| Risk                                    | Mitigation                                                              |
| --------------------------------------- | ----------------------------------------------------------------------- |
| CMS lock-in                             | Portable content model (Payload → Sanity fallback designed in)           |
| AI hallucination on technical claims    | RAG with strict citation; human-in-the-loop for quotations              |
| IoT data privacy                        | On-prem ingestion; client-consented data only; encryption at rest       |
| Marketplace fraud                       | Vendor KYC, escrow payments, ratings & reviews                          |
| Search algorithm shifts                 | Diversified channels: SEO + AI search + direct + partner referrals      |

---

## Appendix A — Sandbox → Production Route Mapping

The current sandbox deploys the entire experience at `/` (single-page). Each section of that
page corresponds to one or more production routes:

| Sandbox section (`/#anchor`)         | Production route(s)                                  |
| ------------------------------------ | ---------------------------------------------------- |
| `#hero`                              | `/`                                                  |
| `#services`                          | `/services` + `/services/[slug]`                     |
| `#products`                          | `/products` + `/products/[slug]`                     |
| `#projects`                          | `/projects` + `/projects/[slug]`                     |
| `#knowledge`                         | `/knowledge` + `/knowledge/[cat]/[slug]`             |
| `#tools` (calculators)               | `/tools/[slug]`                                      |
| `#about`                             | `/about` + sub-routes                                |
| `#contact`                           | `/contact` + `/contact/*`                            |
| `#faq`                               | `/faq`                                               |

When the multi-page deployment goes live, anchor links in the sandbox page are rewritten to
`<Link href="/route">` by a small codemod (`scripts/sandbox-to-prod-links.ts`).

## Appendix B — Reference URLs (Quick Index)

```
/                                            Home
/services                                    Services hub
/services/solar-inverter-repair              Example service
/services/electronic-board-repair            Example service
/products                                    Products hub
/products/[slug]                             Product detail
/products/brands/[brand]                     Brand page
/products/brands/[brand]/[category]          Programmatic SEO page
/projects                                    Projects hub
/projects/[slug]                             Project case study
/knowledge                                   Knowledge Center
/knowledge/[category]                        Category landing
/knowledge/[category]/[slug]                 Article
/knowledge/inverters/sizing-a-solar-inverter Example article
/knowledge/compare/[a]-vs-[b]                Comparison page
/blog                                        Blog index
/blog/[slug]                                 Blog post
/case-studies                                Case study hub
/downloads                                   Downloads hub
/downloads/datasheets                        Datasheet filter
/faq                                         FAQ hub
/contact                                     Contact
/contact/quote                               Quote request
/contact/callback                            Callback request
/contact/repair                              Repair intake
/contact/consultation                        Free consultation
/careers                                     Careers
/careers/[job-slug]                          Job detail
/tools                                       Tools hub
/tools/solar-system-size                     Example tool
/tools/battery-capacity                      Example tool
/tools/cable-size                            Example tool
/tools/voltage-drop                          Example tool
/tools/solar-angle                           Example tool
/tools/panel-tilt                            Example tool
/tools/energy-consumption                    Example tool
/tools/backup-time                           Example tool
/tools/roi                                   Example tool
/tools/microgrid-cost-estimator              Example tool
/search                                      Site search
/legal/privacy                               Privacy policy
/legal/terms                                 Terms of service
/legal/cookies                               Cookie policy
/legal/warranty                              Warranty terms
/llms.txt                                    LLM crawler index
/sitemap.xml                                 XML sitemap index
/robots.txt                                  Robots
/404                                         Custom 404
```

---

**End of document.** Engineering team can begin implementation following §1 → §12 in order;
each section is self-sufficient with concrete URLs, schemas, component specs, and data models.
