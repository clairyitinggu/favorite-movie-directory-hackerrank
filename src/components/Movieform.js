import React, { useState } from "react";

function Movieform(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [isDurationError, setIsDurationError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsDurationError(false);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    setIsDurationError(false);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setIsDurationError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if duration is in valid format
    const durationRegex = /^(\d+(\.\d+)?)(h|m)$/;
    const isDurationValid = durationRegex.test(duration);
    if (!isDurationValid) {
      setIsDurationError(true);
      return;
    }

    // Convert duration from minutes to hours if needed
    let durationInHours = parseFloat(duration);
    if (duration.includes("m")) {
      durationInHours = durationInHours / 60;
    }

    // Add new movie to the list
    const newMovie = {
      name: name,
      rating: rating,
      duration: durationInHours.toFixed(1) + " Hrs",
    };
    props.onAddMovie(newMovie);

    // Clear input fields
    setName("");
    setRating("");
    setDuration("");
  };

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>
              Movie Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              value={name}
              onChange={handleNameChange}
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>
              Ratings
            </label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              value={rating}
              onChange={handleRatingChange}
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>
              Duration
            </label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              value={duration}
              onChange={handleDurationChange}
              data-testid='durationInput'
            />
          </div>
          {isDurationError && (
            <div className='alert error mb-30' data-testid='alert'>
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className='layout-row justify-content-end'>
            <button type='submit' className='mx-0' data-testid='addButton'>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
