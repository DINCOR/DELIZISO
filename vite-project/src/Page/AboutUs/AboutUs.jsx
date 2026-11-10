import './AboutUs.scss';

import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import ChefCooking from '../../assets/ChefCooking.png';
import SaladPlates from '../../assets/SaladPlates.png';
import OwnerChef from '../../assets/OwnerChef.png';

function AboutUs() {
    return (
        <>
            <header className="header-about">
                <div className="header-block">
                    <img className="logo" src={Logo} alt="" />

                    <nav className="nav-about">
                        <a href="/">Home</a>
                        <a href="/menu">Menu</a>
                        <a className="nav-text-orange" href="/about">
                            About us
                        </a>
                        <a href="/order">Order online</a>
                        <a href="/reserv">Reservation</a>
                        <a href="/contacts">Contact us</a>
                    </nav>

                    <div className="nav-right">
                        <img className="cart" src={Cart} alt="" />
                        <a className="btn-login" href="/login">
                            <button className="btn">Log in</button>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="our-restaurant">
                    <div className="restaurant-row">
                        <div className="restaurant-img-wrapper">
                            <div className="img-circle-border">
                                <img src={ChefCooking} alt="Chef cooking" />
                            </div>
                        </div>
                        <div className="restaurant-text">
                            <h2>
                                <span className="text-orange">Our</span> <br />
                                restaurtant
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                    </div>

                    <div className="restaurant-reverse">
                        <div className="restaurant-text">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit.
                            </p>
                        </div>
                        <div className="restaurant-img-wrapper">
                            <div className="img-circle-border">
                                <img src={SaladPlates} alt="Salad plates" />
                            </div>
                        </div>
                    </div>

                    <div className="restaurant-owner">
                        <div className="owner-photo">
                            <img src={OwnerChef} alt="Ismail Marzuki" />
                        </div>
                        <div className="restaurant-text owner-text">
                            <h2>
                                <span className="text-orange">Owner </span> <br />& Executive Chef
                            </h2>
                            <p className="owner-name">Ismail Marzuki</p>

                            <div className="quote-block">
                                <span className="quote-mark">“</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <span className="quote-mark bottom-quote">”</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="header-block">
                    <div className="footer-about">
                        <img className="logo" src={LogoFooter} alt="" />

                        <p>Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>

                        <div className="footer-socials">
                            <div className="social-icon">
                                <img src={twitter} alt="" />
                            </div>
                            <div className="social-icon">
                                <img src={instagram} alt="" />
                            </div>
                            <div className="social-icon">
                                <img src={facebook} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="footer-columns">
                        <div className="footer-column">
                            <p className="footer-title">Page</p>

                            <div className="footer-links">
                                <a href="/">Home</a>
                                <a href="/menu">Menu</a>
                                <a href="/order">Order online</a>
                                <a href="/catering">Catering</a>
                                <a href="/reserv">Reservation</a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <p className="footer-title">Information</p>
                            <div className="footer-links">
                                <a href="/about">About us</a>
                                <a href="/testimonial">Testimonial</a>
                                <a href="/event">Event</a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <p className="footer-title">Get in touch</p>
                            <div className="footer-links">
                                <p>
                                    3247 Johnson Ave, Bronx, NY
                                    <br />
                                    10463, Amerika Serikat
                                </p>
                                <a href="mailto:delizioso@gmail.com">delizioso@gmail.com</a>
                                <a href="tel:+12345678901">+123 4567 8901</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2022 Delizioso</p>
                </div>
            </footer>
        </>
    );
}

export default AboutUs;
