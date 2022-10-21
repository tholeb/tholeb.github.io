import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';

import Footer from '../Footer';
import NavBar from '../NavBar';

function ScrollTop(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		target: undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({
				block: 'center',
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

function HideOnScroll(props: HideAppBarProps) {
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
			<div id="back-to-top-anchor"></div>
			<HideOnScroll>
				<NavBar />
			</HideOnScroll>
			<ScrollTop>
				<Fab size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
			{children}
			<Footer />
		</React.Fragment>
	);
}
