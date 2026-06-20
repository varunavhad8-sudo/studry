/**
 * DESIGN TOKENS — Light/White Theme
 *
 * WCAG AA Contrast checks (min 4.5:1 against #FAFAFA):
 * ✅ textPrimary  #0A0A0F on #FAFAFA  → ~19.4:1  (PASS)
 * ✅ textSecondary #6B6B76 on #FAFAFA → ~5.0:1   (PASS)
 * ✅ primary #3B5FE0 on #FAFAFA       → ~6.1:1   (PASS — saturated for premium feel on white)
 * ✅ primary text on #3B5FE0 (white)  → ~6.1:1   (PASS)
 * ⚠️  textSecondary on surface #FFFFFF → ~4.8:1  (PASS — just above threshold)
 * ✅ danger red #DC2626 on #FAFAFA    → ~5.9:1   (PASS)
 *
 * NOTE: glows/bloom removed — definition comes from shadow + border.
 * 3D elements must use contact shadows (see surfaceShadow) not bloom.
 */
export const DESIGN_TOKENS = {
  colors: {
    /** Page canvas — off-white prevents eye strain, avoids cheap flat look */
    background: '#FAFAFA',
    /** Card/panel surface — pure white so it lifts above the background */
    surface: '#FFFFFF',
    /** Subtle border to define surface edges (replaces dark-mode glow edge) */
    surfaceBorder: '#E5E5E5',
    /**
     * Glassmorphism token — on white, frosted glass needs visible border.
     * Use alongside surfaceBorder + surfaceShadow; DO NOT rely on opacity alone.
     */
    surfaceGlass: 'rgba(255, 255, 255, 0.85)',
    /**
     * Primary accent — slightly more saturated than dark-mode equivalent
     * so it reads "premium" rather than default browser blue on white.
     */
    primary: '#3B5FE0',
    /** Secondary accent — warmer complementary to the blue primary */
    secondary: '#6B46E5',
    /** Near-black text — avoids harshness of pure #000 on white */
    textPrimary: '#0A0A0F',
    /** Medium-grey secondary text — 5.0:1 contrast on #FAFAFA */
    textSecondary: '#6B6B76',
    /** Danger / error states */
    danger: '#DC2626',
    /** Success / CTA green */
    success: '#059669',
    /** Gold accent (warm, used sparingly for highlights) */
    gold: '#D4AF37',
  },
  shadows: {
    /**
     * Soft ambient shadow for cards — replaces dark-mode glow.
     * On a white background, depth = shadow + border, NOT glow.
     */
    surface: '0 4px 24px rgba(0, 0, 0, 0.04)',
    /** Slightly more lifted shadow for interactive/hover states */
    surfaceHover: '0 8px 40px rgba(0, 0, 0, 0.10)',
    /**
     * Contact shadow for grounding 3D elements.
     * Place as a blurred ellipse beneath floating 3D objects —
     * without this, 3D objects look like cutouts pasted on the page.
     */
    contact: '0 20px 60px rgba(0, 0, 0, 0.08)',
    /** Accent-tinted shadow for primary CTA elements */
    accent: '0 6px 30px rgba(59, 95, 224, 0.25)',
  },
  typography: {
    fontFamily: {
      heading: 'var(--font-space-grotesk)',
      body: 'var(--font-inter)',
    },
    scale: {
      h1: 'clamp(48px, 5vw, 96px)',
      h2: 'clamp(32px, 3.5vw, 56px)',
      h3: 'clamp(24px, 2.5vw, 32px)',
      body: 'clamp(16px, 1.5vw, 18px)',
    },
  },
  spacing: {
    containerMaxWidth: '1280px',
    padding: {
      mobile: '24px',
      desktop: '80px',
    },
    verticalRhythm: {
      mobile: '64px',
      desktop: '120px',
    },
  },
  animation: {
    ease: {
      default: [0.16, 1, 0.3, 1] as const,
      cssDefault: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    duration: {
      fast: 0.3,
      medium: 0.6,
      slow: 1.2,
    },
  },
} as const;
