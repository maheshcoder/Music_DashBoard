import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const genres = ['1900-2000', '2000-2010', '2010-2015', '2015-2020'];
  const radioOptions = ['Vibe', 'Focus'];

  const handleCheckboxChange = (genre) => {
    const updatedGenres = [...checkedGenres];
    if (updatedGenres.includes(genre)) {
      updatedGenres.splice(updatedGenres.indexOf(genre), 1);
    } else {
      updatedGenres.push(genre);
    }
    setCheckedGenres(updatedGenres);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with form data here
    console.log({
      selectedDate,
      selectedDay,
      selectedGenre,
      checkedGenres,
      selectedRadio,
      inputText1,
      inputText2,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </label>
        <br />

        <label>
          Day:
          <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            <option value="">Select a day</option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Genre:
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">Select a genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Year:
          <div>
            {genres.map((genre) => (
              <label key={genre} className="checkbox-label">
                <input
                  type="checkbox"
                  value={genre}
                  checked={checkedGenres.includes(genre)}
                  onChange={() => handleCheckboxChange(genre)}
                />
                {genre}
              </label>
            ))}
          </div>
        </label>
        <br />

        <label>
          Radio Options:
          <div>
            {radioOptions.map((option) => (
              <label key={option} className="radio-label">
                <input
                  type="radio"
                  value={option}
                  checked={selectedRadio === option}
                  onChange={() => setSelectedRadio(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </label>
        <br />

        <label>
          Feed back :
          <input type="text" value={inputText1} onChange={(e) => setInputText1(e.target.value)} />
        </label>
        <br />

        <label>
          comment   :
          <input type="text" value={inputText2} onChange={(e) => setInputText2(e.target.value)} />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
   
