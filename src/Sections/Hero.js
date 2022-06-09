import React from 'react';
import moon from '../img/moon.svg';
import sun from '../img/sun.svg';
import { motion } from 'framer-motion';

export const Hero = ({ darkTheme }) => {
	return (
		<div
			className='grid items-center h-screen grid-cols-12'
			id='home'
			name='home'
		>
			<motion.div
				initial={{ x: -50 }}
				whileInView={{ x: 0 }}
				transition={{
					duration: 1.2,
					type: 'spring',
					bounce: 0.3,
				}}
				className='col-span-3 theme-img'
			>
				<img
					src={darkTheme ? moon : sun}
					alt=''
					loading='lazy'
					className=' theme-img'
				/>
			</motion.div>
			<motion.div
				initial={{ y: 300 }}
				whileInView={{ y: 0 }}
				transition={{
					duration: 1.2,
					type: 'spring',
					bounce: 0.5,
				}}
				className='col-span-9'
			>
				<h1>Felipe Sainz</h1>
				<h2>Programador</h2>
			</motion.div>
		</div>
	);
};
