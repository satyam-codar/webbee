/** @format */

import React from "react";
import { connect } from "react-redux";
const SlideShow = (props) => {
	const { auth } = props;
	return (
		// <!-- Slide show -->

		<div className="container-fluid pl-0 pr-0">
			<div className="row no-gutters">
				{/* <div className="col-md-2 col-lg-2">
					{auth.isEmpty ? <SignedOut /> : <SignedIn />}
				</div> */}
				<div
					className=""
					style={{ width: "100%", height: "auto" }}
				>
					<div
						id="demo"
						className="carousel slide"
						data-ride="carousel"
						data-interval="2500"
						// data-pause="false"
					>
						<ul className="carousel-indicators">
							<li
								data-target="#demo"
								data-slide-to="0"
								className="active"
							></li>
							<li data-target="#demo" data-slide-to="1"></li>
							<li data-target="#demo" data-slide-to="2"></li>
							{/* <li data-target="#demo" data-slide-to="3"></li>
							<li data-target="#demo" data-slide-to="4"></li> */}
						</ul>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="temptt/home-slider1.jpg"
									alt="Los Angeles"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption d-none d-md-block">
									<h3>A MULTI-CUISINE RESTAURANT</h3>
									<p>Here at Temptt, our focus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="temptt/home-slider3.jpg"
									alt="Chicago"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption d-none d-md-block">
									<h3>A MULTI-CUISINE RESTAURANT</h3>
									<p>Here at Temptt, our focus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="temptt/sarkhej-restaurant-concept.jpg"
									alt="Chicago"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption d-none d-md-block">
									<h3>A MULTI-CUISINE RESTAURANT</h3>
									<p>Here at Temptt, our focus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.</p>
								</div>
							</div>
							{/* <!-- <div className="carousel-item">
								<img
									src="Lord-Shiva-Hd-Images.jpg"
									alt="New York"
									width="100"
									height="100"
								/>
								<div className="carousel-caption">
									<h3>New York</h3>
									<p>We love the Big Apple!</p>
								</div>
							</div> --> */}
						</div>
						<a
							className="carousel-control-prev"
							href="#demo"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon"></span>
						</a>
						<a
							className="carousel-control-next"
							href="#demo"
							data-slide="next"
						>
							<span className="carousel-control-next-icon"></span>
						</a>
					</div>
				</div>
				{/* <div className="col-md-2 col-lg-2 container-fluid mt-4">
					<SignIn />
				</div> */}
			</div>
		</div>

		// <!-- /Slide show -->
	);
};



export default SlideShow
