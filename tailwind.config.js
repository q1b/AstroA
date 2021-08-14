const colors = require('tailwindcss/colors');
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('tailwindcss/plugin');
const _ = require('lodash')
const boxShadowObject = (colors) => {
	let stg = {}
	Object.keys(colors).forEach((e) => {
		stg[
			`btn-${e}`
		] = `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${colors[e]['200']}`
	})
	return stg
}

const boxShadowBrightObject = (colors) => {
	let stg = {}
	Object.keys(colors).forEach((e) => {
		stg[
			`btn-b-${e}`
		] = `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${colors[e]['200']},0px 0px 5px 5px ${colors[e]['700']}`
	})
	return stg
}

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...colors,
			},
			transitionProperty: {
				'color-shadow': 'color , opacity, transform',
				'max-height': 'max-height, opacity,transform',
			},
			boxShadow: {
				...defaultConfig.theme.boxShadow,
				...boxShadowObject(colors),
				...boxShadowBrightObject(colors),
			},
		},
		textShadow: {
      'black':'0px 0px 10px #000'
    },
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ e, theme, addUtilities }) {
			const textShadowUtilities = _.fromPairs(
				_.map(theme('textShadow'), (value, modifier) => {
					return [`.${e(`text-shadow${ modifier === 'default' ? '' : `-${modifier}` }`)}`,{textShadow: value,},]
				})
			)
			addUtilities(textShadowUtilities)
		}),
	],
}
