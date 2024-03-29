import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../customhooks/useGames";

interface Props{
    game: Game;
}
function GameCard({game } : Props) {
    return (
        <Card borderRadius={10} overflow='hidden' boxShadow='dark-lg'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='1xl'>
                    {game.name}
                </Heading>
            </CardBody>
      </Card>
  )
}

export default GameCard
