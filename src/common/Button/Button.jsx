import React from 'react';

function Button(props) {
	return (
		<>
			<button
				className='btn btn-outline-primary rounded-0 mx-3 p-1 button '
				id={props.buttonId}
				onClick={props.click}
			>
				{' '}
				{props.buttonText}
			</button>
		</>
	);
}

export default Button;
