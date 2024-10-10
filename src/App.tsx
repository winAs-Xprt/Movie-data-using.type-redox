import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getMovies } from './redux/userSlice';
import './App.css'; // Import your CSS file

function App() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getMovies()); // Fetch movies when the component mounts
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movie-container">
        {movies?.map((movie: any) => (
          <div className="movie-card" key={movie.imdbID}>
            <img className="movie-poster" src={movie.Images[0]} alt={`${movie.Title} Poster`} />
            <div className="movie-details">
              <h3>{movie.Title}</h3>
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
