import Link from "next/link";
import styles from "./homepage.module.css";


export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <h2 className={styles.main}>
        <Link href="/games">Games <span>{">"}</span></Link>
      </h2>
    </>
  );
}
