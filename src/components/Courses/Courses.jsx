import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const tokenAvailable = localStorage.getItem('token');
	const courseArr = useSelector((state) => state.course);
	const currentUser = useSelector((state) => state.user);
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

	useEffect(() => {
		setCourseList(courseArr);
		if (!tokenAvailable) {
			alert('Please login to access the course');
			navigate('/');
		}
	}, [navigate, tokenAvailable, courseArr, dispatch]);
	useEffect(() => {
		if (tokenAvailable) {
			dispatch(getCurrentUser());
		}
		dispatch(getAllCourses());
		dispatch(getAllAuthors());
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
						{currentUser.role === 'admin' && (
							<Button
								buttonText={buttonTextConstant.ADD_NEW_COURSE}
								click={createCourseButtonClick}
							/>
						)}
					</span>
					{courseList !== [] &&
						courseList.map((item, index) => (
							<CourseCard course={item} key={index} />
						))}
				</div>
			)}
		</>
	);
};

export default Courses;
