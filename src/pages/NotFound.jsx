import { Link } from "react-router-dom";

const NotFound = () => {

  return (

    <div className="text-center">
      <h2>Oops! 404 - Página no encontrada 🍕😭</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
    
  );

};


export default NotFound;