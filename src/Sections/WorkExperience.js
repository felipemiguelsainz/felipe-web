import React from 'react';
import { Card } from '../Components/Atoms/Card';

export const WorkExperience = ({ darkTheme }) => {
	const cardOneBulletPoints = [
		'Active Directory',
		'Html, Css & JavaScript',
		'Servicio Tecnico',
	];
	const cardTwoBulletPoints = [
		'PHP, Laravel & MySql',
		'React.js & JavaScript',
		'Apis',
		
	];
	return (
		<div>
			<h3>Experiencia laboral</h3>
			<div className='flex flex-wrap items-center w-11/12 gap-5 mx-auto'>
				<Card
					title='Help Desk Analyst'
					subtitle='Recuperos y Mandatos | Mayo 2021 - Diciembre 2023'
					bulletPoints={cardOneBulletPoints}
					darkTheme={darkTheme}
				/>
				<Card
					title='Desarrollador'
					subtitle='Recuperos y Mandatos | Diciembre 2023 - Actualidad'
					bulletPoints={cardTwoBulletPoints}
					darkTheme={darkTheme}
				/>
			</div>
		</div>
	);
};
