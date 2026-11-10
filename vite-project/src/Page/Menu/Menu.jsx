import './Menu.scss';

import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';

import Spaghetti from '../../assets/Spaghetti.png';
import Gnocchi from '../../assets/Gnocchi.png';
import Rovioli from '../../assets/Rovioli.png';
import PenneAllaVodak from '../../assets/PenneAllaVodak.png';
import Risoto from '../../assets/Risoto.png';
import SplitzaSignature from '../../assets/SplitzaSignature.png';

import Rating from '../../assets/Rating.svg';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

function Menu() {
    return (
        <>
            <header className="header-mini">
                <div className="header-block">
                    <img className="logo" src={Logo} alt="" />

                    <nav className="nav">
                        <a href="/">Home</a>
                        <a className="nav-text-orange" href="/menu">
                            Menu
                        </a>
                        <a href="/about">About us</a>
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
                <section className="all-menu">
                    <h2>Menu</h2>

                    <div className="category">
                        <span className="active-span">All catagory</span>
                        <span>Dinner</span>
                        <span>Lunch</span>
                        <span>Dessert</span>
                        <span>Drink</span>
                    </div>

                    <div className="all-grid">
                        <div className="popular-card">
                            <div className="popular-card-inner">
                                <img src={Spaghetti} alt="" />

                                <div className="popular-info">
                                    <p className="popular-dish-name">Spaghetti</p>

                                    <img src={Rating} alt="" />

                                    <p className="popular-dish-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas consequat mi eget auctor aliquam, diam.
                                    </p>

                                    <div className="popular-footer">
                                        <p className="popular-dish-price">$12.05</p>

                                        <button className="btn-order">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="popular-card-inner">
                                <img src={Gnocchi} alt="" />

                                <div className="popular-info">
                                    <p className="popular-dish-name">Gnocchi</p>

                                    <img src={Rating} alt="" />

                                    <p className="popular-dish-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas consequat mi eget auctor aliquam, diam.
                                    </p>

                                    <div className="popular-footer">
                                        <p className="popular-dish-price">$12.05</p>

                                        <button className="btn-order">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="popular-card-inner">
                                <img src={Rovioli} alt="" />

                                <div className="popular-info">
                                    <p className="popular-dish-name">Rovioli</p>

                                    <img src={Rating} alt="" />

                                    <p className="popular-dish-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas consequat mi eget auctor aliquam, diam.
                                    </p>

                                    <div className="popular-footer">
                                        <p className="popular-dish-price">$12.05</p>

                                        <button className="btn-order">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="popular-card-inner">
                                <img src={PenneAllaVodak} alt="" />

                                <div className="popular-info">
                                    <p className="popular-dish-name">Penne Alla Vodak</p>

                                    <img src={Rating} alt="" />

                                    <p className="popular-dish-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas consequat mi eget auctor aliquam, diam.
                                    </p>

                                    <div className="popular-footer">
                                        <p className="popular-dish-price">$12.05</p>

                                        <button className="btn-order">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="popular-card-inner">
                                <img src={Risoto} alt="" />

                                <div className="popular-info">
                                    <p className="popular-dish-name">Risoto</p>

                                    <img src={Rating} alt="" />

                                    <p className="popular-dish-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas consequat mi eget auctor aliquam, diam.
                                    </p>

                                    <div className="popular-footer">
                                        <p className="popular-dish-price">$12.05</p>

                                        <button className="btn-order">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="popular-card">
                            <div className="popular-card-inner">
                                <img src={SplitzaSignature} alt="" />

                                <div className="popular-info">
                                    <p className="popular-dish-name">Splitza Signature</p>

                                    <img src={Rating} alt="" />

                                    <p className="popular-dish-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas consequat mi eget auctor aliquam, diam.
                                    </p>

                                    <div className="popular-footer">
                                        <p className="popular-dish-price">$12.05</p>

                                        <button className="btn-order">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination">
                        <img src={LeftArrow} alt="" />
                        <div className="pagination-pages">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span className="dot">...</span>
                        </div>
                        <img src={RightArrow} alt="" />
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

export default Menu;
