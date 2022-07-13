import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { buttonTextConstant } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserInfo } from '../../store/user/actions';
import { login } from '../../service';
const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loginDetails, setLoginDetails] = useState({
		email: '',
		password: '',
	});
	const handleLoginDetailsChange = (e) => {
		setLoginDetails((preval) => {
			return { ...preval, [e.target.name]: e.target.value };
		});
	};
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		login(loginDetails)
			.then((res) => {
				if (res.status === 201) {
					localStorage.setItem('token', res.data.result);
					localStorage.setItem('user', JSON.stringify(res.data.user));
					console.log({
						user: JSON.parse(localStorage.getItem('user')),
						result: res.data.result,
					});
					dispatch(
						addUserInfo({
							user: JSON.parse(localStorage.getItem('user')),
							result: res.data.result,
						})
					);

					navigate('/courses');
				}
			})
			.catch((e) => {
				return <p>Sorry, Login Failed</p>;
			});
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(
				addUserInfo({
					user: JSON.parse(localStorage.getItem('user')),
					result: localStorage.getItem('token'),
				})
			);
			navigate('/courses');
		}
	}, []);
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
