import React from 'react'
import { Card } from '../Components/Atoms/Card'
import './Projects.css'
import ProjectExampleCard from "../Components/ProjectExampleCard";
import BullerImg from '../img/Buller.jpg'
import DistribuidoraImg from '../img/La Distribuidora.jpeg'
import GrupoImg from '../img/PDV Group.jpg'
export const Projects = ({darkTheme}) => {
    const projectsData = [
      {title: 'La distribuidora', subtitle: 'Enero 2022', imageSrc: DistribuidoraImg, link: 'https://felipemiguelsainz.github.io/react-proyecto-web/'},
      {title: 'PDV Group', subtitle: 'Septiembre 2021', imageSrc: GrupoImg, link: 'https://felipemiguelsainz.github.io/pdvgroup-web/'},
      {title: 'Buller', subtitle: 'Julio 2021', imageSrc: BullerImg, link: 'https://felipemiguelsainz.github.io/buller-mockup-web/'}
    ]
    function openLink(link = '') {
      window.open(link)
    }
  return (
    <div className="projects-section" id='projects'>
      <h3>Proyectos</h3>
      <div className='w-2/3 mx-auto'>

        <Card darkTheme={darkTheme} text='Una pequeña muestra de mis proyectos recientes elegidos por mi. Comencé mi camino como desarrollador a mitades de 2020, el primer proyecto completado fue a principios del año 2021, en ese momento tomé la decisión de que esto era lo que me gustaba. Si están interesados pueden visitar mi perfil de Github en donde encontrarán más proyectos.
'/>
        <div className="projects-examples">
          {projectsData.map((el, index) => (<ProjectExampleCard darkTheme={darkTheme} key={index} el={el} clickFunction={openLink} />))}
        </div>
      </div>
    </div>
  )
}
