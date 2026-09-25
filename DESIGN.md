---
version: alpha
name: Alexey Portfolio — Ink, Sand, Graphite
description: "Editorial portfolio system for Alexey, a web designer building websites for barbershops and salons, presenting three self-initiated concept worlds: dark-ink copper, warm-sand botanical, and graphite racing."
colors:
  primary: "#C97847"
  primary-strong: "#DE8C58"
  on-primary: "#14110E"
  secondary: "#9A8E7F"
  tertiary: "#39633F"
  neutral: "#F4EDE3"
  ink: "#14110E"
  ink-deep: "#0D0B09"
  surface: "#1A1613"
  surface-raised: "#211C17"
  surface-overlay: "#2A241D"
  on-surface: "#F4EDE3"
  on-surface-muted: "#C9BEB0"
  border: "#3A322A"
  border-soft: "#2A241D"
  sand: "#F0E4D2"
  sand-raised: "#E7D9C2"
  sand-border: "#D6C4A6"
  sand-border-soft: "#E3D5BC"
  on-sand: "#231E17"
  on-sand-muted: "#5F5546"
  graphite: "#16181C"
  graphite-raised: "#1B1E23"
  graphite-overlay: "#22262D"
  graphite-border: "#333A45"
  graphite-border-soft: "#262B33"
  on-graphite: "#E8E9EC"
  on-graphite-muted: "#A9AEB6"
  accent-copper: "#C97847"
  accent-day-hair: "#39633F"
  accent-day-hair-soft: "#C9D9B0"
  accent-pitstop: "#F0523F"
  accent-pitstop-deep: "#C22B1F"
  success: "#8FAE72"
  focus: "#E9A56F"
  focus-light: "#2F4A33"
typography:
  display-hero:
    fontFamily: Georgia, "Times New Roman", serif
    fontSize: 84px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Georgia, "Times New Roman", serif
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.035em
  display-lg:
    fontFamily: Georgia, "Times New Roman", serif
    fontSize: 38px
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Georgia, "Times New Roman", serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline-md:
    fontFamily: '-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif'
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: '-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif'
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0em
  deck:
    fontFamily: '-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0em
  body-lg:
    fontFamily: '-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: 0em
  body-md:
    fontFamily: '-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  body-sm:
    fontFamily: '-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  quote:
    fontFamily: Georgia, "Times New Roman", serif
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.015em
  label-caps:
    fontFamily: 'Cascadia Mono, "SF Mono", Consolas, "Roboto Mono", ui-monospace, monospace'
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.14em
  meta-mono:
    fontFamily: 'Cascadia Mono, "SF Mono", Consolas, "Roboto Mono", ui-monospace, monospace'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.03em
  index-numeral:
    fontFamily: 'Cascadia Mono, "SF Mono", Consolas, "Roboto Mono", ui-monospace, monospace'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-phone: 64px
  section-tablet: 88px
  section-desktop: 120px
  section-tight-phone: 40px
  section-tight-desktop: 72px
  section-loose-phone: 88px
  section-loose-desktop: 168px
  gutter-phone: 20px
  gutter-tablet: 32px
  gutter-desktop: 40px
  container-max: 1120px
  read-max: 640px
  tap-target: 44px
  grid-columns: 12
  hairline: 1px
  rule-heavy: 2px
  rule-tick: 6px
  rule-tick-gap: 4px
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.md}"
    height: "{spacing.tap-target}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
  button-primary-active:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.ink}"
  button-primary-disabled:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.secondary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.md}"
    height: "{spacing.tap-target}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.on-surface}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-md}"
    height: "{spacing.tap-target}"
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
  mobile-menu-toggle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    size: "{spacing.tap-target}"
  mobile-menu-panel:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.deck}"
    padding: "{spacing.lg}"
  project-card-prestige:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  project-card-prestige-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
  project-card-day-hair:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.on-sand}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  project-card-day-hair-hover:
    backgroundColor: "{colors.sand-raised}"
    textColor: "{colors.on-sand}"
  project-card-pitstop:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.on-graphite}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  project-card-pitstop-hover:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.on-graphite}"
  project-index-prestige:
    backgroundColor: transparent
    textColor: "{colors.accent-copper}"
    typography: "{typography.index-numeral}"
  project-index-day-hair:
    backgroundColor: transparent
    textColor: "{colors.accent-day-hair}"
    typography: "{typography.index-numeral}"
  project-index-pitstop:
    backgroundColor: transparent
    textColor: "{colors.accent-pitstop}"
    typography: "{typography.index-numeral}"
  project-meta-prestige:
    backgroundColor: transparent
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.meta-mono}"
  project-meta-day-hair:
    backgroundColor: transparent
    textColor: "{colors.on-sand-muted}"
    typography: "{typography.meta-mono}"
  project-meta-pitstop:
    backgroundColor: transparent
    textColor: "{colors.on-graphite-muted}"
    typography: "{typography.meta-mono}"
  detail-hero-prestige:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  detail-hero-day-hair:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.on-sand}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  detail-hero-pitstop:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.on-graphite}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  concept-badge:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  concept-frame-prestige:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  concept-frame-day-hair:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.on-sand-muted}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  concept-frame-pitstop:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.on-graphite-muted}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  concept-frame-block:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  concept-frame-block-day-hair:
    backgroundColor: "{colors.sand-raised}"
    textColor: "{colors.on-sand-muted}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  concept-frame-block-pitstop:
    backgroundColor: "{colors.graphite-overlay}"
    textColor: "{colors.on-graphite-muted}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  back-link:
    backgroundColor: transparent
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    height: "{spacing.tap-target}"
  external-link:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    height: "{spacing.tap-target}"
  contact-cta:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  footer-meta:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.secondary}"
    typography: "{typography.meta-mono}"
    padding: "{spacing.lg}"
  skip-link:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    height: "{spacing.tap-target}"
---

# Alexey Portfolio — Ink, Sand, Graphite

## Overview

This is the design system for the personal portfolio of **Alexey**, a web designer who builds websites for barbershops and salons. The site presents three self-initiated concept projects, and each one is given its own visual world so the work reads as three distinct pieces of design rather than three recolours of one template: **Prestige Barber Co** (San Antonio) on dark ink and warm copper — precise luxury grooming; **Day Hair Habit** (Bali) on warm ivory sand and botanical green — soft hospitality; **Pitstop Barbershop** (Nairobi) on graphite and racing red — technical motorsport grooming. The portfolio shell — sticky bar, editorial hero, concept note, about, contact band, footer — stays one warm-ink system, so the three worlds sit inside a single authored sequence.

**Direction: editorial portfolio, three toner worlds.** The page behaves like a printed feature spread that happens to scroll: a folio hero, numbered projects, hairline rules, and a reading column. Hierarchy comes from scale, whitespace, tone, and rules — never from shadow, glow, or gradient. Serif display sets the voice, a system sans carries reading copy, and monospace handles indices, metadata, and route hints. Three tonal ladders do the work of identity: warm ink (Prestige and the shell), warm sand (Day Hair Habit), cool graphite (Pitstop).

**Who it is for.** Salon and barbershop owners and local-service operators who meet this page on a phone between clients: one-handed, in a bright room, on a mediocre connection. Comfortable tap targets, a measure that never crowds the screen edge, and a layout that survives 375px matter more than any flourish.

**Emotional response.** Quiet confidence and craft. The visitor should read three finished-looking worlds, understand the thinking behind each, and conclude that this designer finishes things.

**Honesty is structural, not a footnote.** These are concept redesigns, not official client work, and the hierarchy says so before the visual work is admired:

- Every project card carries a visible `Concept project` badge (`{components.concept-badge}`) and a `Self-initiated` datum in its metadata row. The badge is identical on all three cards and in all three worlds — it never takes a project accent, because honesty should look the same everywhere — and it is never hidden in a tooltip, an expander, or below the fold.
- The portfolio hero states the concept status once, plainly, in the standfirst directly beneath the hero headline, before the project list begins.
- Each detail route restates it twice: as a `Concept project · Self-initiated` line in mono above the project name inside the detail hero band, and again in that page's footer metadata.
- Nowhere does copy imply a client relationship, a released launch, or a delivered result for a named business. No awards, client logos, testimonials, performance metrics, ratings, prices, email addresses, phone numbers, street addresses, or social handles exist in this system, and none may be invented during implementation.
- Blocks that would normally hold photography are drawn as labelled CSS concept frames (`{components.concept-frame-prestige}`, `{components.concept-frame-day-hair}`, `{components.concept-frame-pitstop}`) captioned `Concept frame — no photography`. The system uses **system fonts only and no stock imagery**: no image CDNs, no generated or stock photographs, no gradient-filled fake photos, no fake browser chrome, no device mockups. A frame is honest about being a frame.

**The signature move** — the 20% that carries personality — is the numbered folio rule: each project opens with a rule, its two-digit index (`01`, `02`, `03`) set at its inline-start in that project's identity accent, and the project name in serif display with tight negative tracking. The rule's construction changes per world: Prestige draws one full-width `{spacing.rule-heavy}` copper rule (the folio rule); Day Hair Habit draws a doubled `{spacing.hairline}` botanical pair whose second line stops at 40% width (the leaf rule); Pitstop draws a row of discrete `{spacing.rule-tick}` red segments separated by `{spacing.rule-tick-gap}` (the telemetry rule — geometric only, never carrying numbers or invented data).

**Accent discipline.** The shell accent is copper `{colors.primary}`, used at most twice per screen (typically one rule plus one primary action). Each detail route is owned by exactly one identity accent — `{colors.accent-copper}`, `{colors.accent-day-hair}`, or `{colors.accent-pitstop}` — applied to that route's rule, index numeral, and pull-quote tint, and to nothing else. The other two identity accents must not appear on that route. Identity accents never fill buttons, never colour body copy, and never sit behind text.

## Colors

The palette is a warm-ink shell with one identity accent per concept world, each world carrying its own neutral ladder and its own text tones. Neutrals occupy roughly 90% of every screen.

- **Primary — Copper (`#C97847`):** the shell accent and the Prestige identity. Used for the primary action, the skip link, and the Prestige folio rule and index. Never fills a large area, never colours body copy.
- **Primary Strong (`#DE8C58`):** the hover and focus tint of copper — hover fills only.
- **Secondary — Warm Taupe (`#9A8E7F`):** muted neutral for metadata, footers, inactive navigation, and disabled labels. The lightest tone allowed on body-adjacent text.
- **Tertiary — Botanical Green (`#39633F`):** the Day Hair Habit identity family, deliberately deep so it can carry small text on sand. Never an error, warning, or success signal.
- **Neutral — Warm Ivory (`#F4EDE3`):** primary text on ink. The system never uses pure white for type and never pure black for any ground.
- **Ink (`#14110E`) and Ink Deep (`#0D0B09`):** the page ground and the deeper band that closes the page at the contact section and footer.
- **Surface (`#1A1613`), Surface Raised (`#211C17`), Surface Overlay (`#2A241D`):** the warm-ink tonal ladder — Prestige cards, raised and hovered cards, and inner frame blocks and badges.
- **On Surface (`#F4EDE3`) / On Surface Muted (`#C9BEB0`):** text tones for ink content. `on-surface-muted` is for secondary prose inside a card and is never used below 13px.
- **Border (`#3A322A`) / Border Soft (`#2A241D`):** one-pixel hairlines for card edges, the sticky bar, and dividers.
- **The sand world — Sand (`#F0E4D2`), Sand Raised (`#E7D9C2`), Sand Border (`#D6C4A6`), Sand Border Soft (`#E3D5BC`), On Sand (`#231E17`), On Sand Muted (`#5F5546`):** Day Hair Habit's light ladder for its card, detail hero band, frames, and inner leaves. A light world on a dark page is intentional: it is the hospitality register, not an inconsistency.
- **The graphite world — Graphite (`#16181C`), Graphite Raised (`#1B1E23`), Graphite Overlay (`#22262D`), Graphite Border (`#333A45`), Graphite Border Soft (`#262B33`), On Graphite (`#E8E9EC`), On Graphite Muted (`#A9AEB6`):** Pitstop's cool ladder. It is the only cool family in the system and stays inside the Pitstop route and card.
- **Accent Copper / Accent Day Hair / Accent Pitstop (`#C97847` / `#39633F` / `#F0523F`):** the per-project identity set. One per card, one per detail route, never two at once.
- **Accent Day Hair Soft (`#C9D9B0`):** a graphic-only tint for Day Hair leaf blocks. It never sits behind text.
- **Accent Pitstop Deep (`#C22B1F`):** the saturated racing red for solid segments of the telemetry rule on the graphite ground. It is never text and never a button fill.
- **Success (`#8FAE72`):** the availability state ("Available for website projects") and nothing else.
- **Focus (`#E9A56F`) and Focus Light (`#2F4A33`):** focus-ring sources for dark grounds and for the sand world respectively, so the ring is always visible and never confusable with a copper hover fill.

**Contrast gates.** Warm ivory on ink measures about 16:1; `on-surface-muted` on a raised surface about 9.2:1; warm taupe on ink about 5.9:1; copper on ink about 5.6:1; ink on a copper fill about 5.6:1. In the sand world, `on-sand` on sand is about 13:1, `on-sand-muted` on sand about 5.8:1, the botanical accent on sand about 5.5:1, and `focus-light` on sand about 7.8:1. In the graphite world, `on-graphite` on graphite is about 14:1, `on-graphite-muted` about 8:1, the racing red about 5.1:1, and ink on a racing-red fill about 5.4:1. Every one of these clears **4.5:1 for normal text**; no text in this system is permitted below that, and identity accents are validated as text colours because indices and rules that carry them are small.

**Colour usage rules.** Cross-world text is prohibited: ink-world text tones appear only on ink grounds, sand tones only on sand, graphite tones only on graphite. Never place ivory or sand type on an accent fill — ink is the only label colour allowed on copper or racing red. Never introduce a blue or a purple anywhere, and never let the graphite ladder leak into a warm world. No gradient at all, in any world, for any purpose.

## Typography

Three system stacks, used for clearly different jobs, with no web fonts and no network font requests.

- **Display — serif stack (`Georgia, "Times New Roman", serif`):** the editorial voice. Hero, project names, route headlines, contact line, pull quotes. Display is set at **weight 400, not bold**; hierarchy comes from scale and surrounding space, so type reads as an art-directed spread rather than a billboard. All display levels carry tight negative tracking (`-0.02em` to `-0.04em`).
- **Body — system sans stack (`-apple-system, "Segoe UI", system-ui, Roboto, Arial, sans-serif`):** reading copy, navigation, buttons, and labels. Only weights 400 and 600 are used, and 600 appears only on buttons and card titles.
- **Meta — monospace stack (`"Cascadia Mono", "SF Mono", Consolas, "Roboto Mono", ui-monospace, monospace`):** indices, the concept badge, route hints, the back link, the `Self-initiated` datum, footer metadata, and the availability line. Monospace marks anything factual or navigational — which is exactly where the concept-audit language lives.

**Scale strategy.** The jump from display to body is deliberately large. `{typography.display-hero}` (84px) is the desktop hero; `{typography.display-xl}` (56px) is the tablet hero and the detail-route project name at 768px and up; `{typography.display-lg}` (38px) is the phone hero, phone route title, and the contact line. The deck sits at `{typography.deck}` (20px) — a wide step down from display, and never set at body size. `{typography.headline-md}` and `{typography.headline-sm}` are the only semibold levels; everything between display and body stays regular. `{typography.label-caps}` is 11px uppercase with `0.14em` tracking: it recedes, and is never used for prose or for anything a visitor must read carefully.

**Reading rhythm.** Body copy uses `{typography.body-lg}` on detail routes and `{typography.body-md}` inside cards, with `line-height` from the token (1.65–1.68) and a **60–70 character measure** via `{spacing.read-max}`. No justification and no hyphenation; keep the ragged inline-end edge and `text-align: start`.

**Pull quotes** use `{typography.quote}` at 30px serif, breaking the reading column, tinted with that route's identity accent and used at most once per route. A pull quote has no background, no border, and no container. Bold is rare: at most two emphasized phrases per detail route.

## Layout

**Mobile-first from 375px.** The baseline is a single column with a `{spacing.gutter-phone}` inline gutter. No width from 375px to 1120px may produce horizontal overflow: no fixed pixel widths above 100%, no negative inline margins, no absolutely positioned elements outside the container, no `!important` width overrides, `overflow-wrap: break-word` on every text container, and `min-width: 0` on every grid child so columns can shrink. Long unbroken strings — a place name, a project slug, an external URL — wrap instead of widening the page. The telemetry rule is built from discrete inline-block segments, never from a gradient or a fixed-width strip.

**Breakpoints.**

- **Base (375px+):** one column. Navigation collapses to a mobile menu toggle; all three project cards stack full width; concept-frame inner blocks stack vertically with `{spacing.sm}` between them; the hero contents rail sits below the hero actions.
- **Tablet (768px+):** gutters become `{spacing.gutter-tablet}`; the hero uses `{typography.display-xl}`; navigation links appear inline and the toggle disappears; a concept frame's inner blocks may pair two-up with `{spacing.sm}` between them.
- **Desktop (1120px+):** gutters reach `{spacing.gutter-desktop}`, content is capped at `{spacing.container-max}`, the hero reaches `{typography.display-hero}` and places the contents rail in a narrow inline-end column beside the display type, and the project list may become an asymmetric pair — the first project full width, the next two in a wider lead column beside a narrower metadata column. Never three equal cards in a row.

**Section rhythm is intentionally uneven.** Use `{spacing.section-loose-desktop}` for the hero and the contact band, `{spacing.section-desktop}` for the reading sections, and `{spacing.section-tight-desktop}` between a heading and its first paragraph or between the last frame and the route navigation. Uniform padding everywhere reads as a template; alternate compression and release, with the loose value at least 1.5× the tight one.

**Page composition — `/` (portfolio).**

1. **Sticky top bar:** a translucent ink surface with a hairline bottom border and a blurred backdrop, holding the wordmark at the inline-start and, from 768px, four compact links (Work, Concept projects, About, Contact). Two things only may be highlighted here, and only one of them is copper.
2. **Editorial hero:** left-aligned and asymmetric, never centred. Sequence: an availability line with a green dot ("Available for website projects") in `{typography.label-caps}`; the display headline (`{typography.display-lg}` on phone, `{typography.display-xl}` from 768px, `{typography.display-hero}` from 1120px); a `{typography.deck}` standfirst that states the concept-project status plainly; and two actions — a primary "Start a website project" jumping to the in-page `#contact` section (`{components.button-primary}`) and a secondary "See the three concepts" jumping to the project list (`{components.button-secondary}`). Leave at least twice the headline's line-height in space above and below it before other content begins. At 1120px the hero gains a **contents rail** at the inline-end: the three project names stacked above a hairline, each prefixed by its index in `{typography.meta-mono}`, double-spaced — a table of contents, not a navigation menu.
3. **Project list:** three large, fully clickable cards. The whole surface is the tap target and each card exposes exactly one focusable element — no nested links, no nested buttons. Order is Prestige Barber Co (`01`), Day Hair Habit (`02`), Pitstop Barbershop (`03`).
   - **Prestige — the folio card (`{components.project-card-prestige}`):** warm ink surface, `{rounded.md}` corners, a full-width `{spacing.rule-heavy}` copper folio rule across the top of the content with the index at its inline-start (`{components.project-index-prestige}`), the name in `{typography.display-lg}`, and a metadata row closed by a `{colors.border-soft}` hairline. Hover raises the surface to `{components.project-card-prestige-hover}` and extends the rule by 8px.
   - **Day Hair Habit — the leaf card (`{components.project-card-day-hair}`):** the only light card on the page — sand ground, `{rounded.xl}` corners, deep warm text. Its leaf rule is a doubled `{spacing.hairline}` botanical pair with the second line stopping at 40% width, plus two soft green leaf blocks (`{colors.accent-day-hair-soft}`, graphic only) set asymmetrically at the card's inline-end. Hover deepens the ground to `{components.project-card-day-hair-hover}` and widens the soft blocks.
   - **Pitstop — the telemetry card (`{components.project-card-pitstop}`):** cool graphite ground with `{rounded.sm}` corners and crisp cool text, opening with the telemetry rule — discrete `{spacing.rule-tick}` segments in `{colors.accent-pitstop}` with one solid `{colors.accent-pitstop-deep}` segment — the index set in racing red (`{components.project-index-pitstop}`), and a right-aligned mono label reading `Motorsport grooming` (a description, never a number). Hover nudges the surface to `{components.project-card-pitstop-hover}` and shifts the segment group 2px toward the inline-end.
   - Shared card anatomy: folio rule and index, project name, one line of what the concept is, the world-specific metadata row (`{components.project-meta-prestige}`, `{components.project-meta-day-hair}`, `{components.project-meta-pitstop}`) carrying the city, business type, and the `Self-initiated` datum, the `Concept project` badge, and a "View the concept" row that reads as an affordance without being a second target.
4. **Concept note:** a short quiet paragraph separated by a top hairline rather than a card, restating that all three projects are self-initiated concepts, not official client work, and that no business name here implies an endorsement.
5. **About:** two or three short paragraphs at the `{spacing.read-max}` measure on what kind of work Alexey does for local service businesses and how a project starts. No years of experience, client counts, or awards.
6. **Contact — `#contact`:** the deeper ink band (`{components.contact-cta}`), a serif line inviting a website project and one plain sentence about how to get in touch. Because **no email address is provided**, this band renders no `mailto` link and no address; add no fabricated contact detail of any kind.
7. **Footer (`{components.footer-meta}`):** monospace metadata only — name, role, the concept disclaimer in one line, and the current year. No social icons, handles, or newsletter form.

**Page composition — `/projects/prestige`, `/projects/day-hair`, `/projects/pitstop`.** All three share one structure and differ by world; each is written for its own city and business type, never by find-and-replace.

1. **Back link:** `Back to portfolio` (`{components.back-link}`) with a leading arrow, at the top of the content column on the shell ink ground above the hero band, first focusable element after the skip link.
2. **Detail hero band with the project-specific accent:** `{components.detail-hero-prestige}` on ink, `{components.detail-hero-day-hair}` on sand, `{components.detail-hero-pitstop}` on graphite. Inside it: the `Concept project · Self-initiated` line in mono, the project name in `{typography.display-xl}` from 768px and `{typography.display-lg}` on phone, the city and business type, that world's rule drawn per the signature move with the index at its start, and a two-line standfirst. One identity accent per band, drawn from the route's own world, and the band is the only region on the page that changes world.
3. **The challenge:** one short heading and one to two paragraphs at the reading measure, describing the problem a neighbourhood barbershop or salon website faces. Generic enough to be honest, specific enough to be useful.
4. **The concept solution:** one short heading and one to two paragraphs on the approach, then three or four concrete decisions — booking-first hierarchy, service clarity, local trust signals, mobile speed — as plain text rows separated by `{colors.border-soft}` hairlines, never as cards or chips.
5. **Selected screens:** a stack of three labelled concept frames using that route's frame variant, each with the caption `Concept frame — no photography` in `{typography.label-caps}`, inner blocks from `{components.concept-frame-block}`, `{components.concept-frame-block-day-hair}`, or `{components.concept-frame-block-pitstop}`, and one plain-language line on what that screen does. Three frames per route, no more.
6. **Compact case-study navigation:** a hairline-separated row of the other two concepts by name only, so a visitor can keep moving. Do not repeat their cards.
7. **External link:** where a real, non-fabricated destination applies to that business type — an appointment or booking page — exactly one link (`{components.external-link}`), clearly labelled, opening in a new tab. If no genuine destination is available, omit the control rather than pointing it at a placeholder domain, and never link to a payment or checkout flow.
8. **Footer:** the shell footer, with the concept disclaimer repeated.

**Spacing scale.** A 4px base on an 8px rhythm: `{spacing.xxs}` for optical adjustments, `{spacing.sm}` in dense metadata clusters, `{spacing.md}` for control padding, `{spacing.lg}` inside cards, `{spacing.xl}` between related blocks, `{spacing.xxl}` around pull quotes and major sub-sections. Section padding comes from the `section-*` tokens — never from ad-hoc values.

**Touch targets.** Every interactive element — navigation links, the mobile menu toggle and its rows, each card surface, the back link, the external link, and the in-page CTAs — is at least **44 by 44 CSS pixels**, using `{spacing.tap-target}` as the minimum height and never smaller. Icon-only controls carry an accessible name and an expanded tap area rather than a shrinking one.

## Elevation & Depth

Depth is **tonal and linear, not shadowed**: no drop shadows, no glows, no blurred cards. The page reads as paper on a desk, in three registers.

- **Three tonal ladders:** warm ink ground → `{colors.surface}` for Prestige cards → `{colors.surface-raised}` on hover → `{colors.surface-overlay}` for inner blocks and badges; sand → `{colors.sand-raised}` for Day Hair leaves; graphite → `{colors.graphite-raised}` on hover → `{colors.graphite-overlay}` for Pitstop inner blocks. A card lifts by getting one step lighter in its own world, never by casting a shadow.
- **Hairlines:** `{spacing.hairline}` borders in `{colors.border}`, `{colors.sand-border}`, or `{colors.graphite-border}` define card edges, the sticky bar's lower edge, and dividers, with a softer variant inside each card. Because the grounds are dark or mid-tone, these lines should read as structure — if a border looks heavy, drop it rather than darken it.
- **The one raised surface** is the sticky top bar: translucent ink, blurred backdrop, hairline bottom border. Nothing else in the system floats above content.
- **The contact band** achieves closure through tone: `{colors.ink-deep}` is a step below the page ground, so the page ends in a deeper register instead of another box.
- **Focus is the only glow-like treatment:** a 2px ring in `{colors.focus}` (or `{colors.focus-light}` on the sand world) with a 2px offset, or a 3px outer ring at reduced opacity on very small controls. It must be visible without a shadow and distinguishable from a copper hover fill.
- **Order of emphasis:** tone → hairline → spacing → type scale → accent. Accent is last.

## Shapes

The shape language is **editorial and per-world**. The shell and the Prestige world keep square shoulders: `{rounded.md}` on buttons, Prestige cards, and frame shells; `{rounded.sm}` on badges, index marks, and small controls; `{rounded.none}` on rules, dividers, and Pitstop inner blocks. The Day Hair Habit world is the single soft exception — `{rounded.xl}` on its card, detail band, and frames, and `{rounded.lg}` on its leaf blocks — because hospitality reads as soft edges. Pitstop stays at `{rounded.sm}` on its card and `{rounded.none}` inside, because a technical surface should feel machined.

`{rounded.full}` is reserved for exactly two things: the availability dot and a status pip. Pills are never used for containers, cards, section wrappers, or the concept badge — a pill-shaped badge reads as a marketing chip rather than an audit label.

**No accent stripe on any edge.** A coloured bar on the inline-start of a rounded container is the most recognisable generic-dashboard shape and is prohibited; so is a coloured top or bottom edge on a card. Identity accents appear only as a **rule inside the card's content width**, in the index numeral, and — on detail routes — in the hero band's rule and pull-quote tint. Inner blocks inside a concept frame are rectangles with clear internal padding, arranged on an uneven grid so they read as layout regions rather than as cards.

## Components

All interactive components share one state contract: **default, hover, focus-visible, active, and disabled** are each defined, and focus-visible is never removed. Transitions run at 180ms for colour and transform and 280ms for panels, easing on `cubic-bezier(0.22, 1, 0.36, 1)`, animating only `transform`, `opacity`, `background-color`, `border-color`, and `color`.

- **Buttons.** `{components.button-primary}` is the copper fill with ink text at `{spacing.tap-target}` minimum height; hover uses `{components.button-primary-hover}`, active `{components.button-primary-active}`, disabled `{components.button-primary-disabled}` with `cursor: not-allowed` and no hover response. `{components.button-secondary}` is the ink surface with a hairline border and ivory text, moving to `{components.button-secondary-hover}` and tinting its label copper on hover. Every button has a visible focus ring and moves at most 1px vertically on hover. Only one primary button is visible per screen.
- **Navigation links.** `{components.nav-link}` for the bar and `{components.nav-link-active}` for the current route. The active route is marked by ivory text plus a 1px copper underline offset below the baseline — colour and shape together, never colour alone — and each link is a 44px-tall target.
- **Mobile menu.** `{components.mobile-menu-toggle}` is a 44 by 44 control with a monospace `Menu` / `Close` label and an exposed expanded state, shown only below 768px. `{components.mobile-menu-panel}` is a raised panel below the bar holding the four links at `{typography.deck}`, each a full-width 44px row separated by hairlines. The menu closes on selection, on Escape, and on an outside tap, returning focus to the toggle; body scroll is locked while it is open and it never scrolls the page sideways.
- **Project cards.** `{components.project-card-prestige}`, `{components.project-card-day-hair}`, and `{components.project-card-pitstop}` are the three large clickable units, each with its own hover group. Because the whole card is the target, each card is a single interactive element with one focusable node and a focus ring around the entire surface; the "View the concept" row is decorative inside the same target. The card's world controls its ground, text tones, corner radius, and rule construction — never its layout.
- **Index numerals.** `{components.project-index-prestige}`, `{components.project-index-day-hair}`, and `{components.project-index-pitstop}` set `01`, `02`, `03` at `{typography.index-numeral}` in that project's identity accent. The numeral is text, so it must clear 4.5:1 against the ground it sits on and must never be placed on an accent fill.
- **Detail hero bands.** `{components.detail-hero-prestige}`, `{components.detail-hero-day-hair}`, and `{components.detail-hero-pitstop}` carry the only world change on a route: ground, text tones, radius, and identity accent. Everything below the band returns to the shell ink ground with the route's accent used only for its rule, its pull-quote tint, and its index.
- **Concept frames.** `{components.concept-frame-prestige}`, `{components.concept-frame-day-hair}`, and `{components.concept-frame-pitstop}` are labelled placeholders for a selected screen: an outer shell with a caption row, inner layout blocks drawn from `{components.concept-frame-block}`, `{components.concept-frame-block-day-hair}`, or `{components.concept-frame-block-pitstop}` using surfaces, hairlines, short bars, and no imagery at all. Each frame carries `Concept frame — no photography` in `{typography.label-caps}` plus one line on the screen's job, and must never imply a real screenshot.
- **Concept badge.** `{components.concept-badge}` is the small unmissable honesty marker: monospace, uppercase, overlay fill, muted ivory text, 2px radius, identical in all three worlds and never tinted by a project accent. It appears on every project card and inside every detail hero band. It is not interactive, not a link, and never hidden, condensed, or moved below the fold on any breakpoint.
- **Back link.** `{components.back-link}` is a monospace uppercase link with a leading arrow, a 44px height, and a hover that shifts the arrow 2px toward the inline-start. It sits above the hero band and is excluded from the sticky bar so the route's reading order stays clean.
- **External links.** `{components.external-link}` is any link leaving the site — an appointment or booking destination. It always opens in a new tab with `rel="noopener noreferrer"`, carries a small trailing arrow glyph, and announces that behaviour through its accessible name. Internal routes are ordinary same-tab links. No external link may point at a fabricated domain or at a payment, checkout, or purchase flow.
- **Contact band.** `{components.contact-cta}` is the ink-deep `#contact` band with a serif line and one honest sentence about how to get in touch. Since no email address is supplied, it renders no `mailto` link and no fake address; a `mailto:` control may only be added later if a real address is provided, in which case it becomes the band's single primary action.
- **Skip link.** `{components.skip-link}` is the first focusable element on every route, visually hidden until focused, then rendered as a copper button that jumps to the main landmark. Keyboard order is skip link → navigation → main content → footer.
- **Footer metadata.** `{components.footer-meta}` is monospace, taupe, hairline-topped, and free of links except a back-to-top control. It repeats the concept disclaimer and contains no handles, no social links, and no invented credentials.
- **Loading, empty, and error states.** This site has no data layer, so there are no skeleton or error components. If a concept frame's inner content is not yet drawn, render the frame with its caption and label only — never fill it with invented text, fake numbers, or lorem ipsum.

## Do's and Don'ts

- Do keep every text pair at **4.5:1** or better for normal text, and keep each world's text tones on that world's ground — ink tones on ink, sand tones on sand, graphite tones on graphite.
- Don't introduce pure black, pure white, cool greys in a warm world, or blue, indigo, or purple anywhere; the graphite ladder is the only cool family and stays inside the Pitstop route.
- Do use copper `{colors.primary}` for at most two visible things per screen, and reserve `{colors.accent-copper}`, `{colors.accent-day-hair}`, and `{colors.accent-pitstop}` for one project each; never show two identity accents on one route.
- Don't use the green or the red as an error, warning, or success signal for anything except the availability state, and never place ivory, sand, or muted text on an accent fill.
- Do give each project its own world — Prestige on warm ink with the copper folio rule, Day Hair Habit on sand with the botanical leaf rule and soft corners, Pitstop on graphite with the segmented racing rule — so the three cards and three routes are distinguishable at a glance.
- Don't flatten the worlds into recolours of one card, and don't let the worlds mix: one ground, one accent, one rule construction per card and per detail hero band.
- Do label every self-initiated project with `{components.concept-badge}` and restate the concept status in the hero standfirst, in each detail hero band, and in each footer — honesty belongs above the visual work, not in a footnote.
- Don't invent awards, clients, testimonials, metrics, ratings, prices, emails, phone numbers, addresses, or social handles anywhere in copy, alt text, metadata, or link labels — and never render invented numbers inside the Pitstop telemetry rule.
- Do render selected screens as clearly labelled CSS concept frames captioned `Concept frame — no photography`, with at most three frames per route.
- Don't use stock photography, generated imagery, image CDNs, gradient-filled fake photos, fake browser chrome, or device mockups — and don't put a coloured bar or stripe on any edge of a rounded container.
- Do build mobile-first from 375px and verify there is no horizontal overflow at any width between 375px and 1120px; wrap long slugs, place names, and URLs instead of widening the page.
- Don't set fixed pixel widths, negative inline margins, or off-container absolute elements, and don't let a concept frame's grid force a min-content width larger than the viewport.
- Do keep every interactive target at **44 by 44 CSS pixels** or larger, including icon-only controls, card surfaces, and mobile menu rows.
- Don't remove focus outlines, and don't rely on colour alone to mark the active route, a hover, or the availability state; pair every colour change with text, underline, or shape.
- Do treat serif display at weight 400 as the intended voice, with hierarchy carried by scale, space, tone, and rules.
- Don't bold the display type, don't set the deck at body size, don't justify or hyphenate body copy, and don't let monospace creep into paragraphs of reading text.
- Do keep the reading measure at 60–70 characters with `{spacing.read-max}`, and alternate tight, medium, and loose section rhythm instead of one padding everywhere.
- Don't add drop shadows, glows, or any gradient — depth comes from tone steps and hairlines, and the sticky bar's blur is the only translucency allowed.
- Do open external links in a new tab with a clear glyph and an accessible name, and keep internal routes in the same tab.
- Don't add a `mailto:` link, a contact form, or any payment or checkout flow; the contact band stays an honest in-page section until a real address is provided.
- Do keep the sticky bar to the wordmark, four compact links, and the availability state, and keep detail-route navigation to the back link plus the other two project names.
- Don't nest links inside a clickable project card, don't stack more than three concept frames per route, and don't let the concept badge drop below the fold on any breakpoint.
