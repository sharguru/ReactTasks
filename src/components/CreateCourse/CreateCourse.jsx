import React, { useState, useEffect, useContext } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { addtoAuthors, addToCourse, mockedAuthorsList } from '../../constants';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import Duration from './components/Duration/Duration';
import TitleDescription from './components/TitleDescription/TitleDescription';
import { v4 as uuidv4 } from 'uuid';
import { CourseToggle } from '../../App';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

function CreateCourse() {
	// state variables
	const [duration, setDuration] = useState('');
	const [durationInHrs, setDurationInHrs] = useState(0);
	const [availableAuthors, setAvailableAuthors] = useState(mockedAuthorsList);
	const [selectedAuthor, setSelectedAuthor] = useState([]);
	const [courseDetails, setCourseDetails] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});
	const [authorDetail, setAuthorDetail] = useState({
		name: '',
		id: '',
	});

	useEffect(() => {
		// setAvailableAuthors(mockedAuthorsList);
		let date = new Date();
		let authId = [];
		selectedAuthor.map((item) => authId.push(item.id));
		setCourseDetails((preval) => {
			return {
				...preval,
				duration: duration,
				creationDate: `${date.getDate()}/${
					date.getMonth() + 1
				}/${date.getFullYear()}`,
				authors: authId,
				id: uuidv4(),
			};
		});
	}, [selectedAuthor, duration]);

	// context variable
	const { toggleShowCourse } = useContext(CourseToggle);

	// functions
	const durationChange = (event) => {
		setDuration(event.target.value);
		setDurationInHrs(getCourseDuration(event.target.value));
	};

	const selectAuthor = (e) => {
		let newAuthors = availableAuthors.filter((item) => item.id === e.target.id);
		setSelectedAuthor((preval) => {
			return [...preval, ...newAuthors];
		});
		setAvailableAuthors((preval) => {
			return preval.filter((item) => item.id !== e.target.id);
		});
	};

	const deselectAuthors = (e) => {
		let newAuthors = selectedAuthor.filter((item) => item.id === e.target.id);
		setAvailableAuthors((preval) => {
			return [...preval, ...newAuthors];
		});
		setSelectedAuthor((preval) => {
			return preval.filter((item) => item.id !== e.target.id);
		});
	};

	const createCourseClick = () => {
		if (
			courseDetails.title === '' ||
			courseDetails.description === '' ||
			courseDetails.id === '' ||
			courseDetails.duration === '' ||
			courseDetails.authors.length === 0
		) {
			alert('Please! fil in all fields');
		} else {
			addToCourse(courseDetails);
			toggleShowCourse();
		}
	};

	const addNewAuthor = () => {
		if (authorDetail.name !== '') {
			addtoAuthors(authorDetail);
			setAvailableAuthors(
				mockedAuthorsList.filter((item) => !selectedAuthor.includes(item))
			);
			setAuthorDetail({ name: '' });
		}
	};

	return (
		<div className='m-3 border border-warning p-3'>
			<TitleDescription
				courseDetails={courseDetails}
				setCourseDetails={setCourseDetails}
				createCourseClick={createCourseClick}
			/>
			<div className='authorlist d-flex justify-content-between border border-danger p-3'>
				<div className='newAuthor w-50 d-flex flex-column justify-content-between'>
					<span className='mb-5'>
						<h4 className='mx-auto' style={{ width: 'fit-content' }}>
							Add author
						</h4>
						<label className='d-flex' htmlFor='createAuthor'>
							Author Name
						</label>
						<Input
							type='text'
							placeholder='Enter author name...'
							className='d-block mb-3 w-100'
							value={authorDetail.name}
							change={(e) =>
								setAuthorDetail({ name: e.target.value, id: uuidv4() })
							}
						/>
						<Button
							buttonText='Create Author'
							click={addNewAuthor}
							className='mx-auto'
						/>
					</span>
					<Duration
						durationChange={durationChange}
						duration={duration}
						durationInHrs={durationInHrs}
					/>
				</div>
				<div className='d-flex flex-column w-50'>
					<div className='chooseAuthor w-100 float-end'>
						<h4 className='mx-auto' style={{ width: 'fit-content' }}>
							Authors
						</h4>
						{availableAuthors.map((author) => {
							return (
								<AuthorItem
									authorName={author.name}
									key={author.id}
									id={author.id}
									buttonText='Add Author'
									buttonFunction={selectAuthor}
								/>
							);
						})}
					</div>
					<div className='slectedAuthor'>
						<h4 className='mx-auto' style={{ width: 'fit-content' }}>
							Choose Authors
						</h4>
						{selectedAuthor.length === 0 && (
							<p
								className='mx-auto text-danger'
								style={{ width: 'fit-content' }}
							>
								Author list is empty
							</p>
						)}

						{selectedAuthor.length !== 0 &&
							selectedAuthor.map((author) => {
								return (
									<AuthorItem
										authorName={author.name}
										key={author.id}
										id={author.id}
										buttonText='Delete Author'
										buttonFunction={deselectAuthors}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateCourse;