import React, { Component } from "react";
import man from "../images/Frame 394 (1).png";
import woman from "../images/Frame 394.png";
import "./testimonials.css";

class Testimonials extends Component {
	state = {};
	render() {
		return (
			<div className="testimonial-tray">
				<div className="testimonial-heading">Testimonial</div>
				<div className="testimonial-cards">
					<TestimonialContent
						image={woman}
						name="Jane"
						testimonial={`"Best shopping experience ever"`}
					/>
					<TestimonialContent
						image={man}
						name="Adenne"
						testimonial={`"Easy order, fast delivery"`}
					/>
					<TestimonialContent
						image={woman}
						name="Jane"
						testimonial={`"How can I rate this a 10?"`}
					/>
				</div>
			</div>
		);
	}
}

function TestimonialContent(props) {
	return (
		<div className="testimonial">
			<img src={props.image} alt="" />
			<h3>{props.name}</h3>
			<p>{props.testimonial}</p>
		</div>
	);
}

export default Testimonials;
