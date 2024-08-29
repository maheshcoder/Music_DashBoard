    // Card.js

    import React from 'react';
    import './Card.css';

    const Card = () => {
    return (
      
          <div className="card-container">
              <h1 className="card-header">Card page</h1>
              {/* Add more content here */}
          
      <div className="card-container">
        <div className="card-slider">
          <div className="card">
            <div className="card-face front">
            <img
                src="https://eddietrunk.com/wp-content/uploads/2019/09/RockMusic600.jpg" // Replace this with your image URL
                alt="Rock"
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
              />        
                </div>
            <div className="card-face back">
              <p>The Rock and Roll definition can be described as a type of popular dance music that originated in the 1950s. Rock and Roll is characterized by a heavy beat and uncomplicated melodies. It first emerged as a fusion of rhythm and blues with country music.
  </p>
            </div>
          </div>

          <div className="card">
            <div className="card-face front">
            <img
                src="https://static1.squarespace.com/static/560c8030e4b05e528fb7ae6f/560c83f2e4b09516c77ba3b2/560c83f3e4b09516c77ba4bc/1443660787822/the-history-of-pop-music.jpg?format=original" // Replace this with your image URL
                alt="PoP"
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
              />          
                </div>
            <div className="card-face back">
              <p>Pop music is an abbreviation of the word 'popular. ' It's a contemporary form of music that appeals to a very wide audience. It often includes a danceable tempo, easy to remember lyrics, and simple notation. Pop music is commonly found on mainstream radio stations and across a range of countries and cultures.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-face front">
            <img
                src="https://static.vecteezy.com/system/resources/previews/026/382/284/non_2x/hip-hop-singer-or-rapper-singing-illustration-hip-hop-rap-artist-wearubg-a-hat-and-holding-a-mic-black-and-white-image-vector.jpg" // Replace this with your image URL
                alt="Hip-Hop"
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
              />            </div>
            <div className="card-face back">
              <p>The term hip hop music is sometimes used synonymously with the term rap music, though rapping is not a required component of hip hop music; the genre may also incorporate other elements of the culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks.
  </p>
            </div>
          </div>

          <div className="card">
            <div className="card-face front">
            <img
                src="https://i.pinimg.com/564x/b1/83/66/b1836634693a0f4da1a7c7b0a41fd276.jpg" // Replace this with your image URL
                alt="Classical"
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
              />            </div>
            <div className="card-face back">
              <p>The Oxford Dictionary defines 'classical music' as “music written in a Western musical tradition, usually using an established form (for example a symphony). Classical music is generally considered to be serious and to have a lasting value.”</p>
            </div>
          </div>
        </div>
      </div>
      
          </div>
    );
  };

  export default Card;
