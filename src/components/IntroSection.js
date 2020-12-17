import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../img/portrait.png';
import { Intro, Description, Image, Hide } from '../styles';
//Animations
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const IntroSection = () => {
	return (
		<Intro>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>
							<span>François </span>Labeau
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							Frontend<span> Developer</span>
						</motion.h2>
					</Hide>
					{/* <Hide>
						<motion.h2 variants={titleAnim}>true.</motion.h2>
					</Hide> */}
				</motion.div>
				<motion.p variants={fade}>Welcome to my portfolio. Scroll down for more info and check out my projects !</motion.p>
				<Link to='/contact'>
					<motion.button variants={fade}>Contact Me</motion.button>
				</Link>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={portrait} alt='portrait' />
			</Image>
			<Wave />
		</Intro>
	);
};

export default IntroSection;
