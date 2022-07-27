import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { buttonTextConstant } from '../../constants';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserInfo } from '../../store/user/actions';
import { logout } from '../../service';

const Header = () => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const token = localStorage.getItem('token');

	const handleLogoutClick = () => {
		logout()
			.then((res) => {
				// navigate('/');
				dispatch(removeUserInfo());
				localStorage.clear();
				<Navigate to='/' />;
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='p-3 border border-danger m-3 d-flex justify-content-between'>
			<Logo />
			<div className='d-flex'>
				{/* <p className='p-2 ' data-testid='userName'>
					hello
				</p> */}
				{token && (
					<>
						<p className='p-2 ' data-testid='userName'>
							{user.name}
						</p>
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
