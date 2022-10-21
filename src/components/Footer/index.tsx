import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
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
					<Link color="inherit" href="https://tholeb.fr	">
						tholeb
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</Container>
		</Box>
	);
};

export default index;
