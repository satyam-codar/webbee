import React from 'react'
import './Contactusheader.css'
import GoogleMap from './GoogleMap'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function Contactusheader() {
    return (
        <div>
            <div className="page-header">
                <figure className=''>
                    < img src="images/img12.jpg"
                        alt="" />
                </figure>
                <div className='cont'> < h1 > Contact us </h1>
                    <hr />
                    <i class="fas fa-circle cir" style={{ fontSize: "10px" }}></i>
                </div >
            </div>
            <div className='page-content'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-md-pull-3">
                            <div className="contact-content">
                                <h3 className="title contact-title">
                                    Contact Us
                            </h3>
                                <p className="contact-desc">
                                    "Shambhu's Coffee Bar is not only popular for its rich quality coffee and
                                    other delicacies but also for its value for money offerings."
                            </p>
                                <form action method="post" id="contactform" class="contact-form">
                                    <div className="row">
                                        <div className="col-sm-4 colum col-md-4">
                                            <p className="contact-form-author">
                                                <input type="text" required='required' size='30' valuename="author" id='author'
                                                    placeholder='Name'/>
                                            </p>
                                        </div>
                                        <div div className = "col-sm-4 colum col-md-4" >
                                            <p className="contact-form-email">
                                                <input type="email" required='required' size='30' valuename="email" id='email'
                                                    placeholder='Email'/>
                                            </p>
                                        </div>
                                        <div div div className = "col-sm-4 colum col-md-4" >
                                            <p className="contact-form-Subject">
                                                <input type="text" required='required' size='30' valuename="subject" id='subject'
                                                    placeholder="Subject"/>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="contact-form-message">
                                        <textarea required="required" rows="3" cols="45" name="message" id="message" placeholder="Your message">
                                        </textarea>
                                    </p>
                                    <p className="form-submit button">
                                        <button class="hvr-rectangle-out" type="submit" id="submit" name="submit">
                                            Send Message
                                        </button>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-push-9">
                            <div className="sidebar">
                                <div className="widget-content contact-us">
                                    <h3 className="title">Reach Us</h3>
                                    <p style={{marginTop:"19px"}}>
                                        <i className="fas fa-map-marker mr-3"></i>"1-2, Devagan Flats,"
                                    <br/>
                                    "Navrangpura, Ahmedabad-3800009,"
                                    <br/>
                                    "gujarat,India"
                                </p>
                                    <p>
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:info@shambhuscoffeebar.com"> info@shambhuscoffeebar.com</a>
                                </p>
                                    <p>
                                        <i className="fas fa-phone mr-3"></i>
                                    <a href="tel:+91 6377076132">+91 6377076132</a>
                                </p>
                                <p className="form-submit button">
                                        <a href = "https://www.google.com/maps/place/iHangover/@23.1847542,72.6289328,234m/data=!3m1!1e3!4m5!3m4!1s0x395c2b54bdb17051:0x84582cab1e680bcc!8m2!3d23.1847542!4d72.6289328" > < button class = "hvr-rectangle-out"
                                        type = "submit"
                                        id = "submit"
                                        name = "submit" >
                                            Reach US
                                        </button></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container map-container">
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1118.666094809882!2d72.6289328!3d23.1847542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b54bdb17051%3A0x84582cab1e680bcc!2siHangover!5e1!3m2!1sen!2sin!4v1615871964087!5m2!1sen!2sin"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p>
            </div> */}
            {/* <div className="container">
                {/* <Map google={this.props.google} zoom={14}>
    
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map> */}
        </div>
    )
}

export default Contactusheader
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCZQdWZWsNyakL30EbvVherj04c9HcqFc8")
//   })(Contactusheader)   