import Head from "next/head";
import Card from "./components/Card";
import Header from "./components/Header/index.js";
import styled from "styled-components";

const CardsContent = styled.div`
  padding-top: 20px;
  max-width: 960px;
  margin: 0 auto;
`;

const items = [
  {
    _id: "605c95c9ac13419a4548cf8a",
    minutes: 44,
    title:
      "Ea est culpa aliqua culpa mollit tempor nulla proident proident duis. Laboris in voluptate nulla excepteur adipisicing id. Culpa proident pariatur esse ea elit pariatur nisi anim sunt quis.",
    description:
      "In laboris amet ea sint qui enim laboris deserunt anim exercitation cillum sit. Laboris consequat duis ut esse incididunt do id officia velit aliqua. Laboris anim consectetur ea magna quis incididunt ipsum reprehenderit et ea. Ex qui irure esse dolor non laboris. Id aliquip pariatur voluptate cupidatat reprehenderit officia dolore et velit. Reprehenderit irure exercitation sint qui proident tempor culpa occaecat culpa dolore. Adipisicing qui et sunt minim nostrud anim dolore magna. Ad aliquip sint Lorem labore ad consequat. Deserunt anim do velit voluptate dolore ex ullamco consequat eu est. Ad deserunt dolore id cupidatat eu ea ad nostrud ipsum elit ullamco dolore cillum incididunt. Laborum veniam ut tempor minim elit nisi eu reprehenderit ullamco magna. Pariatur id occaecat minim voluptate incididunt dolor mollit mollit id ad. Anim veniam do magna ea.",
    date: "Fri Apr 13 2001 06:31:28 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c93594de5afff25745",
    minutes: 30,
    title:
      "Officia ullamco occaecat deserunt fugiat esse ea. Reprehenderit quis laborum consectetur nisi esse eiusmod ipsum duis exercitation cupidatat proident aute. Voluptate non ad laboris sint enim.",
    description:
      "Exercitation id culpa id consequat minim occaecat adipisicing ullamco Lorem. Aliquip sit quis id qui ad. Id ipsum incididunt Lorem est reprehenderit deserunt eiusmod non voluptate fugiat. Nostrud duis consectetur elit aliqua eiusmod tempor dolore occaecat consequat dolore laborum magna irure occaecat. Ex nulla sunt nulla ipsum reprehenderit veniam Lorem. Aliqua fugiat laborum excepteur reprehenderit nisi esse amet. Lorem incididunt non nostrud ea labore laborum aute do et cillum ullamco cillum. Aliquip ut consectetur esse veniam labore deserunt duis deserunt consectetur eu nulla. Lorem minim mollit eu pariatur dolore sint. Nostrud dolor ut laborum dolor reprehenderit consequat culpa eiusmod pariatur consectetur ea dolore. Magna qui nulla Lorem anim esse incididunt irure exercitation commodo esse. Est sunt nulla officia ea qui nisi. Deserunt laboris proident consectetur eu.",
    date: "Mon Mar 26 2001 20:33:09 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c953ea6f7281551e5b",
    minutes: 3,
    title:
      "Fugiat sunt proident dolore aliquip excepteur aliqua ut. In amet esse in pariatur in fugiat officia deserunt mollit. Quis laborum Lorem sit ullamco sunt consectetur adipisicing ullamco.",
    description:
      "Ullamco reprehenderit commodo eu do est cupidatat reprehenderit. Esse id cupidatat ullamco id ipsum ex ea voluptate cillum nostrud. Quis in id mollit ea mollit et. Nostrud cillum excepteur dolore nulla dolor elit do. Minim labore exercitation eu sint tempor do do. Aliqua enim officia aute consectetur voluptate nulla labore sint cupidatat. Est excepteur aute consequat mollit eiusmod fugiat enim eu in. Esse proident ex minim reprehenderit irure anim amet culpa commodo adipisicing. Proident adipisicing laboris minim et. Magna eiusmod veniam cupidatat laborum reprehenderit quis anim minim laboris do ullamco ipsum. Est labore ullamco elit sit duis. Magna adipisicing ullamco eiusmod ut amet dolor reprehenderit. Elit sit minim quis laborum.",
    date: "Sun Jan 19 1992 07:27:08 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c97b30c143ecc72afd",
    minutes: 3,
    title:
      "Quis enim quis amet voluptate sint officia ut cillum velit mollit adipisicing voluptate duis culpa. Sit exercitation amet ad esse ex. Esse labore exercitation proident reprehenderit fugiat Lorem nulla excepteur nostrud adipisicing.",
    description:
      "Sit commodo et fugiat aliqua. Excepteur nisi ad Lorem sunt mollit laboris deserunt aute voluptate. Sint in sunt amet elit. Eu occaecat consequat dolor irure ex magna Lorem et esse. Consequat proident elit deserunt reprehenderit elit culpa cupidatat id anim. Veniam reprehenderit laboris sit amet aliqua nisi enim mollit consequat mollit anim eiusmod qui occaecat. Amet consequat minim consequat eu. Ullamco commodo duis sunt consectetur quis dolor adipisicing nisi irure. Aute ut sit duis aliquip magna consequat minim sit eiusmod aute elit. Ut eu deserunt veniam labore laborum. Proident nulla sint occaecat est labore officia enim voluptate minim veniam commodo. Labore amet eu et fugiat nisi labore labore aliquip. Minim aliquip tempor ad occaecat.",
    date: "Sun Aug 24 1975 23:17:19 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c9c74d9411c744106c",
    minutes: 37,
    title:
      "Id veniam velit consequat quis consectetur esse culpa aliquip eiusmod amet eu ex anim. Magna ut irure labore fugiat exercitation dolor cillum occaecat dolor irure irure occaecat quis sunt. Magna sunt exercitation laboris dolor minim ipsum culpa nulla labore adipisicing nostrud quis.",
    description:
      "Dolore cillum voluptate duis proident. Sint est laboris commodo elit. Proident aute consequat sint dolore ad tempor. Nostrud qui ullamco sunt nisi cillum culpa irure anim ipsum ad fugiat dolor do. Ad sint id veniam proident. Id ullamco proident laborum anim velit culpa id. Ullamco exercitation exercitation aute minim consectetur amet aliquip esse ullamco adipisicing qui est. Laboris consectetur voluptate do in do aliquip elit. Ut sint veniam voluptate quis irure aute. Minim velit qui nulla tempor consectetur duis consectetur sit in fugiat esse. Ut mollit ut voluptate voluptate fugiat ullamco amet dolore proident ea ullamco. Aliquip ullamco dolor irure cupidatat officia occaecat ea amet nisi sit et elit irure sint. Irure labore qui officia ut anim dolor qui et incididunt.",
    date: "Sun Feb 11 2007 21:36:45 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c98ea77fd561e5e38f",
    minutes: 46,
    title:
      "Non ipsum elit duis sunt laborum elit et consequat. Ipsum reprehenderit mollit exercitation minim. Nulla nostrud pariatur qui aliquip voluptate eu occaecat quis minim.",
    description:
      "Consectetur quis irure dolor in incididunt dolore. Pariatur magna reprehenderit et ut consectetur ad ipsum laboris. Consequat aute culpa enim laboris nostrud occaecat anim do magna. Nulla enim tempor veniam velit. Elit tempor amet esse reprehenderit labore exercitation exercitation do id. Ipsum ipsum Lorem qui sit cillum reprehenderit veniam do officia. Eu sit fugiat deserunt laborum deserunt occaecat exercitation. Nulla ullamco qui cillum laboris. Minim Lorem in reprehenderit aute in anim. Elit do quis ad ipsum magna laboris. Officia eu amet reprehenderit labore. Tempor cupidatat tempor labore ullamco excepteur minim. Irure nulla non eu cillum aliquip aliquip id elit minim irure commodo.",
    date: "Mon Jul 30 2001 03:40:07 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c9a0395574f74fdb72",
    minutes: 42,
    title:
      "Id veniam commodo qui commodo velit pariatur irure. Culpa adipisicing cupidatat non labore excepteur exercitation cupidatat aute amet ea nulla laboris ea. Lorem sit velit cupidatat duis qui ut enim consectetur eu fugiat aliquip aliqua est.",
    description:
      "Tempor irure exercitation qui sunt do sit nisi aute tempor aliquip aute adipisicing. Nisi Lorem eu laboris elit consectetur exercitation tempor esse. Deserunt cillum ad velit veniam. Proident cupidatat Lorem ut ad anim cupidatat sint cillum aliqua. Veniam proident quis ipsum pariatur id aliquip ut id officia. Incididunt culpa incididunt dolore ullamco ad aliquip. Exercitation nostrud ipsum ipsum irure minim. Tempor non ea nulla laborum mollit consectetur aliqua. Sit et aute nisi nostrud minim ut. Reprehenderit ullamco do irure esse eu nulla exercitation officia fugiat pariatur pariatur. Et et pariatur est aliqua velit anim magna nisi. Consectetur laborum sunt cupidatat do veniam esse culpa duis dolore. Ipsum non excepteur laboris esse.",
    date: "Fri Jul 29 2005 01:01:06 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c9b6200631d4234e67",
    minutes: 35,
    title:
      "Commodo sunt non labore deserunt occaecat. Elit ut esse non amet proident excepteur culpa veniam consequat in dolor. Consectetur esse dolore esse amet labore et aliqua ea laborum ea.",
    description:
      "Ullamco quis sit excepteur dolore mollit ea in sit. Laboris qui commodo laboris aute anim. Ex Lorem dolore esse aliqua excepteur. Exercitation irure amet consectetur ut proident nostrud enim elit nisi commodo consequat sunt sit sit. Labore ex reprehenderit eu eu consequat tempor qui dolore laboris commodo et. Mollit in consequat eu laboris ad ipsum duis laborum amet. Irure ut non quis magna irure et aliquip ea id cillum tempor. Commodo laboris commodo ut ad esse cillum quis culpa exercitation amet magna. Sunt cupidatat sit anim ex ullamco elit irure. Exercitation dolor cupidatat anim ullamco pariatur consectetur aute qui aliquip sunt laborum. Tempor aute aute laborum tempor ipsum. Et culpa in adipisicing ea et pariatur nostrud exercitation. Sunt consectetur sint commodo amet tempor nulla esse.",
    date: "Thu Oct 10 1991 14:59:25 GMT+0000 (UTC)",
  },
  {
    _id: "605c95c93c60ab3cbd18f318",
    minutes: 32,
    title:
      "Elit magna voluptate et nostrud proident et aliqua cupidatat cillum. Deserunt eiusmod ut occaecat eiusmod amet voluptate et cillum labore officia magna. Consectetur proident qui Lorem sit fugiat reprehenderit ut magna qui.",
    description:
      "Magna laborum sint sunt excepteur ut laborum qui eiusmod veniam occaecat eu non. Ullamco nisi est ipsum Lorem velit labore laboris enim consectetur velit occaecat do labore. Esse id aliqua elit duis enim quis nostrud incididunt fugiat nostrud duis eiusmod. Lorem voluptate mollit ea labore est occaecat id anim. Commodo veniam exercitation dolor reprehenderit ullamco aliquip qui id veniam aliquip sunt et qui consectetur. Laboris fugiat id voluptate est. Voluptate consectetur cupidatat consequat deserunt qui officia nisi pariatur cupidatat culpa. Ea nostrud consequat quis magna enim labore elit reprehenderit enim elit ut pariatur labore. Irure excepteur ipsum sit laboris enim qui velit irure ea qui officia eu. Sint Lorem culpa veniam non fugiat sunt. Proident non id proident eu magna do sint ea excepteur eiusmod. Cupidatat dolore id ad sit eu cupidatat. Esse velit laborum voluptate labore nostrud labore esse sint.",
    date: "Fri Aug 16 1991 18:03:33 GMT+0000 (UTC)",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Javascript Radio - Start</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <CardsContent>
          {items.map((item) => (
            <Card {...item} />
          ))}
        </CardsContent>
      </main>
    </div>
  );
}
