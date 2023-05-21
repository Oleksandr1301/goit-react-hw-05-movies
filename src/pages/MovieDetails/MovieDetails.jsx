import { Suspense, useRef } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { getDetails } from '../../components/fetchFilms';
import {
  FilmDetails,
  ButtonGoBack,
  GoBack,
  Details,
  Information,
  InformationList,
  InformationItem,
  Cast,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  function formatAsPercent(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num / 10);
  }

  return (
    <>
      <FilmDetails>
        <GoBack>
          <Link to={backLink.current}>
            <ButtonGoBack>← Go back</ButtonGoBack>
          </Link>
          <img
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w300/${movie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
            }
            alt={`${movie.title}`}
          />
        </GoBack>
        <Details>
          <div>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {formatAsPercent(movie.vote_average)}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(' / ')}</p>
          </div>

          <Information>
            <h2>Additional information</h2>
            <InformationList>
              <InformationItem>
                <Cast to={'cast'}>Cast</Cast>
              </InformationItem>
              <InformationItem>
                <Cast to={'reviews'}>Reviews</Cast>
              </InformationItem>
            </InformationList>
          </Information>
        </Details>
      </FilmDetails>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
