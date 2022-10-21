import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import React from 'react';

const Spinner = () => {
	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={3}>
				<CircularProgress color="primary" size="8em" />
			</Grid>
		</Grid>
	);
};

export default Spinner;
