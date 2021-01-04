const FilmFilter = ({onUserInput}) => {
    const handleFilterInput = (event) => {
        const userInput = event.target.value;
        onUserInput(userInput)
    };

    return (
        <>
          <span>pick a film!: </span>
          <input
            type="text"
            placeholder="what will it be?"
            onChange={handleFilterInput}
          />
        </>
    )
};

export default FilmFilter;