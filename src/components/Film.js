const Film = ({film}) => {

    return(
        <div>
            <h4>{film.title}</h4>
            <p>Description: {film.description}</p>
            <p>Date: {film.release_date}</p>
            <p>Score: {film.rt_score}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            {/* Find more about it here: {film.link} */}
        </div>
    )
}

export default Film;