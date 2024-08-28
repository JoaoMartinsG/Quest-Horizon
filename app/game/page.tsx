import React from 'react'
import { rawg } from '../axios';


interface RawgGamesResponse {
  results: { id: number; name: string; background_image: string }[];
}

const GamePage = async () => {

  const { data } = await rawg.get<RawgGamesResponse>("/games/id");

  return (
    <>

    </>
  )
}

export default GamePage
