/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)'
      },

      textColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)'
      },

      fill: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)'
      },

      stroke: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)'
      },

      borderColor: {
        'p': 'var(--primary)',
        's': 'var(--secondary)',
        'sl': 'var(--secondary-light)',
        'a': 'var(--accent)'
      },

      dropShadow: {
        'strong': '0 2px 2px rgba(0, 0, 0, 0.8)',
      }
    }
  },
  plugins: []
};