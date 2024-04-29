import React from 'react'

const ListOfMovies = ({movies}) => {
  return (
    <>
        <ul>
            {movies.map(movie =>{
                return (<li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
                </li>)
            })}
        </ul>
    </>
  )
}

const NoMovies = () => {
    return (<p>No se encontraron reusltados para esta búsqueda</p>)
}

export const Movies = ({movies}) =>{
    const hasMovies = movies?.length > 0    
    return (hasMovies?<ListOfMovies movies={movies}/>:<NoMovies/>)

}
