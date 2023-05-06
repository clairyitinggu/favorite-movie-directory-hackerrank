import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movies, setMovies] = useState([]); // state to store the list of movies
  const [filteredMovies, setFilteredMovies] = useState([]); // state to store the filtered list of movies

  // function to add a new movie to the list
  const addMovie = (movie) => {
    setMovies([...movies, movie]); // add new movie to the list
    setFilteredMovies([...filteredMovies, movie]); // add new movie to the filtered list
  };

  // function to filter movies by name
  const filterMovies = (searchTerm) => {
    if (!searchTerm) {
      // if search term is empty, show all movies
      setFilteredMovies([...movies]);
    } else {
      // filter movies based on search term
      const filtered = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div>
      <h8k-navbar header={title} />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform onAdd={addMovie} />
        </div>
        <div className='layout-column w-30'>
          <Search onSearch={filterMovies} />
          <Movieslist movies={filteredMovies} />
          {filteredMovies.length === 0 && (
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
