import { getTrending } from '../../components/fetchFilms';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HomeList,
  HomeItem,
  LinkItem,
  Title,
  ImageItem,
  MovieItemTitle,
} from './Home.styled';

const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <HomeList>
        {trendingMovies.map(movie => {
          let posterPath;
          if (movie.poster_path) {
            posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
          } else {
            posterPath =
              'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
          }
          return (
            <HomeItem key={movie.id}>
              <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
                <ImageItem src={posterPath} width="400" alt={movie.title} />
                <MovieItemTitle>{movie.title}</MovieItemTitle>
              </LinkItem>
            </HomeItem>
          );
        })}
      </HomeList>
    </>
  );
};

export default useTrending;
