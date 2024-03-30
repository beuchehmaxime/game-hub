import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../customhooks/useData"
import useGenres, { Genre } from "../customhooks/useGenres"
import getCroppedImageURl from "../services/image-url";


function GenreList() {
  //const {genres} = useGenres();
  const {data} = useGenres();
  return (
    <List>
      {data.map(genre =>
        <ListItem key={genre.id} paddingY={'10px'} >
        <HStack>
          <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageURl(genre.image_background)} />
          <Text fontSize='lg'>{ genre.name }</Text>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList
