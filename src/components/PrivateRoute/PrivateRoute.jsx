import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
	const currentUSer = useSelector((state) => state.user);

	return (
		<>{currentUSer.role === 'admin' ? children : <Navigate to='/courses' />}</>
	);
};

export default PrivateRoute;
