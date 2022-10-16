import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import * as React from 'react';

import Hero from './components/Hero';
import Layout from './components/Layout';
import Particles from './components/Particles';
// import Panel from './components/Panel';
import Websites from './components/Websites';

export default function App() {
	return (
		<Layout>
			<Websites />
			<Particles>
				<Hero />
			</Particles>
			<Container>
				<Box sx={{ my: 2 }}>
					{[...new Array(48)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
						)
						.join('\n')}
				</Box>
			</Container>
		</Layout>
	);
}
