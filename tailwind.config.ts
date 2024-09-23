import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'g': 'linear-gradient(45deg, var(--gray) 30%, var(--primary) 50%, var(--gray) 70%)'
      },

      backgroundColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
      },

      textColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
      },

      fill: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
      },

      stroke: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
      },

      borderColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
      },

      boxShadow: {
        'around': '0px 0px 10px 2px rgba(0, 0, 0, 0.25)'
      },

      dropShadow: {
        'strong': '0 2px 2px rgba(0, 0, 0, 0.8)'
      },

      keyframes: {
        floating: {
          '0%, 100%': {transform: 'translateY(0px)'},
          '25%': {transform: 'translateY(-5px)'},
          '75%': {transform: 'translateY(5px)'}
        },

        pulsing: {
          '0%, 60%, 80%, 100%': {opacity: '0.5'},
          '70%, 90%': {opacity: '1'}
        },

        gradient: {
          '0%': {backgroundPosition: '100% 50%'},
          '75%': {backgroundPosition: '0% 50%'},
          '100%': {backgroundPosition: '0% 50%'}
        }
      },

      animation: {
        floating: 'floating 2s linear infinite',
        pulsing: 'pulsing 2s ease-in-out infinite',
        gradient: 'gradient 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;