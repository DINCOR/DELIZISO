import './ReservationSuccess.scss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import Calendar from '../../assets/Calendar.svg';
import Clock from '../../assets/Clock.svg';
import userIcon from '../../assets/User.svg';
import checkWhite from '../../assets/checkWhite.svg';
import IconBookingid from '../../assets/IconBookingid.png';
import editIcon from '../../assets/editIcon.svg';
import closeRed from '../../assets/closeRed.svg';
import downArrow from '../../assets/downArrow.svg';
import Restaurant from '../../assets/Restaurant.png';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

function ReservationSuccess() {
    return (
        <>
            <header className="header-confirm">
                <div className="header-block">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="" />
                    </Link>
                    <div className="nav-right">
                        <Link className="signin" to="/login">
                            <button>Sign in</button>
                        </Link>
                        <Link className="login" to="/login">
                            <button>Log in</button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="main-success">
                <div className="green-banner">
                    <div className="banner">
                        <h1>Reservation has been confirmed</h1>
                        <div className="banner-info">
                            <div className="info-row">
                                <img src={checkWhite} alt="" />
                                <span>The confirmation result has been sent to your email</span>
                            </div>
                            <div className="info-row">
                                <img src={IconBookingid} alt="" />
                                <span>Booking ID : #123456</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="success-layout">
                    <div className="success-content">
                        <div className="circle-bg">
                            <img src={Restaurant} alt="" />
                        </div>

                        <div className="right-info">
                            <div className="details">
                                <h2>Reservation detail</h2>
                                <div className="detail-row">
                                    <img src={Calendar} alt="" />
                                    <span>Saturday, 28 February 2022</span>
                                </div>
                                <div className="detail-row">
                                    <img src={Clock} alt="" />
                                    <span>04:30 pm</span>
                                </div>
                                <div className="detail-row">
                                    <img src={userIcon} alt="" />
                                    <span>2 people (Standar seating)</span>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <button className="btn-modify">
                                    Modify
                                    <img src={editIcon} alt="" />
                                </button>
                                <a href="/cancel-reserv">
                                    <button className="btn-cancel">
                                        Cancel
                                        <img src={closeRed} alt="" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-section">
                        <div className="form-section">
                            <div className="select-box">
                                <span>Select an accasion (optional)</span>
                                <img src={downArrow} alt="" />
                            </div>
                            <textarea placeholder="Add a special request"></textarea>
                        </div>

                        <div className="restaurant-info">
                            <div className="text-box">
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

export default ReservationSuccess;
