# CargoNex Website: UI/UX Documentation

**Author:** Manus AI

**Date:** November 21, 2025

## 1. Introduction

This document provides a detailed analysis of the UI/UX components for the CargoNex website (cargonex.io). The information was gathered by scraping the live website and programmatically extracting component properties, including dimensions, spacing, typography, and colors. The website utilizes a right-to-left (RTL) layout for the Hebrew language.

### 1.1. Viewport & Page Dimensions

The analysis was performed on a viewport with the following dimensions:

| Metric          | Value    |
|-----------------|----------|
| Viewport Width  | 1279px   |
| Viewport Height | 939px    |
| Total Scroll Height| 7831px   |

## 2. Global Styles & Patterns

### 2.1. Color Palette

| Color Name      | Hex/RGB/Other          | Usage                                    |
|-----------------|------------------------|------------------------------------------|
| Primary Red     | `rgb(234, 59, 57)`     | CTAs, Headings, Branding, Icons          |
| Text Color      | `oklch(0.235 0.015 65)`| Main body text and headings              |
| Muted Text      | `oklch(0.552 0.016 285.938)`| Secondary text, placeholders, footer links |
| Background      | `oklab(1 0 0 / 0.6)`   | Header background with blur effect       |
| WhatsApp Green  | `rgb(37, 211, 102)`    | Floating contact button                  |

### 2.2. Typography

The website uses a modern, sans-serif Hebrew font. Key text styles are summarized below:

| Element Type | Font Size | Font Weight | Line Height |
|--------------|-----------|-------------|-------------|
| H1 Headings  | 48px      | 700         | 48px        |
| H2 Headings  | 40px      | 700         | 44px        |
| H3 Headings  | 24px      | 700         | 32px        |
| Body Text    | 16px      | 400         | 24px        |
| Buttons (lg) | 18px      | 500         | 28px        |
| Buttons (sm) | 14px      | 500         | 20px        |

### 2.3. Common UI Patterns

- **Cards:** Content is frequently organized into cards with rounded corners (`8.4px` to `12px` border-radius) and subtle box shadows.
- **Buttons:** Consistent button styles are used for primary and secondary actions, with clear hover and focus states.
- **Icons:** SVG icons are used extensively to provide visual cues and improve usability.

## 3. Component Analysis

This section details the dimensions and styles of the major UI components found on the homepage.

### 3.1. Header & Navigation

The header is a sticky element that remains visible on scroll.

| Component      | Width  | Height | Padding     | Key Styles                                   |
|----------------|--------|--------|-------------|----------------------------------------------|
| **Header**     | 1269px | 65px   | 0px         | `position: sticky`, `backdrop-filter: blur(8px)` |
| **Navigation** | 267px  | 20px   | 0px         | `display: flex`, `gap: 24px`                 |
| **Login Button**| 64px   | 32px   | 0px 12px    | `border-radius: 8.4px`, transparent background |
| **Free Trial Button**| 107px  | 32px   | 0px 12px    | `border-radius: 8.4px`, primary red background |

### 3.2. Hero Section

The hero section features a prominent headline and call-to-action buttons.

| Component           | Width  | Height | Font Size | Notes                                        |
|---------------------|--------|--------|-----------|----------------------------------------------|
| **Main Headline (H1)** | 571px  | 106px  | 48px      | Contains "CargoNex אוטומציה"                 |
| **Start Trial Button**| 218px  | 48px   | 18px      | Primary CTA, red background                  |
| **Watch Demo Button** | 128px  | 48px   | 18px      | Secondary CTA, transparent with border       |

### 3.3. Feature & Info Cards

The website uses multiple sections with 3 or 4-column card layouts to present information.

| Component Type       | Avg. Width | Avg. Height | Border Radius | Notes                                        |
|----------------------|------------|-------------|---------------|----------------------------------------------|
| **Problem Cards**    | 387px      | 242px       | 12px          | White background, shadow, icon at the top    |
| **Benefit Cards**    | 285px      | 298px       | 12px          | Similar style to problem cards               |
| **AI Stats Cards**   | 181px      | 124px       | 12px          | Used in the AI data extraction section       |

### 3.4. Forms & Inputs

| Component           | Width  | Height | Padding             | Border Radius |
|---------------------|--------|--------|---------------------|---------------|
| **Container Search Input** | 571px  | 48px   | 4px 40px 4px 12px   | 8.4px         |
| **Search Button**   | 88px   | 48px   | 0px 16px            | 8.4px         |

### 3.5. Interactive Map

The container tracking section includes a Leaflet-powered interactive map.

| Component      | Width  | Height | Notes                                        |
|----------------|--------|--------|----------------------------------------------|
| **Map Container**| 1094px | 440px  | Contains the map, zoom controls, and markers |
| **Shipment Info Cards**| 259px  | 74px   | Display key data like ETA and status         |

### 3.6. Footer

The footer contains navigation links, social media icons, and legal information.

| Component      | Avg. Width | Avg. Height | Font Size | Color                                        |
|----------------|------------|-------------|-----------|----------------------------------------------|
| **Footer Links** | 46px       | 20px        | 14px      | `oklch(0.552 0.016 285.938)` (Muted Text)    |
| **Social Icons** | 20px       | 20px        | N/A       | `oklch(0.552 0.016 285.938)` (Muted Text)    |

## 4. Conclusion

The CargoNex website demonstrates a clean, modern, and professional UI design. The consistent use of spacing, color, and typography creates a cohesive user experience. The component-based architecture is well-suited for a responsive design, ensuring a good experience across different devices. This documentation provides the foundational measurements and styles for replicating or extending the current UI/UX.

## References

[1] CargoNex Homepage. https://cargonex.io
