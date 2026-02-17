const Navbar = () => {
    const total = 25000;
    const token = true;

    return (
        <nav className="navbar">
        <h1>Pizzería Mamma Mia!</h1>
        <button>🍕 Home</button>

        {token ? (
            <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
            </>
        ) : (
            <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
            </>
        )}

        <button className="nav-total">🛒 Total: ${total.toLocaleString()}</button>
        </nav>
    );
};

export default Navbar;