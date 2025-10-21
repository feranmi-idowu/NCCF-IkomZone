import React from "react";

import Card from "../components/Card";

function Events() {
  const events = [
    {
      title: "Crossover Night",
      description: "Join us for a night of worship, prayer, and thanksgiving.",
    },
    {
      title: "Rural Rugged Evangelism",
      description: "Taking the gospel to the villages around Ikom.",
    },
    {
      title: "Night of Encounter",
      description: "A powerful praise and prayer vigil with diverse ministrations.",
    },
  ];

  return (
    <section id="programs">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="cards">
          {events.map((program, index) => (
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



/* function Events() {
  return (
    <section id="events">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="cards">
          <div className="card">
            <h3>Crossover Night</h3>
            <p>Join us for a night of worship, prayer, and thanksgiving.</p>
          </div>
          <div className="card">
            <h3>Rural Rugged Evangelism</h3>
            <p>Taking the gospel to the villages around Ikom.</p>
          </div>
          <div className="card">
            <h3>Night of Encounter</h3>
            <p>A powerful praise and prayer vigil with diverse ministrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
*/
export default Events;