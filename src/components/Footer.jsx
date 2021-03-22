import React from 'react';

import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const footer = () => {
	return (
		<footer className='app__footer'>
			<div className='footer__media'>
				<img src={facebook} alt='' />
				<img src={pinterest} alt='' />
				<img src={instagram} alt='' />
			</div>
			<div className='footer__credits'>
				Challenge from
				<a
					href='https://www.frontendmentor.io/challenges'
					target='_blank'
					rel='noreferrer'
				>
					FrontendMentor.io
				</a>
				Coded by
				<a href='https://twitter.com/Nilson_Kr' target='_blank' rel='noreferrer'>
					NilsonKr
				</a>
				with 💚
			</div>
		</footer>
	);
};

export default footer;
