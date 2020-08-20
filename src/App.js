import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/Contact";
import FeaturesPage from "./pages/Features";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import bookmark from "./assets/img/logos/logo-bookmark.svg";
import whitebookmark from "./assets/img/logos/logo-bookmark-white.svg";
import facebook from "./assets/icons/brand-icons/icon-facebook.svg";
import twitter from "./assets/icons/brand-icons/icon-twitter.svg";
import NavLinks from "./components/NavLinks";
import { LoginButton } from "./components/Buttons";

function App() {
	return (
		<div id='app' className='app'>
			<header id='app-header' className='app-header container-fluid'>
				<nav id='header-nav' className='header-nav nav row'>
					<NavLink
						to='/'
						className='brand-logo-link'
						aria-label='Bookmark Logo'
					>
						<div id='header-navbar-brand' className='navbar-brand'>
							<img src={bookmark} alt='Bookmark' />
						</div>
					</NavLink>
					<div id='header-navbar-links' className='header-navbar-links row'>
						<NavLinks />
						<LoginButton />
					</div>
				</nav>
			</header>
			<main id='app-main' className='app-main container-fluid'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/features' component={FeaturesPage} />
					<Route exact path='/pricing' component={Pricing} />
					<Route exact path='/contact' component={ContactPage} />
				</Switch>
			</main>
			<footer id='app-footer' className='app-footer container-fluid'>
				<nav id='footer-nav' className='footer-nav nav row'>
					<div id='footer-navbar-links' className='footer-navbar-links row'>
						<NavLink
							to='/'
							className='brand-logo-link'
							aria-label='Bookmark Logo'
						>
							<div id='footer-navbar-brand' className='navbar-brand'>
								<img src={whitebookmark} alt='Bookmark' />
							</div>
						</NavLink>
						<NavLinks />
					</div>
					<div id='footer-navbar-social' className='navbar-social'>
						<div id='social-links' className='social-links row'>
							<a
								id='facebook-link'
								href='https://www.facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Visit Facebook'
							>
								<img src={facebook} alt='Facebook' />
							</a>
							<a
								id='twitter-link'
								href='https://www.twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Visit Twitter'
							>
								<img src={twitter} alt='Twitter' />
							</a>
						</div>
					</div>
				</nav>
			</footer>
		</div>
	);
}

export default App;
