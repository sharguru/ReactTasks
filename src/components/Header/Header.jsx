import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { buttonTextConstant } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserInfo } from '../../store/user/actions';
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const handleLogoutClick = () => {
		dispatch(removeUserInfo());
		navigate('/login');
		localStorage.clear();
	};

	return (
		<div className='p-3 border border-danger m-3 d-flex justify-content-between'>
			<Logo />
			<div className='d-flex'>
				{user.name !== '' && (
					<>
						<p className='p-2 '>{user.name}</p>
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
