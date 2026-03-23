// src/services/pizzasServices.js


export const fetchPizzas = async () => {

  try {

    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();

    return data;

  } catch (error) {

    console.error("Error obteniendo las pizzas:", error)
    
    return [];

  }

};

