import React, { useState, useEffect } from 'react';
import Button from '../../../../common/Button/Button';
import { buttonTextConstant, mockedCoursesList } from '../../../../constants';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getFullAuthors } from '../../../../helpers/getFullAuthors';
import { getAuthors } from '../../../../helpers/getAuthorNames';
const CourseInfo = (props) => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const [courseDetail, setCourseDetail] = useState({
		authors: [],
	});

	useEffect(() => {
		setCourseDetail(
			mockedCoursesList.filter((item) => item.id === courseId)[0]
		);
	}, [courseId]);

	return (
		<>
			<div className='courseInfo border border-primary m-3'>
				<Link to='/courses' className='m-3 text-decoration-none'>
					{buttonTextConstant.BACKBUTTON}
				</Link>
				<h1 className='text-center mb-5'>{courseDetail.title}</h1>
				<div className='courseDetails d-flex flex-row '>
					<div className='w-75 p-3 pe-5 text-wrap'>
						{courseDetail.description}
					</div>
					<div className='p-3 w-25'>
						<h6>
							ID : <span className='fw-lighter'>{courseDetail.id}</span>
						</h6>
						<h6>
							Duration :
							<span className='fw-lighter'>{courseDetail.duration}</span>
						</h6>
						<h6>
							Created :
							<span className='fw-lighter'>{courseDetail.creationDate}</span>
						</h6>
						<h6>
							Authors :
							<span className='fw-lighter'>
								{getFullAuthors(courseDetail?.authors)}
							</span>
						</h6>
					</div>
				</div>
			</div>
			{/* )} */}
		</>
	);
};

export default CourseInfo;
