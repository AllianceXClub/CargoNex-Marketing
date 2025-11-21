# Quick Reference Guide

Fast lookup for common design system values and patterns.

## 🎨 Colors

```css
Primary:     #EA3B39 (rgb(234, 59, 57))
WhatsApp:    #25D366 (rgb(37, 211, 102))
Text:        oklch(0.235 0.015 65)
Muted:       oklch(0.552 0.016 285.938)
Background:  #FFFFFF (rgb(255, 255, 255))
Border:      #E5E7EB (rgb(229, 231, 235))
```

## 📏 Spacing

```
4px   8px   12px   16px   24px   32px   48px   64px
1     2     3      4      6      8      12     16
```

## 🔘 Border Radius

```
8.4px  (buttons, inputs)
12px   (cards)
16px   (large containers)
9999px (pills, circles)
```

## 📝 Typography

```
H1:  48px / 700 / 48px line-height
H2:  40px / 700 / 44px line-height
H3:  24px / 700 / 32px line-height
Body: 16px / 400 / 24px line-height
```

## 📱 Breakpoints

```
sm:   640px   (mobile landscape)
md:   768px   (tablet)
lg:   1024px  (desktop)
xl:   1280px  (large desktop)
2xl:  1536px  (extra large)
```

## 🔲 Component Sizes

### Buttons
```
Small:  32px height
Medium: 40px height
Large:  48px height
```

### Cards
```
Problem:  387px × 242px
Benefit:  285px × 298px
AI Stats: 181px × 124px
Shipment: 259px × 74px
```

### Header
```
Height: 65px
Sticky, backdrop-blur
```

## ⚡ Quick Imports

```tsx
// Components
import { Button, Card, tokens } from '@/design-system';

// Specific buttons
import { 
  LoginButton, 
  FreeTrialButton, 
  StartTrialButton 
} from '@/design-system/components/Button';

// Specific cards
import { 
  ProblemCard, 
  BenefitCard, 
  AIStatsCard 
} from '@/design-system/components/Card';
```

## 🎯 Common Patterns

### Hero Section
```tsx
<section className="py-20 md:py-28">
  <div className="container">
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
      {title}
    </h1>
  </div>
</section>
```

### 3-Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Button Group
```tsx
<div className="flex gap-4">
  <Button variant="primary">Primary</Button>
  <Button variant="outline">Secondary</Button>
</div>
```

## 🌐 RTL

```css
html { direction: rtl; }

/* Use logical properties */
margin-inline-start  (instead of margin-left)
padding-inline-end   (instead of padding-right)
```

## ♿ Accessibility

```tsx
// Focus ring
focus-visible:ring-2 focus-visible:ring-ring

// Disabled state
disabled:opacity-50 disabled:pointer-events-none

// ARIA
aria-label="descriptive text"
role="button"
```

## 📚 Full Documentation

- [Complete Style Guide](./STYLE_GUIDE.md)
- [Component Library](./client/src/design-system/README.md)
- [Design Tokens](./client/src/design-system/tokens.ts)
- [UI/UX Analysis](./CargoNex%20Website_%20UI_UX%20Documentation.md)
