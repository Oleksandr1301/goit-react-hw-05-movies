import { getTrending } from '../components/fetchFilms';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
          }
          return (
            <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img src={posterPath} width="400" alt={movie.title} />
              {movie.title}
            </NavLink>
          </li>
          )
          
        })}
      </ul>
    </>
  );
};

export default useTrending;