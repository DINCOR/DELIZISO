import './ConfirmReservation.scss';

import Logo from '../../assets/Logo.svg';
import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import Calendar from '../../assets/Calendar.svg';
import Clock from '../../assets/Clock.svg';
import userIcon from '../../assets/User.svg';
import flag from '../../assets/Flag.svg';
import downArrow from '../../assets/downArrow.svg';

function ConfirmReservation() {
    return (
        <>
            <header className="header-confirm">
                <div className="header-block">
                    <a href="/">
                        <img className="logo" src={Logo} alt="" />
                    </a>
                    <div className="nav-right">
                        <a className="signin" href="/login">
                            <button>Sign in</button>
                        </a>

                        <a className="login" href="/login">
                            <button>Log in</button>
                        </a>
                    </div>
                </div>
            </header>

            <main className="main-confirm">
                <div className="confirm-layout">
                    <h1>Reservation</h1>

                    <div className="timer-banner">
                        <span>
                            Due to limited availability, we can hold this table for you for{' '}
                            <b>5:00 minutes</b>
                        </span>
                    </div>

                    <div className="content-wrapper">
                        <div className="form-section">
                            <h2>Data order</h2>
                            <div className="input-group">
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />

                                <div className="phone-row">
                                    <div className="flag-box">
                                        <img className="flag" src={flag} alt="" />

                                        <img src={downArrow} alt="" className="arrow" />
                                    </div>
                                    <input type="tel" placeholder="Phone number" />
                                </div>

                                <input type="email" placeholder="Email address" />

                                <div className="select-box">
                                    <span>Select an occasion</span>
                                    <img src={downArrow} alt="" className="arrow" />
                                </div>

                                <textarea placeholder="Add a special request"></textarea>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" />
                                <label>
                                    Sign me up to receive dining offers and news from this
                                    restaurant by email.
                                </label>
                            </div>
                            <a href="/reserv-success">
                                <button className="btn-confirm">Confirm reservation</button>
                            </a>
                        </div>

                        <div className="info-section">
                            <div className="reservation-details">
                                <div className="cont">
                                    <h2>Reservation detail</h2>

                                    <div className="content">
                                        <div className="row">
                                            <img src={Calendar} alt="" />
                                            <span>Saturday, 28 February 2022</span>
                                        </div>
                                        <div className="row">
                                            <img src={Clock} alt="" />
                                            <span>04:30 pm</span>
                                        </div>
                                        <div className="row">
                                            <img src={userIcon} alt="" />
                                            <span>2 people (Standar seating)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="restaurant-info">
                                <h2>Restaurant informations</h2>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo.
                                </p>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius modi
                                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem. Ut enim ad minima veniam.
                                </p>
                            </div>
                        </div>
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

export default ConfirmReservation;
