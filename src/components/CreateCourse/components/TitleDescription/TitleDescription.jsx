import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { buttonTextConstant } from '../../../../constants';
const TitleDescription = ({
	courseDetails,
	handleCourseDetailsChange,
	createCourseClick,
}) => {
	return (
		<>
			<div className='title d-flex justify-content-between mt-3 mb-3'>
				<span className='d-flex flex-column w-50'>
					<label className='d-flex' htmlFor='title'>
						Title
					</label>
					<Input
						type='text'
						name='title'
						value={courseDetails.title}
						placeholder='Enter Title...'
						change={handleCourseDetailsChange}
					/>
				</span>
				<Button
					buttonText={buttonTextConstant.CREATE_COURSE}
					click={createCourseClick}
				/>
			</div>
			<span className='d-flex flex-column w-100 mb-3'>
				<label className='d-flex' htmlFor='courseDescription'>
					Description
				</label>
				<textarea
					cols='25'
					rows='4'
					className='border border-warning'
					name='description'
					value={courseDetails.description}
					onChange={handleCourseDetailsChange}
				></textarea>
			</span>
		</>
	);
};

export default TitleDescription;
