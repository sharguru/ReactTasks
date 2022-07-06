import React from 'react';
import Button from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatDate } from '../../../../helpers/formatCreationDate';
import { getAuthors } from '../../../../helpers/getAuthorNames';
import { buttonTextConstant } from '../../../../constants';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
	const navigate = useNavigate();
	const handleCourseClick = () => {
		navigate(`/courses/${course.id}`);
	};
	return (
		<div className='border-primary p-3 d-flex flex-row justify-content-between border mt-3'>
			<div className='w-75 '>
				<h2>{course.title}</h2>
				<p className='pe-3 text-wrap'>{course.description.substring(0, 400)}</p>
			</div>
			<div className='w-25 float-start'>
				<h6>Authors: {getAuthors(course.authors)}</h6>
				<h6>Duration: {getCourseDuration(course.duration)}</h6>
				<h6>Created: {formatDate(course.creationDate)}</h6>
				<Button
					buttonText={buttonTextConstant.SHOW_COURSE}
					click={handleCourseClick}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
