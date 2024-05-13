import React from 'react'
import { Card } from '../Components/Atoms/Card'
import './Projects.css'
import ProjectExampleCard from "../Components/ProjectExampleCard";
import BullerImg from '../img/Buller.jpg'
import DistribuidoraImg from '../img/La Distribuidora.jpeg'
import GrupoImg from '../img/PDV Group.jpg'
export const Projects = ({darkTheme}) => {
    function openLink(link = '') {
      window.open(link)
    }
const gitLink = "<a href'https://github.com/felipemiguelsainz'>https://github.com/felipemiguelsainz<'"
  return (
    <div className="projects-section" id='projects'>
      <h3>Proyectos</h3>
      <div className='w-2/3 mx-auto'>

        <Card darkTheme={darkTheme} text='Una parte de mis proyectos personales se encuentran en mi git, la otra parte de mis proyectos son privados, distintos trabajos que he hecho en mi carrera profesional.'/>
        <div className="code-container">
          <pre>
              <a href='https://github.com/felipemiguelsainz'>https://github.com/felipemiguelsainz</a>
          </pre>
        </div>
      </div>
    </div>
  )
}
