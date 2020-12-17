import React from 'react';
// Page Components
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SoftSkillsSection from '../components/SoftSkillsSection';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutMe = () => {
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<IntroSection />
			<AboutSection />
			<SoftSkillsSection />
			<ScrollTop />
		</motion.div>
	);
};

export default AboutMe;
