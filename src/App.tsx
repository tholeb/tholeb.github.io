import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
const Hero = React.lazy(() => import('./components/Hero'));
const Layout = React.lazy(() => import('./components/Layout'));
const Particles = React.lazy(() => import('./components/Particles'));
const Websites = React.lazy(() => import('./components/Websites'));
const Work = React.lazy(() => import('./components/Experience'));

export default function App() {
	return (
		<Layout>
			<Websites />
			<Particles>
				<Hero />
			</Particles>
			<Container>
				<Typography
					variant="subtitle1"
					className="uppercase font-[500]"
					id="about-me"
				>
					Welcome, my name is
				</Typography>
				<Typography variant="h2" component="h1" className="uppercase font-[500]">
					Thomas
				</Typography>
				<Typography variant="h3" component="h2" className="uppercase font-[500]">
					I&apos;m and IT student interested in systems.
				</Typography>
				<Typography variant="body1" className="">
					I&apos;m a 3rd year IT student at Polytech. I tend to specialize in
					systems and networks. Check my work on my{' '}
					<Link
						href="https://github.com/tholeb"
						target="_blank"
						rel="noopener"
						underline="hover"
					>
						<GitHubIcon /> Github
					</Link>
				</Typography>

				<Work />
			</Container>
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
