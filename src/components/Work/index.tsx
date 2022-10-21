import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

const Work = ({ data }: WorkProps) => {
	const { role, company, startDate, endDate, description, technologies, link } = data;
	return (
		<Box sx={{ my: 3 }}>
			<Box sx={{ py: 2 }}>
				<Typography variant="h5" component="h3" className="uppercase font-[500]">
					{role}{' '}
					<Link href={link ? link : '#!'} underline="hover">
						@{company}
					</Link>
				</Typography>
				<Typography variant="subtitle1" className="uppercase font-[500]">
					From {startDate} - {endDate}
				</Typography>
			</Box>
			<Divider light />

			<Box sx={{ py: 2 }}>
				<Typography variant="body1">{description}</Typography>
			</Box>

			<Divider />
			<Stack direction="row" spacing={1} sx={{ py: 2 }}>
				{technologies &&
					technologies.map((tech, i) => (
						<Chip
							key={i + tech}
							label={tech}
							variant="outlined"
							sx={{ borderColor: 'primary.main' }}
						/>
					))}
			</Stack>
		</Box>
	);
};

export default Work;
