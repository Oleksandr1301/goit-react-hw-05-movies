import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h1>Tranding Today</h1>
      <ul>
        
        {movies.map(movie => {
          let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
          }
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img src={posterPath} width="400" alt={movie.title} />
              {movie.title}
            </Link>
          </li>
          )
          
        })}
      </ul>
    </>
  );
};

export default MoviesList;