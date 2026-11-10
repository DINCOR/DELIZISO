import './Homepage.scss';
import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';
import DishOne from '../../assets/dish-one.png';

import DishTwo from '../../assets/dish-two.png';
import Spaghetti from '../../assets/Spaghetti.png';
import Gnocchi from '../../assets/Gnocchi.png';
import Rovioli from '../../assets/Rovioli.png';
import PenneAllaVodak from '../../assets/PenneAllaVodak.png';
import Risoto from '../../assets/Risoto.png';
import SplitzaSignature from '../../assets/SplitzaSignature.png';

import Rating from '../../assets/Rating.svg';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';

import LetsReserve from '../../assets/LetsReserve.png';

import Betran from '../../assets/Betran.png';
import Ferry from '../../assets/Ferry.png';
import Iswan from '../../assets/Iswan.png';

import QuoteLeft from '../../assets/quote-left.svg';
import QuoteRight from '../../assets/quote-right.svg';

import Starla from '../../assets/Starla.jpg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

function Homepage() {
    return (
        <>
            <header className="header">
                <div className="header-block">
                    <img className="logo" src={Logo} alt="" />

                    <nav className="nav">
                        <a className="nav-text-orange" href="/">
                            Home
                        </a>
                        <a href="/menu">Menu</a>
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

                <section className="restauran">
                    <div className="restauran-block">
                        <div className="left-info">
                            <p className="top-info">Restauran</p>

                            <p className="name-dish">Italian Cuisine</p>
                            
                            <p className="desc-dish">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                                senectus dictum arcu sit tristique donec eget.
                            </p>

                            <div className="btn-info">
                                <a href="/order">
                                    <button className="btn-order">Order now</button>
                                </a>
                                <a href="/reserv">
                                    <button className="btn-reserv">Reservation</button>
                                </a>
                            </div>
                        </div>
                        <img src={DishOne} alt="" />
                    </div>
                </section>
            </header>

            <main className="main">
                <section className="welcome">
                    <div className="welcome-block">
                        <img src={DishTwo} alt="" />

                        <div className="info-right">
                            <p className="name-dish">
                                Welcome to <span>delizioso</span>
                            </p>

                            <p className="desc-dish">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
                                ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
                                nec quam
                            </p>

                            <a href="/menu">
                                <button className="btn-menu">See our menu</button>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="popular-menu">
                    <h2>Our popular menu</h2>

                    <div className="category">
                        <span className="active-span">All catagory</span>
                        <span>Dinner</span>
                        <span>Lunch</span>
                        <span>Dessert</span>
                        <span>Drink</span>
                    </div>

                    <div className="popular-grid">
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

                <section className="reserve">
                    <img className="reserve-image" src={LetsReserve} alt="" />

                    <div className="reserve-info">
                        <p className="reserve-title">
                            Let's reserve <span>a table</span>
                        </p>

                        <p className="reserve-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
                            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
                            quam
                        </p>

                        <button className="reserve-btn">Reservation</button>
                    </div>
                </section>

                <section className="chefs">
                    <h2 className="chefs-title">Our greatest chef</h2>

                    <div className="chefs-rows">
                        <div className="chef-card">
                            <img className="chef-image" src={Betran} alt="" />

                            <div className="chef-info">
                                <p className="chef-name">Betran Komar</p>
                                <p className="chef-role">Head chef</p>
                            </div>
                        </div>

                        <div className="chef-card">
                            <img className="chef-image" src={Ferry} alt="" />

                            <div className="chef-info">
                                <p className="chef-name">Ferry Sauwi</p>
                                <p className="chef-role">Chef</p>
                            </div>
                        </div>

                        <div className="chef-card">
                            <img className="chef-image" src={Iswan} alt="" />

                            <div className="chef-info">
                                <p className="chef-name">Iswan Dracho</p>
                                <p className="chef-role">Chef</p>
                            </div>
                        </div>
                    </div>

                    <button className="chefs-btn">View all</button>
                </section>

                <section className="customers">
                    <div className="customers-block">
                        <h2 className="customers-title">Our customers say</h2>

                        <div className="customer-card">
                            <img className="customer-image" src={Starla} alt="" />

                            <p className="customer-name">Starla Virgoun</p>
                            <p className="customer-role">Financial advisor</p>

                            <div className="customer-quote">
                                <img className="quote-left" src={QuoteLeft} alt="" />
                                <p className="customer-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Facilisis ultricies at eleifend proin. Congue nibh nulla
                                    malesuada ultricies nec quam
                                </p>
                                <img className="quote-right" src={QuoteRight} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="open-hours">
                    <div className="open-hours-block">
                        <div className="open-hours-info">
                            <h2 className="open-hours-title">we are open from</h2>

                            <div className="open-hours-schedule">
                                <p className="open-hours-days">Monday-Sunday</p>

                                <div className="open-hours-rows">
                                    <p className="open-hours-launch">
                                        Launch : Mon-Sun : 11:00am-02:00pm
                                    </p>
                                    <p className="open-hours-dinner">
                                        Dinner : sunday : 04:00pm-08:00pm
                                    </p>
                                    <p className="open-hours-time">04:00pm-09:00pm</p>
                                </div>
                            </div>

                            <div className="open-hours-buttons">
                                <button className="btn-order">Order now</button>
                                <button className="btn-reserv">Reservation</button>
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

export default Homepage;
