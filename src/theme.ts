import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const fontSizes = {
	[theme.breakpoints.up('xl')]: {
		fontSize: '2.2rem',
	},
	[theme.breakpoints.down('xl')]: {
		fontSize: '2.2rem',
	},
	[theme.breakpoints.down('lg')]: {
		fontSize: '1.9rem',
	},
	[theme.breakpoints.down('md')]: {
		fontSize: '1.6rem',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.3rem',
	},
	[theme.breakpoints.down('xs')]: {
		fontSize: '1rem',
	},
};

theme.typography.h1 = fontSizes;
theme.typography.h2 = fontSizes;
theme.typography.h3 = fontSizes;
theme.typography.h4 = fontSizes;
theme.typography.h5 = fontSizes;
theme.typography.h6 = fontSizes;

export { theme };
