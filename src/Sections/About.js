import React from 'react';
import { Card } from '../Components/Atoms/Card';

export const About = ({darkTheme}) => {
	const aboutMe = `Soy un estudiante de Licenciatura en Sistemas de Información en la Universidad de Palermo, me apasiona la tecnología. He completado varios cursos en línea sobre programación, como Python, React.js, JavaScript y Desarrollo Web, que me han brindado las habilidades y los conocimientos necesarios para desarrollar soluciones innovadoras y eficientes.`;

	return (
        <div id='about' name='about' className='w-2/3 mx-auto'>

            <Card  titleMain='Sobre Mi' text={aboutMe} main={true} darkTheme={darkTheme} />
        </div>
    )
};
