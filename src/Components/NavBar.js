import React, {useState} from 'react';
import useWindowDimensions from '../Hooks/useWindowsDimensions';
import lightHamburger from '../img/hamburger-light.svg';
import darkHamburger from '../img/hamburger-dark.svg';
import {Link} from 'react-scroll'

export const NavBar = ({ handleToggle, darkTheme }) => {
	const { width } = useWindowDimensions();
	const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

	const handleHamburger = () => {
	setIsMobileNavVisible(!isMobileNavVisible)
	}
	

	return (
		<nav
			className={`navbar backdrop-filter backdrop-blur-2xl flex flex-col w-full px-2 pt-2 pb-1 border-b text-[20px] md:text-[24px] font-semibold fixed z-50 ${
				darkTheme ? 'border-darkBaseFont' : 'border-lightBaseFont'
			}`}
		>
			<div className='flex justify-between'>
				<img
					src={darkTheme ? darkHamburger : lightHamburger}
					alt=''
					className={`${width > 800 && 'hidden'} w-9 cursor-pointer`}
					onClick={handleHamburger}
				/>
				{width > 800 && (
					<div className='flex justify-center pl-5 space-x-5 '>
						<Link smooth={true} offset={-50} duration={500} to='home' className='cursor-pointer hover:text-accentFont'>Inicio</Link>
						<Link smooth={true} offset={-50} duration={500} to='about' className='cursor-pointer hover:text-accentFont'>Sobre Mi</Link>
						<Link smooth={true} offset={-50} duration={500} to='education' className='cursor-pointer hover:text-accentFont'>Estudios</Link>
						<Link smooth={true} offset={-50} duration={500} to='projects' className='cursor-pointer hover:text-accentFont'>Proyectos</Link>
						<Link smooth={true} offset={-50} duration={500} to='contact' className='cursor-pointer hover:text-accentFont'>Contacto</Link>
					</div>
				)}
				<div className='flex justify-center gap-3 toggle'>
					<p className='toggle-label'>
						{darkTheme ? 'Darkmode' : 'Lightmode'}
					</p>
					<label
						htmlFor='toggleTwo'
						className='flex items-center cursor-pointer select-none'
					>
						<div className='relative'>
							<input
								type='checkbox'
								id='toggleTwo'
								className='sr-only'
								onClick={handleToggle}
							/>
							<div
								className={`w-12 h-5 rounded-full shadow-inner ${
									darkTheme
										? 'bg-lightToggleBg '
										: 'bg-darkToggleBg'
								}`}
							></div>
							<div
								className={`dot absolute w-7 h-7 rounded-full transition-all -top-1 ${
									darkTheme
										? 'bg-lightToggleDot -right-1'
										: 'bg-darkToggleDot  -left-1'
								}`}
							></div>
						</div>
					</label>
				</div>
			</div>
			<div className={`flex flex-col items-center py-4 space-y-2 ${isMobileNavVisible ? '' : 'hidden'}`}>
						<Link onClick={handleHamburger} smooth={true} offset={-50} duration={500} to='home' className='cursor-pointer hover:text-accentFont'>Inicio</Link>
						<Link onClick={handleHamburger} smooth={true} offset={-50} duration={500} to='about' className='cursor-pointer hover:text-accentFont'>Sobre Mi</Link>
						<Link onClick={handleHamburger} smooth={true} offset={-50} duration={500} to='education' className='cursor-pointer hover:text-accentFont'>Estudios</Link>
						<Link onClick={handleHamburger} smooth={true} offset={-50} duration={500} to='projects' className='cursor-pointer hover:text-accentFont'>Proyectos</Link>
						<Link onClick={handleHamburger} smooth={true} offset={-50} duration={500} to='contact' className='cursor-pointer hover:text-accentFont'>Contacto</Link>
			</div>
		</nav>
	);
};
