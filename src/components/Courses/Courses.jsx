import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { buttonTextConstant } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import {
	deleteCourse,
	setInitialStateToCourse,
} from '../../store/courses/actions';
import { setInitialStateToAuthor } from '../../store/authors/actions';
import { getAllCourses } from '../../service';

const Courses = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const tokenAvailable = localStorage.getItem('token');
	const courseArr = useSelector((state) => state.course);

	const [searchTerm, setSearchTerm] = useState('');
	const [courseList, setCourseList] = useState(courseArr);

	const createCourseButtonClick = () => {
		navigate('/courses/add');
	};
	const handleSearch = () => {
		if (searchTerm.length !== 0) {
			setCourseList(
				courseArr.filter(
					(item) =>
						item.id.includes(searchTerm) || item.title.includes(searchTerm)
				)
			);
		} else if (searchTerm.length === 0) {
			setCourseList(courseArr);
		}
	};
	const handleCourseDeleteClick = (id) => {
		dispatch(deleteCourse(id));
	};

	useEffect(() => {
		setCourseList(courseArr);
		if (!tokenAvailable) {
			alert('Please login to access the course');
			navigate('/');
		}
	}, [navigate, tokenAvailable, courseArr, dispatch]);
	useEffect(() => {
		dispatch(setInitialStateToCourse(getAllCourses()));
		dispatch(setInitialStateToAuthor(getAllCourses()));
	}, []);
	return (
		<>
			{tokenAvailable && (
				<div className='p-3 border border-success m-3'>
					<span className='d-flex w-100 justify-content-between'>
						<SearchBar
							searchTerm={searchTerm}
							setFunction={setSearchTerm}
							submit={handleSearch}
						/>
						<Button
							buttonText={buttonTextConstant.ADD_NEW_COURSE}
							click={createCourseButtonClick}
						/>
					</span>
					{courseList !== [] &&
						courseList.map((item, index) => (
							<CourseCard
								course={item}
								key={index}
								handleCourseDeleteClick={handleCourseDeleteClick}
							/>
						))}
				</div>
			)}
		</>
	);
};

export default Courses;
