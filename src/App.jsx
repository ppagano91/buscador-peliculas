
import './App.css'
import { useEffect, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch (){
  const [search, setSearch] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('Debe ingresar un texto para iniciar la búsqueda')      
      return
    }

    if (search.match(/^\d+$/)){
      setError('Debe ingresar un contenido alfanumérico')
      return
    }

    if (search.length <= 3){
      setError('La búsuqeda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  },[search])

  return {search, setSearch, error}
}

function App() {
  const {movies} = useMovies()
  const {search, setSearch, error} = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) =>{
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  


    return (
    <div className='page'>
    <header>
      <h1 className=''>Buscador de Películas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          value={search}
          name='query'
          type="text"
          style={{border: '1px solid transparent', borderColor: error ? 'red' : 'green'}}
          // ref={inputRef}
          placeholder='Avengers, Star Wars, Rey León...' />
        <button type="submit">Buscar</button>
      </form>
      {error && <p style={{color:'red'}} className='error'>{error}</p>}
    </header>
    <main>
      <Movies movies={movies}/>
    </main>
    </div>
  )
}

export default App
