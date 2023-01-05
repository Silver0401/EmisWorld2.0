const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			primaryBlack: 'black',
			primaryWhite: 'whitesmoke',
			caritas: '#661d75',
			cor: '#d50032',
			fidelitas: '#ddab0e',
			temperantia: '#71b331',
			veritas: '#71b331'
		},
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			lato: ['sans-serif']
		}
	},

	plugins: []
};

module.exports = config;
