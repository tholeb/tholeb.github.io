import './Websites.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import * as React from 'react';

const actions = [
	{ icon: <GitHubIcon />, name: 'Github' },
	{ icon: <LinkedInIcon />, name: 'LinkedIn' },
];

export default function BasicSpeedDial() {
	return (
		<SpeedDial
			ariaLabel="Links"
			sx={{ position: 'fixed', bottom: 16, left: 16 }}
			open={true}
		>
			{actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					className="acrylic"
				/>
			))}
		</SpeedDial>
	);
}
