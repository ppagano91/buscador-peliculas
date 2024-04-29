const API_KEY = 'c82f0a08'
export const searchMovies = async ({search}) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
            tipo: movie.Type
          }))
    }
    catch (e){
        throw new Error('Error en la búsqueda de películas')
    }
}