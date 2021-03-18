import React, { Component } from 'react'
import Footer from './Footer2'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <figure className='thumbnail'>
                        <img src="temptt/img-3.jpg"
                            alt="" />
                    </figure>
                    <div className='cont' style={{color:""}}> <h1> About us </h1>
                        <hr />
                        <i class="fas fa-circle cir" style={{ fontSize: "10px" }}></i>
                    </div >
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-push-6">
                            <figure>
                                <img alt="df" src="http://shambhuscoffeebar.com/images/home/info/info-img-1.png" class="animated fadeInRight animation animation-delay-25" data-animate="fadeInRight animation animation-delay-25"/>
                                <img alt="fd" src="http://shambhuscoffeebar.com/images/home/info/info-img-2.png" class="animated fadeInRight animation" data-animate="fadeInRight animation"/>
                            </figure>
                        </div>
                        <div class="col-sm-6 col-sm-pull-6">
                            <h1 class="title" style={{color:"black"}}>Welcome to shambhu's coffee bar </h1>
                            <aside>
                                <p>Famous for its diverse range of delicious coffee, Shambhu’s Coffee Bar is one of the most talked about cafés in Ahmedabad, India with our lip-smacking collection of hot &amp; cold beverages paired with our savoury snacks now attracting hundreds of coffee-lovers to our hub. For more than a decade now, Shambhu’s Coffee Bar has been exclusively catering to quench the thirst of ardent coffee-lovers with the menu promising a little something for everyone. From iced coffee and dry-fruit shakes to steaming cup of espressos and cooling pitchers of mocktails, slushies, and soda pops- we have our customers spoilt for choices. That’s not all! Apart from our extensive list of beverages, we also have some quick bites that’ll blow your mind- we are talking yummy garlic bread and scrumptious club sandwiches, crispy French fried toppled with cheese and warm pizzas with cheese oozing out of it, and of course our infamous chocolate brownie for the sweet tooth lovers- Shambhu’s Coffee Bar has it all for you.</p>
                            </aside>
                        </div>
                    </div>
					
				</div>
                <section class="section ourMission">
					<div class="container">
						<div class="row">
                            <div class="col-sm-6">
								<aside>
									<div class="content">
										<h5 class="title">Our Mission</h5>
										<p>Consistency is crucial and our mission is to hone in on our expertise of maintaining consistency throughout, be it in terms of superior food and beverage quality, or in terms of customer experience, ambience, and value for money pricing ranges.</p>
										<h5 class="title">Our Vision</h5>
										<p>We want more and more people to sketch “memorable moments” right here in this small little cosy coffee bar chain in Ahmedabad and to see our vision turn into reality we have shaped our values, strategies, product developments, and most importantly, our day-to-day decisions to ensurecustomer experiences are always flawless. Our values redefine customer communication and our partners and employees mirror the same integrity.</p>
									</div>
								</aside>
							</div>
							<div class="col-sm-6">
								<figure>
									<img alt="" src="http://shambhuscoffeebar.com/images/about/ourMission.png" class="animated zoomIn animation" data-animate="zoomIn animation" width="70%"/>
								</figure>
							</div>
							
						</div>
					</div>
				</section>
                <section class="section ourMethods">
					<div class="container">
						<div class="row">
                        
							<div class="col-sm-6">
								<figure>
									<img alt="" src="http://shambhuscoffeebar.com/images/about/ourMethods1.png" class="animated fadeInLeft animation" data-animate="fadeInLeft animation" width="50%"/>
									<img alt="" src="http://shambhuscoffeebar.com/images/about/ourMethods2.png" class="animated fadeInLeft animation animation-delay-25" data-animate="fadeInLeft animation animation-delay-25" width="50%"/>
								</figure>
							</div>
							<div class="col-sm-6">
								<aside>
									<h1 class="title" style={{color:"black"}}>Accomplishments</h1>
									<p>Being a business maestro with a profound sense of self-achievement burning bright within him, Mr Singh would constantly request for feedback from customers, not just in terms of food quality but for service and ambience qualities too. The zeal and determination showcased by Mr Singh soon caught the eyes of multiple business moguls with established brands like AMUL Masterchef, JUST DIAL, and Blurp recognizing our endeavour to success. In fact, AMUL Mastercheck has even recommended our coffee bar as one of Ahemdabad’s favourite food and coffee hubs. We have also been blessed with a certification by Blurp as “Best place for coffee- hot and cold” in 2009.</p>
									<ul class="logos">
									    <li>
									        <img src="images/amul.jpeg"/>
									    </li>
									    <li>
									        <img src="images/jd.png"/>
									    </li>
									</ul>
								</aside>
							</div>
						</div>
					</div>
				</section>
            </div>
        )
    }
}
