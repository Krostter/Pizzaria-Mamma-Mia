import {useState, useEffect} from "react";
import Header from "./components/Header";
import CardPizza from "./components/CardPizza";


const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
    };

    useEffect(() => {
        getPizzas();
    }, 
    
    []);


    return (
        <div>
        <Header />
            <div className="pizza-list">
                {pizzas.map((pizza) => (
                    <CardPizza
                    key={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                    />
                ))}    
            </div>
        </div>
    );
};

export default Home;