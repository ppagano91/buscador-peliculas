import { useState } from 'react'
import results from '../mocks/results.json'
import noResults from '../mocks/no-results.json'

export const useMovies = ({search}) => {
    const [responseMovies, setResponseMovies] = useState([])
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      tipo: movie.Type
    }))

    const getMovies = () => {
        if (search){
            setResponseMovies(results)
        }
        else{
            setResponseMovies(noResults)
        }

    }
  
    return {movies:mappedMovies, getMovies}
  }