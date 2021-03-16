/** @format */

import React, { Component } from "react";
import GalleryPreview from "../All/SMGallery";

class Cards extends Component {
	state = {};
	render() {
		return (
            <div>
                
                <div class="container-fluid" style={{backgroundImage:`url("https://previews.123rf.com/images/porstock/porstock1508/porstock150800070/44251363-coffee-cup-on-wooden-table-background-view-from-above-with-copy-space-.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            
                <div class="row">
                    
                    
                    <div class="col-sm-6 col-sm-pull-6 p-5">
                        <h1 class="title line-title">
                            Welcome to <img alt="" src="http://shambhuscoffeebar.com/assets/imgs/ShmbhusLogo.png" width="200px" /><i class="fa"></i>
                        </h1>
                        <aside>
                            <p>Famous for its diverse range of delicious coffee, Shambhu’s Coffee Bar is one of the most talked about cafés in Ahmedabad, India with our lip-smacking collection of hot &amp; cold beverages paired with our savoury snacks now attracting hundreds of coffee-lovers to our hub. For more than a decade now, Shambhu’s Coffee Bar has been exclusively catering to quench the thirst of ardent coffee-lovers with the menu promising a little something for everyone.</p>									
                        <a href="http://shambhuscoffeebar.com/menu.php" class="hvr-shutter-out-horizontal">Our Menu</a>	&nbsp;
                        <a href="http://shambhuscoffeebar.com/store-locatorold.php" class="hvr-shutter-out-horizontal">Our outlets</a>
                        </aside>
                    </div>
                    <div class="col-sm-6 col-sm-push-6">
                        <figure>
                            <img alt="djfsk" src="http://shambhuscoffeebar.com/images/home/info/info-img-1.png" class="animated fadeInRight animation animation-delay-25" data-animate="fadeInRight animation animation-delay-25"/>
                            <img alt="sdfsldjf" src="http://shambhuscoffeebar.com/images/home/info/info-img-12.png" class="animated fadeInRight animation" data-animate="fadeInRight animation"/>
                        </figure>
                    </div>
                </div>
			</div>
            </div>
			
		);
	}
}

export default Cards;
