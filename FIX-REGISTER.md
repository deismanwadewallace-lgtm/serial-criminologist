# Serial Criminologist — Fix Register

Site: https://serialcriminologist.ca
Opened: 19 June 2026
Last updated: 23 June 2026 (Cycles 4–7 + maintenance sweep)

Verification note: Claude's fetcher served a cached snapshot through Cycle 1 and kept showing the pre-fix state even with cache-busting query strings. Ground truth was confirmed by the author in an incognito browser window. RULE FOR THIS LOOP: when Claude's fetch disagrees with an incognito load, incognito wins. Use incognito (or a hard-refresh on the author's side) as the verification source until the fetcher cache clears.

---

## Page inventory and which navigation each page carries

Arch A = old 7-item nav (had Home). Arch B = expanded nav. Canonical going forward = Arch B + Home, propagated to all content pages.

| Page | Exists | Nav (post-Cycle 1) | Notes |
|---|---|---|---|
| index.html | yes | B + Home | Hero CTAs repointed to understanding-crime.html and about.html |
| about.html | yes | B + Home | Einstein aphorism removed |
| criminology.html | yes (stub?) | — | Duplicate retired; redirect-stub disposition deferred |
| received-view.html | yes (stub) | — | Redirect-stub disposition deferred |
| approach.html | yes | B + Home | Anchor target public-criminology-approach-heading; keep/delete deferred |
| understanding-crime.html | yes | B + Home | Strongest page; broken dropdowns for Initiatives/Interventions/Events removed pending anchors |
| initiatives.html | yes | B + Home | Section content + anchors deferred |
| interventions.html | yes | B + Home | Section content + anchors deferred |
| op-eds.html | yes | B + Home | |
| manuscripts.html | yes | B + Home | |
| interviews.html | yes | B + Home | |
| courses.html | yes | B + Home | |
| resources.html | yes | B + Home | |
| events.html | yes | B + Home | Section content + anchors deferred |
| opportunities.html | yes | B + Home | |
| essays.html | yes | B + Home | Confirmed Arch B (Cycle 1) |
| media.html | yes | B + Home | Confirmed Arch B (Cycle 1) |
| podcast.html | yes | B + Home | Confirmed Arch B (Cycle 1) |
| substack.html | yes | B + Home | Confirmed Arch B (Cycle 1) |
| reels.html | yes | B + Home | Confirmed Arch B (Cycle 1) |
| memes.html | yes | B + Home | Confirmed Arch B (Cycle 1) |
| contact.html | yes | B + Home | Confirmed Arch B (Cycle 1) |

Nineteen content pages now carry the single canonical nav.

---

## Defect register

### CRITICAL

**C1 — Split navigation across the site.** FIXED
Canonical nav = Arch B + Home propagated to all 19 content pages. Broken dropdowns for Initiatives, Interventions, Events removed until their section anchors exist.

**C2 — received-view.html dead stub / homepage CTA dead-end.** FIXED
Both hero buttons now point to live canonical pages (understanding-crime.html, about.html).

**C3 — Content duplication: criminology.html vs understanding-crime.html.** FIXED
Duplicate retired; understanding-crime.html is canonical. Redirect-stub disposition deferred.

### HIGH

**H1 — "What Criminology Is" nav routed to weaker page.** FIXED

**H2 — Homepage CTAs / Explore cards.** FIXED
All targets land on live canonical pages.

### MEDIUM

**M1 — Footer nav split.** FIXED
Single shared footer.

**M2 — Borrowed Einstein aphorism on about.html.** FIXED / GONE
Removed.

### LOW

**L1 — Voice consistency.** FIXED

**L2 — em dashes in live copy.** FIXED
All U+2014 removed from body copy and meta descriptions; title separators converted to en dash.

### Additional fix completed in Cycle 1 (not in original register)

**A1 — Broken anchor.** FIXED
public-criminology-as-an-approach -> public-criminology-approach-heading in about.html, understanding-crime.html, approach.html.

---

## Cycle 1 verification

Author confirmed live state via incognito: single canonical nav, no dead links, no broken anchors, no em dashes. FIX-REGISTER.md saved and committed to the repo.

---

## Remaining (deferred to later cycles)

- [ ] Write actual content + section anchors for Initiatives, Interventions, Events, then restore their nav dropdowns.
- [ ] Fill the "Coming soon" sections on Understanding Crime (Popular and Scientific Approaches; Proof of Concept).
- [ ] Decide whether to keep or delete the approach.html, received-view.html, and criminology.html redirect stubs.

---

## Loop protocol

Each cycle: (1) confirm current live state, (2) apply fix, (3) re-verify, (4) update Status fields, (5) report what changed and what remains.
Verification source: incognito browser load or author hard-refresh takes precedence over Claude's fetcher whenever the two disagree.

---

## Domain and hosting (recorded 19 June 2026)

- Custom domain purchased: serialcriminologist.ca (registrar: Namecheap).
- Current host: GitHub Pages (deismanwadewallace-lgtm.github.io/serial-criminologist/).
- Plan: keep editing on the current host. Do the domain + host migration as ONE deliberate step AFTER content work (Cycles 2-3) is complete, to avoid breaking links mid-edit.
- Migration step (deferred): connect GitHub repo to Vercel (easiest SSL + DNS), then in Namecheap Advanced DNS point serialcriminologist.ca at the host. Verify, then retire the github.io URL or 301 it.
- Editing access: still the real bottleneck. Custom domain and Vercel do NOT grant Claude edit access to source. Options remain (a) upload repo zip per cycle, or (b) add GitHub connector. Vercel connector is read/deploy/logs only, no file editing.

---

## Cycle 2 — CLOSED (verified live 19 June 2026 via incognito)

Built and deployed the Interventions page.

- **Subversion-as-Extortion section**: full conceptual reframe (acquisition vs subjugation), the organized-criminal-persecution working name with six-term vocabulary, international evidence base (extortion-as-governance, Mexico kingpin finding, Italy/Addiopizzo, underreporting/measurement trap), and a does-and-does-not-claim guardrail. Sourced from the bespoke-offence handoff and the policing lit-review outline.
- **Residential School Denialism section**: abstract + key findings, with 8 superscript citations and a References block tied to the report's real numbered sources. Sourced from the consolidated report (public-level only).
- **Interventions nav dropdown restored** across all 19 content pages + component, pointing to #subversion-masquerades and #residential-school-denialism. Page + nav shipped as one push.

HELD OFF THE PUBLIC SITE (confirmed in live output): the extortion diagnostic (foreign-interference "payback" framing, community-specific strategy, charter process). No community named anywhere. The single abstract line about "a community that already distrusts authorities" was deliberately retained at author's instruction.

Deployment method established: Claude produces the changed files as a zip + a precise instruction block; author relays to the OpenClaw agent (MacBook Air) via Telegram; agent edits the repo and pushes; author verifies in an incognito browser window. Incognito is the verification source of record; Claude's fetcher is treated as unreliable due to caching.

### Still deferred to later cycles
- [ ] Subversion section: decide whether to add inline citations (Rusev, the Mexico/Italy studies) to match the denialism section's apparatus.
- [ ] Resolve the diagnostic question (author reviewing).
- [ ] Initiatives page: A Classroom in Every Prison; Alliance Against Organized Coercion and Targeted Extortion (needs source).
- [ ] Events page content + anchors, then restore its dropdown.
- [ ] Fill the two "Coming soon" sections on Understanding Crime.
- [ ] Decide keep/delete for the approach.html, received-view.html, criminology.html redirect stubs.
- [ ] Domain + host migration (serialcriminologist.ca via Namecheap) as a final deliberate step.

---

## Cycle 3 — CLOSED (verified live 19 June 2026 via incognito)

Built and deployed the full Initiatives page (both entries).

- **A Classroom in Every Prison**: full section on the Canadian Alliance for Prison Education (CAPE), its coordinating role, the on-the-ground record (12 years, 10 BC institutions named, 14+ prisons, ~50 iterations), the evidence case for prison education, and the 2030 goal. Institutions named (UFV, UVic, UBC, VIU, Kwantlen); individual board members NOT named (author's call). Abolition framing from the source softened: idea retained in the pull-statement, word "abolish" not used.
- **Alliance Against Organized Coercion and Targeted Extortion**: full section describing the stop-extortion.ca initiative. Names South Asian communities (as the Alliance site does). Cites Surrey figures (133 files 2025 up from 12; Jan 2026 peak of 44; single-district concentration; police-files caveat). Links out to stop-extortion.ca rather than mirroring crisis content; minimal emergency contacts (911, VictimLink) only. Ties to the Subversion intervention.
- **Initiatives nav dropdown restored** across all 19 content pages + component, pointing to #a-classroom-in-every-prison and #alliance-against-organized-coercion.

Sourced from: CAPE one-page overview, CAPE charter/governance, Law Foundation grant application (Classroom); stop-extortion.ca (Alliance). HELD OFF: the extortion diagnostic's foreign-interference "payback" framing and community-strategy material (never surfaced; sweep clean). Individual coalition board names kept off.

Verification: author confirmed live Alliance section via incognito; Classroom section deployed in same file. Claude fetcher again served a stale body (nav updated, body cached) — incognito remained the source of record.

### Still deferred to later cycles
- [ ] Subversion section: decide whether to add inline citations to match the denialism apparatus.
- [ ] Resolve the diagnostic question (author reviewing) — note: the public Alliance framing is now live and clean, which may inform that decision.
- [ ] Events page content + anchors, then restore its dropdown.
- [ ] Fill the two "Coming soon" sections on Understanding Crime.
- [ ] Decide keep/delete for the approach.html, received-view.html, criminology.html redirect stubs.
- [ ] Domain + host migration (serialcriminologist.ca via Namecheap) as a final deliberate step.

---

## Cycle 4 — built, awaiting deploy (19 June 2026)

Launch-discipline pass + News Tracker page.

- **News Tracker page built** (news-tracker.html): curated "what we're tracking" format, NOT a live feed. Five themed sections (organized extortion/Bishnoi, foreign interference/natsec, prisons under strain, policing+technology, with cross-links to the Interventions and Initiatives pages). Each item is headline + source + short ORIGINAL blurb + link to original reporting. Copyright-safe: no reproduced article summaries. Sourced from 15 engine digests (June 7-16, 2026); real decoded URLs. Added as a top-level nav tab.
- **Launch nav collapse**: top menu trimmed to Home, About, Understanding Crime, Interventions, Initiatives, Media, News Tracker, Contact. Reordered so Interventions precedes Initiatives. Hidden pages (Writing/essays cluster, Courses, Resources, Events, Opportunities) remain LIVE at their URLs and keep their own nav; they are simply out of the top menu until they have real content. Footer nav matched to the launch set.
- **Fixes**: Alliance name standardized to "Organized Coercion" (the 1 stray "Community" corrected); "Post Cast Crew" → "Podcast Crew"; "Op Ed Pieces" retired with the Writing dropdown.
- **Home page additions**: a "Who is behind this" credibility block and a "Start here" three-card path (Understand the problem → Understanding Crime; See criminology in action → Interventions; Get involved → Contact). New CSS added for these and the tracker list, using existing site variables.

DECLINED from the external review (with reasons): plain-language summary boxes on Interventions (subheads already do this); renaming Interventions to "Public Interventions" (real term, well-defined); skeletal placeholder lists on Resources/Courses (thin reads as thin; hide beats half-fill). Contact form already works (Formspree wired) — reviewer's concern was moot.

Component header.html synced to launch nav (reference file; live nav is inlined per page).

---

## Cycle 4 — CLOSED / deployed (verified live 19 June 2026 via incognito)

News Tracker and launch-discipline changes deployed to GitHub Pages. Live nav matched launch spec.

---

## Cycles 5–7 — rapid polish and custom domain (20–23 June 2026)

A series of small production pushes refined the site before the domain cutover:

- **Cycle 5**: full-site polish pass; unified header/footer component; interior hero layout cleanup; consistent left-aligned headings; full wrap-width heroes.
- **Cycle 6**: visual redesign (Spectral/Inter/Plex Mono typography; ink/bone/signal palette); dark hero/footer; homepage dark-figure section with SVG graphic; claim-status evidence-grading system; live-tracking pulse.
- **Cycle 7**: custom domain `serialcriminologist.ca` connected via CNAME on `main`; GitHub Pages serving from Fastly edge; wordmark sizing and cache-bust refinement.

Deferred items still outstanding:
- [ ] Events page content + anchors, then decide if it stays in main nav.
- [ ] Fill the two "Coming soon" sections on Understanding Crime.
- [ ] Subversion inline citations; diagnostic question.
- [ ] News Tracker update cadence/process.
- [ ] Fill deferred pages (Courses, Resources, Writing cluster, Opportunities) before returning them to nav.

---

## Maintenance sweep — 23 June 2026

Post-domain operational cleanup performed by OpenClaw agent.

1. **Converted `media-engagement.html` to redirect** → `media-appearances.html`. Eliminates duplicate-content split.
2. **Removed unused banner images** (`assets/images/header-banner.jpg`, `assets/images/hero-banner.jpg`). ~300KB dead weight.
3. **Added `robots.txt`** allowing all crawlers and pointing to sitemap.
4. **Added `sitemap.xml`** covering all canonical content pages.
5. **Added `<link rel="canonical">` tags** to all canonical content pages; updated redirect stubs to use full `https://serialcriminologist.ca/...` canonicals.
6. **Synced reference components** (`components/header.html`, `components/footer.html`) to match the current live nav/footer so they are accurate if dynamic injection is ever enabled.
7. **Updated `FIX-REGISTER.md`** to reflect deployed Cycles 4–7 and document the maintenance sweep.

### Still requires operator decision
- Add `www.serialcriminologist.ca` DNS record at Namecheap (CNAME or redirect to apex).
- Decide whether `events.html` stays in the main nav; if yes, it needs real content.
- Decide on Understanding Crime subsections / dropdown restoration.
