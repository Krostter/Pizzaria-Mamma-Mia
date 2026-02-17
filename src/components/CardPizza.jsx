const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card-pizza">
            <img src={img} alt={name} className="pizza-img" />
            <div className="card-content">
                <h3>Pizza {name}</h3>
                
                <div className="card-ingredients">
                    <p className="ingredients-title">Ingredientes:</p>
                    <p className="ingredients-text">🍕 {ingredients.join(", ")}</p>
                </div>

                <h4 className="price">Precio: ${price.toLocaleString()}</h4>
                
                <div className="card-buttons">
                    <button className="btn-view">Ver más 👀</button>
                    <button className="btn-add">Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;