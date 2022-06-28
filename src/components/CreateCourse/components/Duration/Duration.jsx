import React from 'react';

function Duration(props) {
	return (
		<span className='mb-3'>
			<h4 className='mx-auto' style={{ width: 'fit-content' }}>
				Duration
			</h4>
			<label htmlFor='createAuthor'>Duration</label>
			<input
				type='text'
				placeholder='Enter Duration in minutes...'
				className='d-block mb-3 w-100'
				onChange={props.durationChange}
				value={props.duration}
			/>
			<h5>
				Duration : <span className='fs-3'>{props.durationInHrs}</span>
			</h5>
		</span>
	);
}

export default Duration;
