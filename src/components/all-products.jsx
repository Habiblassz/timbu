import "./all-products.css";
import Shop from "./shop";
import { useState } from "react";

function AllProducts() {
	return (
		<div className="all-products">
			<div className="side-bar">
				<div className="cartegory">
					<div className="cart-heading">
						<h2>Cartegory</h2>
					</div>
					<div className="cartegories">
						<ul>
							<li>Bandages</li>
							<li>Alcohol wipes</li>
							<li>Sterile cotton</li>
							<li>Sterile stripes</li>
							<li>Medical scissors</li>
							<li>Burns cream</li>
						</ul>
					</div>
				</div>
				<div className="price-range">
					<RangeSlider />
				</div>
			</div>
			<div className="shoppu-container">
				<Shop />
			</div>
		</div>
	);
}

export { AllProducts };

const RangeSlider = ({ onChange }) => {
	const [slider, setSlider] = useState({
		max: 100,
		min: 0,
		value: 0,
		label: "Price",
	});

	const onSlide = () => {
		setSlider({ ...slider }, slider.value);
		console.log(slider.value);
	};

	return (
		<div className="range-slider">
			<p>{slider.label}</p>
			<input
				type="range"
				min={slider.min}
				max={slider.max}
				value={slider.value}
				onChange={() => onSlide()}
				className="slider"
				id="myRange"></input>
		</div>
	);
};
export default RangeSlider;
