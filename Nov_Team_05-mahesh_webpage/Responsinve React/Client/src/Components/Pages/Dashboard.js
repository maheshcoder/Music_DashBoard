import React, { useState, useRef } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const songs = [
    { title: 'Steal the show', src: 'https://paglasongs.com/files/download/id/16245', image: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Steal_the_Show_single.jpg' },
    { title: 'sun flower', src: 'https://indiamp3.net/files/download/id/3294', image: 'https://i.ytimg.com/vi/XhjcdWjGa7Y/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHOBYAC0AWKAgwIABABGBwgMih_MA8=&rs=AOn4CLCModAQujjx4uhrFRE97aXGWSMCbQ' },
    { title: 'May be My soul', src: 'https://paglasongs.com/files/download/id/8842', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGK9HRQC0cxxjxtJcarmzmvBlE4Kh2cIH32dEcUxlBaS8rDw78shK3ThK3cTS19JLcbg&usqp=CAU' },
    // Add more songs as needed
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef();

  const playSong = (index) => {
    setCurrentSongIndex(index);
  };

  const handleEnded = () => {
    // Automatically switch to the next song when the current song ends
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <div className="music-player-container">
      <div className="player-section">
        <h1 className="dashboard-header">Music Player</h1>
        {songs[currentSongIndex].image && (
          <img
            src={songs[currentSongIndex].image}
            alt="Album Cover"
            className="album-cover"
            width="200" // Set the fixed width
            height="200" // Set the fixed height
          />
        )}
       <audio
  controls
  src={songs[currentSongIndex].src}
  ref={audioRef}
  onEnded={handleEnded}
  style={{
    width: "100%",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "20px",
  }}
>
  Your browser does not support the audio element.
</audio>

        <ul className="playlist">
          {songs.map((song, index) => (
            <li key={index} onClick={() => playSong(index)} className={index === currentSongIndex ? 'active' : ''}>
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
