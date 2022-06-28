import React, { useState, useEffect, useContext } from 'react';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { CourseToggle } from '../../App';
function Courses(props) {
	const [searchTerm, setSearchTerm] = useState('');
	const [courseList, setCourseList] = useState(props.courseList);
	useEffect(() => {
		setCourseList(props.courseList);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	const { toggleShowCourse } = useContext(CourseToggle);

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
	return (
		<div className='p-3 border border-success m-3'>
			<span className='d-flex w-100 justify-content-between'>
				<SearchBar
					searchTerm={searchTerm}
					setFunction={setSearchTerm}
					submit={handleSearch}
				/>
				<Button buttonText='Add New Course' click={toggleShowCourse} />
			</span>
			{courseList !== [] &&
				courseList.map((item, index) => (
					<CourseCard course={item} key={index} />
				))}
		</div>
	);
}

export default Courses;
