import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className="row footerlink">
                    <div className="col-md-4">
                        <h2 style={{color:"white",textAlign:"left"}}>About Us</h2>
                        <ul>
                            <li><Link to='/sign-up'>How it works</Link></li>
                            <li><Link to='/'>Testimonials</Link></li>
                            <li><Link to='/'>Careers</Link></li>
                            <li>  <Link to='/'>Investors</Link></li>
                            <li><Link to='/'>Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 style={{color:"white", textAlign:"left"}}>Contact Us</h2>
                        <ul>
                            <li>  <Link to='/'>Contact</Link></li>
                            <li> <Link to='/'>Support</Link></li>
                            <li><Link to='/'>Destinations</Link></li>
                            <li><Link to='/'>Sponsorships</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 style={{color:"white", textAlign:"left"}} >Social Media</h2>
                        <ul>
                            <li><Link to='/'><i class='fab fa-instagram' /> Instagram</Link></li>
                            <li> <Link to='/'><i class='fab fa-youtube' /> Youtube</Link></li>
                            <li><Link to='/'><i class='fab fa-twitter' /> Twitter</Link></li>
                            <li></li>
                        </ul>
                    </div>

                </div>

            </div>

            <section class='social-media'>
                    <div className="row">
                        <div className="col-md-4">
                            <div class='footer-logo'>
                                <Link to='/' className='social-logo'>
                                    iHANGOVER
                            <i class='fab fa-typo3' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <small class='website-rights'>iHANGOVER © 2021</small>
                        </div>
                        <div className="col-md-4">
                            <div class='social-icons'>
                                <Link
                                    class='social-icon-link facebook'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i class='fab fa-facebook-f' />
                                </Link>
                                <Link
                                    class='social-icon-link instagram'
                                    to='/'
                                    target='_blank'
                                    aria-label='Instagram'
                                >
                                    <i class='fab fa-instagram' />
                                </Link>
                                <Link
                                    class='social-icon-link youtube'
                                    to='/'
                                    target='_blank'
                                    aria-label='Youtube'
                                >
                                    <i class='fab fa-youtube' />
                                </Link>
                                <Link
                                    class='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter'
                                >
                                    <i class='fab fa-twitter' />
                                </Link>
                                <Link
                                    class='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='LinkedIn'
                                >
                                    <i class='fab fa-linkedin' />
                                </Link>
                            </div>
                        </div>
                    </div>
            </section>
            <hr />
            <p className='hfoot' style={{ fontSize: '15px' }}>Website developer :: Permender Kumar (6377076132) || Satyam Kumar (6377076132)</p>
        </div>
    );
}

export default Footer;