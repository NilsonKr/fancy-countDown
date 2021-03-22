import React from 'react';

import Card from './Card';

const Counter = props => {
	const date = props.time;

	return (
		<div className='count__container'>
			<Card title='Years' counter={date.years} />
			<Card title='Months' counter={date.months} />
			<Card title='Days' counter={date.days} />
			<Card title='Hours' counter={date.hours} />
			<Card title='Mins' counter={date.mins} />
			<Card title='Secs' counter={date.secs} />
		</div>
	);
};

export default Counter;
