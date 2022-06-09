import React from 'react';
import illustration from '../../img/illustration.png';
import { motion } from 'framer-motion';

export const Card = ({
	children,
	titleMain,
	title,
	subtitle = '',
	text = '',
	bulletPoints = [],
	main = false,
	darkTheme,
}) => {
	return (
		<motion.div
			initial={{ scale: 0.95 }}
			whileInView={{ scale: 1 }}
			transition={{
				duration: 0.5,
				type: 'spring',
				bounce: 0.3,
			}}
			className={`card space-y-2 ${
				darkTheme ? 'bg-darkBase' : 'bg-base'
			}`}
		>
			{children}
			<h3 className={`card-title text-left`}>{titleMain}</h3>
			<h5 className={darkTheme && 'text-accentFont'}>{title}</h5>
			<p className='card-subtitle'>{subtitle}</p>
			<p className={`card-text ${main && 'pr-8'}`}>{text}</p>
			<ul>
				{bulletPoints.map((bulletPoint, index) => {
					return <li key={index} className='list-disc ml-7'>{bulletPoint}</li>;
				})}
			</ul>
			{main && (
				<img
					src={illustration}
					className='absolute inset-y-0 -right-12 h-80'
					alt=''
					loading='lazy'
				/>
			)}
		</motion.div>
	);
};
