import './Shipping.scss';

import Logo from '../../assets/Logo.svg';
import airplane from '../../assets/airplane.svg';
import MapShip from '../../assets/MapShip.jpg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

function Shipping() {
    return (
        <>
            <header className="header-ship">
                <div className="header-block">
                    <a className="logo" href="/">
                        <img src={Logo} alt="" />
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

            <main className="main-ship">
                <div className="ship-layout">
                    <h1>Shipping address</h1>

                    <div className="search-section">
                        <div className="search-row">
                            <div className="address">
                                <span>Please type your address</span>
                            </div>
                            <button className="btn-search">Search</button>
                        </div>

                        <button className="btn-location">
                            <img src={airplane} alt="" />
                            <span>Use your current location</span>
                        </button>
                    </div>

                    <div className="map-section">
                        <img src={MapShip} alt="Map" />
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

export default Shipping;
