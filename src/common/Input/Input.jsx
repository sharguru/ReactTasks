import React from 'react';
function Input(props) {
	return (
		<>
			<label htmlFor='courseSearch'> </label>
			<input
				name='courseSearch'
				type={props.type}
				placeholder={props.placeholder}
				className='border border-warning w-50'
				onChange={props.change}
				value={props.value}
			/>
		</>
	);
}

export default Input;
