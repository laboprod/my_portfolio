import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import Nav from './components/Nav';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/my_portfolio'>
						<AboutMe />
					</Route>
					<Route exact path='/my_portfolio/work'>
						<MyWork />
					</Route>
					<Route path='/my_portfolio/contact'>
						<ContactMe />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
