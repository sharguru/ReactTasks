import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
function Header() {
	return (
		<div className='p-3 border border-danger m-3 d-flex justify-content-between'>
			<Logo />
			<div className='d-flex'>
				<p>Sharguru</p>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
}

export default Header;
