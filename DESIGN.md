---
name: AI Smart Battery Engineering Design System
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c4c6cf'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8e9198'
  outline-variant: '#43474e'
  surface-tint: '#afc8f0'
  primary: '#afc8f0'
  on-primary: '#163152'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#476083'
  secondary: '#a7c8ff'
  on-secondary: '#003060'
  secondary-container: '#0174d9'
  on-secondary-container: '#fefcff'
  tertiary: '#4ddada'
  on-tertiary: '#003737'
  tertiary-container: '#002323'
  on-tertiary-container: '#009696'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3b'
  on-secondary-fixed-variant: '#004788'
  tertiary-fixed: '#6ff7f6'
  tertiary-fixed-dim: '#4ddada'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f50'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The brand personality is authoritative yet visionary, bridging the gap between rigorous academic engineering and the fluid, rapidly evolving world of Artificial Intelligence. This design system communicates precision, sustainable power, and computational intelligence.

The visual style is **Corporate-Futuristic**. It utilizes a dark-mode foundation to allow high-energy accents (Teal and Lime) to glow, mimicking the luminosity of modern UI and chemical energy reactions. Elements are characterized by clean, architectural lines, subtle glassmorphism for depth, and an emphasis on technical clarity. The UI should feel like a high-end control center for future energy systems.

## Colors
This design system employs a "Luminous Depth" palette.
- **Deep Navy (#001F3F):** The primary canvas color, representing the depth of the university's academic heritage and the "black box" of AI processing.
- **Electric Blue (#0074D9):** Used for primary actions and structural highlights, signifying connectivity and transmission.
- **Vibrant Teal (#39CCCC):** Represents liquid energy and flow. This color is used for data visualizations and secondary interactive elements.
- **Lime Green (#01FF70):** The high-contrast accent. It denotes "Full Charge," sustainability, and success. Use it sparingly for critical Call-To-Action (CTA) points and status indicators.
- **Neutral:** Pure whites and cool grays are used exclusively for typography and subtle borders to maintain maximum legibility against the dark backgrounds.

## Typography
The typography system relies on **Inter** for its neutral, highly legible, and systematic qualities. 
- **Headlines:** Use tight letter-spacing and bold weights to create a sense of impact and modernism.
- **Body:** Standardized on 16px for optimal reading of technical curriculum details.
- **Technical Accents:** For battery specifications or data points, use a monospaced font (JetBrains Mono) to reinforce the "AI and Engineering" aesthetic.
- **Labels:** Small caps or increased letter spacing should be used for section eyebrows to create a hierarchical distinction.

## Layout & Spacing
The layout follows a **Rigid Engineering Grid**.
- **Grid System:** A 12-column grid for desktop with 24px gutters. Use 4-column groupings for faculty cards and 8-column spans for main content areas.
- **Sidebar Navigation:** A fixed-width (280px) vertical sidebar on the left for desktop, providing a persistent structural anchor.
- **Vertical Rhythm:** Use an 8px base unit. Section margins should be generous (80px to 120px) to allow the "energy" of the site to feel unconstrained and premium.
- **Mobile:** Transition to a 4-column fluid grid with 16px margins. The sidebar collapses into a bottom-anchored or hamburger menu.

## Elevation & Depth
Depth is achieved through **Luminous Stratification** rather than traditional shadows.
- **Surface 0 (Background):** Deep Navy (#001F3F).
- **Surface 1 (Cards):** Semi-transparent Navy (opacity 40%) with a 20px backdrop blur and a 1px border of #FFFFFF (opacity 10%). This creates a "Glass" effect.
- **Surface 2 (Floating/Active):** Higher transparency with a subtle inner glow using Electric Blue or Teal to indicate interaction.
- **Visual Cues:** Backgrounds should feature faint, 1px-wide "Circuit Lines" and hexagonal "Battery Cell" patterns (opacity 5%) that appear anchored to the scroll position, providing a sense of physical machinery beneath the glass.

## Shapes
The shape language is **Technical and Precise**. 
- **Radius:** Small, consistent corner radii (4px) are used to maintain a professional, "machined" look. Large "pill" shapes are reserved exclusively for admissions buttons to draw the eye.
- **Decorative Elements:** Use 45-degree angled corners (chamfers) for decorative frames or section dividers to mimic industrial engineering designs.

## Components
- **Sidebar Navigation:** High-contrast background with active states indicated by a vertical Lime Green bar and a soft Electric Blue glow.
- **Vertical Timeline:** A continuous 2px Teal line. Completed years/nodes are solid Lime Green; future nodes are hollow Teal rings.
- **Faculty Feature Cards:** Glassmorphism style with a slight scale-up transform on hover. Profile photos should have a subtle desaturated filter that returns to full color on interaction.
- **Admissions CTA:** High-gloss background using a gradient of Electric Blue to Vibrant Teal. Typography must be bold and white for maximum contrast.
- **Input Fields:** Dark background, 1px Teal border that "pulses" to Lime Green when focused.
- **Battery Status Chips:** Used for faculty expertise or curriculum categories. These should look like small horizontal battery icons with "charge levels" representing the intensity of the subject.