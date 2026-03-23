import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CardPizza = ({id, name, price, ingredients, img }) => {

    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        const pizzaIndex = cart.findIndex((p) => p.name === name);

        if (pizzaIndex >= 0) {
            const newCart = [...cart];
            newCart[pizzaIndex].count += 1;
            setCart(newCart);

        } else {
            const newPizza = { id, name, price, img, count: 1 };
            setCart([...cart, newPizza]);   
        }
    };


    return (
        <div className="card-pizza">

            <img src={img} alt={name} className="pizza-img" />

            <div className="card-content">
                <h3>Pizza {name}</h3>
                
                <div className="card-ingredients">
                    <p className="ingredients-title">🍕Ingredientes:</p>

                    <ul className="ingredients-text">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                </div>


                <h4 className="price">Precio: ${price.toLocaleString()}</h4>


                <div className="card-buttons">
                    <button className="btn-view">Ver más 👀</button>
                    <button className="btn-add" onClick={addToCart}>Añadir 🛒</button>
                </div>
            </div>
        </div>                   
    );

};

export default CardPizza;