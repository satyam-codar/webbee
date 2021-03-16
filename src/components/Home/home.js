/** @format */

import React, { Component } from "react";
import SlideShow from "./SlideShow";
import Cards from "./cards";
import Body from "./body";
class Home extends Component {
	state = {};
	render() {
		return (
			<div className="">
				<SlideShow />
				<Cards/>
				<Body/>
			</div>
		);
	}
}

export default Home;
