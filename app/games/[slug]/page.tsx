import { rawg } from "@/app/axios";
import React from "react";

interface RawgGamesResponse {
  results: {
    id: number;
    slug: string;
    name: string;
    background_image: string;
  }[];
}

const GamePage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await rawg.get<RawgGamesResponse>(`/games/${params.slug}`);
  const gameData = data;

  return (
    <>
      <h1>{gameData.name}</h1>
      <h1>
        <img src={gameData.background_image} alt="test" />
      </h1>
    </>
  );
};

export default GamePage;
