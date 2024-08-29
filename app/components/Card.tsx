import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

interface CardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, slug }) => {
  return (
    <>
      <Link href={`/games/${slug}`} className={styles.card}>
        <div className={styles.cardImg}>
          <Image src={imageUrl} fill alt={title} className="object-cover" />
        </div>
        <h2>{title}</h2>
      </Link>
    </>
  );
};

export default Card;
