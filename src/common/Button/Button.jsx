import React, { useContext } from 'react';
import { AuthorContext } from '../../components/CreateCourse/CreateCourse';

function Button(props) {
	const info = useContext(AuthorContext);
	let { buttonText } = props;
	return (
		<>
			<button
				className='btn btn-outline-primary rounded-0 mx-3 p-1 button '
				onClick={() => {
					if (buttonText === 'Add Author') {
						info.selectAuthor(props.buttonId);
					} else if (buttonText === 'Delete Author') {
						info.deselectAuthors(props.buttonId);
					} else {
						props.click();
					}
				}}
			>
				{' '}
				{props.buttonText}
			</button>
		</>
	);
}

export default Button;
