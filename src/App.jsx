import './App.css';
import React, { useState, createContext } from 'react';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header.jsx';
import { mockedCoursesList, mockedAuthorsList } from './constants';
export const CourseToggle = createContext();
function App() {
	const [showCourses, setShowCourses] = useState(true);
	const toggleShowCourse = () => {
		setShowCourses(!showCourses);
	};
	return (
		<div className='App'>
			<Header />
			<CourseToggle.Provider value={{ toggleShowCourse }}>
				{showCourses ? (
					<Courses
						courseList={mockedCoursesList}
						authorList={mockedAuthorsList}
					/>
				) : (
					<CreateCourse />
				)}
			</CourseToggle.Provider>
		</div>
	);
}

export default App;
