import React from 'react';

import '../styles/SetTime.css';

const SetTime = ({handleSubmit}) => {
	return (
		<form className='form__dateContainer' onSubmit={handleSubmit}>
			<div className='form__date'>
				<label htmlFor='time' className='form__date--label'>
					Year <b>/</b> Month <b>/</b> Day <b>/</b> Hour
				</label>
				<input type='text' name='time' placeholder='Set A Date' />
			</div>
			<select className='form__period' name='period'>
				<option value='AM'>AM</option>
				<option value='PM'>PM</option>
			</select>
			<button className='form__submit btn btn-primary'>Watch!</button>
		</form>
	);
};

export default SetTime;
