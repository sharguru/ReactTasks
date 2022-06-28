import React, { useContext } from 'react';
import Button from '../../../../common/Button/Button';
import { CourseContext } from '../../CreateCourse';
function TitleDescription() {
	const { courseDetails, setCourseDetails, createCourseClick } =
		useContext(CourseContext);
	return (
		<>
			<div className='title d-flex justify-content-between mt-3 mb-3'>
				<span className='d-flex flex-column w-50'>
					<label htmlFor='courseTitle'>Title</label>
					<input
						type='text'
						className='border border-success w-75'
						placeholder='Enter Title...'
						onChange={(e) => {
							setCourseDetails({
								...courseDetails,
								[e.target.name]: e.target.value,
							});
						}}
						value={courseDetails.title}
						name='title'
					/>
				</span>
				<Button buttonText='Create Course' click={createCourseClick} />
			</div>
			<span className='d-flex flex-column w-100 mb-3'>
				<label htmlFor='courseDescription'>Description</label>
				<textarea
					cols='25'
					rows='4'
					className='border border-warning'
					name='description'
					value={courseDetails.description}
					onChange={(e) =>
						setCourseDetails({
							...courseDetails,
							[e.target.name]: e.target.value,
						})
					}
				></textarea>
			</span>
		</>
	);
}

export default TitleDescription;
