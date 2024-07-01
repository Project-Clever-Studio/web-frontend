import React, {
	useEffect,
	useRef,
	useState,
} from 'react';
import RouteTransition from '../components/RouteTransition';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa6';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import { toast } from 'react-toastify';

const Container = styled.div`
	/* height: 100dvh;
	overflow: scroll; */
	padding: 7rem;
	padding-bottom: 0;

	@media (max-width: 768px) {
		padding: 5rem 2rem;
	}

	@media (max-width: 568px) {
		padding: 7rem 1rem;
	}
`;

const ContactWrapper = styled.div`
	display: flex;
	/* align-items: flex-end; */

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

const SelectTag = styled.select`
	width: 100%;
	font-family: 'Mona Sans';
	font-size: 1rem;
	font-weight: 400;
	outline: none;
	padding: 0.8rem 1rem;
	border: 1.5px solid #00000018;
	border-bottom: 3px solid #00000016;
	border-radius: 8px;
	transition: all 0.2s ease-in-out;

	&:focus {
		border: 1.5px solid #0000006a;
		border-bottom: 3px solid #000000c0;
	}
`;

const InfoSection = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	h1 {
		display: flex;
		flex-direction: column;
		font-family: 'Mona Sans';
		font-weight: 800;
		font-size: 5vw;

		span {
			line-height: 1;
		}
	}
	p {
		width: 50%;
		font-family: 'Mona Sans';
		font-weight: 400;
		font-size: 2rem;
	}

	.socials {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		.social {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			span {
				opacity: 0.5;
				font-size: 1.2rem;
			}
			p {
				line-height: 1.4;
				width: 100%;
				font-size: 1.2rem;
			}
			a {
				margin-top: 0.5rem;
				text-decoration: underline;
				text-underline-offset: 0.4rem;
				color: #000;
				font-size: 1.2rem;
				font-weight: 500;
			}
		}
	}

	@media (max-width: 1024px) {
		h1 {
			font-size: 5rem;
		}

		p {
			width: 60%;
			font-size: 1.5rem;
		}
	}

	@media (max-width: 900px) {
		h1 {
			font-size: 4rem;
		}
	}

	@media (max-width: 768px) {
		gap: 3rem;
		width: 100%;

		p {
			width: 50%;
		}
	}

	@media (max-width: 400px) {
		h1 {
			font-size: 3.5rem;
		}

		p {
			width: 100%;
		}
	}
`;

const CategoryWrapper = styled.div`
	display: flex;
	gap: 1.5rem;
	flex-wrap: wrap;
	flex-direction: column;
	width: 100%;

	.category-parent {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		width: 100%;

		.active {
			color: white;
			background: #000;
		}

		.category {
			display: flex;
			gap: 0.35rem;
			align-items: center;
			width: fit-content;
			padding: 1rem 2rem;
			border: 1px solid #000;
			border-radius: 99px;
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			svg {
				font-size: 1.2rem;
			}
		}
	}
`;

const FormSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 50%;

	.formHeader {
		display: flex;
		gap: 1.5rem;

		svg {
			width: 2.5rem;
		}

		span {
			font-size: 3rem;
		}

		.italic {
			font-style: italic;
		}
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 0 0 2rem 0;

		.dualInput,
		.singleInput {
			width: 100%;
			display: flex;
			gap: 1.5rem;
			.input {
				display: flex;
				flex-direction: column;
				gap: 0.6rem;
				height: 100%;
				width: 100%;

				span {
					font-weight: 500;
					color: #000000d1;
				}

				.highlighted {
					color: #ff3939;
				}

				input,
				textarea {
					width: 100%;
					font-family: 'Mona Sans';
					font-size: 1rem;
					font-weight: 400;
					outline: none;
					padding: 0.8rem 1rem;
					border: 1.5px solid #00000018;
					border-bottom: 3px solid #00000016;
					border-radius: 8px;
					transition: all 0.2s ease-in-out;

					&:focus {
						border: 1.5px solid #0000006a;
						border-bottom: 3px solid #000000c0;
					}
				}
			}
		}

		.submit {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			width: fit-content;
			padding: 1rem 2.5rem;
			border-radius: 99px;
			background-color: #000000;
			color: white;

			svg {
				margin-top: -2px;
				color: white;
			}
		}
	}

	@media (max-width: 1024px) {
		.formHeader {
			svg {
				display: none;
			}
		}
	}
	@media (max-width: 900px) {
		.formHeader {
			span {
				font-size: 2.5rem;
			}
		}
	}
	@media (max-width: 768px) {
		width: 100%;
		.formHeader {
			span {
				font-size: 2.5rem;
			}
		}
	}
`;

const Quote = () => {
	const [category, setCategory] = useState({
		mainCategory: [],
		subCategory: [],
	});

	const [subCategories, setSubCategories] =
		useState([]);

	const [currentCategory, setCurrentCategory] =
		useState('');

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		projectType: '',
		projectTitle: '',
		budget: '',
		reference: '',
		brief: '',
		categories: [],
		subCategories: [],
	});

	const showToast = (message, status) => {
		if (status == 'fail') {
			toast.error(message, {
				position: 'bottom-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			toast.success(message, {
				position: 'bottom-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const sendMail = () => {
		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.projectType ||
			!formData.projectTitle ||
			!formData.budget ||
			!formData.brief ||
			category.mainCategory.length == 0 ||
			subCategories.length == 0
		) {
			showToast(
				'Please fill all the fields',
				'fail'
			);
			return;
		}

		axios
			.post(
				'https://clever-studio-backend.vercel.app/',
				{
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					projectType: formData.projectType,
					projectTitle: formData.projectTitle,
					budget: formData.budget,
					reference: formData.reference || 'null',
					brief: formData.brief,
					categories: category.mainCategory,
					subCategories: subCategories,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((res) => {
				if (res.status == 'success') {
					showToast(
						'Form submitted successfully! We will get back to you soon.',
						'success'
					);
				}
			})
			.catch((err) => {
				showToast('Oops! Failed to Submit', 'fail');
			});
	};

	const handleCategoryClick = (category) => {
		let updatedSubCategories;
		if (subCategories.includes(category)) {
			updatedSubCategories = subCategories.filter(
				(subCategory) => subCategory !== category
			);
		} else {
			updatedSubCategories = [
				...subCategories,
				category,
			];
		}
		setSubCategories(updatedSubCategories);

		let updatedMainCategories = [];
		if (updatedSubCategories.length > 0) {
			updatedSubCategories.forEach((subCategory) => {
				if (
					categoryList.WebDevelopment.includes(
						subCategory
					) &&
					!updatedMainCategories.includes(
						'Web Development'
					)
				) {
					updatedMainCategories.push(
						'Web Development'
					);
				} else if (
					categoryList.AppDevelopment.includes(
						subCategory
					) &&
					!updatedMainCategories.includes(
						'App Development'
					)
				) {
					updatedMainCategories.push(
						'App Development'
					);
				} else if (
					categoryList.ProfessionalShoots.includes(
						subCategory
					) &&
					!updatedMainCategories.includes(
						'Professional Shoots'
					)
				) {
					updatedMainCategories.push(
						'Professional Shoots'
					);
				} else if (
					categoryList.SocialMediaManagement.includes(
						subCategory
					) &&
					!updatedMainCategories.includes(
						'Social Media Management'
					)
				) {
					updatedMainCategories.push(
						'Social Media Management'
					);
				} else if (
					categoryList.VideoEditing.includes(
						subCategory
					) &&
					!updatedMainCategories.includes(
						'Video Editing'
					)
				) {
					updatedMainCategories.push('Video Editing');
				} else if (
					categoryList.GraphicDesigning.includes(
						subCategory
					) &&
					!updatedMainCategories.includes(
						'Graphic Designing'
					)
				) {
					updatedMainCategories.push(
						'Graphic Designing'
					);
				}
				// Add more else if blocks for other categories as needed
			});
		} else {
			updatedMainCategories = [];
		}

		setCategory((prevState) => ({
			...prevState,
			mainCategory: updatedMainCategories,
		}));
	};

	const [categoryList, setCategoryList] = useState(
		{
			WebDevelopment: [
				'Informational',
				'CMS',
				'LMS',
				'Landing Page',
				'E-commerce Website',
				'Wordpress',
				'Shopify',
				'Hosting & Domain',
				'UI/UX Website Design',
			],
			AppDevelopment: [
				'E-commerce App',
				'Product Based App',
				'Service Based App',
				'Native iOS',
				'Native Android',
				'Hybrid App',
				'UI/UX App Design',
			],
			ProfessionalShoots: [
				'Product Shoot',
				'Model Shoot',
				'Video Shoot',
				'Event Shoot',
				'Reel Shoot',
			],
			SocialMediaManagement: [
				'Content Creation',
				'Account Management',
				'Ad Campaign Management',
			],
			VideoEditing: [
				'Reel Editing',
				'2D Editing',
				'2D Editing',
				'Short Film',
				'Podcast Editing',
				'Color Correction',
			],
			GraphicDesigning: [
				'Logo',
				'Posters',
				'Presentation',
				'Mock-Ups',
				'Graphics',
				'Visiting Cards',
				'Others',
			],
		}
	);

	const infoRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef)
			gsap.to(containerRef.current, {
				scrollTrigger: {
					start: 'top 15%',
					end: 'bottom bottom',
					pin: infoRef.current,
				},
			});
	}, []);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<RouteTransition>
			<Container ref={containerRef}>
				<ContactWrapper>
					<InfoSection ref={infoRef}>
						<h1>
							<span>GET A</span>
							<span>QUOTE</span>
						</h1>
						<p>
							Fil out the form and we will get back to
							you.
						</p>
						<div className='socials'>
							<div className='social'>
								<span>Phone</span>
								<p>+91 77109 48801</p>
							</div>
							<div className='social'>
								<span>Email</span>
								<p>ritesh@cleverstudio.in</p>
							</div>
							<div className='social'>
								<span>Office</span>
								<p>
									14/03, Station Road,
									<br />
									Bhandup Mumbai 400078
								</p>
								<a href='#'>Map Us</a>
							</div>
						</div>
					</InfoSection>
					<FormSection>
						<div className='formHeader'>
							<svg
								viewBox='0 0 32 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M31.057 13.0608C31.6445 12.4767 31.6473 11.527 31.0632 10.9395L21.5448 1.36607C20.9607 0.778593 20.011 0.775852 19.4235 1.35995C18.836 1.94404 18.8333 2.89378 19.4174 3.48126L27.8781 11.991L19.3684 20.4518C18.7809 21.0358 18.7782 21.9856 19.3623 22.5731C19.9464 23.1605 20.8961 23.1633 21.4836 22.5792L31.057 13.0608ZM-0.00475599 13.4105L29.9951 13.4971L30.0038 10.4971L0.0039015 10.4105L-0.00475599 13.4105Z'
									fill='black'
								/>
							</svg>

							<span>
								Let's{' '}
								<span className='italic'>level up</span>{' '}
								your brand, together!
							</span>
						</div>
						<div className='form'>
							<div className='dualInput'>
								<div className='input'>
									<span>
										Name{' '}
										<span className='highlighted'>*</span>
									</span>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={(e) =>
											setFormData({
												...formData,
												name: e.target.value,
											})
										}
									/>
								</div>
								<div className='input'>
									<span>
										Email{' '}
										<span className='highlighted'>*</span>
									</span>
									<input
										type='email'
										name='company'
										value={formData.email}
										onChange={(e) =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className='dualInput'>
								<div className='input'>
									<span>
										Phone{' '}
										<span className='highlighted'>*</span>
									</span>
									<input
										type='text'
										name='name'
										value={formData.phone}
										onChange={(e) =>
											setFormData({
												...formData,
												phone: e.target.value,
											})
										}
									/>
								</div>
								<div className='input'>
									<span>
										Type Of Project{' '}
										<span className='highlighted'>*</span>
									</span>
									<SelectTag
										name='cars'
										id='cars'
										value={formData.projectType}
										onChange={(e) =>
											setFormData({
												...formData,
												projectType: e.target.value,
											})
										}
									>
										<option
											value='unselected'
											selected
										>
											Select
										</option>
										<option value='Newly-Open'>
											Newly Opened
										</option>
										<option value='Rebranding'>
											Rebranding
										</option>
										<option value='Improvement'>
											Improvement
										</option>
										<option value='Expansion'>
											Expansion
										</option>
										<option value='International-Expansion'>
											International Expansion
										</option>
										<option value='other'>Other</option>
									</SelectTag>
								</div>
							</div>
							<div className='dualInput'>
								<div className='input'>
									<span>
										Project Title{' '}
										<span className='highlighted'>*</span>
									</span>
									<input
										type='text'
										name='title'
										value={formData.projectTitle}
										onChange={(e) =>
											setFormData({
												...formData,
												projectTitle: e.target.value,
											})
										}
									/>
								</div>
								<div className='input'>
									<span>
										Budget Range{' '}
										<span className='highlighted'>*</span>
									</span>
									<input
										type='text'
										name='budget'
										placeholder='10,000 - 30,000 (INR)'
										value={formData.budget}
										onChange={(e) =>
											setFormData({
												...formData,
												budget: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className='singleInput'>
								<div className='input'>
									<span>Reference, If any</span>
									<input
										type='text'
										name='brief'
										value={formData.reference}
										onChange={(e) =>
											setFormData({
												...formData,
												reference: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className='singleInput'>
								<div className='input'>
									<span>
										Project Brief Info{' '}
										<span className='highlighted'>*</span>
									</span>
									<input
										type='text'
										name='brief'
										value={formData.brief}
										onChange={(e) =>
											setFormData({
												...formData,
												brief: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<CategoryWrapper>
								<span>
									Requirements - Web Development
								</span>
								<div className='category-parent'>
									{categoryList.WebDevelopment.map(
										(category) => {
											return (
												<div
													className={`category ${
														subCategories.includes(category)
															? 'active'
															: ''
													}`}
													onClick={() => {
														handleCategoryClick(category);
														setCategory({
															...category,
															mainCategory: [
																...category.mainCategory,
															],
															subCategory: [...subCategories],
														});
													}}
												>
													{subCategories.includes(category) ? (
														<FaCheck />
													) : (
														<GoPlus />
													)}
													<span>{category}</span>
												</div>
											);
										}
									)}
								</div>
							</CategoryWrapper>
							<CategoryWrapper>
								<span>
									Requirements - App Development
								</span>
								<div className='category-parent'>
									{categoryList.AppDevelopment.map(
										(category) => {
											return (
												<div
													className={`category ${
														subCategories.includes(category)
															? 'active'
															: ''
													}`}
													onClick={() => {
														handleCategoryClick(category);
													}}
												>
													{subCategories.includes(category) ? (
														<FaCheck />
													) : (
														<GoPlus />
													)}
													<span>{category}</span>
												</div>
											);
										}
									)}
								</div>
							</CategoryWrapper>
							<CategoryWrapper>
								<span>
									Requirements - Professional Shoots{' '}
								</span>
								<div className='category-parent'>
									{categoryList.ProfessionalShoots.map(
										(category) => {
											return (
												<div
													className={`category ${
														subCategories.includes(category)
															? 'active'
															: ''
													}`}
													onClick={() => {
														handleCategoryClick(category);
													}}
												>
													{subCategories.includes(category) ? (
														<FaCheck />
													) : (
														<GoPlus />
													)}
													<span>{category}</span>
												</div>
											);
										}
									)}
								</div>
							</CategoryWrapper>
							<CategoryWrapper>
								<span>
									Requirements - Social Media Management{' '}
								</span>
								<div className='category-parent'>
									{categoryList.SocialMediaManagement.map(
										(category) => {
											return (
												<div
													className={`category ${
														subCategories.includes(category)
															? 'active'
															: ''
													}`}
													onClick={() => {
														handleCategoryClick(category);
													}}
												>
													{subCategories.includes(category) ? (
														<FaCheck />
													) : (
														<GoPlus />
													)}
													<span>{category}</span>
												</div>
											);
										}
									)}
								</div>
							</CategoryWrapper>
							<CategoryWrapper>
								<span>Requirements - Video Editing </span>
								<div className='category-parent'>
									{categoryList.VideoEditing.map(
										(category) => {
											return (
												<div
													className={`category ${
														subCategories.includes(category)
															? 'active'
															: ''
													}`}
													onClick={() => {
														handleCategoryClick(category);
													}}
												>
													{subCategories.includes(category) ? (
														<FaCheck />
													) : (
														<GoPlus />
													)}
													<span>{category}</span>
												</div>
											);
										}
									)}
								</div>
							</CategoryWrapper>
							<CategoryWrapper>
								<span>
									Requirements - Graphic Designing{' '}
								</span>
								<div className='category-parent'>
									{categoryList.GraphicDesigning.map(
										(category) => {
											return (
												<div
													className={`category ${
														subCategories.includes(category)
															? 'active'
															: ''
													}`}
													onClick={() => {
														handleCategoryClick(category);
													}}
												>
													{subCategories.includes(category) ? (
														<FaCheck />
													) : (
														<GoPlus />
													)}
													<span>{category}</span>
												</div>
											);
										}
									)}
								</div>
							</CategoryWrapper>

							<div
								className='submit'
								onClick={sendMail}
							>
								<span>Submit</span>
								<svg
									width='18'
									height='12'
									viewBox='0 0 18 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM0 6.75H17V5.25H0V6.75Z'
										fill='white'
									/>
								</svg>
							</div>
						</div>
					</FormSection>
				</ContactWrapper>
			</Container>
		</RouteTransition>
	);
};
export default Quote;
