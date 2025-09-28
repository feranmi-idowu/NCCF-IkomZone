import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
//import './App.css';
import './index.css';
import About from "./components/About";
import Programs from "./components/Programs";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
    </div>
  );
}

export default App;
