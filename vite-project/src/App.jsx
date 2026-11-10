import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Page/Homepage/Homepage';
import Menu from './Page/Menu/Menu';
import AboutUs from './Page/AboutUs/AboutUs';
import Reserv from './Page/Reserv/Reserv';
import Contacts from './Page/Contacts/Contacts';
import Order from './Page/Order/Order';
import Checkout from './Page/Checkout/Checkout';
import Shipping from './Page/Shipping/Shipping';
import ConfirmReservation from './Page/ConfirmReservation/ConfirmReservation';
import ReservationCancel from './Page/ReservationCancel/ReservationCancel';
import Login from './Page/Login/Login';
import Signup from './Page/Signup/Signup';
import Success from './Page/ReservationSuccess/ReservationSuccess';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Homepage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/reserv" element={<Reserv />} />
                <Route path="/confirm-reserv" element={<ConfirmReservation />} />
                <Route path="/cancel-reserv" element={<ReservationCancel />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/order" element={<Order />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/ship-address" element={<Shipping />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reserv-success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
