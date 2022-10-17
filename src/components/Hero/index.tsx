import './Hero.scss';

import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
const Hero = () => {
	return (
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
					<Box sx={{ my: 2 }}>
						<Typography
							variant="h2"
							component="h2"
							className="font-suisse uppercase font-black outlinedText text-center"
						>
							Welcome, my name is
						</Typography>
					</Box>
				</Grid>
				<Grid item className="w-full">
					<Box sx={{ my: 2 }}>
						<Typography
							variant="h2"
							component="h2"
							className="font-suisse uppercase font-black outlinedText text-center"
						>
							Thomas
						</Typography>
					</Box>
				</Grid>
				<Grid item className="w-full">
					<Box sx={{ my: 2 }}>
						<Typography
							variant="h2"
							component="h2"
							className="font-suisse uppercase font-black outlinedText text-center"
						>
							IT student interested in System administration
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
