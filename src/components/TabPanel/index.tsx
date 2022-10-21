import Box from '@mui/material/Box';

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			style={{
				width: '100%',
				height: '400px',
				overflowY: 'auto',
			}}
			{...other}
		>
			{value === index && <Box sx={{ m: 3 }}>{children}</Box>}
		</div>
	);
}

export { a11yProps };
