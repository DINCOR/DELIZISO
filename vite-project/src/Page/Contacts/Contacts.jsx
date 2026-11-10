import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';

import Map from '../../assets/Map.jpg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import './Contacts.scss';

export default function Contacts() {
    return (
        <>
            <header className="header-contacts">
                <div className="header-block">
                    <img className="logo" src={Logo} alt="Delizioso" />

                    <nav className="nav-contacts">
                        <a href="/">Home</a>
                        <a href="/menu">Menu</a>
                        <a href="/about">About us</a>
                        <a href="/order">Order online</a>
                        <a href="/reserv">Reservation</a>
                        <a className="nav-text-orange" href="/contacts">
                            Contact us
                        </a>
                    </nav>

                    <div className="nav-right">
                        <img className="cart" src={Cart} alt="Cart" />
                        <a className="btn-login" href="/login">
                            <button className="btn">Log in</button>
                        </a>
                    </div>
                </div>
            </header>

            <main className="main-contact">
                <section className="contact">
                    <h2>Contact us</h2>

                    <p>
                        We love hearing from our customers. Feel free to share your experience or
                        ask any questions you may have.
                    </p>

                    <div className="contact-fields">
                        <div className="contact-field">
                            <input placeholder="First name" type="text" />
                            <input placeholder="Last name" type="text" />
                        </div>
                        <div className="contact-field">
                            <input placeholder="Email address" type="text" />
                            <input placeholder="Subject" type="text" />
                        </div>
                        <textarea name="" placeholder="Message"></textarea>
                    </div>

                    <button className="contact-button">Submit</button>
                </section>

                <section className="contact-map">
                    <img src={Map} alt="" />
                </section>
            </main>

            <footer className="footer">
                <div className="header-block">
                    <div className="footer-about">
                        <img className="logo" src={LogoFooter} alt="Delizioso" />
                        <p>Viverra gravida morbi egestas facilisis tortor netus non duis tempor.</p>
                        <div className="footer-socials">
                            <div className="social-icon">
                                <img src={twitter} alt="Twitter" />
                            </div>
                            <div className="social-icon">
                                <img src={instagram} alt="Instagram" />
                            </div>
                            <div className="social-icon">
                                <img src={facebook} alt="Facebook" />
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
