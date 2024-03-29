import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../customhooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
                <PlatformIconList platforms={ game.parent_platforms.map(p => p.platform) } />
            </CardBody>
      </Card>
  )
}

export default GameCard
