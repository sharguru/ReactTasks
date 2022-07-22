import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { buttonTextConstant } from '../../../../constants';
const SearchBar = (props) => {
	const handleChange = (event) => {
		event.preventDefault();
		props.setFunction(event.target.value);
	};
	const handleSubmit = () => {
		props.submit();
	};
	return (
		<div className='w-75'>
			<Input
				type='text'
				placeholder='Enter Course name or id ...'
				change={handleChange}
				value={props.searchTerm}
				className='w-50'
			/>
			<Button
				buttonText={buttonTextConstant.SEARCH}
				click={handleSubmit}
				className='m-3'
			/>
		</div>
	);
};

export default React.memo(SearchBar);
