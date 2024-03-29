import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game{
    id: number;
    name: string;
}

interface FetchGamesResponse{
    count: number;
    results: Game[];
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setError] = useState("");
    
    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(error => {
                setError(error.message);
        })
    }, []);
    return (
        <>
            {errors && <Text>{ errors }</Text>}
            <ul>
                {games.map(game => 
                    <li key={game.id}>{ game.id } { game.name }</li>    
                )}
            </ul>
        </>
  )
}

export default GameGrid