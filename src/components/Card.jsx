import React from 'react';

import '../styles/Card.css';

const Card = ({title, counter}) => {
	return (
		<React.Fragment>
			<div className='card'>
				<div className='card__container'>
					<div className='card__shadow'></div>
					<h2 className='card__indicator'>{counter}</h2>
				</div>
				<div className='card--title__container'>
					<h3 className='card--title'>{title}</h3>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Card;
