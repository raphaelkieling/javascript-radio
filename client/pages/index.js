import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./components/Card";
import Header from "./components/Header/index.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Javascript Radio - Start</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main-content"]}>
        <Header />
        <div className={styles["cards-content"]}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
