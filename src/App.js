import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Products />
      <Contact />
    </div>
  );
}
export default App;

