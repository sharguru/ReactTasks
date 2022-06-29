import React from 'react';
function Input(props) {
	return (
		<>
			<input
				name={props.name}
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
