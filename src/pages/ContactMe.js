import React from 'react';
// Style
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
// Images
import linkedinLogo from '../img/linkedinLogo.svg';
import githubLogo from '../img/githubLogo.svg';

const ContactMe = () => {
	return (
		<ContactStyle variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{ background: '#fff' }}>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in Touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>
							<a href='mailto:labeau.francois@gmail.com'> labeau.francois@gmail.com</a>
						</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>+33 6 58 73 25 61</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>
							<a href='https://www.linkedin.com/in/francoislabeau/' target='blank'>
								<img src={linkedinLogo} alt='linkedin' />
							</a>
							<a href='https://github.com/laboprod' target='blank'>
								<img src={githubLogo} alt='github' />
							</a>
						</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 780px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
	@media (max-width: 780px) {
		margin-top: 5rem;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;

	h2 {
		margin: 2rem;
	}

	a {
		font-size: 4rem;
		text-decoration: none;
		color: #353535;
	}

	img {
		width: 50px;
		height: 50px;
		margin-right: 3rem;
	}
`;

export default ContactMe;
