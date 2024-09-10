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
    metacritic: number;
  }[];
}

const GamePage = async () => {
  const { data } = await rawg.get<RawgGamesResponse>("/games", {
    params: {
      page_size: 15,
      page: 2,
    },
  });
  const games = data.results;

  return (
    <>
      <main className={styles.main}>
        <div className={` ${styles.gamesContainer}`}>
          {games.map((game) => (
            <Card
              key={game.id}
              title={game.name}
              imageUrl={game.background_image}
              slug={game.slug}
              metacritic={game.metacritic}
            ></Card>
          ))}
        </div>
        <h1 className="flex justify-center">&lt; &lt;&lt; - &gt;&gt; &gt;</h1>
      </main>
    </>
  );
};

export default GamePage;
