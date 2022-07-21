import React from 'react';
import Input from '../../../../common/Input/Input';

const Duration = (props) => {
	return (
		<span className='mb-3'>
			<h4 className='mx-auto' style={{ width: 'fit-content' }}>
				Duration
			</h4>
			<label className='d-flex' htmlFor='createAuthor'>
				Duration
			</label>
			<Input
				type='text'
				placeholder='Enter Duration in minutes...'
				className='d-block mb-3 w-100'
				name='duration'
				change={props.handleCourseDetailsChange}
				value={props.courseDetails.duration}
			/>
			<h5>
				Duration : <span className='fs-3'>{props.durationInHrs}</span>
			</h5>
		</span>
	);
};

export default Duration;
