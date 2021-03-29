import Head from "next/head";
import Card from "./components/Card";
import Banner from "./components/Banner/index.js";
import styled from "styled-components";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getPodcasts } from "./services/podcast";

const CardsContent = styled.div`
  padding-top: 20px;
  max-width: 960px;
  margin: 0 auto;
`;

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPodcasts().then((podcasts) => {
      setItems(podcasts);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Javascript Radio - Start</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <Banner />
        <CardsContent>
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </CardsContent>
      </main>
    </div>
  );
}
