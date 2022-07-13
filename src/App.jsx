import React from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/Courses/components/CourseInfo/CourseInfo';
import './App.css';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<Login />} />
				<Route path='register' element={<Registration />} />
				<Route path='courses' element={<Courses />} />
				<Route path='courses/add' element={<CreateCourse />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
};

export default App;
