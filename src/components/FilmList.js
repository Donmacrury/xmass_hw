import Film from './Film';

const FilmList = ({ ghibliFilms }) => {

   const filmNodes = ghibliFilms.map((currentFilm, index) =>{

    return (
        <Film film={currentFilm} key={index}/>
    )
   });

    return (
        <>
          {filmNodes}
        </>
    )
};

export default FilmList;