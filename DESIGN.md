---
name: Cyber-Fidelity Portfolio
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#32394c'
  surface-container-lowest: '#070e1e'
  surface-container-low: '#141b2c'
  surface-container: '#191f31'
  surface-container-high: '#232a3c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce2fa'
  on-surface-variant: '#c5c6d0'
  inverse-surface: '#dce2fa'
  inverse-on-surface: '#293042'
  outline: '#8f909a'
  outline-variant: '#45464f'
  surface-tint: '#b4c5ff'
  primary: '#dbe2ff'
  on-primary: '#1c2e5e'
  primary-container: '#b4c5ff'
  on-primary-container: '#405183'
  inverse-primary: '#4c5c90'
  secondary: '#d2bbff'
  on-secondary: '#38255e'
  secondary-container: '#523e79'
  on-secondary-container: '#c4adf0'
  tertiary: '#acedff'
  on-tertiary: '#003640'
  tertiary-container: '#4cd7f6'
  on-tertiary-container: '#005b6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#021848'
  on-primary-fixed-variant: '#334576'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#230e48'
  on-secondary-fixed-variant: '#4f3c76'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0c1324'
  on-background: '#dce2fa'
  surface-variant: '#2e3447'
  surface-border: rgba(255, 255, 255, 0.08)
  neon-yellow: '#E4F222'
  glass-bg: rgba(15, 23, 42, 0.6)
typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-mobile: 24px
  margin-desktop: 64px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 120px
  container-max: 1200px
---

## Brand & Style
The brand personality is **Technical, Visionary, and High-Performance**. It targets a developer and recruiter audience, aiming to evoke a sense of digital craftsmanship and engineering precision. 

The design style is a sophisticated blend of **Glassmorphism** and **Cyber-Minimalism**. It utilizes translucent layers and backdrop blurs to create depth without clutter. The aesthetic is anchored by a "Cyber Grid" background and aurora-like gradients, suggesting a futuristic, data-driven environment. Motion is used as a brand pillar—subtle reveal-up animations and pulsing glows emphasize "alive" code and active systems.

## Colors
The palette is a high-fidelity dark mode system centered on a deep Navy/Slate foundation (`#0c1324`). 

- **Primary (Periwinkle):** Used for key CTAs, "Hire Me" status indicators, and primary branding. It provides high legibility against dark backgrounds.
- **Secondary (Soft Lavender):** Used for secondary accents and decorative gradients, adding warmth to the technical coldness.
- **Tertiary (Cyan):** Represents data and "active" states; used for location icons and specific tool categories.
- **Functional Accents:** A "Neon Yellow" (`#E4F222`) is reserved for high-visibility storage/database indicators, while the system uses a very low-opacity white border for structural definition.

## Typography
The system uses a two-family approach. **Inter** handles all proportional text, providing a clean, Swiss-inspired readability that feels corporate yet modern. **JetBrains Mono** is introduced for "metadata" roles—labels, tags, and technical specs—reinforcing the developer-centric brand.

Gradients are frequently applied to `display-2xl` and `display-lg` headings to create a focal point. All headings utilize tight negative letter-spacing to appear more compact and professional. Labels often use uppercase styling with expanded tracking for secondary navigation and "eye-brow" headers.

## Layout & Spacing
The system follows a **Fixed Grid** philosophy for desktop, centering content within a 1200px max-width container. 

- **Vertical Rhythm:** Sections are separated by a generous `120px` gap to allow the background shaders and glass effects to breathe. Internal component spacing follows an 8px base grid.
- **Adaptive Strategy:** On mobile, margins reduce from 64px to 24px. The grid collapses from a 2-column or 3-column "Bento" layout into a single-column stack. 
- **The Bento Grid:** Technical skills and experience use a "Bento" layout pattern where cards have uniform gutters (`24px`) but vary in internal content complexity.

## Elevation & Depth
Elevation is not conveyed through traditional black shadows, but through **light and blur**.

1.  **The Base Layer:** A deep navy background with a kinetic CSS/WebGL grid.
2.  **The Glass Layer:** Cards use `backdrop-filter: blur(12px)` and a semi-transparent fill (`rgba(15, 23, 42, 0.6)`). They are outlined by a subtle 1px border.
3.  **Active Elevation:** When hovered, cards "lift" using a `translateY(-4px)` transform and gain a "Bloom" effect—a soft, primary-colored shadow (`rgba(180, 197, 255, 0.1)`) that simulates a glowing object.
4.  **Floating Elements:** Low-opacity monospaced keywords (`opacity: 0.05`) float at various Z-indices behind the main content to add a sense of infinite digital space.

## Shapes
The shape language is consistently rounded but structured. 
- **Standard Cards:** Use a `2xl` (1rem / 16px) or `3xl` (1.5rem / 24px) radius to feel modern and approachable.
- **Interactive Pills:** Buttons and status chips use "Full" rounding (pill-shaped) to distinguish them from structural cards.
- **Input Fields:** Utilize a `12px` (xl) radius, balancing the softness of the cards with a slightly tighter corner for data entry.
- **Avatars:** Strictly circular, often framed by "Neon Rings" (dashed borders) to denote importance.

## Components
- **Glass Cards:** The primary container. Must have a 1px `surface-border`, 12px blur, and a subtle hover transition.
- **Action Buttons:**
    - *Primary:* Filled with `primary-container`, high-contrast text, and a `pulsing-glow` animation for hero actions.
    - *Secondary/Outline:* 1px border, backdrop-blur, used for less urgent actions like "Download CV".
- **Tech Chips:** Small, mono-spaced tags with low-opacity background tints (10%) matching their respective category colors (Primary for Frontend, Tertiary for Backend, etc.).
- **Timeline Nodes:** Vertical lines using `surface-container` with glowing circular anchors to represent chronological progress.
- **Input Fields:** Darker than the cards (`surface-container-lowest`), using `primary` color for focus rings.
- **Glass Navigation:** A sticky top bar with `backdrop-blur-xl` that blends into the background while maintaining content legibility.