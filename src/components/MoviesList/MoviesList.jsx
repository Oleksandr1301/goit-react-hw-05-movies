import { useLocation } from 'react-router-dom';
import {
  Title,
  MovieList,
  MovieItem,
  LinkItem,
  ImageItem,
  MovieItemTitle,
} from './MoviesList.syled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <Title>Search result</Title>
      <MovieList>
        {movies.map(movie => {
          let posterPath;
          if (movie.poster_path) {
            posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
          } else {
            posterPath =
              'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
          }
          return (
            <MovieItem key={movie.id}>
              <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
                <ImageItem src={posterPath} width="400" alt={movie.title} />
                <MovieItemTitle>{movie.title}</MovieItemTitle>
              </LinkItem>
            </MovieItem>
          );
        })}
      </MovieList>
    </>
  );
};

export default MoviesList;
