import useGenres from "../customhooks/useGenres"


function GenreList() {
  const {genres} = useGenres();
  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{ genre.name }</li>)}
    </ul>
  )
}

export default GenreList
