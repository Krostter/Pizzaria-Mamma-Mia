import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";


  const Profile = () => {


      // Sacamos las funciones de tu contexto
      const { getProfile, logout } = useContext(UserContext);
      

      // Creamos un espacio para guardar el email que nos devuelva el servidor
      const [email, setEmail] = useState("");


      //  useEffect se ejecuta automáticamente apenas entras a esta página
      useEffect(() => {

          const cargarPerfil = async () => {

              const data = await getProfile(); // Le mostramos la pulsera al guardia
              if (data && data.email) {

                  setEmail(data.email); // Guardamos tu email real para mostrarlo
              }

          };

          cargarPerfil();


      }, []);


      return (
          <div>
              <h2>Perfil del Usuario</h2>
              
              {/* Mostramos el email real en vez del texto fijo */}
              <p>Email: {email}</p>
              
              {/* Botón para cerrar sesión */}
              <button onClick={logout}>Cerrar sesión</button>
          </div>

      );

}

export default Profile;