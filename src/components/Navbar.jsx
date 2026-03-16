import {Link} from 'react-router-dom';


const Navbar = () => {
    const total = 25000;
    const token = true;

    return (
        <nav className="navbar">
        <h1>Pizzería Mamma Mia!</h1>
        <Link to="/">🍕 Home</Link>

        {token ? (
            <>
            <Link to="/profile">🔓 Profile</Link>
            <Link to="/login">🔒 Logout</Link>
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