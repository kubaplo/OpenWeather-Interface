import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)'
      },

      textColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)'
      },

      fill: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)'
      },

      stroke: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)'
      },

      borderColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)'
      },

      dropShadow: {
        'strong': '0 2px 2px rgba(0, 0, 0, 0.8)'
      },

      keyframes: {
        floating: {
          '0%, 100%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(10px)'},
        },

        pulsing: {
          '0%, 60%, 80%, 100%': {opacity: '0.5'},
          '70%, 90%': {opacity: '1'}
        }
      },

      animation: {
        floating: 'floating 3s ease-in-out infinite',
        pulsing: 'pulsing 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;