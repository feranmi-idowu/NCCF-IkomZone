import React from "react";

function Events() {
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

export default Events;