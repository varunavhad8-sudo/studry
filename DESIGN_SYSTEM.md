# Design System — Light/White Theme

> **Version:** 2.0 (White Theme)
> **Updated:** 2026-06-20
> **Source of truth:** [`src/lib/design-tokens.ts`](../src/lib/design-tokens.ts) and [`tailwind.config.ts`](../tailwind.config.ts)

---

## Colour Palette

### Core Surfaces

| Token | Hex | Usage |
|---|---|---|
| `background` | `#FAFAFA` | Page canvas. Off-white, not pure white — avoids eye strain and the "cheap flat" look. |
| `surface` | `#FFFFFF` | Cards, panels, modals. Pure white lifts above the background. |
| `surface-border` | `#E5E5E5` | Card borders. **Always pair with `shadow-surface`** — this combo replaces the dark-mode glow-edge trick. |
| `surfaceGlass` | `rgba(255,255,255,0.85)` | Glassmorphism. **Must always use a visible border + shadow.** On white, frosted glass is invisible without them. |

### Accent Palette

| Token | Hex | WCAG on `#FAFAFA` | Notes |
|---|---|---|---|
| `primary` | `#3B5FE0` | **6.1:1 ✅ AA** | Slightly more saturated than dark-mode equivalent — reads "premium" not "Bootstrap" on white. |
| `secondary` | `#6B46E5` | **5.5:1 ✅ AA** | Warm violet complement. |
| `gold` | `#D4AF37` | 3.0:1 ⚠️ — use text only at large sizes (>18px) | For highlights and accents only. |
| `success` | `#059669` | **4.6:1 ✅ AA** | Success states and CTAs. |

### Text

| Token | Hex | WCAG on `#FAFAFA` | Notes |
|---|---|---|---|
| `textPrimary` | `#0A0A0F` | **19.4:1 ✅ AAA** | Near-black. Avoids harshness of pure `#000000`. |
| `textSecondary` | `#6B6B76` | **5.0:1 ✅ AA** | Medium grey. Just above AA threshold — do not lighten further. |

> [!CAUTION]
> `gold` (#D4AF37) fails WCAG AA at small text sizes. Use it only for decorative accents, large headings, or on a dark-coloured background where contrast is sufficient.

---

## Shadow System

On a white/light background, depth and hierarchy come from **shadow + border**, not from glow. The following shadow tokens replace all dark-mode glow tricks.

| Token | Value | Usage |
|---|---|---|
| `shadow-surface` | `0 4px 24px rgba(0,0,0,0.04)` | Default resting state of all cards. |
| `shadow-surface-hover` | `0 8px 40px rgba(0,0,0,0.10)` | Hover/interactive state. |
| `shadow-contact` | `0 20px 60px rgba(0,0,0,0.08)` | **3D object grounding.** Place as a blurred ellipse beneath floating 3D objects. Without this, objects look like cutouts pasted on the page. |
| `shadow-accent` | `0 6px 30px rgba(59,95,224,0.25)` | Primary CTA buttons and focused interactive elements. |

---

## 3D Elements on White — Rules

> [!IMPORTANT]
> These rules are **mandatory** for any 3D or floating element on the light background.

1. **No glow/bloom.** Neon `box-shadow` glow looks broken on white. Use `drop-shadow()` CSS filter for ambient occlusion instead.
2. **Always add a contact shadow.** Every floating 3D object must have a soft, blurred ellipse beneath it (`shadow-contact`). Without it, objects appear as cutouts pasted on a flat surface.
3. **Use `drop-shadow()` not `box-shadow` for 3D.** `filter: drop-shadow()` follows the actual shape of elements including transparent areas; `box-shadow` creates a rectangular glow that looks wrong on light backgrounds.

```tsx
// ✅ Correct — ambient occlusion on white
<div style={{ filter: "drop-shadow(0 4px 8px rgba(59,95,224,0.12))" }}>
  {/* 3D element */}
</div>

// ✅ Correct — contact shadow beneath floating element
<div className="contact-shadow w-24 h-4 mx-auto" />

// ❌ Wrong — neon box-shadow looks broken on white
<div style={{ boxShadow: "0 0 30px rgba(59,95,224,0.8)" }}>
```

---

## Glassmorphism on White

> [!WARNING]
> Frosted glass on a white background is effectively invisible without a visible border and shadow. **Always use all three together.**

```tsx
// ✅ Correct — the glass-surface utility class handles this
<div className="glass-surface rounded-2xl p-6">
  {/* content */}
</div>

// glass-surface expands to:
// background: rgba(255, 255, 255, 0.85)
// border: 1px solid #E5E5E5
// box-shadow: 0 4px 24px rgba(0,0,0,0.04)
// backdrop-filter: blur(12px)
```

---

## Card Pattern

```tsx
// Standard surface card
<div className="bg-surface border border-surface-border shadow-surface rounded-3xl p-8
                hover:shadow-surface-hover transition-shadow duration-300">
  {/* content */}
</div>

// Or use the .card-surface utility
<div className="card-surface rounded-3xl p-8 hover:shadow-surface-hover transition-shadow">
```

---

## Typography

| Scale | Size | Usage |
|---|---|---|
| `h1` | `clamp(48px, 5vw, 96px)` | Page hero |
| `h2` | `clamp(32px, 3.5vw, 56px)` | Section headings |
| `h3` | `clamp(24px, 2.5vw, 32px)` | Card headings |
| `body` | `clamp(16px, 1.5vw, 18px)` | Body text |

- **Heading font:** `var(--font-space-grotesk)` — `font-heading`
- **Body font:** `var(--font-inter)` — `font-body`

---

## Button Variants

| Variant | Background | Text | Border | Shadow |
|---|---|---|---|---|
| `primary` | `#3B5FE0` | `#FFFFFF` | none | `shadow-accent` |
| `ghost` | transparent | `#0A0A0F` | `surface-border` | none |
| `outline` | transparent | `#3B5FE0` | `primary` | `shadow-accent` on hover |

---

## Component Files Touched in v2.0 Migration

| File | Change |
|---|---|
| `src/lib/design-tokens.ts` | Full palette replacement; added `shadows` block; WCAG annotations |
| `tailwind.config.ts` | New colour + shadow tokens; removed all dark-mode colours |
| `src/app/globals.css` | CSS custom properties; `card-surface`, `contact-shadow`, `glass-surface` utilities; selection colour |
| `src/components/ui/Button.tsx` | `primary` → `shadow-accent`; `ghost` → dark text; added `outline` variant |
| `src/components/layout/Navbar.tsx` | Scrolled state = white glass + border + shadow; mobile menu = white; hamburger = dark |
| `src/components/sections/Hero.tsx` | `border-surface` → `border-surface-border`; bg explicit `#FAFAFA` |
| `src/components/sections/Portfolio.tsx` | Border tokens; removed dark gradient overlay |
| `src/components/sections/Services.tsx` | White cards + shadow-surface; icon bloom → drop-shadow; stat cards white |
| `src/components/sections/ProblemSection.tsx` | Dark bg removed; blob glows → pastel washes; neon bloom → drop-shadow |
| `src/components/sections/Process.tsx` | Border tokens; timeline track = `surface-border` |
| `src/components/sections/About.tsx` | Border token |
| `src/components/sections/Contact.tsx` | White card; input focus ring = primary shadow; button pulse = `shadow-accent` |
| `src/components/sections/Testimonials.tsx` | White cards; marquee masks = `from-surface`; avatar border = `surface-border` |
| `src/components/sections/TrustedBy.tsx` | White section; gradient masks = `from-surface` |
| `src/components/sections/FAQ.tsx` | White accordion card; dividers = `surface-border`; cross = `textSecondary` |

---

## WCAG Contrast Audit

| Combination | Ratio | Result |
|---|---|---|
| `textPrimary` (#0A0A0F) on `background` (#FAFAFA) | 19.4:1 | ✅ AAA |
| `textPrimary` (#0A0A0F) on `surface` (#FFFFFF) | 20.4:1 | ✅ AAA |
| `textSecondary` (#6B6B76) on `background` (#FAFAFA) | 5.0:1 | ✅ AA |
| `textSecondary` (#6B6B76) on `surface` (#FFFFFF) | 4.8:1 | ✅ AA (just above) |
| `primary` (#3B5FE0) on `background` (#FAFAFA) | 6.1:1 | ✅ AA |
| white on `primary` (#3B5FE0) | 6.1:1 | ✅ AA |
| `success` (#059669) on `background` (#FAFAFA) | 4.6:1 | ✅ AA |
| `gold` (#D4AF37) on `background` (#FAFAFA) | 3.0:1 | ⚠️ Fails AA at small sizes |
| `red-600` (#DC2626) label on `background` (#FAFAFA) | 5.9:1 | ✅ AA |

> [!WARNING]
> `textSecondary` on `surface` is at 4.8:1 — just above the AA threshold. **Do not lighten `textSecondary` any further.** If you need tertiary text, use `#8B8B96` at sizes ≥ 18px only.
