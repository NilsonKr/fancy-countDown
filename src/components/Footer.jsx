import React from 'react';

const footer = () => {
	return (
		<footer className='app__footer'>
			<div className='footer__media'>
				<span className='footer__icon facebook' alt=''></span>
				<span className='footer__icon pinterest' alt=''></span>
				<span className='footer__icon instagram' alt=''></span>
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
