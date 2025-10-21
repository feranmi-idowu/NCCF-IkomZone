import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
//import './App.css';
import './index.css';
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Sermons from "./pages/Sermon";
import Give from "./pages/Give";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contacts";
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
