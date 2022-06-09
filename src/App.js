import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Sections/Hero';
import lightBg from './img/light-background.svg';
import darkBg from './img/dark-background.svg';
import { About } from './Sections/About';
import { useState } from 'react';
import { WorkExperience } from './Sections/WorkExperience';
import { AcademicExperience } from './Sections/AcademicExperience';
import { Projects } from './Sections/Projects';

import ContactForm from './Sections/Contact/ContactForm';
import SocialMediasSection from './Sections/Contact/SocialMediasSection';
import Footer from './Components/Footer';
function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	const handleToggle = () => {
		setDarkTheme(!darkTheme);
	};

	return (
		<div
			style={{ backgroundImage: `url(${darkTheme ? darkBg : lightBg})` }}
			className={darkTheme ? 'text-darkBaseFont' : 'text-lightBaseFont'}
		>
			<NavBar handleToggle={handleToggle} darkTheme={darkTheme} />
			<Hero darkTheme={darkTheme} />
			<About darkTheme={darkTheme} />
			<WorkExperience darkTheme={darkTheme} />
			<AcademicExperience darkTheme={darkTheme} />
			<Projects darkTheme={darkTheme} />
			<div className='media-container'>
				<SocialMediasSection theme={darkTheme ? 'dark' : 'light'} />
				<ContactForm theme={darkTheme ? 'dark' : 'light'} />
			</div>
			<Footer theme={darkTheme ? 'dark' : 'light'} />
		</div>
	);
}

export default App;
