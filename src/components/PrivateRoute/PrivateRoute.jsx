import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const currentUSer = useSelector((state) => state.user);
	const tokenAvailable = localStorage.getItem('token');
	if (!tokenAvailable) {
		return <Navigate to='/' />;
	}
	if (location.pathname === '/courses') {
		return children;
	}
	return (
		<>{currentUSer.role === 'admin' ? children : <Navigate to='/courses' />}</>
	);
};

export default PrivateRoute;
