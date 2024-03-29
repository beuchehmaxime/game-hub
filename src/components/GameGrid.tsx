
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../customhooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';



function GameGrid() {
    const {games,errors,isLoading} = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6,7,8];

    return (
        <>
            {errors && <Text>{ errors }</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 4,
            }} spacing={10} padding='10px'>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
                {games.map(game => 
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>
  )
}

export default GameGrid
