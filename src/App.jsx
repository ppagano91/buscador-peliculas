
import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
  }



    return (
    <div className='page'>
    <header>
      <h1 className=''>Buscador de Películas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input name='query' ref={inputRef} type="text" placeholder='Avengers, Star Wars, Rey León...' />
        <button type="submit">Buscar</button>
      </form>
    </header>
    <main>
      <Movies movies={movies}/>
    </main>
    </div>
  )
}

export default App
