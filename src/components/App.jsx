import React from 'react';

import Card from './Card';

import '../styles/App.css';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const App = () => {
	return (
		<div className='app__container'>
			<header className='app__header'>
				<h1>Remain Time</h1>
			</header>
			<main className='count'>
				<div className='count__container'>
					<Card title='Years' counter='1' />
					<Card title='Months' counter='3' />
					<Card title='Days' counter='20' />
					<Card title='Hours' counter='14' />
					<Card title='Mins' counter='50' />
					<Card title='Secs' counter='35' />
				</div>
			</main>
			<footer className='app__footer'>
				<div className='footer__media'>
					<img src={facebook} alt='' />
					<img src={pinterest} alt='' />
					<img src={instagram} alt='' />
				</div>
				<div className='footer__credits'>
					Challenge from
					<a href='https://www.frontendmentor.io/challenges' target='_blank'>
						FrontendMentor.io
					</a>
					Coded by
					<a href='https://twitter.com/Nilson_Kr' target='_blank'>
						NilsonKr
					</a>
					with 💚
				</div>
			</footer>
		</div>
	);
};

export default App;
