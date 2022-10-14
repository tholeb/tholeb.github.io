import { Copyright } from '@mui/icons-material';
import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';

const index = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
			}}
		>
			<Container maxWidth="sm">
				<Typography variant="body2" color="text.secondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://mui.com/">
						Your Website
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</Container>
		</Box>
	);
};

export default index;
