import { useState, useEffect} from "react";


const Pizza = () => {

    const [pizza, setPizza] = useState({});

    const getPizza = async () => {

        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
    }


    useEffect(() => {
        getPizza();
    }, 
    
    []);


    return (

        <div>
            <h1>{pizza.name}</h1>
            <img src={pizza.img} alt={pizza.name} />
            <p>{pizza.desc}</p>
            <p>Precio: ${pizza.price}</p>
            <p>Ingredientes: {pizza.ingredients && pizza.ingredients.join(", ")}</p>
        </div>

    );

}

export default Pizza;