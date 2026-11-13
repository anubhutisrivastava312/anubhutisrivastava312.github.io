// Design tokens from the Stitch project "Anubhuti Srivastava Portfolio Website".
// Colours are CSS variables (see src/input.css) so light and dark themes share one stylesheet.
// Build: npx tailwindcss@3.4.17 -i src/input.css -o styles.css --minify
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        background: v('background'),
        surface: v('background'),
        'surface-container-lowest': v('sc-lowest'),
        'surface-container-low': v('sc-low'),
        'surface-container': v('sc'),
        'surface-container-high': v('sc-high'),
        'surface-container-highest': v('sc-highest'),
        'on-surface': v('on-surface'),
        'on-surface-variant': v('on-surface-variant'),
        outline: v('outline'),
        'outline-variant': v('outline-variant'),
        primary: v('primary'),
        'primary-container': v('primary-container'),
        secondary: v('secondary'),
        'secondary-container': v('secondary-container'),
        tertiary: v('tertiary'),
        'tertiary-container': v('tertiary-container'),
        lime: v('lime'),
        cyan: v('cyan'),
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      fontSize: {
        'label-sm': ['11px', { lineHeight: '14px', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'body-md': ['14px', { lineHeight: '22px' }],
        'body-lg': ['16px', { lineHeight: '26px' }],
        'title-md': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-lg': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'headline-lg-mobile': ['26px', { lineHeight: '34px', fontWeight: '700' }],
        'headline-xl': ['48px', { lineHeight: '56px', fontWeight: '800' }],
        'headline-xl-mobile': ['34px', { lineHeight: '42px', fontWeight: '800' }],
      },
      spacing: {
        'space-xs': '0.25rem', 'space-sm': '0.5rem', 'space-md': '1rem',
        'space-lg': '1.5rem', 'space-xl': '2.5rem', gutter: '1.5rem', 'gutter-mobile': '1rem',
      },
      maxWidth: { page: '1200px' },
    },
  },
};
