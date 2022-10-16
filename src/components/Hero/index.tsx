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
				<Grid item>
					<Box sx={{ my: 2 }}>
						<Typography
							variant="h6"
							component="h6"
							className="font-suisse uppercase font-black text-white text-left"
						>
							Welcome, my name is
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Box sx={{ my: 2 }}>
						<Typography
							variant="h1"
							component="h1"
							className="font-suisse uppercase font-black outlinedText text-fill-[#121212] text-left"
						>
							Thomas
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Box sx={{ my: 2 }}>
						<Typography
							variant="h2"
							className="font-suisse uppercase font-black text-white text-left"
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
