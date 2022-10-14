import './Websites.scss';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import * as React from 'react';

const actions = [
	{ icon: <FileCopyIcon />, name: 'Copy' },
	{ icon: <SaveIcon />, name: 'Save' },
	{ icon: <PrintIcon />, name: 'Print' },
	{ icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
	return (
		<SpeedDial
			ariaLabel="SpeedDial basic example"
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
