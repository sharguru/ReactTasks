import React from 'react';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Header from './components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/Courses/components/CourseInfo/CourseInfo';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<Login />} />
				<Route path='register' element={<Registration />} />
				<Route path='courses' element={<Courses />} />
				{/* <Route path='courses/add' element={<CourseForm />} /> */}
				<Route path='courses/:courseId' element={<CourseInfo />} />
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
