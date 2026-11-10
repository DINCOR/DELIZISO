import './ReservationCancel.scss';

import Logo from '../../assets/Logo.svg';
import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

import Calendar from '../../assets/Calendar.svg';
import Clock from '../../assets/Clock.svg';
import userIcon from '../../assets/User.svg';
import IconBookingid from '../../assets/IconBookingid.png';
import Restaurant from '../../assets/Restaurant.png';

function ReservationCancel() {
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

            <main className="cancel">
                <div className="top-banner">
                    <div className="banner">
                        <h1>Are you sure you want to cancel the reservation?</h1>
                        <div className="booking">
                            <img src={IconBookingid} alt="" />
                            <span>Booking ID : #123456</span>
                        </div>
                    </div>
                </div>

                <div className="cancel-wrap">
                    <div className="cancel-cont">
                        <div className="circle">
                            <img src={Restaurant} alt="" />
                        </div>

                        <div className="info">
                            <h2>Reservation detail</h2>
                            <div className="rows">
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

                    <div className="actions">
                        <a href="/reserv">
                            <button className="cancel-btn">Cancel reservation</button>
                        </a>
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

export default ReservationCancel;
