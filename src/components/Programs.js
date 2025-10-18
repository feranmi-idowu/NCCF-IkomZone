import React from "react";

/* function Programs() {
  return (
    <section id="programs">
      <div className="container">
        <h2>Our Programs</h2>
        <div className="cards">
          <div className="card">
            <h3>Sunday Glorious Service</h3>
            <p>Join us every Sunday for worship and word ministration.</p>
          </div>
          <div className="card">
            <h3>Bible Study</h3>
            <p>Weekly in-depth study of God’s Word for spiritual growth.</p>
          </div>
          <div className="card">
            <h3>Prayer Meetings</h3>
            <p>Intense moments of prayer, intercession, and encounters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs; */


import Card from "./Card";

function Programs() {
  const programs = [
    {
      title: "Sunday Glorious Service",
      description: "Join us every Sunday for worship and word ministration.",
    },
    {
      title: "Bible Study",
      description: "Weekly in-depth study of God’s Word for spiritual growth.",
    },
    {
      title: "Prayer Meetings",
      description: "Intense moments of prayer, intercession, and encounters.",
    },
  ];

  return (
    <section id="programs">
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
    </section>
  );
}

export default Programs;