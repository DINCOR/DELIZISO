import './Reserv.scss';

import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import SaladPlates from '../../assets/SaladPlates.png';

import BookReserve from '../../assets/BookReserve.png';

function Reserv() {
    return (
        <>
            <header className="header-reserv">
                <div className="header-block">
                    <img className="logo" src={Logo} alt="Delizioso" />

                    <nav className="nav-reserv">
                        <a href="/">Home</a>
                        <a href="/menu">Menu</a>
                        <a href="/about">About us</a>
                        <a href="/order">Order online</a>
                        <a className="nav-text-orange" href="/reserv">
                            Reservation
                        </a>
                        <a href="/contacts">Contact us</a>
                    </nav>

                    <div className="nav-right">
                        <img className="cart" src={Cart} alt="Cart" />
                        <a className="btn-login" href="/login">
                            <button className="btn">Log in</button>
                        </a>
                    </div>
                </div>
            </header>

            <main className="main-reserv">
                <section className="booking">
                    <div className="booking-image">
                        <div className="booking-circle">
                            <img src={BookReserve} alt="Restaurant table" />
                        </div>
                    </div>

                    <div className="booking-form">
                        <h1>Book a table</h1>
                        <div className="booking-fields">
                            <div className="booking-field">
                                <select defaultValue="" aria-label="Date">
                                    <option value="" disabled>
                                        Date
                                    </option>
                                </select>
                            </div>
                            <div className="booking-field">
                                <select defaultValue="" aria-label="Time">
                                    <option value="" disabled>
                                        Time
                                    </option>
                                </select>
                            </div>
                            <div className="booking-field">
                                <select defaultValue="" aria-label="Party size">
                                    <option value="" disabled>
                                        Party size
                                    </option>
                                </select>
                            </div>
                            <a href="confirm-reserv">
                                <button className="book-button">Book now</button>
                            </a>
                        </div>
                    </div>
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

export default Reserv;
