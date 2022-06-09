import React from 'react';

export const NavBar = ({ handleToggle, darkTheme }) => {
	return (
		<nav className={`navbar backdrop-filter backdrop-blur-2xl  flex justify-between w-full px-2 pt-2 border-b text-[20px] md:text-[24px] font-semibold fixed z-90 ${darkTheme ? 'border-darkBaseFont' : 'border-lightBaseFont'}`}>
			<div className='flex justify-center pl-5 space-x-5'>
				<p>Inicio</p>
				<p>Sobre Mi</p>
				<p>Estudios</p>
				<p>Proyectos</p>
				<p>Contacto</p>
			</div>
			<div className='flex justify-center gap-3'>
				<p className='toggle-label'>{darkTheme ? 'Darkmode' : 'Lightmode'}</p>
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
						<div className={`w-12 h-5 rounded-full shadow-inner ${darkTheme ? 'bg-lightToggleBg ' : 'bg-darkToggleBg'}`}></div>
						<div className={`dot absolute w-7 h-7 rounded-full transition-all -top-1 ${darkTheme ? 'bg-lightToggleDot -right-1' : 'bg-darkToggleDot  -left-1'}`}></div>
					</div>
				</label>
			</div>
		</nav>
	);
};
