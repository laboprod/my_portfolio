import React from 'react';
//Import Icons
import communication from '../img/communication.svg';
import diaphragm from '../img/diaphragm.svg';
import creative from '../img/creative.svg';
import teamwork from '../img/teamwork.svg';
// Import Styles
import styled from 'styled-components';
import { Intro, Description } from '../styles';
// Import Animation
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const SoftSkillsSection = () => {
	const [element, controls] = useScroll();
	return (
		<SoftSkills variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
			<Description>
				<h2>
					Soft <span>Skills</span>
				</h2>
				<Cards>
					<Card>
						<div className='icon'>
							<img src={teamwork} alt='team icon' />
						</div>
						<p>Teamwork</p>
					</Card>
					<Card>
						<div className='icon'>
							<img src={communication} alt='communication icon' />
						</div>
						<p> Communication</p>
					</Card>

					<Card>
						<div className='icon'>
							<img src={diaphragm} alt='diaphragm icon' />
						</div>
						<p>Detail oriented</p>
					</Card>
					<Card>
						<div className='icon'>
							<img src={creative} alt='creative icon' />
						</div>
						<p>Creative</p>
					</Card>
				</Cards>
			</Description>
		</SoftSkills>
	);
};

const SoftSkills = styled(Intro)`
	h2 {
		padding-bottom: 5rem;
	}

	p {
		width: 70%;
		padding: 1rem 0rem 4rem 0rem;
	}
`;

const Cards = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	@media (max-width: 780px) {
		justify-content: center;
	}
`;

const Card = styled.div`
	flex-basis: 20rem;

	.icon {
		display: flex;
		align-items: center;
	}
`;

export default SoftSkillsSection;
