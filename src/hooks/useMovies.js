import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export const useMovies = ({search, sort}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = useCallback(
        async ({ search }) => {
            if (search === previousSearch.current) return

            try{
                setLoading(true)
                setError(null)
                previousSearch.current = search
                const newMovies = await searchMovies({search})
                setMovies(newMovies)
            }
            catch (e){
                setError(e.message)
            }
            finally{
                setLoading(false)
            }
        }, [search])

    /*const getSortedMovies = () =>{        
        const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
        return sortedMovies
    }*/

    // useMemo vale la pena cuando hay un problema de rendimiento. Ejemplo +1000 películas
    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    },[sort, movies])
    return {movies: sortedMovies, loading,  getMovies}
}