import React from 'react';
import styled from 'styled-components';
import { Intro } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const AboutSection = () => {
	const [element, controls] = useScroll();
	return (
		<About variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
			<h2>
				About <span>me</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title='Let me tell you a few words'>
					<div className='answer'>
						<p>
							Hi, my name is François, I'm 37 and got 2 children.
							<p>
								2 years ago, I tried to make a personnal website about photography and I found magic the way that simples lines of code could render
								on a webpage.
							</p>
							<p>At this time, I've wanted to go deeper in web development and become a developer.</p>
							After 10 years in aftersales services, I decided to give a new start to my professional career. I quit my job and joined OpenClassrooms
							to learn front-end development.
						</p>
					</div>
				</Toggle>
				<Toggle title='Technical Skills'>
					<div className='answer'>
						<p>Skills and knowledge, constantly evolving...</p>
						<ul>
							<li>HTML5</li>
							<li>CSS / SASS</li>
							<li>Javascript / jQuery</li>
							<li>React</li>
							<li>Node-Sass</li>
							<li>Bootstrap</li>
							<li>Responsive Web Design</li>
							<li>Wordpress</li>
							<li>Github</li>
							<li>UML</li>
							<li>Adobe XD</li>
							<li>Lightroom</li>
							<li>Final Cut Pro</li>
						</ul>
					</div>
				</Toggle>
				<Toggle title='Previous jobs'>
					<div className='answer'>
						<p>AUDI - AMAG Genève / 2015 - 2019 / SAP Key-User and Aftersales customer service.</p>
						<p>BMW - Facchinetti Automobiles / 2010 - 2015 / Aftersales Team Leader and customer service.</p>
					</div>
				</Toggle>
				<Toggle title='Hobbies'>
					<div className='answer'>
						<p>Photography / Video / Motorbike / Golf</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</About>
	);
};

const About = styled(Intro)`
	display: block;

	span {
		display: block;
	}

	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}

	.about-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}

	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}

	.answer {
		padding: 2rem 0rem;

		p {
			padding: 1rem 0rem;
		}

		ul {
			padding: 1rem 0rem;
			list-style: none;
			font-size: 1.4rem;
			line-height: 150%;
		}
	}
`;

export default AboutSection;
