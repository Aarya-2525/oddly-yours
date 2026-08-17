# Oddly Yours Design System

**Oddly Yours** makes quirky, unapologetically weird lifestyle products — the flagship being a nose-shaped soap dispenser ("snot your regular soap dispenser"). The brand voice is playful, bold, and a little absurd; visuals are pastel-loud with a hand-drawn, sticker-collage energy.

**Sources provided:**
- `uploads/BRAND MANUAL (1).pdf` — the full brand manual (logo rules, color palette, typography, tone & voice, target audience, packaging philosophy, brand story/vision/mission/personality). No Figma or codebase was attached — everything here is built from the brand manual + the assets below.
- `uploads/oddly_yours_logo.jpeg` — the primary logo/sticker mark (black background, no transparent version provided).
- `uploads/packaging.png` — product packaging photography for the Nose Soap Dispenser.
- `uploads/Fredoka/`, `uploads/Poppins/` — the two brand typefaces, provided as font files (no substitution needed).

No app, website codebase, or Figma file was given — there is no existing UI to recreate, so the `ui_kits/website/` recreation here is an *original* homepage built strictly from the brand manual's rules, not a copy of an existing site.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (also radii/shadows/durations), `fonts.css` (`@font-face`), `animations.css` (keyframes), `interactions.css` (hover/press/focus states for components).
- `assets/` — `logo.jpeg`, `packaging.png`, `fonts/` (Fredoka + Poppins TTFs).
- `guidelines/` — foundation specimen cards (colors, type, spacing, radii, brand marks, motion).
- `components/` — reusable React primitives, grouped by concern:
  - `core/` — Button, Badge, Tag, Card
  - `forms/` — Input, Checkbox, Switch
  - `feedback/` — Tooltip
  - `content/` — Accordion
- `ui_kits/website/` — a full homepage recreation (header, hero, product spotlight, quote banner, FAQ, footer).
- `thumbnail.html` — project homepage tile.
- `SKILL.md` — portable skill file for use in Claude Code / other agent tools.

## Components

| Component | File | Notes |
|---|---|---|
| Button | `components/core/Button.jsx` | primary/secondary/ink/ghost, sm/md/lg, hard-shadow press animation |
| Badge | `components/core/Badge.jsx` | static status/category pill |
| Tag | `components/core/Badge.jsx` | clickable filter chip, scale+tilt hover |
| Card | `components/core/Card.jsx` | general content surface, hover lift+tilt |
| Input | `components/forms/Input.jsx` | text field, orange focus ring |
| Checkbox | `components/forms/Checkbox.jsx` | rounded-square, mint fill |
| Switch | `components/forms/Switch.jsx` | pill toggle, bouncy thumb |
| Tooltip | `components/feedback/Tooltip.jsx` | dark pill, hover reveal |
| Accordion | `components/content/Accordion.jsx` | FAQ list, bouncy chevron |

**Intentional additions:** no source defined a component inventory (brand-manual-only run), so this is a standard from-scratch set sized to the brand's actual needs (a shop site needs product cards, filter tags, an add-to-cart button, form fields, and an FAQ accordion — not a full enterprise kit like Tabs/Dialog/Toast, which nothing here calls for).

## Content Fundamentals

**Voice vs. tone.** Voice never changes: playful, bold, cheeky, humble-but-confident. Tone is the volume knob — funny in a product description, sincere when an order is late. From the brand manual's own comparison:
- Empty cart: "Cart's empty, but let's fix that — go grab something oddly perfect."
- Out of stock: "Sold out. Everyone else had good taste too. We'll email you the second it's back."
- Shipped: "It's on its way! Your new favourite weird little object is en route."

**Person.** Direct address, "you"/"we" — conversational, never "the customer." E.g. "Go on, pick your nose. We won't judge."

**Casing.** Sentence case almost everywhere; headlines can go title case for punch ("Odd Because Ordinary Isn't Our Thing"). No ALL CAPS body copy except short eyebrow labels (e.g. "01 / LOGO").

**Punctuation & rhythm.** Short punchy sentences, sometimes fragments for comic timing ("Corporate. Overly formal. Robotic." as a list of what NOT to be). Em dashes and rhetorical asides are common ("Think 'collectible object' rather than 'product box.'").

**Humor.** Puns are load-bearing ("snot your regular soap dispenser," "Your sink just got a nose job"). Self-aware jokes about being weird are constant.

**Emoji.** Not used. The brand's "iconography" for personality is a ✦ sparkle glyph (used as a bullet in lists) and hand-drawn dash/dot doodles — not emoji.

**What the brand is NOT:** corporate, overly formal, robotic, pretentious, generic, complicated, excessively childish, mean, minimalist, ironic-for-its-own-sake.

## Visual Foundations

**Color.** Pastel but loud — six accent colors (Bubblegum Pink, Splash Blue, Mint Green, Dreamy Lavender, Sunshine Yellow, Tang Orange) plus three foundation neutrals (Almost-Ink near-black, Cream Canvas off-white, Midnight Blue). The manual's own rule: **the Two-Colour Rule** — one loud color + one quiet color per layout; two loud colors together is "a party," four is "a headache." Never more than two accents in one composition.

**Type.** Fredoka (rounded, bold, bouncy) for display — headings, product names, CTAs, quotes. Poppins (clean, geometric) for body copy, nav, product details. The manual's own line: "Fredoka makes us odd. Poppins keeps us clear."

**Spacing.** 4px base scale (4 → 128px), generous whitespace — the logo alone gets clear-space "the height of its smile" on every side, and that generosity carries through the whole system.

**Backgrounds.** Solid pastel fields or clean, low-noise textures — never busy patterns behind the logo or headline type. No full-bleed photography as the *base* layer; product photography sits inside cards/frames instead.

**Illustration/decoration.** Hand-drawn-style dashes, blobs, and squiggles scattered in corners (seen throughout the manual and on the logo itself, and on packaging). No repeating geometric pattern system, no gradients as a base treatment — flat pastel fields dominate.

**Animation.** Not specified numerically in the manual, but the brand's "still a little weird" personality reads as playful motion: bouncy overshoot easing (`--ease-bounce`) for things popping in or toggling, gentle floating for hero imagery, a wiggle on cheeky hover targets. Nothing slow or corporate-fade; motion should feel like a little laugh, not a transition.

**Hover states.** Playful transforms over color-darkening: buttons lift (`translateY(-2px)`), tags scale up and tilt (`scale(1.06) rotate(-2deg)`), cards lift and tilt very slightly. Color shifts are secondary to movement.

**Press states.** Buttons "stamp down" — they drop into their own hard shadow (`translateY(3px)`, shadow disappears) rather than shrinking or darkening. It's a satisfying, tactile click.

**Borders.** Thick, confident ink borders (2.5px, `--color-almost-ink`) on buttons, cards, and inputs — this is a core part of the "sticker" look (the logo itself is a white sticker shape outlined against its background).

**Shadows.** Two systems: a **hard offset shadow** (`0 6px 0 rgba(ink,0.9)`, no blur) for buttons and stickers — the neubrutalist "stamped" look — and a **soft shadow** (`0 10px 24px rgba(ink,0.12)`) for cards that need to feel lighter/floatier. No inner shadows; no glassmorphism/blur — the brand is opaque and graphic, not translucent.

**Corner radii.** Generous and consistent: 10px (small controls) → 18px (cards, inputs) → 28–40px (large surfaces, hero panels). Buttons are full pill radius. Nothing sharp-cornered.

**Cards.** White or cream surface, thick ink border, big radius, soft shadow, optional colored top-accent stripe for categorization. They lift and tilt slightly on hover — never a flat scale-up.

**Imagery color vibe.** Warm-neutral product photography (skin-tone silicone, warm cream backdrops) set against cool-pastel packaging graphics (lavender/mint/blue) — a deliberate warm/cool contrast, no grain or filters, no black-and-white.

**Transparency/blur.** Not used. Everything is opaque, flat, and graphic — no frosted-glass panels, no drop-shadowed blur, consistent with the sticker/collage aesthetic.

**Layout rules.** Sticky header (logo + nav + CTA) is the only fixed element seen; content otherwise flows in generous full-width sections, alternating pastel-tinted section backgrounds with cream/white ones to keep the two-color rule per section.

## Iconography

The brand manual defines no icon system, icon font, or SVG icon set — its "iconographic" vocabulary is entirely hand-drawn dashes, blobs, and squiggles (seen on the logo and throughout packaging), plus a ✦ sparkle glyph used as a text bullet. No emoji are used. Since no real icon assets were provided beyond these decorative marks, this system does not introduce a borrowed icon font (e.g. Lucide) — components that need a small glyph (checkmark, chevron) use minimal inline SVG matching the brand's thick-stroke, rounded-cap linework instead of importing an unrelated icon style. If Oddly Yours has a real icon set, please share it and this section will be updated.

## Caveats & asks

- **No transparent/vector logo.** Only a JPEG sticker mark on a black background was provided (`assets/logo.jpeg`). It works on dark surfaces but will show a black box on light ones — the header currently keeps it on a small rounded frame. If you have an SVG/PNG cutout of the logo, please send it.
- **Dreamy Lavender's hex** in the brand manual PDF text-extracted incorrectly (it repeated Bubblegum Pink's `#FF8FA3`). We estimated `#B59DCF` by sampling the packaging photo's lavender panel — please confirm or correct this value.
- **No codebase or Figma was attached**, so `ui_kits/website/` is an original homepage built only from the brand manual's rules — not a recreation of an existing site. If Oddly Yours has a live site or Figma file, attach it and this kit can be rebuilt as a true recreation.
- Only one real product (the Nose Soap Dispenser) was represented in the assets, so the UI kit and product cards focus on it rather than inventing a fuller catalog.

**Please iterate with us** — tell us if the color/type/spacing choices feel off, if you want more components (Tabs, Modal, Toast?), or more homepage sections (testimonials, Instagram feed, size guide). We built a solid, opinionated starting point; it gets sharper with your feedback.
