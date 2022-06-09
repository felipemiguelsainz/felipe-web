import React from 'react';
import { Card } from '../Components/Atoms/Card';

export const WorkExperience = ({ darkTheme }) => {
	const cardOneBulletPoints = [
		'Gestión de Delivery y Stock',
		'Community manager',
	];
	const cardTwoBulletPoints = [
		'Desarrollo de plantillas de Emails',
		'Html, Css & JavaScript',
		'Servicio Tecnico',
	];
	return (
		<div>
			<h3>Experiencia laboral</h3>
			<div className='flex flex-wrap items-center w-11/12 gap-5 mx-auto'>
				<Card
					title='Microemprendimiento'
					subtitle='Gastronomia | Febrero 2020 - Diciembre 2021'
					bulletPoints={cardOneBulletPoints}
					darkTheme={darkTheme}
				/>
				<Card
					title='Help Desk Analyst'
					subtitle='Recuperos y Mandatos | Mayo 2021 - Actualidad'
					bulletPoints={cardTwoBulletPoints}
					darkTheme={darkTheme}
				/>
			</div>
		</div>
	);
};
