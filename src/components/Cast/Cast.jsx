import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../fetchFilms';
import { CastList, CastItem, CastImg } from './Cast.syled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <>
      <CastList>
        {movieCast.map(actor => (
          <CastItem key={actor.id}>
            <CastImg
              src={
                actor.profile_path
                  ? `https://www.themoviedb.org/t/p/w200/${actor.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={actor.original_name}
            />
            <h3>{actor.name}</h3>
            <p>As: {actor.character}</p>
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
