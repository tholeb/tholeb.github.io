import './Particles.scss';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

const ParticlesComponent = ({ children }: Props) => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container);
	}, []);

	return (
		<div id="tsparticles-container">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fullScreen: { enable: false, zIndex: 0 },
					background: {
						color: '#121212',
					},
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: false,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'grab',
								parallax: {
									enable: true,
									force: 60,
									smooth: 10,
								},
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						links: {
							color: '#ffffff',
							distance: 150,
							enable: true,
							opacity: 0.2,
							width: 1,
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: 'none',
							enable: true,
							outModes: {
								default: 'bounce',
							},
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 500,
							},
							value: 100,
						},
						opacity: {
							value: 1,
						},
						shape: {
							type: 'line',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
			<div id="tsparticles-container">{children}</div>
		</div>
	);
};

export default ParticlesComponent;
