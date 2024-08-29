import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

interface CardProps {
  title: string;
  imageUrl: string;
  slug: string;
  metacritic: number;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, slug, metacritic }) => {
  return (
    <>
      <Link href={`/games/${slug}`} className={styles.card}>
        <div className={styles.cardImg}>
          <Image src={imageUrl} fill alt={title} className={styles.img} />
        </div>
        <div className={styles.gameInfo}>
          <p>{title}</p>
          <p
            className={`${
              metacritic >= 90
                ? `bg-green-700 ${styles.metascore}`
                : `bg-red-600 ${styles.metascore}`
            }`}
          >
            {metacritic}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;
