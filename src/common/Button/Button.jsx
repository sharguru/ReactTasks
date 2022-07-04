import React from 'react';

const Button = (props) => {
	return (
		<>
			<button
				type={props.type}
				className={`btn btn-outline-primary rounded-0 p-1 button ${props.className} `}
				id={props.buttonId}
				onClick={props.click}
			>
				{props.buttonText}
			</button>
		</>
	);
};

export default Button;
