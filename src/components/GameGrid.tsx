
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../customhooks/useGames';
import GameCard from './GameCard';



function GameGrid() {
    const {games,errors } = useGames();
   
    return (
        <>
            {errors && <Text>{ errors }</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 4,
            }} spacing={10} padding='10px'>
                {games.map(game => 
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>
  )
}

export default GameGrid
