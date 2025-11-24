/**
 * Design Tokens for CargoNex
 * Based on UI/UX documentation extracted from cargonex.io
 * Last updated: 2025-11-21
 */

export const colors = {
    // Primary Colors
    primary: {
        DEFAULT: 'rgb(234, 59, 57)',
        hover: 'rgb(210, 45, 43)',
        foreground: 'rgb(255, 255, 255)',
    },

    // Text Colors
    text: {
        DEFAULT: 'oklch(0.235 0.015 65)',
        muted: 'oklch(0.552 0.016 285.938)',
        foreground: 'oklch(0.235 0.015 65)',
    },

    // Background Colors
    background: {
        DEFAULT: 'rgb(255, 255, 255)',
        muted: 'oklch(0.97 0.002 285.938)',
        blur: 'oklab(1 0 0 / 0.6)',
    },

    // Accent Colors
    whatsapp: {
        DEFAULT: 'rgb(37, 211, 102)',
        hover: 'rgb(32, 186, 90)',
    },

    // Utility Colors
    border: 'rgb(229, 231, 235)',
    input: 'rgb(229, 231, 235)',
    ring: 'rgb(234, 59, 57)',
    destructive: 'rgb(239, 68, 68)',
} as const;

export const typography = {
    fontFamily: {
        sans: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
        ],
    },

    fontSize: {
        // Headings
        h1: {
            size: '48px',
            lineHeight: '48px',
            weight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            size: '40px',
            lineHeight: '44px',
            weight: 700,
            letterSpacing: '-0.01em',
        },
        h3: {
            size: '24px',
            lineHeight: '32px',
            weight: 700,
            letterSpacing: '0',
        },

        // Body Text
        body: {
            size: '16px',
            lineHeight: '24px',
            weight: 400,
        },

        // Buttons
        buttonLg: {
            size: '18px',
            lineHeight: '28px',
            weight: 500,
        },
        buttonSm: {
            size: '14px',
            lineHeight: '20px',
            weight: 500,
        },

        // Utility Sizes
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '40px',
        '5xl': '48px',
    },

    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
} as const;

export const spacing = {
    // Border Radius
    borderRadius: {
        none: '0',
        sm: '8.4px',
        md: '12px',
        lg: '16px',
        full: '9999px',
    },

    // Spacing Scale (based on 4px base unit)
    scale: {
        0: '0',
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
    },

    // Component-specific spacing
    header: {
        height: '65px',
        padding: '0px',
    },

    button: {
        paddingX: {
            sm: '12px',
            md: '16px',
            lg: '32px',
        },
        paddingY: {
            sm: '8px',
            md: '12px',
            lg: '16px',
        },
        height: {
            sm: '32px',
            md: '40px',
            lg: '48px',
        },
    },

    card: {
        padding: '24px',
        gap: '16px',
    },
} as const;

export const shadows = {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
} as const;

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const;

export const transitions = {
    duration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        slower: '500ms',
    },

    timing: {
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
} as const;

export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
} as const;

// Component-specific dimensions from documentation
export const components = {
    header: {
        width: '1269px',
        height: '65px',
        position: 'sticky',
        backdropFilter: 'blur(8px)',
    },

    navigation: {
        width: '267px',
        height: '20px',
        gap: '24px',
    },

    buttons: {
        login: {
            width: '64px',
            height: '32px',
            padding: '0px 12px',
            borderRadius: '8.4px',
        },
        freeTrial: {
            width: '107px',
            height: '32px',
            padding: '0px 12px',
            borderRadius: '8.4px',
        },
        startTrial: {
            width: '218px',
            height: '48px',
            fontSize: '18px',
        },
        watchDemo: {
            width: '128px',
            height: '48px',
            fontSize: '18px',
        },
    },

    hero: {
        headline: {
            width: '571px',
            height: '106px',
            fontSize: '48px',
        },
    },

    cards: {
        problem: {
            width: '387px',
            height: '242px',
            borderRadius: '12px',
        },
        benefit: {
            width: '285px',
            height: '298px',
            borderRadius: '12px',
        },
        aiStats: {
            width: '181px',
            height: '124px',
            borderRadius: '12px',
        },
    },

    forms: {
        containerSearch: {
            width: '571px',
            height: '48px',
            padding: '4px 40px 4px 12px',
            borderRadius: '8.4px',
        },
        searchButton: {
            width: '88px',
            height: '48px',
            padding: '0px 16px',
            borderRadius: '8.4px',
        },
    },

    map: {
        container: {
            width: '1094px',
            height: '440px',
        },
        shipmentCard: {
            width: '259px',
            height: '74px',
        },
    },

    footer: {
        link: {
            width: '46px',
            height: '20px',
            fontSize: '14px',
        },
        socialIcon: {
            width: '20px',
            height: '20px',
        },
    },
} as const;

// Viewport dimensions from documentation
export const viewport = {
    width: 1279,
    height: 939,
    scrollHeight: 7831,
} as const;

export default {
    colors,
    typography,
    spacing,
    shadows,
    breakpoints,
    transitions,
    zIndex,
    components,
    viewport,
};
