# Serial Criminologist — Fix Register

Site: https://deismanwadewallace-lgtm.github.io/serial-criminologist/  
Reviewed: 19 June 2026  
Cycle 1 completed: 20 June 2026 02:50 UTC

---

## Page inventory and navigation

| Page | Exists | Nav | Notes |
|---|---|---|---|
| index.html | yes | **B + Home** | Hero CTAs point to understanding-crime.html and about.html |
| about.html | yes | **B + Home** | Einstein aphorism already removed in source |
| criminology.html | yes | none | Redirect stub to understanding-crime.html |
| received-view.html | yes | none | Redirect stub to understanding-crime.html |
| understanding-crime.html | yes | **B + Home** | Canonical page, anchors resolve |
| initiatives.html | yes | **B + Home** | Dropdown removed until anchors exist |
| interventions.html | yes | **B + Home** | Dropdown removed until anchors exist |
| essays.html | yes | **B + Home** | |
| op-eds.html | yes | **B + Home** | |
| manuscripts.html | yes | **B + Home** | |
| media.html | yes | **B + Home** | |
| podcast.html | yes | **B + Home** | |
| interviews.html | yes | **B + Home** | |
| reels.html | yes | **B + Home** | |
| memes.html | yes | **B + Home** | |
| courses.html | yes | **B + Home** | |
| resources.html | yes | **B + Home** | |
| events.html | yes | **B + Home** | Dropdown removed until anchors exist |
| opportunities.html | yes | **B + Home** | Dropdown anchors resolve |
| substack.html | yes | **B + Home** | |
| contact.html | yes | **B + Home** | |
| approach.html | yes | none | Redirect stub to about.html#public-criminology-approach-heading |

**Canonical nav:** Arch B + Home link as first item. Applied to all 19 content pages. Redirect stubs carry no nav.

---

## Defect register

### CRITICAL

**C1 — Split navigation across the site**  
Status: **FIXED**
- All 19 content pages now carry the same canonical nav (Arch B + Home).
- Redirect stubs (`criminology.html`, `received-view.html`, `approach.html`) carry no nav by design.

**C2 — received-view.html is a dead stub still linked from homepage**  
Status: **FIXED**
- Homepage hero CTAs now point to `understanding-crime.html` and `about.html`.
- No internal links remain to `received-view.html` or `criminology.html`.
- Both pages are kept as proper redirect stubs for external-link safety.

**C3 — Content duplication: criminology.html vs understanding-crime.html**  
Status: **FIXED**
- `criminology.html` is now a redirect stub to `understanding-crime.html`.
- No internal links point to `criminology.html`.

### HIGH

**H1 — "What Criminology Is" nav item routes to the weaker page**  
Status: **FIXED**  
- Main nav item is now "Understanding Crime" pointing to `understanding-crime.html`.

**H2 — Homepage Explore cards and hero buttons audit**  
Status: **FIXED**  
- Two hero buttons: `understanding-crime.html` (live, canonical), `about.html` (live, canonical).
- No Explore cards currently present in `index.html`; section was simplified before Cycle 1.

### MEDIUM

**M1 — Footer mirrors the nav split**  
Status: **FIXED**
- All 19 content pages now carry the same expanded footer.

**M2 — Borrowed aphorism on about.html**  
Status: **FIXED / GONE**
- The Einstein-derived line is no longer present in `about.html`.

### LOW

**L1 — Voice consistency check**  
Status: **FIXED**
- Homepage copy now uses the same plain, non-aphoristic register as canonical pages after em-dash removal and sentence restructuring.

**L2 — em dashes present in live copy**  
Status: **FIXED**
- All U+2014 em dashes removed from body copy and meta descriptions.
- Title separators converted to en dash (U+2013).

---

## New issue surfaced during Cycle 1

**N1 — Broken anchor `public-criminology-as-an-approach`**  
Severity: HIGH  
Status: **FIXED**
- Found in `about.html`, `understanding-crime.html`, and `approach.html`.
- Real section ID is `public-criminology-approach-heading`.
- All references updated and verified against live fetches.

---

## Open verification tasks before Cycle 1

- [x] Fetch essays.html, media.html, podcast.html, substack.html, reels.html, memes.html, contact.html and record which nav each carries.  
  Result: all carry Arch B.
- [x] Confirm whether any Arch B sub-anchors actually resolve.  
  Result: Understanding Crime and Opportunities anchors resolve. Initiatives, Interventions, Events anchors do not exist; dropdowns removed.
- [x] Decide canonical nav.  
  Result: Arch B + Home.
- [x] Decide working method.  
  Result: patch source repo (`serial-criminologist/`), commit, push, re-verify live.

---

## Loop protocol

Each cycle: (1) confirm current live state with cache-busting fetch, (2) apply fix, (3) re-verify against a fresh fetch in a clean check, (4) update this register's Status fields, (5) report what changed and what remains.

**Cycle 1 result:** All critical, high, and medium defects fixed. Newly-surfaced N1 fixed. Live site re-verified with no dead links, no broken anchors, no em dashes, and a single canonical nav across all content pages.

---

## Remaining deferred work

1. **Content for Initiatives, Interventions, Events placeholder pages** — when content is ready, add proper section anchors and restore dropdowns in `components/header.html`, then re-sync to all pages.
2. **Received view content** — `understanding-crime.html` has placeholder sections "Popular and Scientific Approaches" and "Proof of Concept" marked "Coming soon."
3. **Approach.html** — this redirect stub was not in the original inventory. Confirm whether it should be retained or deleted.
4. **Received-view.html / criminology.html** — confirm whether to retain redirect stubs indefinitely or delete once external links are known to be gone.
