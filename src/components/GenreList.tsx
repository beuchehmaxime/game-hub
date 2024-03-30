import { HStack, Image, List, ListItem, Skeleton, Text } from "@chakra-ui/react";
import useData from "../customhooks/useData"
import useGenres, { Genre } from "../customhooks/useGenres"
import getCroppedImageURl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";


function GenreList() {
  //const {genres} = useGenres();
  const listskeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const {data, isLoading} = useGenres();
  return (
    <>
    { isLoading && listskeleton.map(Skeleton => <GenreSkeleton key={Skeleton} />)}
    <List>
      {data.map(genre =>
        <ListItem key={genre.id} paddingY={'10px'} >
        <HStack>
          <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageURl(genre.image_background)} />
          <Text fontSize='lg'>{ genre.name }</Text>
        </HStack>
      </ListItem>)}
    </List>
    </>
  )
}

export default GenreList
