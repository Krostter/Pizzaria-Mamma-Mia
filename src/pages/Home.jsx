import {useState, useEffect} from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { fetchPizzas } from "../services/pizzasServices";   


const Home = () => {

    const [pizzas, setPizzas] = useState([]);


    useEffect(() => {

        const loadPizzas = async () => {
            const data = await fetchPizzas();
            setPizzas(data);
        };


        loadPizzas();

    }, 
    
    []);


    return (

        <div>
        <Header />
            <div className="pizza-list">
                {pizzas.map((pizza) => (
                    <CardPizza
                    key={pizza.id}
                    id={pizza.id}
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