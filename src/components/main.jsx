import React, { Component } from "react";
import frame8 from "../images/Frame 8.png";
import "./main.css";

class Main extends Component {
	state = {};
	render() {
		return (
			<div className="main-content">
				<div className="main">
					<div className="left">
						<h2>
							Get access to the best <br /> healthcare products <br />
							with just a few clicks
						</h2>
						<button className="btn btn-secondary btn-lg">Shop now</button>
					</div>

					<div className="right">
						<img src={frame8} alt="frame-8" />
					</div>
				</div>
				<div className="bottom">
					<div className="panels">
						<div className="panel">
							<div className="left">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M35 27.7031V12.2969C34.9988 12.0743 34.939 11.8561 34.8265 11.664C34.714 11.472 34.5529 11.313 34.3594 11.2031L20.6094 3.46876C20.4241 3.36179 20.2139 3.30548 20 3.30548C19.7861 3.30548 19.5759 3.36179 19.3906 3.46876L5.64062 11.2031C5.44711 11.313 5.28599 11.472 5.17352 11.664C5.06105 11.8561 5.0012 12.0743 5 12.2969V27.7031C5.0012 27.9257 5.06105 28.144 5.17352 28.336C5.28599 28.528 5.44711 28.687 5.64062 28.7969L19.3906 36.5313C19.5759 36.6382 19.7861 36.6945 20 36.6945C20.2139 36.6945 20.4241 36.6382 20.6094 36.5313L34.3594 28.7969C34.5529 28.687 34.714 28.528 34.8265 28.336C34.939 28.144 34.9988 27.9257 35 27.7031V27.7031Z"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M27.6562 23.8281V15.7031L12.5 7.34375"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M34.8281 11.6562L20.1406 20L5.17188 11.6562"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M20.1406 20L20 36.6875"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="right">
								<h6>FAST DELIVERY</h6>
								<p>Delivery in 24/H</p>
							</div>
						</div>
						<div className="panel">
							<div className="left">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.75 8.75V17.3594C8.75 23.5625 13.7187 28.7031 19.9219 28.75C21.4058 28.7603 22.8771 28.4769 24.2511 27.9162C25.625 27.3554 26.8744 26.5284 27.9274 25.4827C28.9803 24.437 29.816 23.1933 30.3862 21.8233C30.9565 20.4533 31.25 18.984 31.25 17.5V8.75C31.25 8.41848 31.1183 8.10054 30.8839 7.86612C30.6495 7.6317 30.3315 7.5 30 7.5H10C9.66848 7.5 9.35054 7.6317 9.11612 7.86612C8.8817 8.10054 8.75 8.41848 8.75 8.75Z"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M15 35H25"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M20 28.75V35"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M30.9688 20H32.5C33.8261 20 35.0979 19.4732 36.0355 18.5355C36.9732 17.5979 37.5 16.3261 37.5 15V12.5C37.5 12.1685 37.3683 11.8505 37.1339 11.6161C36.8995 11.3817 36.5815 11.25 36.25 11.25H31.25"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M9.0625 20H7.48438C6.15829 20 4.88652 19.4732 3.94884 18.5355C3.01116 17.5979 2.48438 16.3261 2.48438 15V12.5C2.48438 12.1685 2.61607 11.8505 2.85049 11.6161C3.08491 11.3817 3.40285 11.25 3.73438 11.25H8.73438"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="right">
								<h6>24 HOURS RETURN</h6>
								<p>100% money-back guarantee</p>
							</div>
						</div>
						<div className="panel">
							<div className="left">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M35 8.75H5C4.30964 8.75 3.75 9.30964 3.75 10V30C3.75 30.6904 4.30964 31.25 5 31.25H35C35.6904 31.25 36.25 30.6904 36.25 30V10C36.25 9.30964 35.6904 8.75 35 8.75Z"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M26.25 26.25H31.25"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M18.75 26.25H21.25"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3.75 15.1406H36.25"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="right">
								<h6>SECURE PAYMENT</h6>
								<p>Your money is safe</p>
							</div>
						</div>
						<div className="panel">
							<div className="left">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M35.2344 21.25H30.2344C29.5713 21.25 28.9354 21.5134 28.4666 21.9822C27.9978 22.4511 27.7344 23.087 27.7344 23.75V30C27.7344 30.663 27.9978 31.2989 28.4666 31.7678C28.9354 32.2366 29.5713 32.5 30.2344 32.5H32.7344C33.3974 32.5 34.0333 32.2366 34.5021 31.7678C34.971 31.2989 35.2344 30.663 35.2344 30V21.25ZM35.2344 21.25C35.2344 19.2696 34.8424 17.3088 34.0807 15.4807C33.3191 13.6527 32.203 11.9935 30.7969 10.599C29.3907 9.20444 27.7224 8.10216 25.888 7.35573C24.0537 6.6093 22.0897 6.2335 20.1094 6.25C18.1304 6.23557 16.1681 6.61291 14.3355 7.36026C12.503 8.10762 10.8365 9.21022 9.432 10.6045C8.02751 11.9989 6.91283 13.6573 6.15218 15.4844C5.39153 17.3114 4.99995 19.2709 5 21.25V30C5 30.663 5.26339 31.2989 5.73223 31.7678C6.20107 32.2366 6.83696 32.5 7.5 32.5H10C10.663 32.5 11.2989 32.2366 11.7678 31.7678C12.2366 31.2989 12.5 30.663 12.5 30V23.75C12.5 23.087 12.2366 22.4511 11.7678 21.9822C11.2989 21.5134 10.663 21.25 10 21.25H5"
										stroke="#191C1F"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="right">
								<h6>SUPPORT 24/7</h6>
								<p>Live contact</p>
							</div>
						</div>
					</div>
					<div className="below-bottom">
						<h3>To Enjoy a Personalized Service and Experience</h3>
						<button className="btn btn-primary">Download mobile app</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
