import responseMovies from '../mocks/results.json'

export const useMovies = () => {
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      tipo: movie.Type
    }))
  
    return {movies:mappedMovies}
  }