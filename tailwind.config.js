const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      amber: colors.amber,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.coolGray,
      green: colors.green,
      indigo: colors.indigo,
      lightBlue: colors.sky,
      lime: colors.lime,
      orange: {
        ...colors.orange,
        1000: '#4a2008',
      },
      pink: {
        ...colors.pink,
        1000: '#460d25',
      },
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.yellow,
      blueGray:{...colors.blueGray,1000:'#010618'},
    },
    extend: {
			fontFamily:{
				jetMono:'JetBrains Mono, monospace',
        round:'Nova Round, cursive'
			},
			transitionProperty: {
				'color-shadow': 'color , opacity, transform',
				'max-height': 'max-height, opacity,transform',
			},
			boxShadow:  (theme) => ({
         px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
         link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
				'btn-d-blueGray': `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${theme('colors.blueGray.900')}`,
				'btn-blueGray' : `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${theme('colors.blueGray.200')},0px 0px 5px 5px ${theme('colors.blueGray.900')}`
			}),
      screens: {
        'xss':'450px',
        'xs': '500px',
      },
			typography: (theme) => ({
        // '3xl':{
        //   css:{
        //     maxWidth:'none',
        //     'h6':{
        //       marginTop: 0,
        //       marginBottom: 0,
        //       backgroundColor:theme('colors.purple.100'),
        //       color:theme('colors.purple.600'),
        //       fontFamily: theme('fontFamily.jetMono'),
        //       fontSize: '20px',
        //       borderRadius: '10px',
        //       padding:'8px 16px 8px 16px',
        //       maxWidth: 'fit-content',
        //       display:'flex',
        //       alignItems: 'center',
        //       '&::before':{
        //         content:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='none' viewBox='0 0 24 24' stroke='%238409D8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' /%3E%3C/svg%3E")`,
        //         width:'28px',
        //         height:'28px',
        //         marginRight:'6px',
        //         padding:'0px',
        //       },
        //       '&:hover::before':{
        //         content:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='25' width='25' viewBox='0 0 20 20' fill='%238409D8'%3E%3Cpath fill-rule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
        //         width:'28px',
        //         height:'28px',
        //         marginRight:'6px',
        //         padding:'0px',
        //       }
        //     },
        //   }
        // },
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.500'),
            '> :first-child': { marginTop: null },
            '> :last-child': { marginBottom: null },
            '&:first-child > :first-child': {
              marginTop: '0',
            },
            '&:last-child > :last-child': {
              marginBottom: '0',
            },
            'h1, h2': {
              letterSpacing: '-0.025em',
            },
            h4: {
              fontSize: '1.125em',
            },
            'h2, h3': {
              'scroll-margin-top': `${(70 + 40) / 16}rem`,
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              width: '0.75em',
              height: '0.125em',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: 0,
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.cyan.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              boxShadow: theme('boxShadow.link'),
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.blueGray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: '400',
              color: theme('colors.violet.600'),
            },
            'code::before': {
              // content: 'none',
            },
            'code::after': {
              // content: 'none',
            },
            'h6':{
              marginTop: 0,
              marginBottom: 0,
              backgroundColor:theme('colors.purple.100'),
              color:theme('colors.purple.600'),
              fontFamily: theme('fontFamily.jetMono'),
              fontSize: '18px',
              borderRadius: '10px',
              padding:'6px 12px 6px 12px',
              maxWidth: 'fit-content',
              display:'flex',
              alignItems: 'center',
              '&::before':{
                content:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' fill='none' viewBox='0 0 24 24' stroke='%238409D8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' /%3E%3C/svg%3E")`,
                width:'22px',
                height:'24px',
                marginRight:'4px',
                padding:'0px',
              },
              '&:hover::before':{
                content:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 20 20' fill='%238409D8'%3E%3Cpath fill-rule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
                width:'21px',
                height:'24px',
                marginRight:'6px',
                padding:'0px',
              }
            },
            pre: {
              backgroundColor: theme('colors.blueGray.1000'),
              color: theme('colors.white'),
              borderRadius: theme('rounded.xl'),
              marginTop: 0,
              marginBottom: 0,
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.600'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
          },
        },
      }),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
