import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/give" element={<Give />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
      
  );
}

export default App;
