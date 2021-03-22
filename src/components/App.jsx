import React from 'react';

import Card from './Card';

import '../styles/App.css';

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
		</div>
	);
};

export default App;
