import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { buttonTextConstant } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { Axios } from '../../axios';
const Login = () => {
	const navigate = useNavigate();

	const [loginDetails, setLoginDetails] = useState({
		email: '',
		password: '',
	});
	const handleLoginDetailsChange = (e) => {
		setLoginDetails((preval) => {
			return { ...preval, [e.target.name]: e.target.value };
		});
	};
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		await Axios.post('/login', loginDetails)
			.then((res) => {
				if (res.status === 201) {
					localStorage.setItem('token', res.data.result);
					localStorage.setItem('user', res.data.user.name);
					if (localStorage.getItem('token')) {
						navigate('/courses');
					}
				}
			})
			.catch((e) => console.log(e));
	};
	return (
		<div
			className='w-100 border border-danger m-3 '
			style={{ height: '100vh' }}
		>
			<div className='w-25 mx-auto d-flex flex-column'>
				<h4 className='mx-auto'>Login</h4>
				<form onSubmit={handleLoginSubmit}>
					<label htmlFor='email'>Email</label>
					<Input
						type='email'
						placeholder='Enter Email'
						className='mb-3 w-100'
						value={loginDetails.email}
						change={handleLoginDetailsChange}
						name='email'
					/>
					<label htmlFor='password'>Password</label>
					<Input
						type='password'
						placeholder='Enter Password'
						className='mb-3 w-100'
						value={loginDetails.password}
						change={handleLoginDetailsChange}
						name='password'
					/>
					<Button
						className='w-100 mb-4'
						buttonText={buttonTextConstant.LOGIN}
						type='submit'
					/>
					<p className=' text-center'>
						New User? <Link to='/register'>Register</Link> here
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
