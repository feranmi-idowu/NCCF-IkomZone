import React from "react";

function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery">
          <img
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
            alt="Gallery 1"
          />
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
            alt="Gallery 2"
          />
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Gallery 3"
          />
          <img
            src="https://images.unsplash.com/photo-1468070454955-c5b6932bd08d"
            alt="Gallery 4"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;