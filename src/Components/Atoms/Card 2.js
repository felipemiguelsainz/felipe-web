import React from 'react';
import illustration from '../../img/illustration.png';

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
		<div
			className={`card space-y-2 ${
				darkTheme ? 'bg-darkBase' : 'bg-base'
			}`}
		>
			{children}
			<h3 className={`card-title text-left`}>{titleMain}</h3>
			<h5 className={darkTheme && 'text-accentFont'}>
				{title}
			</h5>
			<p className='card-subtitle'>{subtitle}</p>
			<p className='card-text'>{text}</p>
			<ul>
				{bulletPoints.map(bulletPoint => {
					return <li className='list-disc ml-7'>{bulletPoint}</li>;
				})}
			</ul>
			{main && (
				<img
					src={illustration}
					className='absolute inset-y-0 -right-10 h-80'
					alt=''
					loading='lazy'
				/>
			)}
		</div>
	);
};
