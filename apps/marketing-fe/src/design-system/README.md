# CargoNex Component Library

Complete component library based on the UI/UX documentation from cargonex.io.

## 📦 Installation

All components are located in `client/src/design-system/components/`.

```tsx
import { Button, Card, Input } from '@/design-system/components';
```

## 🎨 Design Tokens

Import design tokens from the centralized tokens file:

```tsx
import tokens from '@/design-system/tokens';

// Usage
const primaryColor = tokens.colors.primary.DEFAULT; // rgb(234, 59, 57)
const h1Size = tokens.typography.fontSize.h1.size; // 48px
```

---

## 🔘 Buttons

### Base Button Component

```tsx
import { Button } from '@/design-system/components/Button';

<Button variant="primary" size="lg">
  התחל התנסות בחינם
</Button>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'whatsapp'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | - | Additional CSS classes |

### Variants

#### Primary Button
```tsx
<Button variant="primary">Primary Action</Button>
```
- Background: `rgb(234, 59, 57)`
- Height: 40px (md), 48px (lg)
- Border radius: 8.4px

#### Secondary Button
```tsx
<Button variant="secondary">Secondary Action</Button>
```
- Background: White with border
- Hover: Light gray background

#### Outline Button
```tsx
<Button variant="outline">Outline Action</Button>
```
- Transparent background with border
- Hover: Accent background

#### WhatsApp Button
```tsx
<Button variant="whatsapp">Contact Us</Button>
```
- Background: `rgb(37, 211, 102)`
- Fixed position (bottom-left)
- Hover: Scale animation

### Specific Button Components

#### Login Button
```tsx
import { LoginButton } from '@/design-system/components/Button';

<LoginButton>התחבר</LoginButton>
```
- Dimensions: 64px × 32px
- Variant: Outline
- Padding: 0px 12px

#### Free Trial Button
```tsx
import { FreeTrialButton } from '@/design-system/components/Button';

<FreeTrialButton>נסה בחינם</FreeTrialButton>
```
- Dimensions: 107px × 32px
- Variant: Primary
- Padding: 0px 12px

#### Start Trial Button
```tsx
import { StartTrialButton } from '@/design-system/components/Button';

<StartTrialButton>התחל התנסות בחינם</StartTrialButton>
```
- Dimensions: 218px × 48px
- Font size: 18px
- Full width on mobile

#### Watch Demo Button
```tsx
import { WatchDemoButton } from '@/design-system/components/Button';

<WatchDemoButton>צפה בדמו</WatchDemoButton>
```
- Dimensions: 128px × 48px
- Font size: 18px
- Variant: Outline

---

## 🃏 Cards

### Base Card Component

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/design-system/components/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Card Variants

#### Problem Card
```tsx
import { ProblemCard } from '@/design-system/components/Card';

<ProblemCard
  icon={<AlertCircle />}
  title="בעיה בניהול מסמכים"
  description="קשיים בניהול מסמכי יבוא ומעקב אחר סטטוס משלוחים"
/>
```
- Dimensions: 387px × 242px
- Border radius: 12px
- Icon background: Primary/10

#### Benefit Card
```tsx
import { BenefitCard } from '@/design-system/components/Card';

<BenefitCard
  icon={<CheckCircle />}
  title="אוטומציה מלאה"
  description="ניהול אוטומטי של כל תהליכי היבוא"
  features={[
    'זיהוי אוטומטי של מסמכים',
    'מעקב בזמן אמת',
    'התראות חכמות'
  ]}
/>
```
- Dimensions: 285px × 298px
- Border radius: 12px
- Icon background: Primary

#### AI Stats Card
```tsx
import { AIStatsCard } from '@/design-system/components/Card';

<AIStatsCard
  value="95%"
  label="דיוק בזיהוי מסמכים"
  trend="up"
/>
```
- Dimensions: 181px × 124px
- Border radius: 12px
- Trend indicators: ↑ ↓ →

#### Shipment Card
```tsx
import { ShipmentCard } from '@/design-system/components/Card';

<ShipmentCard
  containerNumber="MSCU1234567"
  eta="2025-11-25"
  status="in-transit"
  origin="Shanghai"
  destination="Ashdod"
/>
```
- Dimensions: 259px × 74px
- Status colors: Blue (in-transit), Green (arrived), Red (delayed)

---

## 📏 Component Dimensions

All dimensions are based on the UI/UX documentation:

### Header
- Width: 1269px (max-width)
- Height: 65px
- Position: Sticky
- Backdrop filter: blur(8px)

### Navigation
- Width: 267px
- Height: 20px
- Gap: 24px

### Hero Section
- Headline width: 571px
- Headline height: 106px
- Font size: 48px

### Forms
- Container search input: 571px × 48px
- Search button: 88px × 48px
- Border radius: 8.4px

### Map
- Container: 1094px × 440px
- Shipment info cards: 259px × 74px

### Footer
- Link dimensions: 46px × 20px
- Social icons: 20px × 20px
- Font size: 14px

---

## 🎨 Color Palette

### Primary Colors
```css
--primary: rgb(234, 59, 57)
--primary-foreground: rgb(255, 255, 255)
```

### Text Colors
```css
--text: oklch(0.235 0.015 65)
--text-muted: oklch(0.552 0.016 285.938)
```

### Background Colors
```css
--background: rgb(255, 255, 255)
--background-blur: oklab(1 0 0 / 0.6)
```

### Accent Colors
```css
--whatsapp: rgb(37, 211, 102)
--whatsapp-hover: rgb(32, 186, 90)
```

---

## 📱 Responsive Breakpoints

```tsx
const breakpoints = {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
};
```

---

## ✨ Animations

### Transitions
- Fast: 150ms
- Base: 200ms
- Slow: 300ms
- Slower: 500ms

### Timing Functions
- Ease: `cubic-bezier(0.4, 0, 0.2, 1)`
- Ease In: `cubic-bezier(0.4, 0, 1, 1)`
- Ease Out: `cubic-bezier(0, 0, 0.2, 1)`

### Custom Animations
- `fade-in-up`: Fade in with upward motion
- `fade-in`: Simple fade in
- `slide-in-right`: Slide in from right (RTL aware)

---

## 🔧 Usage Examples

### Complete Hero Section
```tsx
import { StartTrialButton, WatchDemoButton } from '@/design-system/components/Button';

<section className="py-20 md:py-28">
  <div className="container">
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
      CargoNex
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground mb-8">
      נהל את כל שרשרת היבוא שלך במקום אחד
    </p>
    <div className="flex gap-4">
      <StartTrialButton>התחל התנסות בחינם</StartTrialButton>
      <WatchDemoButton>צפה בדמו</WatchDemoButton>
    </div>
  </div>
</section>
```

### Feature Cards Grid
```tsx
import { ProblemCard } from '@/design-system/components/Card';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ProblemCard
    icon={<FileText />}
    title="ניהול מסמכים מורכב"
    description="קשיים בניהול וארגון מסמכי יבוא"
  />
  <ProblemCard
    icon={<Clock />}
    title="חוסר שקיפות"
    description="קושי במעקב אחר סטטוס משלוחים"
  />
  <ProblemCard
    icon={<AlertTriangle />}
    title="טעויות ידניות"
    description="שגיאות בהזנת נתונים ידנית"
  />
</div>
```

---

## 📚 Additional Resources

- [Design Tokens](./tokens.ts) - Complete design system tokens
- [UI/UX Documentation](../../../CargoNex%20Website_%20UI_UX%20Documentation.md) - Detailed analysis
- [CSS Classes](../../../css_classes_organized.txt) - Organized CSS utilities

---

## 🤝 Contributing

When adding new components:
1. Follow the documented dimensions and spacing
2. Use design tokens from `tokens.ts`
3. Ensure RTL support
4. Add TypeScript types
5. Include usage examples in this documentation

---

Last updated: 2025-11-21
Based on: cargonex.io UI/UX analysis
