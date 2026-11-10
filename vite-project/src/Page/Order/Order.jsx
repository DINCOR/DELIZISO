import './Order.scss';

import Logo from '../../assets/Logo.svg';
import Cart from '../../assets/Cart.svg';

import Spaghetti from '../../assets/Spaghetti.png';
import Linguine from '../../assets/Linguine.png';
import Capellini from '../../assets/Capellini.png';
import Fettuccine from '../../assets/Fettuccine.png';
import Bucatini from '../../assets/Bucatini.png';
import Tortellini from '../../assets/Tortellini.png';
import Fusilli from '../../assets/Fusilli.png';
import Farfalle from '../../assets/Farfalle.png';
import PenneAllaVodak from '../../assets/PenneAllaVodak.png';

import SplitzaSignature from '../../assets/SplitzaSignature.png';
import SuperSupreme from '../../assets/SuperSupreme.png';
import VeggieGarden from '../../assets/VeggieGarden.png';
import DoubleBeefBurger from '../../assets/DoubleBeefBurger.png';
import MeatLovers from '../../assets/MeatLovers.png';
import Extravaganzza from '../../assets/Extravaganzza.png';
import MeatMeat from '../../assets/Meat&Meat.png';
import Meatzza from '../../assets/Meatzza.png';
import TunaDelight from '../../assets/TunaDelight.png';

import RatingBlack from '../../assets/RatingBlack.svg';
import Rating from '../../assets/Rating.svg';
import LeftArrow from '../../assets/LeftArrow.svg';
import RightArrow from '../../assets/RightArrow.svg';

import LogoFooter from '../../assets/LogoFooter.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';

function Order() {
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

            <main className="main-order">
                <div className="order-layout">
                    <div className="menu">
                        <h2>Menu</h2>
                        <div className="category">
                            <span className="active-span">All catagory</span>
                            <span>Dinner</span>
                            <span>Lunch</span>
                            <span>Dessert</span>
                            <span>Drink</span>
                        </div>
                    </div>

                    <div className="order-content">
                        <div className="order-left">
                            <div className="menu-section">
                                <div className="order-header">
                                    <h2>PASTA</h2>
                                    <div className="order-header-line"></div>
                                </div>

                                <div className="popular-grid">
                                    <div className="popular-card-active">
                                        <div className="popular-card-inner">
                                            <img
                                                className="pasta"
                                                src={Spaghetti}
                                                alt="Spaghetti"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Spaghetti</p>
                                                <img src={RatingBlack} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img className="pasta" src={Linguine} alt="Linguine" />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Linguine</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={Capellini}
                                                alt="Capellini"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Capellini</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={Fettuccine}
                                                alt="Fettuccine"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Fettuccine</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img className="pasta" src={Bucatini} alt="Bucatini" />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Bucatini</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={Tortellini}
                                                alt="Tortellini"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Tortellini</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img className="pasta" src={Fusilli} alt="Fusilli" />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Fusilli</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img className="pasta" src={Farfalle} alt="Farfalle" />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Farfalle</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={PenneAllaVodak}
                                                alt="Penne Alla Vodak"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">
                                                    Penne Alla Vodak
                                                </p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                    <img src={LeftArrow} alt="Prev" />
                                    <div className="pagination-pages">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span className="dot">...</span>
                                    </div>
                                    <img src={RightArrow} alt="Next" />
                                </div>
                            </div>

                            <div className="menu-section">
                                <div className="order-header">
                                    <h2>PIZZA</h2>
                                    <div className="order-header-line"></div>
                                </div>

                                <div className="popular-grid">
                                    <div className="popular-card-active">
                                        <div className="popular-card-inner">
                                            <img
                                                className="pasta"
                                                src={SplitzaSignature}
                                                alt="Splitza Signature"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">
                                                    Splitza Signature
                                                </p>
                                                <img src={RatingBlack} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={SuperSupreme}
                                                alt="Super Supreme"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Super Supreme</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={VeggieGarden}
                                                alt="Veggie Garden"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Veggie Garden</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={DoubleBeefBurger}
                                                alt="Double Beef Burger"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">
                                                    Double Beef Burger
                                                </p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={MeatLovers}
                                                alt="Meat Lovers"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Meat Lovers</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={Extravaganzza}
                                                alt="Extravaganzza"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Extravaganzza</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={MeatMeat}
                                                alt="Meat & Meat"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Meat & Meat</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img className="pasta" src={Meatzza} alt="Meatzza" />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Meatzza</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                            <img
                                                className="pasta"
                                                src={TunaDelight}
                                                alt="Tuna Delight"
                                            />
                                            <div className="popular-info">
                                                <p className="popular-dish-name">Tuna Delight</p>
                                                <img src={Rating} alt="Rating" />
                                                <p className="popular-dish-desc">
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit.
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
                                    <img src={LeftArrow} alt="Prev" />
                                    <div className="pagination-pages">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span className="dot">...</span>
                                    </div>
                                    <img src={RightArrow} alt="Next" />
                                </div>
                            </div>
                        </div>

                        <div className="order-right">
                            <div className="order-cart">
                                <button className="order-cart-title">
                                    <h3>Order list</h3>
                                </button>
                                <div className="order-cart-items">
                                    <div className="order-item">
                                        <div className="order-item-info">
                                            <p className="order-item-name">Spaghetti</p>
                                        </div>
                                        <div className="order-item-action">
                                            <div className="order-item-controls">
                                                <button className="btn-minus">-</button>
                                                <span>2</span>
                                                <button className="btn-plus">+</button>
                                            </div>
                                            <div className="order-item-price">
                                                <p>$24.1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-item">
                                        <div className="order-item-info">
                                            <p className="order-item-name">Pizza</p>
                                        </div>
                                        <div className="order-item-action">
                                            <div className="order-item-controls">
                                                <button className="btn-minus">-</button>
                                                <span>2</span>
                                                <button className="btn-plus">+</button>
                                            </div>
                                            <div className="order-item-price">
                                                <p>$35.7</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-item">
                                        <div className="order-item-info">
                                            <p className="order-item-name">Caesar salad</p>
                                        </div>
                                        <div className="order-item-action">
                                            <div className="order-item-controls">
                                                <button className="btn-minus">-</button>
                                                <span>2</span>
                                                <button className="btn-plus">+</button>
                                            </div>
                                            <div className="order-item-price">
                                                <p>$18.5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-voucher">
                                    <p>Voucher Code</p>
                                    <div className="voucher-input">
                                        <div className="freeteat">
                                            <span>FREETEAT</span>
                                        </div>
                                        <button className="btn-add">+</button>
                                    </div>
                                </div>
                                <div className="order-totals">
                                    <div className="total-row">
                                        <span className="total-label">Subtotal</span>
                                        <span className="total-value">$78.3</span>
                                    </div>
                                    <div className="total-row">
                                        <span className="total-label">Tax fee</span>
                                        <span className="total-value">$3.5</span>
                                    </div>
                                    <div className="total-row">
                                        <span className="total-label">Voucher</span>
                                        <span className="total-value">$5.0</span>
                                    </div>
                                    <div className="total-row total-final">
                                        <span className="total-label">Total</span>
                                        <span className="total-value">$76.8</span>
                                    </div>
                                </div>
                                <a href="/checkout">
                                    <button className="btn-checkout">Checkout</button>
                                </a>
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

export default Order;
