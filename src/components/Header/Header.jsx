import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { buttonTextConstant } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const handleLogoutClick = () => {
		localStorage.clear();
		navigate('/login');
	};
	const user = localStorage.getItem('user');
	return (
		<div className='p-3 border border-danger m-3 d-flex justify-content-between'>
			<Logo />
			<div className='d-flex'>
				{user !== 'null' && (
					<>
						<p className='p-2 '>{user}</p>
						<Button
							buttonText={buttonTextConstant.LOGOUT}
							click={handleLogoutClick}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
