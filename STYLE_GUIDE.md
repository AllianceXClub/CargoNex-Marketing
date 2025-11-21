# CargoNex Complete Style Guide

**Version:** 1.0.0  
**Last Updated:** 2025-11-21  
**Source:** UI/UX Analysis of cargonex.io

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Patterns & Best Practices](#patterns--best-practices)
7. [Accessibility](#accessibility)
8. [RTL Support](#rtl-support)

---

## Brand Identity

### Brand Colors

**Primary Red**
- Hex: `#EA3B39`
- RGB: `rgb(234, 59, 57)`
- Usage: CTAs, headings, branding, icons, links
- Represents: Energy, urgency, action

**WhatsApp Green**
- Hex: `#25D366`
- RGB: `rgb(37, 211, 102)`
- Usage: Floating contact button
- Represents: Communication, accessibility

### Logo Usage
- Primary logo appears in header
- Minimum clear space: 16px on all sides
- Never distort or rotate the logo
- Maintain aspect ratio

### Voice & Tone
- **Professional** yet **approachable**
- **Clear** and **concise** Hebrew language
- **Action-oriented** messaging
- **Empowering** language for users

---

## Color System

### Primary Palette

```css
/* Primary Red */
--primary: rgb(234, 59, 57);
--primary-foreground: rgb(255, 255, 255);
--primary-hover: rgb(210, 45, 43);
--primary-light: rgb(255, 205, 210);

/* Text Colors */
--text-primary: oklch(0.235 0.015 65);
--text-muted: oklch(0.552 0.016 285.938);

/* Background Colors */
--background: rgb(255, 255, 255);
--background-muted: oklch(0.97 0.002 285.938);
--background-blur: oklab(1 0 0 / 0.6);

/* Accent Colors */
--whatsapp: rgb(37, 211, 102);
--whatsapp-hover: rgb(32, 186, 90);

/* Utility Colors */
--border: rgb(229, 231, 235);
--input: rgb(229, 231, 235);
--ring: rgb(234, 59, 57);
```

### Color Usage Guidelines

#### Do's ✅
- Use primary red for main CTAs and important actions
- Use muted text for secondary information
- Maintain sufficient contrast ratios (WCAG AA minimum)
- Use WhatsApp green only for WhatsApp-related actions

#### Don'ts ❌
- Don't use primary red for destructive actions (use destructive color)
- Don't use more than 3 colors in a single component
- Don't use low-contrast color combinations
- Don't override brand colors without approval

### Dark Mode

```css
.dark {
  --primary: rgb(234, 59, 57);
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.85 0.005 65);
  --border: oklch(1 0 0 / 10%);
}
```

---

## Typography

### Font Stack

```css
font-family: 'Poppins', 'Heebo', 'Assistant', -apple-system, 
             BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Line Height | Weight | Letter Spacing |
|---------|------|-------------|--------|----------------|
| **H1** | 48px | 48px | 700 | -0.02em |
| **H2** | 40px | 44px | 700 | -0.01em |
| **H3** | 24px | 32px | 700 | 0 |
| **Body** | 16px | 24px | 400 | 0 |
| **Button (lg)** | 18px | 28px | 500 | 0 |
| **Button (sm)** | 14px | 20px | 500 | 0 |
| **Small** | 14px | 20px | 400 | 0 |
| **XSmall** | 12px | 16px | 400 | 0 |

### Responsive Typography

```css
/* Mobile (< 640px) */
h1 { font-size: 32px; }
h2 { font-size: 28px; }
h3 { font-size: 20px; }

/* Tablet (640px - 1024px) */
@media (min-width: 640px) {
  h1 { font-size: 40px; }
  h2 { font-size: 32px; }
  h3 { font-size: 22px; }
}

/* Desktop (> 1024px) */
@media (min-width: 1024px) {
  h1 { font-size: 48px; }
  h2 { font-size: 40px; }
  h3 { font-size: 24px; }
}
```

### Typography Best Practices

#### Hierarchy
1. Use only one H1 per page
2. Don't skip heading levels (H1 → H2 → H3)
3. Maintain consistent spacing between headings and content
4. Use font weight to create visual hierarchy

#### Readability
- Maximum line length: 75 characters
- Minimum font size: 14px
- Line height: 1.5× font size for body text
- Adequate spacing between paragraphs (16px minimum)

---

## Spacing & Layout

### Spacing Scale

Based on 4px base unit:

```typescript
const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
};
```

### Border Radius

```css
--radius-sm: 8.4px;  /* Buttons, inputs */
--radius-md: 12px;   /* Cards */
--radius-lg: 16px;   /* Large containers */
--radius-full: 9999px; /* Pills, avatars */
```

### Layout Grid

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px; /* Mobile */
}

@media (min-width: 640px) {
  .container {
    padding: 0 24px; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 32px; /* Desktop */
  }
}
```

### Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape / Small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
};
```

---

## Components

### Header

**Specifications:**
- Height: 65px
- Position: Sticky
- Backdrop filter: blur(8px)
- Background: `oklab(1 0 0 / 0.6)`

**Structure:**
```tsx
<header className="sticky top-0 z-50 h-[65px] backdrop-blur">
  <nav className="container flex items-center justify-between">
    <Logo />
    <Navigation />
    <Actions>
      <LoginButton />
      <FreeTrialButton />
    </Actions>
  </nav>
</header>
```

### Buttons

**Dimensions:**
- Small: 32px height
- Medium: 40px height
- Large: 48px height
- Border radius: 8.4px

**States:**
- Default
- Hover: Scale 95%, shadow increase
- Active: Scale 95%
- Disabled: 50% opacity, no pointer events
- Focus: 2px ring offset

### Cards

**Problem Card (387px × 242px)**
```tsx
<Card className="p-6">
  <Icon className="w-12 h-12 mb-4" />
  <Title className="text-xl font-bold mb-2" />
  <Description className="text-sm text-muted" />
</Card>
```

**Benefit Card (285px × 298px)**
```tsx
<Card className="p-6">
  <Icon className="w-12 h-12 mb-4 bg-primary" />
  <Title className="text-xl font-bold mb-2" />
  <Description className="text-sm text-muted mb-4" />
  <FeatureList />
</Card>
```

**AI Stats Card (181px × 124px)**
```tsx
<Card className="p-4">
  <Value className="text-3xl font-bold text-primary" />
  <Label className="text-sm text-muted" />
</Card>
```

### Forms

**Input Field:**
- Height: 48px
- Padding: 4px 40px 4px 12px
- Border radius: 8.4px
- Border: 1px solid input color

**Search Button:**
- Width: 88px
- Height: 48px
- Padding: 0px 16px

---

## Patterns & Best Practices

### Card Layouts

**3-Column Grid (Desktop)**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards.map(card => <Card key={card.id} {...card} />)}
</div>
```

**4-Column Grid (Desktop)**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {items.map(item => <Item key={item.id} {...item} />)}
</div>
```

### Hero Section Pattern

```tsx
<section className="py-20 md:py-28">
  <div className="container">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-right">
        <Badge />
        <H1 />
        <Description />
        <CTAButtons />
        <FeatureList />
      </div>
      <div className="relative">
        <MediaContent />
        <DecorativeElements />
      </div>
    </div>
  </div>
</section>
```

### Animation Guidelines

**Micro-interactions:**
- Button hover: 200ms ease
- Card hover: 300ms ease
- Page transitions: 500ms ease

**Loading States:**
- Skeleton screens for content
- Spinners for actions
- Progress bars for multi-step processes

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation:**
- All interactive elements must be keyboard accessible
- Visible focus indicators (2px ring)
- Logical tab order

**Screen Readers:**
- Semantic HTML elements
- ARIA labels where needed
- Alt text for images
- Descriptive link text

### Focus Management

```css
.focus-visible:focus {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

---

## RTL Support

### Direction

```css
html {
  direction: rtl;
}
```

### Text Alignment

```css
/* RTL-aware text alignment */
[dir="rtl"] .text-left {
  text-align: right;
}

[dir="rtl"] .text-right {
  text-align: left;
}
```

### Spacing

```css
/* Use logical properties */
margin-inline-start: 16px; /* Instead of margin-left */
padding-inline-end: 16px;  /* Instead of padding-right */
```

### Icons & Arrows

- Flip directional icons in RTL
- Use CSS `transform: scaleX(-1)` for arrows
- Test all icon placements in RTL context

---

## Component Checklist

When creating new components, ensure:

- [ ] Uses design tokens from `tokens.ts`
- [ ] Follows documented dimensions
- [ ] Supports all required variants
- [ ] Includes hover/focus/active states
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] RTL compatible
- [ ] Responsive on all breakpoints
- [ ] Documented with usage examples
- [ ] TypeScript types defined

---

## Resources

### Design Files
- [Design Tokens](./tokens.ts)
- [Component Library](./components/)
- [UI/UX Documentation](../../../CargoNex%20Website_%20UI_UX%20Documentation.md)

### CSS Utilities
- [Organized CSS Classes](../../../css_classes_organized.txt)
- [All CSS Classes](../../../css_classes.txt)

### External References
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [RTL Styling Guide](https://rtlstyling.com)

---

## Version History

### v1.0.0 (2025-11-21)
- Initial style guide creation
- Based on cargonex.io UI/UX analysis
- Complete design system documentation
- Component library specifications

---

**Maintained by:** CargoNex Development Team  
**Questions?** Contact the design system team

---

*This style guide is a living document and should be updated as the design system evolves.*
