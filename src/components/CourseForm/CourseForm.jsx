import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { buttonTextConstant } from '../../constants';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import Duration from './components/Duration/Duration';
import TitleDescription from './components/TitleDescription/TitleDescription';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCourse, updateCourse } from '../../store/courses/thunk';
import { createNewAuthor } from '../../store/authors/thunk';
const CourseForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authArray = useSelector((state) => state.author);
	const courseArr = useSelector((state) => state.course);
	const { courseId } = useParams();
	// state variables

	const [durationInHrs, setDurationInHrs] = useState(0);
	const [availableAuthors, setAvailableAuthors] = useState(authArray);
	const [selectedAuthor, setSelectedAuthor] = useState([]);
	const [courseDetails, setCourseDetails] = useState({
		title: '',
		description: '',
		duration: 0,
		authors: [],
	});
	const [authorDetail, setAuthorDetail] = useState({
		name: '',
	});

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
			courseDetails.duration === '' ||
			courseDetails.authors.length === 0
		) {
			alert('Please! fil in all fields');
		} else {
			dispatch(addNewCourse(courseDetails));
			navigate('/courses');
		}
	};

	const addNewAuthor = () => {
		if (authorDetail.name !== '') {
			dispatch(createNewAuthor(authorDetail));
			setAvailableAuthors(
				availableAuthors.filter((item) => !selectedAuthor.includes(item))
			);
			setAuthorDetail({ name: '' });
		}
	};
	const handleCourseDetailsChange = (e) => {
		setCourseDetails({
			...courseDetails,
			[e.target.name]: e.target.value,
		});
		if (e.target.name === 'duration') {
			setDurationInHrs(getCourseDuration(e.target.value));
		}
	};
	const handleAuthorDetailChange = (e) =>
		setAuthorDetail({ name: e.target.value });
	const updateCourseClick = () => {
		dispatch(updateCourse(courseDetails));
		navigate('/courses');
	};

	useEffect(() => {
		setAvailableAuthors(
			authArray.filter((item) => !selectedAuthor.includes(item))
		);
	}, [authArray, selectedAuthor]);

	useEffect(() => {
		let authId = [];
		selectedAuthor.map((item) => authId.push(item.id));
		setCourseDetails((preval) => {
			return {
				...preval,
				authors: authId,
			};
		});
	}, [selectedAuthor]);

	useEffect(() => {
		if (courseId) {
			let courseToBeUpdated = courseArr.filter(
				(item) => item.id === courseId
			)[0];
			setCourseDetails(courseToBeUpdated);
			setAvailableAuthors(
				authArray.filter((item) => !courseToBeUpdated.authors.includes(item.id))
			);
			setSelectedAuthor(
				authArray.filter((item) => courseToBeUpdated.authors.includes(item.id))
			);
		}
	}, []);

	return (
		<div className='m-3 border border-warning p-3'>
			{courseId ? (
				<TitleDescription
					courseDetails={courseDetails}
					handleCourseDetailsChange={handleCourseDetailsChange}
					createCourseClick={updateCourseClick}
					btnText={buttonTextConstant.UPDATE}
				/>
			) : (
				<TitleDescription
					courseDetails={courseDetails}
					handleCourseDetailsChange={handleCourseDetailsChange}
					createCourseClick={createCourseClick}
					btnText={buttonTextConstant.CREATE_COURSE}
				/>
			)}

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
							change={handleAuthorDetailChange}
						/>
						<Button
							buttonText={buttonTextConstant.CREATE_AUTHOR}
							click={addNewAuthor}
							className='mx-auto'
						/>
					</span>
					<Duration
						handleCourseDetailsChange={handleCourseDetailsChange}
						courseDetails={courseDetails}
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
									buttonText={buttonTextConstant.ADD_AUTHOR}
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
										buttonText={buttonTextConstant.DELETE_AUTHOR}
										buttonFunction={deselectAuthors}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseForm;
