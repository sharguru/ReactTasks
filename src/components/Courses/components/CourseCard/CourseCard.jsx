import React from 'react';
import Button from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatDate } from '../../../../helpers/formatCreationDate';
import { getAuthors } from '../../../../helpers/getAuthorNames';
function CourseCard({ course }) {
	return (
		<div className='border-primary p-3 d-flex flex-row justify-content-between border mt-3'>
			<div className='w-75 '>
				<h2>{course.title}</h2>
				<p className='pe-3'>{course.description}</p>
			</div>
			<div className='w-25 float-start'>
				<h6>Authors: {getAuthors(course.authors)}</h6>
				<h6>Duration: {getCourseDuration(course.duration)}</h6>
				<h6>Created: {formatDate(course.creationDate)}</h6>
				<Button buttonText='Show Courses' />
			</div>
		</div>
	);
}

export default CourseCard;
