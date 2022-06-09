import React from 'react';
import { Card } from '../Components/Atoms/Card';
import { Certifications } from './Certifications';
import rocketLg from '../img/rocket-lg.svg';
import rocketSm from '../img/rocket-sm.svg';
import rocketMd from '../img/rocket-md.svg';
import useWindowDimensions from '../Hooks/useWindowsDimensions';

export const AcademicExperience = ({ darkTheme }) => {
	const { width } = useWindowDimensions();

	return (
		<div className='w-11/12 mx-auto' id='education' name='education'>
			{width >= 1000 && (
				<img
					src={rocketLg}
					alt=''
					loading='lazy'
					className='absolute right-0 w-1/2'
				/>
			)}
			<h3 className=''>Estudios</h3>
			<div className='flex flex-col lg:w-1/2'>
				<div className='flex flex-col items-center gap-5 '>
					<Card
						title='Bachiller en Economía y Administración'
						subtitle='Instituto Santa María | Febrero 2014 - Noviembre 2019'
						darkTheme={darkTheme}
					/>
					<Card
						title='Licenciatura en Sistemas'
						subtitle='UNLU | Enero 2021 - Actualidad'
						darkTheme={darkTheme}
					/>
				</div>
				<Certifications darkTheme={darkTheme} />
				{width < 500 && (
					<img
						src={rocketSm}
						alt=''
						loading='lazy'
						className='pt-5'
					/>
				)}
				{width > 500 && width < 1000 && (
					<img
						src={rocketMd}
						alt=''
						loading='lazy'
						className='pt-5'
					/>
				)}
			</div>
		</div>
	);
};
