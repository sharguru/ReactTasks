import React from 'react';
const Input = (props) => {
	return (
		<>
			<input
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				className={`border border-warning ${props.className}`}
				onChange={props.change}
				value={props.value}
			/>
		</>
	);
};

export default React.memo(Input);
