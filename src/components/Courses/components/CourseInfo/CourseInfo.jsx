import React from 'react';
import { buttonTextConstant } from '../../../../constants';
import { useParams, Link } from 'react-router-dom';
import { getFullAuthors } from '../../../../helpers/getFullAuthors';
import { useSelector } from 'react-redux';
const CourseInfo = (props) => {
	const { courseId } = useParams();
	const courseDetail = useSelector((state) => state.course).filter(
		(item) => item.id === courseId
	)[0];
	const authors = useSelector((state) => state.author);

	return (
		<>
			<div className='courseInfo border border-primary m-3'>
				<Link to='/courses' className='m-3 text-decoration-none'>
					{buttonTextConstant.BACKBUTTON}
				</Link>
				<h1 className='text-center mb-5'>{courseDetail?.title}</h1>
				<div className='courseDetails d-flex flex-row '>
					<div className='w-75 p-3 pe-5 text-wrap'>
						{courseDetail?.description}
					</div>
					<div className='p-3 w-25'>
						<h6>
							ID : <span className='fw-lighter'>{courseDetail?.id}</span>
						</h6>
						<h6>
							Duration :
							<span className='fw-lighter'>{courseDetail?.duration}</span>
						</h6>
						<h6>
							Created :
							<span className='fw-lighter'>{courseDetail?.creationDate}</span>
						</h6>
						<h6>
							Authors :
							<span className='fw-lighter'>
								{getFullAuthors(courseDetail?.authors, authors)}
							</span>
						</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(CourseInfo);
