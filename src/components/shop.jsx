import React, { Component } from "react";
import bandage from "../images/Image.png";
import alcohol from "../images/Image (1).png";
import sterileCotton from "../images/Image (2).png";
import sterile from "../images/Image (3).png";
import medical from "../images/Image (4).png";
import burns from "../images/Image (5).png";
import adhesive from "../images/Image (6).png";
import elastic from "../images/Image (7).png";
import transparent from "../images/Image (8).png";
import compression from "../images/Image (9).png";
import "./shop.css";

class Shop extends Component {
	state = {};
	render() {
		return (
			<div className="gallery">
				<div className="heading-text">
					<span>Shop with Categories</span>
				</div>
				<div className="shopping-item-array">
					<Item image={bandage} span="bandages" />
					<Item image={alcohol} span="Alcohol wipes" />
					<Item image={sterileCotton} span="Sterile cotton balls" />
					<Item image={sterile} span="Sterile strips" />
					<Item image={medical} span="Medical Scissors" />
					<Item image={burns} span="Burns Cream" />
				</div>
				<div className="bandage-links">
					<div>
						<a href="#">Browse All Products </a>
					</div>
					<ul>
						<li>
							<a href="#">All Products</a>
						</li>
						<li>
							<a href="#">Adesive Bandages</a>
						</li>
						<li>
							<a href="#">Gauze Bandages</a>
						</li>
						<li>
							<a href="#">Elastic Bandages</a>
						</li>
					</ul>
				</div>
				<div className="bandages">
					<Bandage
						img={adhesive}
						paragraph="Adhesive Bandages(Plasters)"
						number="#500"
					/>
					<Bandage
						img={elastic}
						paragraph="Elastic Bandages(ACE Wraps)"
						number="#2000"
					/>
					<Bandage
						img={transparent}
						paragraph="Transparent Films dressing"
						number="#3000"
					/>
					<Bandage
						img={compression}
						paragraph="Compression Bandages"
						number="#5000"
					/>
				</div>
				<div className="view-all">
					<a href="#">View All</a>
				</div>
			</div>
		);
	}
}

function Item(props) {
	return (
		<div className="shopping-item">
			<img src={props.image} alt="" />
			<span>{props.span}</span>
		</div>
	);
}

function Bandage(props) {
	return (
		<div className="bandage-tray">
			<img src={props.img} alt="" />
			<div className="stars">
				<Stars />
				<Stars />
				<Stars />
				<Stars />
				<Stars />
			</div>
			<p>{props.paragraph}</p>
			<span>{props.number}</span>
		</div>
	);
}

function Stars() {
	return (
		<>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63807 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63807 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188Z"
					fill="#FA8232"
				/>
			</svg>
		</>
	);
}

export default Shop;
