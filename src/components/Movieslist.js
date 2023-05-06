import React from "react";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return null; // Render nothing if there are no movies to display
  }

  return (
    <ul className='styled w-100 pl-0' data-testid='moviesList'>
      {movies.map((movie) => (
        <li key={movie.id} className='slide-up-fade-in py-10'>
          <div className='flex-1'>
            <div className='font-weight-bold text--medium'>{movie.name}</div>
            <div>
              <span className='font-weight-bold'>Rating:</span>{" "}
              <span>{movie.ratings}</span>
            </div>
            <div>
              <span className='font-weight-bold'>Duration:</span>{" "}
              <span>{movie.duration}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
