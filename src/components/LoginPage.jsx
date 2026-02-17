import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const ValidarDatos = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Todos los campos son obligatorios (no pueden estar vacíos).");
            return;
        }   

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        alert("Login exitoso");
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
