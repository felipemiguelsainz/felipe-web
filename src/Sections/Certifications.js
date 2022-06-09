import React from 'react'
import { Card } from '../Components/Atoms/Card'

export const Certifications = ({darkTheme}) => {
    return (
        <div>
            <h4 id='certifications'>Certificados</h4>
            <Card darkTheme={darkTheme}>
                <h5 className={darkTheme && 'text-accentFont'}>Desarrollo Web</h5>
                <p className='card-subtitle'>CODERHOUSE | Diciembre 2019 - Febrero 2020</p>
                <h5 className={darkTheme && 'text-accentFont'}>JavaScript</h5>
                <p className='card-subtitle'>CODERHOUSE | Septiembre 2021 - Noviembre 2021</p>
                <h5 className={darkTheme && 'text-accentFont'}>React</h5>
                <p className='card-subtitle'>CODERHOUSE | Noviembre 2021 - Enero 2022</p>
                <h5 className={darkTheme && 'text-accentFont'}>React Native</h5>
                <p className='card-subtitle'>Platzi | Julio 2022 - Agosto 2022</p>
            </Card>
        </div>
    )
}
