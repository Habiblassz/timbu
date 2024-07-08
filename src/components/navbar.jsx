import React, { Component } from "react";
import frame2 from "../images/Frame 2.png";
import "./navbar.css";

class Navbar extends Component {
	state = {};
	render() {
		return (
			<>
				<wrapper className="navbar-wrapper">
					<div className="navbar-logo">
						<img src={frame2} alt="logo-image" />
						<span>Shoppu</span>
					</div>
					<div className="navbar-search">
						<input type="search" placeholder="search" />
					</div>
					<div class="navbar-icons">
						<span className="navbar-icon">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M11.875 16.25V12.5C11.875 12.3343 11.8092 12.1753 11.6919 12.0581C11.5747 11.9409 11.4158 11.875 11.25 11.875H8.75C8.58424 11.875 8.42527 11.9409 8.30806 12.0581C8.19085 12.1753 8.125 12.3343 8.125 12.5V16.25C8.125 16.4158 8.05915 16.5748 7.94194 16.692C7.82473 16.8092 7.66576 16.875 7.5 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.692C3.19085 16.5748 3.125 16.4158 3.125 16.25V9.02348C3.1264 8.93699 3.14509 8.85165 3.17998 8.77249C3.21486 8.69332 3.26523 8.62194 3.32812 8.56255L9.57812 2.88286C9.69334 2.77745 9.84384 2.71899 10 2.71899C10.1562 2.71899 10.3067 2.77745 10.4219 2.88286L16.6719 8.56255C16.7348 8.62194 16.7851 8.69332 16.82 8.77249C16.8549 8.85165 16.8736 8.93699 16.875 9.02348V16.25C16.875 16.4158 16.8092 16.5748 16.6919 16.692C16.5747 16.8092 16.4158 16.875 16.25 16.875H12.5C12.3342 16.875 12.1753 16.8092 12.0581 16.692C11.9408 16.5748 11.875 16.4158 11.875 16.25Z"
									stroke="#5F6C72"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span className="navbar-icon">
							<svg
								width="44"
								height="44"
								viewBox="0 0 44 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.5 40.25C13.8807 40.25 15 39.1307 15 37.75C15 36.3693 13.8807 35.25 12.5 35.25C11.1193 35.25 10 36.3693 10 37.75C10 39.1307 11.1193 40.25 12.5 40.25Z"
									fill="#37474F"
								/>
								<path
									d="M28.75 40.25C30.1307 40.25 31.25 39.1307 31.25 37.75C31.25 36.3693 30.1307 35.25 28.75 35.25C27.3693 35.25 26.25 36.3693 26.25 37.75C26.25 39.1307 27.3693 40.25 28.75 40.25Z"
									fill="#37474F"
								/>
								<path
									d="M6.60937 15.25H34.6406L30.5156 29.6875C30.3684 30.2115 30.0533 30.6726 29.6186 31.0001C29.1838 31.3275 28.6536 31.5032 28.1094 31.5H13.1406C12.5964 31.5032 12.0662 31.3275 11.6314 31.0001C11.1967 30.6726 10.8816 30.2115 10.7344 29.6875L5.07812 9.90625C5.00338 9.64493 4.84549 9.41509 4.62839 9.25156C4.41129 9.08803 4.1468 8.99971 3.875 9H1.25"
									stroke="#37474F"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<rect x="24" width="20" height="20" rx="10" fill="#37474F" />
								<path
									d="M31.0049 14V13.22V12.818C31.0049 12.374 31.0869 11.992 31.2509 11.672C31.4149 11.348 31.6329 11.066 31.9049 10.826C32.1769 10.586 32.4749 10.374 32.7989 10.19C33.1269 10.002 33.4509 9.826 33.7709 9.662C34.0949 9.494 34.3929 9.322 34.6649 9.146C34.9369 8.966 35.1549 8.766 35.3189 8.546C35.4869 8.326 35.5709 8.064 35.5709 7.76C35.5709 7.372 35.4329 7.056 35.1569 6.812C34.8849 6.564 34.5149 6.44 34.0469 6.44C33.5509 6.44 33.1409 6.582 32.8169 6.866C32.4969 7.15 32.3069 7.55 32.2469 8.066H30.8309C30.8389 7.538 30.9649 7.058 31.2089 6.626C31.4529 6.194 31.8149 5.85 32.2949 5.594C32.7749 5.334 33.3729 5.204 34.0889 5.204C34.7089 5.204 35.2429 5.312 35.6909 5.528C36.1429 5.74 36.4909 6.038 36.7349 6.422C36.9829 6.802 37.1069 7.246 37.1069 7.754C37.1069 8.198 37.0249 8.578 36.8609 8.894C36.7009 9.21 36.4869 9.484 36.2189 9.716C35.9549 9.944 35.6629 10.146 35.3429 10.322C35.0269 10.498 34.7089 10.664 34.3889 10.82C34.0729 10.972 33.7809 11.132 33.5129 11.3C33.2489 11.464 33.0349 11.652 32.8709 11.864C32.7109 12.076 32.6309 12.33 32.6309 12.626V12.752H37.1249V14H31.0049Z"
									fill="white"
								/>
							</svg>
						</span>
						<span className="navbar-icon">
							<svg
								width="34"
								height="30"
								viewBox="0 0 34 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M17 28.75C17 28.75 1.375 20 1.375 9.37501C1.375 7.49671 2.02577 5.67642 3.2166 4.22385C4.40742 2.77128 6.06473 1.77616 7.90656 1.40779C9.74838 1.03943 11.6609 1.32058 13.3189 2.2034C14.9768 3.08623 16.2776 4.5162 17 6.25001C17.7224 4.5162 19.0232 3.08623 20.6811 2.2034C22.3391 1.32058 24.2516 1.03943 26.0934 1.40779C27.9353 1.77616 29.5926 2.77128 30.7834 4.22385C31.9742 5.67642 32.625 7.49671 32.625 9.37501C32.625 20 17 28.75 17 28.75Z"
									stroke="#37474F"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span className="navbar-icon">
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M27.2727 14.5454C27.2727 18.562 24.0165 21.8182 20 21.8182C15.9834 21.8182 12.7273 18.562 12.7273 14.5454C12.7273 10.5288 15.9834 7.27271 20 7.27271C24.0165 7.27271 27.2727 10.5288 27.2727 14.5454ZM23.6364 14.5454C23.6364 16.5538 22.0084 18.1818 20 18.1818C17.9916 18.1818 16.3636 16.5538 16.3636 14.5454C16.3636 12.5371 17.9916 10.9091 20 10.9091C22.0084 10.9091 23.6364 12.5371 23.6364 14.5454Z"
									fill="#37474F"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0456 8.95431 40 20 40C31.0456 40 40 31.0456 40 20C40 8.95431 31.0456 0 20 0ZM3.63636 20C3.63636 23.8004 4.93191 27.2982 7.10542 30.0758C10.0954 26.1616 14.8114 23.6364 20.1173 23.6364C25.3542 23.6364 30.0167 26.0965 33.0118 29.9242C35.1145 27.1715 36.3636 23.7316 36.3636 20C36.3636 10.9626 29.0375 3.63636 20 3.63636C10.9626 3.63636 3.63636 10.9626 3.63636 20ZM20 36.3636C16.0905 36.3636 12.5012 34.9925 9.68667 32.7051C11.9882 29.4204 15.8019 27.2727 20.1173 27.2727C24.3789 27.2727 28.1515 29.3675 30.4615 32.5835C27.6253 34.9438 23.9784 36.3636 20 36.3636Z"
									fill="#37474F"
									fill-opacity="0.9"
								/>
							</svg>
						</span>
					</div>
				</wrapper>
			</>
		);
	}
}

export default Navbar;
