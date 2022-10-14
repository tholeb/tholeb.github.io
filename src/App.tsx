import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import Hero from './components/Hero';
import Layout from './components/Layout';
import Panel from './components/Panel';
import Websites from './components/Websites';

const PanelImages = [
	'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
	'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000',
];

export default function App() {
	return (
		<Layout>
			<Websites />
			<Hero />
			{/* <Panel imgs={PanelImages}>
				{[
					<Typography variant="h4" component="h1" gutterBottom key="pc1">
						aaa
					</Typography>,
					<Typography variant="h1" component="h1" gutterBottom key="pc2">
						AAAAAAAAAAAAAAAAAAA
					</Typography>,
				]}
			</Panel> */}
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
