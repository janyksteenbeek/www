/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['"Lexend"', 'sans-serif'],
            'clash': ['"Clash Grotesk"', 'sans-serif'],
        },
        extend: {
            keyframes: {
                fadeIn: {
                    '0%, 10%': {
                        opacity: '0',
                        transform: 'translateY(1rem) scale(0.95)'
                    },

                    '40%': {
                        opacity: '0.5',
                        transform: 'translateY(0.4rem) scale(0.99)'
                    },
                    '60%': {
                        opacity: '0.8',
                        transform: 'translateY(0.2rem) scale(1.01)'
                    },
                    '80%': {
                        opacity: '0.9',
                        transform: 'translateY(0.1rem) scale(1.01)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    },
                }
            },
            animation: {
                'fade-in': 'fadeIn .4s ease-in-out forwards',
            }
        }
    },
    plugins: [],
}