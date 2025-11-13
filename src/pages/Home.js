import React from "react";
import IMG_7683 from "../images/IMG_7683.jpg";
import '../home.css'

function Home() {
    return (
        <section className="hero">
            <div>
                <img src={IMG_7683} alt="worship"/>
            </div>
            <div className="cardHome">
              <div className="content">
                  <h1>Raising a Godly Generation</h1>
                  <p><b>NCCF Ikom Zone exist to build corps member in Christ and impact our host community</b></p>
                  <a href="#events">Join Our Events</a>
              </div>
            </div>
        </section>
    );
}


export default Home;