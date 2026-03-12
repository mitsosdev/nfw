# NFW Landing Page Rework

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework nfw.gr into a modern, bold single-page landing for NFW gym (Pilates Reformer, Functional, Cardio) with dark theme and purple accents.

**Architecture:** Single-page landing with 6 sections (Hero, Services, About, Gallery, Contact, Footer). Server components for i18n, client components only for interactivity (gallery lightbox, mobile menu, scroll effects). All business data in constants.ts.

**Tech Stack:** Next.js 16, Tailwind CSS 4, shadcn/ui, next-intl (en/el), Lucide icons, Next.js Image

---

### Task 1: Constants & Translations Setup

**Files:**
- Create: `lib/general/constants.ts`
- Modify: `messages/en.json`
- Modify: `messages/el.json`
- Modify: `app/[locale]/globals.css` (add NFW brand colors)
- Modify: `app/[locale]/layout.tsx` (update metadata, font)

**Step 1:** Create constants.ts with all NFW business data (name, address, phone, email, social, services, Google Maps coords/embed).

**Step 2:** Replace translations in en.json and el.json with NFW content for all 6 sections.

**Step 3:** Add NFW brand color tokens to globals.css: --nfw-purple, --nfw-dark, plus smooth scrolling.

**Step 4:** Update layout.tsx metadata (title: "NFW - New Fitness Workout", description) and consider adding a bolder font (e.g., Inter or Montserrat).

**Step 5:** Run `pnpm tsc --noEmit && pnpm lint`. Fix errors.

---

### Task 2: Navbar Component

**Files:**
- Create: `components/navbar.tsx` (client component)

**Step 1:** Build fixed navbar: transparent over hero, solid bg on scroll. NFW logo left, nav links center (Services, About, Gallery, Contact), language/theme switchers + CTA right. Mobile: hamburger → slide-in panel.

**Step 2:** Screenshot and verify.

---

### Task 3: Hero Section

**Files:**
- Create: `components/landing/hero-section.tsx` (server)
- Create: `components/landing/hero-content.tsx` (client - for animations)

**Step 1:** Full-viewport hero with ig-post-13.jpg as background (dark overlay). NFW logo centered, "IN HERE WE ALL FIT" tagline, "Ξεκίνα Σήμερα" CTA button. Subtle scroll indicator.

**Step 2:** Screenshot and verify.

---

### Task 4: Services Section

**Files:**
- Create: `components/landing/services-section.tsx` (server)

**Step 1:** 3 service cards in a row: Pilates Reformer (ig-post-08), Functional (ig-post-10), Cardio (ig-post-09). Each card: photo bg with dark gradient overlay, service name, short description. Hover effect: slight zoom.

**Step 2:** Screenshot and verify.

---

### Task 5: About Section

**Files:**
- Create: `components/landing/about-section.tsx` (server)

**Step 1:** Split layout — left: ig-post-07.jpg (diverse group), right: text about NFW philosophy, "IN HERE WE ALL FIT" emphasis, trainers mention.

**Step 2:** Screenshot and verify.

---

### Task 6: Gallery Section

**Files:**
- Create: `components/landing/gallery-section.tsx` (server wrapper)
- Create: `components/landing/gallery-grid.tsx` (client - lightbox)

**Step 1:** Masonry-style grid of best Instagram photos. Click to open lightbox. Instagram follow CTA.

**Step 2:** Screenshot and verify.

---

### Task 7: Contact Section

**Files:**
- Create: `components/landing/contact-section.tsx` (server)

**Step 1:** Google Maps embed left, contact info right (address, phone, email, hours). Instagram link. Clean card layout.

**Step 2:** Screenshot and verify.

---

### Task 8: Footer & Page Assembly

**Files:**
- Modify: `components/footer.tsx`
- Modify: `app/[locale]/page.tsx`

**Step 1:** Update footer with NFW branding, social links, copyright. Assemble all sections in page.tsx with navbar.

**Step 2:** Full page screenshot and verify all sections.

---

### Task 9: Final Polish

**Step 1:** Run `pnpm lint && pnpm tsc --noEmit`. Fix all errors.
**Step 2:** Full screenshot at 1280px. Visual review.
**Step 3:** Commit.
