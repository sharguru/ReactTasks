import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { buttonTextConstant } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { Axios } from '../../axios';

const Registration = () => {
	const navigate = useNavigate();
	const [regDetails, setRegDetails] = useState({
		name: '',
		email: '',
		password: '',
	});
	const handleRegDetailsChange = (e) => {
		setRegDetails((preval) => {
			return {
				...preval,
				[e.target.name]: e.target.value,
			};
		});
	};
	const sumbitRegistration = (e) => {
		e.preventDefault();
		Axios.post('/register', regDetails)
			.then((res) => {
				if (res.status === 201) {
					setRegDetails({ name: '', email: '', password: '' });
					alert('User Created');
					navigate('/login');
				} else {
					alert('User Registration failed');
				}
			})
			.catch((e) => <p>Sorry, Registration failed</p>);
	};

	return (
		<div
			className='w-100 border border-danger m-3 '
			style={{ height: '100vh' }}
		>
			<div className='w-25 mx-auto d-flex flex-column'>
				<h4 className='mx-auto'>Registration</h4>
				<form onSubmit={sumbitRegistration}>
					<label htmlFor='name'>Name</label>
					<Input
						className='w-100 mb-3'
						placeholder='Enter name'
						type='text'
						name='name'
						value={regDetails.name}
						change={handleRegDetailsChange}
					/>
					<label htmlFor='email'>Email</label>
					<Input
						className='w-100 mb-3'
						placeholder='Enter Email'
						type='email'
						name='email'
						value={regDetails.email}
						change={handleRegDetailsChange}
					/>
					<label htmlFor='password'>Password</label>
					<Input
						className='w-100 mb-3'
						placeholder='Enter Password'
						type='password'
						name='password'
						value={regDetails.password}
						change={handleRegDetailsChange}
					/>
					<Button
						type='submit'
						buttonText={buttonTextConstant.REGISTRATION}
						className='w-100 mb-4'
					/>
					<p className='text-center'>
						If you have an account you can <Link to='/login'>Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Registration;
