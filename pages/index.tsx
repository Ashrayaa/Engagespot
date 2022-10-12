import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Screen1 from "../components/Screen1";
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import Topnav from '../components/Topnav';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Engagespot</title>
        <meta name="description" content="Engagespot" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Topnav/>
      <Screen1/>
      <Screen2/>
      <Screen3 />
            
    </div>
  )
}

export default Home
