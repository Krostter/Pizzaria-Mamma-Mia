import { useState } from "react";
import { pizzaCart } from "../pizzas";


const Cart = () => {

    const [cart, setCart] = useState(pizzaCart);

    const increaseCount = (id) => {
        setCart(cart.map((item) => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));

    };


    const decreaseCount = (id) => {

    setCart(cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0)

    );

  };


    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);


    return (


    <div className="cart-container">
      <h2>Carrito de compras</h2>

      <div className="cart-items">
        {cart.map((item) => (

          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} width="100" />
            <p>{item.name}</p>
            <p>Precio: ${item.price.toLocaleString()}</p>


            <div className="counter-buttons">

              <button onClick={() => decreaseCount(item.id)}>-</button>
              <span>{item.count}</span>
              <button onClick={() => increaseCount(item.id)}>+</button>

            </div>

          </div>

        ))}
        
      </div>


      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="btn-pay">Pagar</button>

    </div>

  );

};

export default Cart;