import React, { Component } from "react";
import frame2 from "../images/shoppu-logo-light.svg";
import "./footer.css";

class Footer extends Component {
	state = {};
	render() {
		return (
			<div className="footer-wrapper">
				<div className="top footer-top">
					<h3>Subscribe to our newsletter</h3>
					<p>Get the latest updates on restock and new products</p>
					<div className="subscribe">
						<input type="text" placeholder="Email address" name="email" />
						<span className="button">
							<button className="btn btn-primary">
								SUBSCRIBE
								<svg
									width="20"
									height="20"
									viewBox="0 0 22 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.75 12H20.25"
										stroke="#fff"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.5 5.25L20.25 12L13.5 18.75"
										stroke="#fff"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</span>
					</div>
				</div>
				<div className="bottom footer-bottom">
					<div className="footer-bottom-left">
						<div className="navbar-logo">
							<div>
								<img src={frame2} alt="logo-image" />
								<span className="logo-name">Shoppu</span>
							</div>
							<div>
								<span>
									Customer support <br />
									234 800 0004 9999
								</span>
							</div>
							<div>
								<span>
									Address: <br /> Ikeja-Lagos, Nigeria
								</span>
							</div>
							<div>
								<span>
									Email: <br />
									Info@shoppu.com
								</span>
							</div>
						</div>
					</div>
					<div className="footer-bottom-center">
						<div className="links">
							<div className="top-category">
								<p>TOP CATEGORY</p>
								<ul>
									<li>Bandages</li>
									<li>Alcohol wipes</li>
									<li>Sanitizers</li>
									<li>
										<div className="accessories-line"></div>
										<div className="accessories">Accesories</div>
									</li>
									<li>Surgical scissors</li>
									<li>Gloves</li>
									<li>
										<div className="browse-all">
											Browse All Product
											<svg
												width="20"
												height="20"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M3.75 12H20.25"
													stroke="#69F0AE"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M13.5 5.25L20.25 12L13.5 18.75"
													stroke="#69F0AE"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
									</li>
								</ul>
							</div>
							<div className="quick-links">
								<p>Quick links</p>
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
						<span className="last-line">Shoppu &#169; 2024</span>
					</div>
					<div className="footer-bottom-right">
						<p>DOWNLOAD APP</p>
						<div className="download-cards">
							<div className="download-card">
								<div className="image">
									<svg
										width="30"
										height="32"
										viewBox="0 0 30 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.087 14.813L5.29177 0.979426L22.8438 11.0562L19.087 14.813ZM1.69017 0.166626C0.877374 0.592226 0.333374 1.36663 0.333374 2.37463V29.9586C0.333374 30.9666 0.877374 31.741 1.69017 32.1666L17.7334 16.1634L1.69017 0.166626ZM28.271 14.269L24.5894 12.1378L20.4822 16.1698L24.5894 20.2018L28.3462 18.0706C29.471 17.1762 29.471 15.1634 28.271 14.269ZM5.29177 31.3602L22.8438 21.2834L19.087 17.5266L5.29177 31.3602Z"
											fill="white"
										/>
									</svg>
								</div>
								<div className="text">
									<p className="get-now">Get it now</p>
									<p className="app-store">Google play</p>
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
										<g clipPath="url(#clip0_254_183)">
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
									<p className="get-now">Get it now</p>
									<p className="app-store">App store</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
