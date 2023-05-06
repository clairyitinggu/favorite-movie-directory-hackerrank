function MovieList({ movies, noResult }) {
  if (!movies || movies.length === 0) {
    return (
      <div className='text-center' data-testid='noResult'>
        <h3>{noResult}</h3>
      </div>
    );
  }

  return (
    <ul className='styled w-100 pl-0' data-testid='moviesList'>
      {movies.map((movie) => (
        <li key={movie.id} className='slide-up-fade-in py-10'>
          <div className='flex-1'>
            <div className='font-weight-bold text--medium'>{movie.name}</div>
            <div>
              <span className='font-weight-bold'>Rating:</span>{" "}
              <span>{movie.rating}/100</span>
            </div>
            <div>
              <span className='font-weight-bold'>Duration:</span>{" "}
              <span>
                {movie.duration.includes("m")
                  ? `${Number(movie.duration.slice(0, -1)) / 60} Hrs`
                  : `${movie.duration} Hrs`}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
