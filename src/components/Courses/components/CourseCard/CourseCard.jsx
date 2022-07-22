import React from 'react';
import Button from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatDate } from '../../../../helpers/formatCreationDate';
import { getAuthors } from '../../../../helpers/getAuthorNames';
import { buttonTextConstant } from '../../../../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../../../../store/courses/thunk';
const CourseCard = ({ course }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user);
	const authors = useSelector((state) => state.author);
	const handleCourseClick = () => {
		navigate(`/courses/${course.id}`);
	};
	const handleDelete = () => {
		dispatch(deleteCourse(course.id));
		// handleCourseDeleteClick(course.id);
	};
	const handleUpdateClick = () => {
		navigate(`/courses/update/${course.id}`);
	};
	return (
		<div className='border-primary p-3 d-flex flex-row justify-content-between border mt-3'>
			<div className='w-75 '>
				<h2>{course?.title}</h2>
				<p className='pe-3 text-wrap'>
					{course?.description.substring(0, 400)}
				</p>
			</div>
			<div className='w-25 float-start'>
				<h6>Authors: {getAuthors(course?.authors, authors)}</h6>
				<h6>Duration: {getCourseDuration(course?.duration)}</h6>
				<h6>Created: {formatDate(course?.creationDate)}</h6>
				<Button
					buttonText={buttonTextConstant.SHOW_COURSE}
					click={handleCourseClick}
					className='me-3'
				/>
				{currentUser.role === 'admin' && (
					<>
						<Button
							buttonText={buttonTextConstant.EDIT}
							click={handleUpdateClick}
							className='me-3'
						/>
						<Button
							buttonText={buttonTextConstant.DELETE}
							click={handleDelete}
							className='me-3'
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default CourseCard;
