import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
	const { pathname } = useLocation();
	return (
		<StyledNav>
			<h1>
				<Link id='logo' to='/my_portfolio'>
					Portfolio
				</Link>
			</h1>
			<ul>
				<li>
					<Link to='/my_portfolio'>About Me</Link>
					<Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/my_portfolio' ? '60%' : '0%' }} />
				</li>
				<li>
					<Link to='/my_portfolio/work'>Projects</Link>
					<Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/my_portfolio/work' ? '60%' : '0%' }} />
				</li>
				<li>
					<Link to='/my_portfolio/contact'>Contact Me</Link>
					<Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/my_portfolio/contact' ? '60%' : '0%' }} />
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;

	a {
		color: white;
		text-decoration: none;
	}

	ul {
		display: flex;
		list-style: none;
	}

	#logo {
		font-size: 1.8rem;
		font-family: 'Lobster', cursive;
		font-weight: lighter;
	}

	li {
		padding-left: 5rem;
		position: relative;
	}

	@media (max-width: 780px) {
		flex-direction: column;
		padding: 1rem 1rem;

		#logo {
			display: inline-block;
			margin: 1rem;
		}

		ul {
			padding: 1rem;
			justify-content: space-around;
			width: 100%;
		}

		li {
			padding: 0;
		}
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 45%;
	@media (max-width: 780px) {
		left: 0%;
	}
`;

export default Nav;
