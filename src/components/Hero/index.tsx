import './Hero.scss';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { gsap } from 'gsap';
import React from 'react';

const Hero = () => {
	const config = {
		xDuration: 2,
		delay: 1,
	};
	const app = React.useRef(null);

	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				'.hero',
				{ webkitTextFillColor: '#fff' },
				{
					webkitTextFillColor: 'transparent',
					duration: 2,
					delay: config.delay + config.xDuration + 0.2,
					ease: 'power2.out',
				},
			);
			gsap.fromTo(
				'#hero-first',
				{ x: 0 },
				{
					x: '-4em',
					duration: config.xDuration,
					delay: config.delay,
					ease: 'power1.out',
				},
			);
			gsap.fromTo(
				'#hero-second',
				{ x: 0 },
				{
					x: '4em',
					duration: config.xDuration,
					delay: config.delay,
					ease: 'power2.out',
				},
			);
			gsap.fromTo(
				'#hero-third',
				{ x: 0 },
				{
					x: '-2.5em',
					duration: config.xDuration,
					delay: config.delay,
					ease: 'power2.out',
				},
			);
		}, app);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={app}>
			<Container>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ minHeight: '100vh' }}
				>
					<Grid item className="w-full">
						<Box sx={{ my: 1 }}>
							<Typography
								variant="h1"
								component="h2"
								className="uppercase font-black hero outlinedText text-center"
								id="hero-first"
							>
								IT student
							</Typography>
						</Box>
					</Grid>
					<Grid item>
						<Box sx={{ my: 1 }}>
							<Typography
								variant="h1"
								component="h2"
								id="hero-second"
								className="uppercase font-black hero outlinedText text-center"
							>
								SELF TAUGHT
							</Typography>
						</Box>
					</Grid>
					<Grid item className="w-full">
						<Box sx={{ my: 1 }}>
							<Typography
								variant="h1"
								component="h2"
								id="hero-third"
								className="uppercase font-black hero outlinedText text-center"
							>
								Developer
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Hero;
