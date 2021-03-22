import React from 'react';

import Counter from './Counter';
import Footer from './Footer';
import SetTime from './SetTime';

import '../styles/App.css';

const App = props => {
	return (
		<div className='app__container'>
			<header className='app__header'>
				<h1>Remain Time</h1>
				<SetTime handleSubmit={props.handleSubmit} />
			</header>
			<main className='count'>
				<Counter time={props.time} />
			</main>
			<Footer />
		</div>
	);
};

export default App;
