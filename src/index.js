import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  //our array with its objects
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //main function for rendering
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //header function
  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}> Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  //menu function
  const pizzas = pizzaData; //comment and enable pizzas = [] to see message if no pizzas are available
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our menu</h2>

      {numPizzas > 0 ? ( //if there are pizzas in the array, render them (using ternary operator)
        <>
          <p>
            Authentic Itelian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(
              (
                pizza //make a list of pizzas using the map function to render each pizza object in the array as a Pizza component
              ) => (
                <Pizza pizzaObj={pizza} key={pizza.name} /> //pass the pizza object as a prop to the Pizza component and use the name as a key
              )
            )}
          </ul>
        </>
      ) : (
        <p> We're still working on our menu. Please come back later :) </p>
      )}
    </main>
  );
}

function Footer() {
  //footer function
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour; //check if the restaurant is open

  return (
    <footer className="footer">
      {isOpen ? ( //if the restaurant is open, render the Order component (using ternary operator)
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          {" "}
          We're happy to welcome you between {closeHour}:00 and {openHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  //Order function using  closeHour and openHour props to display the opening hours
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online!
      </p>
      <button className="btn"> Order </button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  //Pizza function to render the pizza object passed as a prop
  // if (pizzaObj.soldOut) {
  //   //if the pizza is sold out, render the pizza with the sold-out class
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
  //       <div>
  //         <h3>{pizzaObj.name}</h3>
  //         <p>{pizzaObj.ingredients}</p>
  //         <span>{pizzaObj.price}</span>
  //       </div>
  //     </li>
  //   );
  // }
  //  Better usage of this function is written bellow in our return using ternary operator (much cleaner and smoother code, with less lines of code).
  //  Bellow is more prefered for professional code.

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* if the pizza is not sold out, render the pizza without the sold-out class */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {pizzaObj.soldOut}
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
