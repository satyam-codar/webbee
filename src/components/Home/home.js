/** @format */

import React, { Component } from "react";
import SlideShow from "./SlideShow";
import Cards from "./cards";
import Body from "./body";
import Testimonials from "./testimonials";
class Home extends Component {
	state = {};
	render() {
		return (
			<div className="">
				<SlideShow />
				<div className="container">
					<Cards/>
					<Body/>
					<Testimonials/>
				</div>
				
			</div>
		);
	}
}

export default Home;
