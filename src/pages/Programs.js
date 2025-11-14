import React, { useRef } from "react";
import '../Programs&Events.css'

import Card from "../components/Card";

function Programs() {
  const programs = [
    {
      title: "Sunday Glorious Service",
      description: "Join us every Sunday for worship and word ministration.",
    },
    {
      title: "Bible Study",
      description: "Weekly in-depth study of Gos Word for spiritual growth.",
    },
    {
      title: "Prayer Meetings",
      description: "Intense moments of prayer, intercession, and encounters.",
    },
  ];

 /* const scroll = (direction) => {
    const container = carouselRef.current;
  }; */


  return (
    <section id="programs">
      <div className="page-container">
        <div className="container">
        <h2>Our Programs</h2>
          <div className="cards">
            {programs.map((program, index) => (
              <Card
                key={index}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;