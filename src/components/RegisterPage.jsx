import { useState } from "react";


function RegisterPage() {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const ValidarDatos = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios (no pueden estar vacíos)."); 
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            alert("El password y la confirmación deben ser iguales.");
            return;
        }

        alert("Registro exitoso");

    };
    
        return (
            <form onSubmit={ValidarDatos} className="register-form">
                <h2>Register</h2>
                <p>Email</p>

                <input
                    type="email"
                    placeholder="Escribe tu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <p>Password</p>

            <input
                type="password"
                placeholder="Escribe tu Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Enviar Registro</button> {/* */}

        </form>

);

}

export default RegisterPage;
