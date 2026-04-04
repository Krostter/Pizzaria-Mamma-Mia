import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";


const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Extraemos la función real del backend
    const { login } = useContext(UserContext);

    // Agregamos "async" porque la petición al servidor toma tiempo
    const ValidarDatos = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Todos los campos son obligatorios (no pueden estar vacíos).");
            return;
        }   

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Ejecutamos el inicio de sesión real
        await login(email, password);

    }; 

    return (
        <div className="login-container">

            <h2>Login</h2>

            <form onSubmit={ValidarDatos} className="formulario-login">

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Escribe tu Email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Escribe tu Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />                 
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>    
    );
}

export default LoginPage;
