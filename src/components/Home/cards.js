/** @format */

import React, { Component } from "react";

class Cards extends Component {
	state = {};
	render() {
		return (
            <div>
                <br/>
                <div class="container-fluid p-0" style={{backgroundImage:`url(${process.env.PUBLIC_URL +"images/.jpg"})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            
                    <div class="row m-0">
                        
                        
                        <div class="col-sm-6 col-md-6 col-lg-6 col-sm-pull-6 p-5">
                            <h1 class="title line-title" style={{color:"black"}}>
                                Welcome to <img alt="" src="http://shambhuscoffeebar.com/assets/imgs/ShmbhusLogo.png" width="200px" /><i class="fa"></i>
                            </h1>
                            <aside>
                                <p>Famous for its diverse range of delicious coffee, Shambhu’s Coffee Bar is one of the most talked about cafés in Ahmedabad, India with our lip-smacking collection of hot &amp; cold beverages paired with our savoury snacks now attracting hundreds of coffee-lovers to our hub. For more than a decade now, Shambhu’s Coffee Bar has been exclusively catering to quench the thirst of ardent coffee-lovers with the menu promising a little something for everyone.</p>									
                            <a href="http://shambhuscoffeebar.com/menu.php" class="hvr-shutter-out-horizontal">Our Menu</a>	&nbsp;
                            <a href="http://shambhuscoffeebar.com/store-locatorold.php" class="hvr-shutter-out-horizontal">Our outlets</a>
                            </aside>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 col-sm-push-6" style={{textAlign:"center", margin:"auto"}}>
                            <figure>
                                <img alt="djfsk" src="images/pexels-rodolfo-clix-1596884.jpg" class="" data-animate="" style={{opacity:"0.9"}}/>
                                {/* <img alt="sdfsldjf" src="http://shambhuscoffeebar.com/images/home/info/info-img-12.png" class="animated fadeInRight animation" data-animate="fadeInRight animation"/> */}
                            </figure>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
			
		);
	}
}

export default Cards;
