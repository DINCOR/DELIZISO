import { NavLink } from 'react-router-dom';
import './Checkout.scss';

import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';
import LeftArrow from '../../assets/LeftArrow.svg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import downArrow from '../../assets/downArrow.svg';
import Flag from '../../assets/Flag.svg';

function Checkout() {
    return (
        <>
            <header className="header-order">
                <div className="header-block">
                    <img className="logo" src={Logo} alt="" />
                    <nav className="nav">
                        <a href="/">Home</a>
                        <a href="/menu">Menu</a>
                        <a href="/about">About us</a>
                        <a href="/order" className="nav-text-orange">
                            Order online
                        </a>
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

            <main className="main-checkout">
                <div className="checkout-layout">
                    <div className="checkout-top">
                        <NavLink to="/order">
                            <button className="btn-back">
                                <img src={LeftArrow} alt="" />
                            </button>
                        </NavLink>

                        <h1>Checkout</h1>
                    </div>

                    <div className="checkout-address">
                        <h2>Shipping address</h2>
                        <div className="address-box">
                            <div className="place">
                                <p>1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat</p>
                            </div>
                            <a href="/ship-address">
                                <button className="btn-change">Change</button>
                            </a>
                        </div>
                    </div>

                    <div className="checkout-data">
                        <h2>Order data</h2>
                        <div className="form-grid">
                            <div className="input-row">
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>

                            <div className="contacts-row">
                                <div className="phone-input">
                                    <div className="flag-dropdown">
                                        <span className="flag">
                                            <img src={Flag} alt="" />
                                        </span>
                                        <span className="arrow">
                                            <img src={downArrow} alt="" />
                                        </span>
                                    </div>
                                    <input type="tel" placeholder="Phone number" />
                                </div>

                                <input type="email" placeholder="Email address" />
                            </div>

                            <textarea className="textarea" placeholder="Note"></textarea>
                        </div>
                    </div>

                    <div className="checkout-time">
                        <h2>Order time</h2>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input type="radio" name="time" defaultChecked />
                                <span className="custom-radio"></span>
                                Order now
                            </label>
                            <label className="radio-label-long">
                                <input type="radio" name="time" />
                                <span className="custom-radio"></span>
                                Order later
                                <span className="arrow-down">
                                    <img src={downArrow} alt="" />
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="checkout-order">
                        <h2>Order method</h2>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input type="radio" name="method" defaultChecked />
                                <span className="custom-radio"></span>
                                Delivery
                            </label>
                            <label className="radio-label-long">
                                <input type="radio" name="method" />
                                <span className="custom-radio"></span>
                                Take a way
                            </label>
                        </div>
                    </div>

                    <div className="checkout-payment">
                        <h2>Payment method</h2>
                        <div className="payment-grid">
                            <label className="payment-card">
                                <input type="radio" name="payment" defaultChecked />
                                <span className="custom-radio"></span>
                                Cash On Delivery
                            </label>
                            <label className="payment-card">
                                <input type="radio" name="payment" />
                                <span className="custom-radio"></span>
                                BCA Virtual Account
                            </label>
                            <label className="payment-card">
                                <input type="radio" name="payment" />
                                <span className="custom-radio"></span>
                                Credit Card
                            </label>
                            <label className="payment-card">
                                <input type="radio" name="payment" />
                                <span className="custom-radio"></span>
                                Transfer Bank
                            </label>
                        </div>
                    </div>

                    <div className="checkout-terms">
                        <label className="checkbox-label">
                            <input type="checkbox" defaultChecked />
                            <p>
                                Choose to indicate that you have read and agree to our Terms of use
                                & Privacy Policy.
                            </p>
                        </label>
                    </div>

                    <div className="btn-section">
                        <button className="btn-order">Order now</button>
                    </div>
                </div>
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

export default Checkout;
