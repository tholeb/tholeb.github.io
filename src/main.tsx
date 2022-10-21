import './assets/styles/index.scss';
import './assets/styles/tailwind.css';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const App = React.lazy(() => import('./App'));
import Spinner from './components/Spinner';
const rootElement = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElement!);

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#FFC300',
		},
		secondary: {
			main: '#003566',
		},
		background: {
			default: '#000814',
			paper: '#000814',
		},
		text: {
			primary: '#fff',
			secondary: '#9e9e9e',
		},
	},
	components: {
		MuiPopover: {
			defaultProps: {
				container: rootElement,
			},
		},
		MuiPopper: {
			defaultProps: {
				container: rootElement,
			},
		},
	},
});

root.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Suspense fallback={<Spinner />}>
					<App />
				</Suspense>
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>,
);
