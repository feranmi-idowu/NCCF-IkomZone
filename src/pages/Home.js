import React from "react";
import IMG_7683 from "../images/IMG_7683.jpg";

function Hero() {
    return (
        <section className="hero">
            <div>
                <img src={IMG_7683} alt="worship"/>
            </div>
            <div className="content">
                <h1>Raising a Godly Generation</h1>
                <p>NCCF Ikom Zone exist to build corps member in Christ and impact our host community</p>
                <a href="#events">Join Our Events</a>
            </div>
        </section>
    );
}


export default Hero;