import { Button, Heading, HStack, Image, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import useData from "../customhooks/useData"
import useGenres, { Genre } from "../customhooks/useGenres"
import getCroppedImageURl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}


function GenreList({onSelectGenre,selectedGenre} : Props) {
  //const {genres} = useGenres();
  const listskeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const {data, isLoading} = useGenres();
  return (
    <>
      {isLoading && listskeleton.map(Skeleton => <GenreSkeleton key={Skeleton} />)}
      <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data.map(genre =>
        <ListItem key={genre.id} paddingY={'10px'} >
        <HStack>
            <Image
              objectFit={'cover'}
              boxSize={'32px'} borderRadius={8} src={getCroppedImageURl(genre.image_background)} />
          <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{ genre.name }</Button>
        </HStack>
      </ListItem>)}
    </List>
    </>
  )
}

export default GenreList
