import "./all-products.css";
import Shop from "./shop";
import { storeItems } from "./store";

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
								{storeItems.image.map((item, index) => {
									return <li key={item[1]}> {item[1]}</li>;
								})}
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
