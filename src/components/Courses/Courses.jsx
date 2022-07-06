import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { buttonTextConstant, mockedCoursesList } from '../../constants';
const Courses = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const token = localStorage.getItem('token');
	const [tokenAvailable, setTokenAvailable] = useState(false);

	const navigate = useNavigate();
	const createCourseButtonClick = () => {
		navigate('/courses/add');
	};
	const handleSearch = () => {
		if (searchTerm.length !== 0) {
			setCourseList((preVal) => {
				let newArr = preVal.filter(
					(item) =>
						item.id.includes(searchTerm) || item.title.includes(searchTerm)
				);
				return newArr;
			});
		}
	};
	useEffect(() => {
		if (token === 'null') {
			setTokenAvailable(false);
			alert('Please login to access the course');
			navigate('/login');
		} else if (token !== null) {
			setTokenAvailable(true);
		}
	}, [token, navigate]);
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
							<CourseCard course={item} key={index} />
						))}
				</div>
			)}
		</>
	);
};

export default Courses;
