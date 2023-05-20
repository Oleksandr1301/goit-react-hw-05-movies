import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getQuery } from '../components/fetchFilms';
import MoviesList from '../components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalMovie, setTotalMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;

    setMovie(null);
    setTotalMovie(null);
    setLoading(true);

    getQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalMovie(data.total_results);
        setLoading(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Enter movie name"
        />

        <button type="submit">Search</button>
      </form>

      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {movies && <MoviesList movies={movies} />}

      {totalMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default Movies;