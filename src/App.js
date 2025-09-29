import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
//import './App.css';
import './index.css';
import About from "./components/About";
import Programs from "./components/Programs";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Events />
    </div>
  );
}

export default App;
