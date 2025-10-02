import React from "react";

function Sermons() {
  return (
    <section id="sermons">
      <div>
        <div className="containerSermon">
          <h2>Sermons</h2>
          <p>Listen to inspiring messages from our services.</p>
          <div className="containerAudio">
            <h4>Sermon's Title</h4>
            <audio controls>
                <source
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    type="audio/mpeg"
                />
                Your browser does not support the audio element.
            </audio>
          </div>
          <div className="containerAudio">
            <h4>Sermon's Title</h4>
            <audio controls>
                <source
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    type="audio/mpeg"
                />
                Your browser does not support the audio element.
            </audio>
          </div>
          <div className="containerAudio">
            <h4>Sermon's Title</h4>
            <audio controls>
                <source
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    type="audio/mpeg"
                />
                Your browser does not support the audio element.
            </audio>
          </div>
          <div className="containerAudio">
            <h4>Sermon's Title</h4>
            <audio controls>
                <source
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    type="audio/mpeg"
                />
                Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sermons;