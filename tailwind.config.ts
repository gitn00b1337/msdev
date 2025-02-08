import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: '#FFF', 
          			dark: '#000',
				  },
				  text: {
					light: '#000',
					dark: '#FFF',
				  }
			},
			spacing: {
				'15': '60px',
				'18': '72px',
				'19': '76px',
				'20': '80px',
				'28': '112px',
				'30': '120px',
				'35': '140px',
				'26.75': '107px',
				'37': '148px',
				'38': '152px',
				'39': '156px',
				'40': '160px',
				'42': '168px',
				'50': '200px',
				'72': '288px',
				'75': '300px',
				'90': '360px',
				'100': '400px',
				'120': '480px',
				'124': '496px',
				'139': '556px',
				'141': '564px',
				'142.25': '569px',
				'144': '576px',
				'145': '580px',
				'140': '560px',
				'160': '640px',
				'176': '704px',
			}
		}
	},
	plugins: [typography, forms, flowbitePlugin]
} satisfies Config;
