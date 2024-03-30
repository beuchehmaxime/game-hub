
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../customhooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../customhooks/useGenres';

interface Props{
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

function GameGrid({selectedGenre, selectedPlatform}:Props) {
    const {data,errors,isLoading} = useGames(selectedGenre, selectedPlatform);

    const skeletons = [1, 2, 3, 4, 5, 6,7,8];

    return (
        <>
            {errors && <Text>{ errors }</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 4,
            }} spacing={10} padding='10px'>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton  />
                    </GameCardContainer>)}
                {data.map(game => 
                    <GameCardContainer key={game.id}>
                        <GameCard  game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
  )
}

export default GameGrid
