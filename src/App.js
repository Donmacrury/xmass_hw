import './App.css';
import { useState, useEffect} from 'react';
import FilmList from './components/FilmList';
import FilmFilter from './components/FilmFilter';


function App() {
  const [ghibliFilms, setGhibliFilm] = useState([]);
  const [filteredFilms, setFilteredFilm] = useState([]);

  useEffect(() => {
      getFilm();
  }, []);

  const getFilm = () => {
      const url = `https://ghibliapi.herokuapp.com/films`
      fetch(url)
        .then(res => res.json())
        .then(data => setGhibliFilm(data))
  }

  const handleUserFilter = (userInput) => {
    const pickedFilm = ghibliFilms.filter((currentFilm) => {
      return currentFilm.title.toUpperCase().includes(userInput.toUpperCase());
    });
    setFilteredFilm(pickedFilm);
  };

  return (
    <main>
      <h1>These are the films in the Ghibli collection: </h1>
      <FilmFilter onUserInput={handleUserFilter}/>
      <FilmList ghibliFilms = {filteredFilms}/>
    </main>
  )
}

export default App;
