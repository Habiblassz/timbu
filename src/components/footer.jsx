import React, { Component } from "react";
import frame2 from "../images/Frame 2.png";

class Footer extends Component {
	state = {};
	render() {
		return (
			<>
				<div className="top">
					<h3>Subscribe to our newsletter</h3>
					<p>Get the latest updates on restock and new products</p>
					<div className="subscribe">
						<input type="text" />
						<button className="btn btn-primary">Subscribe</button>
					</div>
				</div>
				<div className="bottom">
					<div className="left">
						<div className="navbar-logo">
							<img src={frame2} alt="logo-image" />
							<span>Shoppu</span>
							<div>
								<span>Customer support</span>
								<span>234 800 0004 9999</span>
							</div>
							<div>
								<span>Address:</span>
								<span>Ikeja-Lagos, Nigeria</span>
								<span></span>
							</div>
							<div>
								<span>Email:</span>
								<span>Info@shoppu.com</span>
								<span></span>
							</div>
						</div>
					</div>
					<div className="center">
						<div className="top-category">
							<h3>TOP CATEGORY</h3>
							<ul>
								<li>Bandages</li>
								<li>Alcohol wipes</li>
								<li>Sanitizers</li>
								<li>Accesories</li>
								<li>Surgical scissors</li>
								<li>Gloves</li>
								<li>Browse All Product</li>
							</ul>
						</div>
						<div className="quick-links">
							<ul>
								<li>Shop products</li>
								<li>Shopping cart</li>
								<li>Wishlist</li>
								<li>Compare</li>
								<li>Track order</li>
								<li>Customer Help</li>
								<li>About Us</li>
							</ul>
						</div>
					</div>
					<div className="right">
						<h3>DOWNLOAD APP</h3>
						<div className="download-cards">
							<div className="download-card">
								<div className="image">
									<svg
										width="28"
										height="33"
										viewBox="0 0 28 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M27.056 25.438C26.5893 26.5249 26.013 27.5614 25.336 28.5313C24.4307 29.8213 23.69 30.714 23.1194 31.21C22.2347 32.0233 21.286 32.4407 20.2707 32.464C19.542 32.464 18.6634 32.2567 17.64 31.836C16.6134 31.4173 15.67 31.2093 14.8074 31.2093C13.9027 31.2093 12.9327 31.4173 11.8947 31.836C10.8554 32.2567 10.018 32.476 9.37802 32.4973C8.40469 32.5393 7.43402 32.1107 6.46469 31.21C5.84669 30.67 5.07402 29.746 4.14735 28.4367C3.15335 27.038 2.33602 25.4167 1.69602 23.5673C1.01069 21.5707 0.666687 19.6367 0.666687 17.7647C0.666687 15.62 1.13002 13.7707 2.05802 12.2207C2.78802 10.9753 3.75802 9.994 4.97269 9.27267C6.16434 8.55956 7.52404 8.17581 8.91269 8.16067C9.68602 8.16067 10.7 8.4 11.9607 8.87C13.2174 9.34133 14.024 9.58067 14.378 9.58067C14.642 9.58067 15.5387 9.30067 17.058 8.74333C18.4954 8.226 19.708 8.012 20.7014 8.09667C23.394 8.314 25.4167 9.37533 26.7614 11.2873C24.354 12.746 23.1627 14.7893 23.1867 17.4107C23.208 19.4527 23.9487 21.152 25.4047 22.5007C26.0647 23.1273 26.8014 23.6113 27.6207 23.9547C27.4489 24.4552 27.2606 24.9499 27.056 25.438ZM20.8814 1.14067C20.8814 2.74067 20.2967 4.23533 19.1314 5.618C17.7247 7.26267 16.024 8.21267 14.1794 8.06267C14.1546 7.86139 14.1421 7.65879 14.142 7.456C14.142 5.92 14.8107 4.276 15.9987 2.93133C16.592 2.25067 17.3454 1.68467 18.26 1.23333C19.1734 0.788667 20.036 0.542667 20.848 0.5C20.8714 0.714 20.8814 0.928 20.8814 1.14V1.14067Z"
											fill="white"
										/>
									</svg>
								</div>
								<div className="text">
									<p>Get it now</p>
									<p>Google play</p>
								</div>
							</div>
							<div className="download-card">
								<div className="image">
									<svg
										width="32"
										height="33"
										viewBox="0 0 32 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_254_183)">
											<path
												d="M29.056 25.438C28.5893 26.5249 28.013 27.5614 27.336 28.5313C26.4307 29.8213 25.69 30.714 25.1194 31.21C24.2347 32.0233 23.286 32.4407 22.2707 32.464C21.542 32.464 20.6634 32.2567 19.64 31.836C18.6134 31.4173 17.67 31.2093 16.8074 31.2093C15.9027 31.2093 14.9327 31.4173 13.8947 31.836C12.8554 32.2567 12.018 32.476 11.378 32.4973C10.4047 32.5393 9.43402 32.1107 8.46469 31.21C7.84669 30.67 7.07402 29.746 6.14735 28.4367C5.15335 27.038 4.33602 25.4167 3.69602 23.5673C3.01069 21.5707 2.66669 19.6367 2.66669 17.7647C2.66669 15.62 3.13002 13.7707 4.05802 12.2207C4.78802 10.9753 5.75802 9.994 6.97269 9.27267C8.16434 8.55956 9.52404 8.17581 10.9127 8.16067C11.686 8.16067 12.7 8.4 13.9607 8.87C15.2174 9.34133 16.024 9.58067 16.378 9.58067C16.642 9.58067 17.5387 9.30067 19.058 8.74333C20.4954 8.226 21.708 8.012 22.7014 8.09667C25.394 8.314 27.4167 9.37533 28.7614 11.2873C26.354 12.746 25.1627 14.7893 25.1867 17.4107C25.208 19.4527 25.9487 21.152 27.4047 22.5007C28.0647 23.1273 28.8014 23.6113 29.6207 23.9547C29.4489 24.4552 29.2606 24.9499 29.056 25.438ZM22.8814 1.14067C22.8814 2.74067 22.2967 4.23533 21.1314 5.618C19.7247 7.26267 18.024 8.21267 16.1794 8.06267C16.1546 7.86139 16.1421 7.65879 16.142 7.456C16.142 5.92 16.8107 4.276 17.9987 2.93133C18.592 2.25067 19.3454 1.68467 20.26 1.23333C21.1734 0.788667 22.036 0.542667 22.848 0.5C22.8714 0.714 22.8814 0.928 22.8814 1.14V1.14067Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_254_183">
												<rect
													width="32"
													height="32"
													fill="white"
													transform="translate(0 0.5)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="text">
									<p>Get it now</p>
									<p>App store</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<span>Shoppu 2024</span>
			</>
		);
	}
}

export default Footer;
