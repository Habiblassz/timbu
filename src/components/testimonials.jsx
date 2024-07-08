import React, { Component } from "react";
import man from "../images/Frame 394 (1).png";
import woman from "../images/Frame 394.png";

class Testimonials extends Component {
	state = {};
	render() {
		return (
			<>
				<TestimonialContent
					image={woman}
					name="Jane"
					testimonial="Best shopping experience ever"
				/>
				<TestimonialContent
					image={man}
					name="Adenne"
					testimonial="Easy order, fast delivery"
				/>
				<TestimonialContent
					image={woman}
					name="Jane"
					testimonial="How can I rate this a 10?"
				/>
			</>
		);
	}
}

function TestimonialContent(props) {
	return (
		<>
			<img src={props.image} alt="" />
			<h3>{props.name}</h3>
			<p>{props.testimonial}</p>
		</>
	);
}

export default Testimonials;
