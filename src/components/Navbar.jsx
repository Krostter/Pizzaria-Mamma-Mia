import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from "../context/UserContext";


const Navbar = () => {
    const { cart } = useContext(CartContext);
    const total = cart.reduce((acumulador, pizza) => acumulador + (pizza.price * pizza.count), 0);
    const { token, logout } = useContext(UserContext);

    return (
        <nav className="navbar">
        <h1>Pizzería Mamma Mia!</h1>
        <Link to="/">🍕 Home</Link>

        {token ? (
            <>
            <Link to="/profile">🔓 Profile</Link>
            <button onClick={logout} className="logout-btn">🔒 Logout</button>
            </>
        ) : (
            <>
            <Link to="/login">🔐 Login</Link>
            <Link to="/register">🔐 Register</Link>
            </>
        )}

        <Link to="/cart" className="nav-total">🛒 Total: ${total.toLocaleString()}</Link>
        </nav>
    );
};


export default Navbar;