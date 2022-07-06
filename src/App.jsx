import './App.css';
import React from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header.jsx';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/Courses/components/CourseInfo/CourseInfo';

const App = () => {
	localStorage.setItem('user', 'null');
	localStorage.setItem('token', 'null');
	return (
		<>
			<Header />
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Registration />} />
				<Route
					path='courses'
					element={
						<Courses
							courseList={mockedCoursesList}
							authorList={mockedAuthorsList}
						/>
					}
				/>
				<Route path='courses/add' element={<CreateCourse />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
};

export default App;
