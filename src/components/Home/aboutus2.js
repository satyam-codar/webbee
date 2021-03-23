import React, { Component } from 'react'
import './aboutus2.css'

export default class AboutUs2 extends Component {
	render() {
		return (
			<div>
				<div className="welcome">
					<div className="page-header">
						<figure className='thumbnail'>
							<img src="images/img12.jpg"
								alt="" />
						</figure>
						<div className='cont' style={{ color: "" }}> <h1> About us </h1>
							<hr />
							<i class="fas fa-circle cir" style={{ fontSize: "10px" }}></i>
						</div >
					</div>
					<div class="container">
						<div class="row about">
							<div class="col-sm-6 col-sm-push-6">
								<figure>
									<img alt="df" src="images/logo2.png" class="animated fadeInRight animation animation-delay-25" data-animate="fadeInRight animation animation-delay-25" />
									{/* <img alt="fd" src="http://shambhuscoffeebar.com/images/home/info/info-img-2.png" class="animated fadeInRight animation" data-animate="fadeInRight animation" /> */}
								</figure>
							</div>
							<div class="col-sm-6 col-sm-pull-6 welcome">
								<h1 class="title" style={{ color: "black" }}>Welcome to iHANGOVER </h1>
								<p>We are proud to Introduce ourselves as iHANGOVER brand run by Food & Beverages based at Kolhapur, Western Maharashtra. Founded on 15th August 2013. iHANGOVER™ is known for its Taste
									Variety of Pizza. iHANGOVER has a wide product portfolio of pizza to savor customers taste buds.</p>
							</div>
						</div>
					</div>
					<div className="nextdiv">
						<div className="container">
							<div className="row">
								<div class="col-sm-6 col-md-6 col-lg-6">
									<div class="welcomecontent">
										<h2 class="">Our Mission</h2>
										<p>His vast experience in various business makes him a unique Entrepreneur, but his love for food Industry started from Russian sub continent since 15 years and now he has applied all his expertise to his own venture and now his main aim is to benefit and to Inspire young generation who have
											flair to grow individually as a young Entrepreneurs.</p>
										<h2 class="">Our Vision</h2>
										<p>Our motto is to generate business opportunity to people who can be self
										employed can create platform of job opportunities to others. iHANGOVER™
										recipes are unique and blended well as per the Indian taste buds so from kids
										to elders all can relish and best part of the story is the rates are pocket
										friendly. We have target of 1000 iHANGOVER outlets in India & have a vision to
										grow in International market where we are already into discussion with many
										countries like Malaysia, Singapore, Bangladesh, Sri lanka</p>
									</div>
								</div>
								<div class="col-sm-6 col-md-6 col-lg-6">
								{/* style={{ display:"block", marginLeft:"auto", marginRight:"auto", width:"80%", marginTop:"auto", marginBottom:"auto", paddingTop:"30px"}} */}
									<img alt="df" src="images/img15.jpg" class="img-fluid d-flex justify-content-center align-items-center-center"  />
										{/* <img alt="fd" src="http://shambhuscoffeebar.com/images/home/info/info-img-2.png" class="animated fadeInRight animation" data-animate="fadeInRight animation" /> */}
									
								</div>
							</div>
						</div>
					</div>
					<div className="nextdiv2">
						<div className="container">
							<div className="row">
								<div class="col-sm-6">
									<figure>
										<img alt="" src="http://shambhuscoffeebar.com/images/about/ourMethods1.png" class="animated fadeInLeft animation" data-animate="fadeInLeft animation" width="50%" />
										<img alt="" src="http://shambhuscoffeebar.com/images/about/ourMethods2.png" class="animated fadeInLeft animation animation-delay-25" data-animate="fadeInLeft animation animation-delay-25" width="50%" />
									</figure>
								</div>
								<div class="col-sm-6 welcomecontent">
									<aside>
										<h1 class="title" style={{ color: "black" }}>Accomplishments</h1>
										<p>Being a business maestro with a profound sense of self-achievement burning bright within him, Mr Singh would constantly request for feedback from customers, not just in terms of food quality but for service and ambience qualities too. The zeal and determination showcased by Mr Singh soon caught the eyes of multiple business moguls with established brands like AMUL Masterchef, JUST DIAL, and Blurp recognizing our endeavour to success. In fact, AMUL Mastercheck has even recommended our coffee bar as one of Ahemdabad’s favourite food and coffee hubs. We have also been blessed with a certification by Blurp as “Best place for coffee- hot and cold” in 2009.</p>
									</aside>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
				</div>
			</div>
		)
	}
}
