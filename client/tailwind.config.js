/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            primary: '#F6F1F1',
            secondary: '#AFD3E2',
            light: '#19A7CE',
            dark: '#146C94',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
