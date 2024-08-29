import React from "react";
import { rawg } from "../axios";
import Card from "../components/Card";
import styles from "./game.module.css";

interface RawgGamesResponse {
  results: {
    id: number;
    slug: string;
    name: string;
    background_image: string;
  }[];
}

const GamePage = async () => {
  const { data } = await rawg.get<RawgGamesResponse>("/games", {
    params: {
      page_size: 30,
    },
  });
  const games = data.results;

  return (
    <>
      <div className={`grid grid-cols-5 gap-1 ${styles.gamesContainer}`}>
        {games.map((game) => (
          <Card
            key={game.id}
            title={game.name}
            imageUrl={game.background_image}
            slug={game.slug}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default GamePage;
