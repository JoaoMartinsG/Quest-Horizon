import React from "react";
import Link from "next/link";
import { rawg } from "../axios";

interface RawgGamesResponse {
  results: { id: number; name: string; background_image: string }[];
}

const GamePage = async () => {
  const { data } = await rawg.get<RawgGamesResponse>("/games");
  const games = data.results;
  console.log(games.length);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.name}</td>
              <td><img src={game.background_image} alt="game cover" /></td>
              <td><Link href=`/game/${game.id}`>Games</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GamePage;
