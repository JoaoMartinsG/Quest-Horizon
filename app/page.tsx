import Link from "next/link";
import styles from "./homepage.module.css";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const url =
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Image src={url} fill alt={"banner"} className={styles.bannerImg} />
        </div>

        <div className={styles.mainContainer}>
          <h2>
            <Link href="/games">
              Games <span><ChevronRightIcon/></span>
            </Link>

          </h2>
        </div>
      </main>
    </>
  );
}
