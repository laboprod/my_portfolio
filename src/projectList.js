//Import Images
import wordpress from './img/wordpress.png';
import mockup from './img/mockup.png';
import uml from './img/uml.png';
import introToJS from './img/introToJS.png';
import boardgame from './img/boardgame.png';
import googlemap from './img/googlemap.png';
import reactmusic from './img/reactmusic.png';
import reactgames from './img/reactgames.png';
import reactportfolio from './img/reactportfolio.png';

import link from './img/link.svg';
import github from './img/github.svg';

export const ProjectList = () => {
	return [
		{
			title: 'React Music App',
			image: reactmusic,
			urlIcon: link,
			url: 'https://laboprod.github.io/react_music_app',
			githubIcon: github,
			github: 'https://github.com/laboprod/react_music_app',
			description: 'A Music player in React / useState, useRef',
		},
		{
			title: 'React Gaming App',
			image: reactgames,
			urlIcon: link,
			url: 'https://laboprod.github.io/react_videogames_app',
			githubIcon: github,
			github: 'https://github.com/laboprod/react_videogames_app',
			description: 'An Encyclopedia about videogames with Rawg API / Redux, Axios',
		},
		{
			title: 'React Portfolio',
			image: reactportfolio,
			urlIcon: link,
			url: 'https://laboprod.github.io/my_portfolio',
			githubIcon: github,
			github: 'https://github.com/laboprod/my_portfolio',
			description: 'My React portfolio / Styled components, React router, Framer motion',
		},
		{
			title: 'Google Maps & Places / API',
			image: googlemap,
			urlIcon: link,
			url: 'https://www.projet7.francoislabeau.com',
			githubIcon: github,
			github: 'https://github.com/laboprod/Projet_7',
			description: 'Create a Javascript app in conformity with the specification and use of Google Maps & Places APIs',
		},
		{
			title: 'Board game / OOP',
			image: boardgame,
			urlIcon: link,
			url: 'https://www.projet6.francoislabeau.com',
			githubIcon: github,
			github: 'https://github.com/laboprod/Projet_6',
			description: ' Javascript round by round boardgame, Object-oriented programming and jQuery',
		},
		{
			title: 'Wordpress',
			image: wordpress,
			urlIcon: link,
			url: 'https://www.projet2.francoislabeau.com',
			githubIcon: github,
			github: 'https://github.com/laboprod/Projet_2',
			description: 'Select and adapt a theme / Write a user documentation / Use of CPT and ACF for a better UI',
		},
		{
			title: 'Intro to Javascript',
			image: introToJS,
			urlIcon: link,
			url: 'https://www.projet5.francoislabeau.com',
			githubIcon: github,
			github: 'https://github.com/laboprod/Projet_5',
			description: 'A generator of random sentences',
		},
		{
			title: 'Mockup & Specification',
			image: mockup,
			urlIcon: link,
			url: 'https://www.projet3.francoislabeau.com',
			githubIcon: github,
			github: 'https://github.com/laboprod/Projet_3',
			description: ' Write a specification / Create a mockup and implement in HTML - CSS / AdobeXD',
		},
		{
			title: 'UML & Database',
			image: uml,
			urlIcon: link,
			url: '#',
			githubIcon: github,
			github: 'https://github.com/laboprod/Projet_4',
			description: 'UML diagrams / Create a database using MySQL',
		},
	];
};
