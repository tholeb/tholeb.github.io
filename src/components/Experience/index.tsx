import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import TabPanel, { a11yProps } from '../TabPanel';
import Work from '../Work';
import data from './data';

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 0,
				bgcolor: 'background.paper',
				display: 'flex',
				height: 'auto',
			}}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{ borderRight: 1, borderColor: 'divider', overflow: 'visible' }}
			>
				{data.map((work: IWorkData, index: number) => (
					<Tab
						label={work.company}
						key={'Tab' + work.company + index}
						{...a11yProps(index)}
					/>
				))}
			</Tabs>
			{data.map((work, index) => (
				<TabPanel
					value={value}
					key={'Tabcontent' + work.company + index}
					index={index}
				>
					<Box sx={{ my: 2 }}>
						<Work data={work} />
					</Box>
				</TabPanel>
			))}
		</Box>
	);
}
