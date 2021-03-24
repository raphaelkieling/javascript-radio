import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/index.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Javascript Radio - Start</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
}
