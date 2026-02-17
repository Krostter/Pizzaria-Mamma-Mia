import Header from "./components/Header";
import CardPizza from "./components/CardPizza";

const Home = () => {
    return (
        <div>
        <Header />
            <div className="pizza-list">
                <CardPizza
                name="Napolitana"
                price={5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                img="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg"
                />
                <CardPizza
                name="Española"
                price={6950}
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                img="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg"
                />
                <CardPizza
                name="Pepperoni"
                price={6950}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img="https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg"
                />
            </div>
        </div>
    );
};

export default Home;