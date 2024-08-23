import "./all-products.css";
import Shop from "./shop";

function AllProducts() {
	return (
		<>
			<div className="header"></div>
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
					<div className="price-range"></div>
				</div>
				<div className="shoppu-container">
					<Shop />
				</div>
			</div>
		</>
	);
}

export { AllProducts };
