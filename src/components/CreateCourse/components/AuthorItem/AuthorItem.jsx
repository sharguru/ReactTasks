import React from 'react';
import Button from '../../../../common/Button/Button';

function AuthorItem(props) {
	return (
		<div className='d-flex justify-content-between w-75 float-end'>
			<p>{props.authorName}</p>
			<Button
				buttonText={props.buttonText}
				buttonId={props.id}
				click={props.buttonFunction}
			/>
		</div>
	);
}

export default AuthorItem;
