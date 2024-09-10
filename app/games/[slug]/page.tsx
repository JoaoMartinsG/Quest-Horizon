/* eslint-disable @next/next/no-img-element */
import { rawg } from "@/app/axios";
import React from "react";

interface RawgGamesResponse {
  id: number;
  slug: string;
  name: string;
  background_image: string;
}

const GamePage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await rawg.get<RawgGamesResponse>(`/games/${params.slug}`);
  const gameData = data;

  return (
    <>
      <img
        src={gameData.background_image}
        alt="test"
        className="w-full h-96 object-cover object-top"
      />
      <h1 className="text-4xl flex justify-center my-3 pb-3 border-b-4 border-slate-700">
        {gameData.name}
      </h1>
    </>
  );
};

export default GamePage;
