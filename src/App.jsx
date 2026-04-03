import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";


const AppRoutes = () => {
    const { token } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/" />} />
            <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};


function App() {
    return (
        <CartProvider>
            <UserProvider>
                <BrowserRouter>
                    <Navbar />
                    <AppRoutes />
                    <Footer/>
                </BrowserRouter>
            </UserProvider>
        </CartProvider>
    );
}


export default App;