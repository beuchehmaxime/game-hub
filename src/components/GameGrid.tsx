
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../customhooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
// import { Genre } from '../customhooks/useGenres';
import { GameQuery } from '../App';

interface Props{
    gameQuery: GameQuery | null;
    // selectedGenre: Genre | null;
    // selectedPlatform: Platform | null;
}

function GameGrid({gameQuery}:Props) {
    // const {data,errors,isLoading} = useGames(selectedGenre, selectedPlatform);
    const {data,errors,isLoading} = useGames(gameQuery!);

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
