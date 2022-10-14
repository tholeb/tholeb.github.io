import { Toolbar, useScrollTrigger } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Slide from '@mui/material/Slide';
import * as React from 'react';

import NavBar from '../NavBar';

function HideOnScroll(props: PropsHideAppBar) {
	const { children } = props;
	const trigger = useScrollTrigger({
		target: undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function HideAppBar({ children }: Props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll>
				<NavBar />
			</HideOnScroll>
			{/* <Toolbar /> */}
			{children}
		</React.Fragment>
	);
}
