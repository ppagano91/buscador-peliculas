
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState("")
  const [error, setError] = useState(null)
  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // usando useRef
    // const value = inputRef.current.value

    // Obtener un input de un form a partir de su atributo name
    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')

    // Para leer todos los inputs de un Form    
    // const {query} = Object.fromEntries(new window.FormData(event.target))
    // setQuery(query)
  }

  const handleChange = (event) =>{
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query === '') {
      setError('Debe ingresar un texto para iniciar la búsqueda')      
      return
    }

    if (query.match(/^\d+$/)){
      setError('Debe ingresar un contenido alfanumérico')
      return
    }

    if (query.length <= 3){
      setError('La búsuqeda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  },[query])


    return (
    <div className='page'>
    <header>
      <h1 className=''>Buscador de Películas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          value={query}
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
