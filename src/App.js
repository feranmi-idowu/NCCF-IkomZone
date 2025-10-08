import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
//import './App.css';
import './index.css';
import About from "./components/About";
import Programs from "./components/Programs";
import Events from "./components/Events";
import Sermons from "./components/Sermon";
import Give from "./components/Give";
import Gallery from "./components/Gallery";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Events />
      <Sermons />
      <Give />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
