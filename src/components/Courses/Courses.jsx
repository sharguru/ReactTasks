import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { buttonTextConstant } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourses } from '../../store/courses/thunk';
import { getAllAuthors } from '../../store/authors/thunk';
import { getCurrentUser } from '../../store/user/thunk';

const Courses = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const courseArr = useSelector((state) => state.course);
	const currentUser = useSelector((state) => state.user);
	const [searchTerm, setSearchTerm] = useState('');
	const [courseList, setCourseList] = useState(courseArr);

	const createCourseButtonClick = () => {
		// <Navigate to='/courses/add' />;
		navigate('/course/add');
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

	useEffect(() => {
		setCourseList(courseArr);
	}, [courseArr]);
	useEffect(() => {
		dispatch(getCurrentUser());
		dispatch(getAllCourses());
		dispatch(getAllAuthors());
	}, []);
	return (
		<>
			<div className='p-3 border border-success m-3' data-testid='courses'>
				<span className='d-flex w-100 justify-content-between'>
					<SearchBar
						searchTerm={searchTerm}
						setFunction={setSearchTerm}
						submit={handleSearch}
					/>
					{currentUser.role === 'admin' && (
						<Button
							role='buttonForTesting'
							buttonText={buttonTextConstant.ADD_NEW_COURSE}
							click={createCourseButtonClick}
							testId='buttonForTesting'
						/>
					)}
				</span>
				{courseList !== [] &&
					courseList.map((item, index) => (
						<CourseCard course={item} key={index} />
					))}
			</div>
		</>
	);
};

export default Courses;
