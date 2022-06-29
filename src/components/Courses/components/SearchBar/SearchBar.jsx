import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
function SearchBar(props) {
	// const [searchInput, setSearchInput] = useState('');
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
			/>
			<Button buttonText='Search' click={handleSubmit} />
		</div>
	);
}

export default SearchBar;
