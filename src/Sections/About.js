import React from 'react';
import { Card } from '../Components/Atoms/Card';

export const About = ({darkTheme}) => {
	const aboutMe = `Soy un programador Front end y estudiante de Licenciatura en Sistemas 
    con ganas de crecer en el sector de la programación con una gran facilidad para 
    la adaptación y comunicación. Entusiasta y responsable.`;

	return (
        <div id='about' name='about' className='w-2/3 mx-auto'>

            <Card  titleMain='Sobre Mi' text={aboutMe} main={true} darkTheme={darkTheme} />
        </div>
    )
};
