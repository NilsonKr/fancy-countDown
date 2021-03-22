import React from 'react';

import '../styles/SetTime.css';

const SetTime = ({handleSubmit}) => {
	return (
		<form className='form__dateContainer'>
			<div className='form__date'>
				<label htmlFor='time' className='form__date--label'>
					Year <b>/</b> Month <b>/</b> Day <b>/</b> Hour
				</label>
				<input type='text' name='time' placeholder='Set A Date' />
			</div>
			<input type='text' name='period' className='form__period' />
			<button className='form__submit btn btn-primary' onClick={handleSubmit}>
				Watch!
			</button>
		</form>
	);
};

export default SetTime;
