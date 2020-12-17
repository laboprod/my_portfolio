import React from 'react';
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
//import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

import { ProjectList } from '../projectList';

const MyWork = () => {
	// const [element, controls] = useScroll();
	// const [element2, controls2] = useScroll();
	return (
		<Work variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{ background: '#fff' }}>
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>

			{ProjectList().map((project) => {
				return (
					<Project key={project.title}>
						<motion.h2 variants={fade} initial='hidden'>
							{project.title}
						</motion.h2>

						<motion.div variants={lineAnim} className='line'></motion.div>
						<ProjectDetail>
							<Hide>
								<motion.img variants={photoAnim} src={project.image} alt={project.title} />
							</Hide>
							<motion.p variants={fade}>
								{project.description}
								<a href={project.url} target='blank' className='icon'>
									<img src={project.urlIcon} alt='Link to the website' />
								</a>
								<a href={project.github} target='blank' className='icon'>
									<img src={project.githubIcon} alt='Link to github' />
								</a>
							</motion.p>
						</ProjectDetail>
					</Project>
				);
			})}
			{/* <Project>
				<motion.h2 variants={fade}>Wordpress</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<ProjectDetail>
					<Hide>
						<motion.img variants={photoAnim} src={wordpress} alt='wordpress' />
					</Hide>
					<motion.p variants={fade}>
						a wordpress project Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cupiditate magnam nulla nemo exercitationem similique!
						<a href='https://www.projet2.francoislabeau.com' target='blank' className='icon'>
							<img src={link} alt='link icon' />
						</a>
						<a href='https://github.com/laboprod/Projet_2' target='blank' className='icon'>
							<img src={github} alt='github icon' />
						</a>
					</motion.p>
				</ProjectDetail>
			</Project>
			<Project ref={element} variants={fade} animate={controls} initial='hidden'>
				<h2>Mockup & Specifications</h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<ProjectDetail>
					<Hide>
						<motion.img variants={photoAnim} src={mockup} alt='mockup' />
					</Hide>
					<motion.p variants={fade}>
						a wordpress project Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cupiditate magnam nulla nemo exercitationem similique!
						<a href='https://www.projet3.francoislabeau.com' target='blank' className='icon'>
							<img src={link} alt='link icon' />
						</a>
						<a href='https://github.com/laboprod/Projet_3' target='blank' className='icon'>
							<img src={github} alt='github icon' />
						</a>
					</motion.p>
				</ProjectDetail>
			</Project>
			<Project ref={element2} variants={fade} animate={controls2} initial='hidden'>
				<h2>UML & Database</h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<ProjectDetail>
					<Hide>
						<motion.img variants={photoAnim} src={uml} alt='mockup' />
					</Hide>
					<motion.p variants={fade}>
						a wordpress project Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cupiditate magnam nulla nemo exercitationem similique!
						<a href='https://github.com/laboprod/Projet_4' target='blank' className='icon'>
							<img src={github} alt='github icon' />
						</a>
					</motion.p>
				</ProjectDetail>
			</Project> */}
			<ScrollTop />
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	@media (max-width: 780px) {
		padding: 2rem 2rem;
	}

	h2 {
		padding: 1rem 0rem;
	}
`;

const Project = styled(motion.div)`
	padding-bottom: 5rem;

	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
`;

const ProjectDetail = styled(motion.div)`
	display: flex;

	img {
		width: 70%;
		height: 50vh;
		object-fit: contain;
	}

	p {
		justify-content: center;
		text-align: justify;
		width: 70%;
		color: black;
	}

	a {
		padding: 1rem 0rem;
		display: flex;

		img {
			width: 25px;
			height: 23px;
		}
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`;

const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default MyWork;
