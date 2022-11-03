import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Intro from "../components/Home/Intro";
import Screen2 from '../components/Home/Trusteddev';
import Screen3 from '../components/Home/Screen3';
import Screen4 from '../components/Home/Grid';
import Screen5 from '../components/Home/List';
import Screen6 from '../components/Home/Application';
import Screen7 from '../components/Home/Bottombanner';
import Topnav from '../components/Home/Topnav';

const Home: NextPage = () => {
  return (
    <div className='lg:px-0 lg:py-8 p-6'>
      <Head>
        <title>Engagespot</title>
        <meta name="description" content="Engagespot" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Topnav/>
      <Intro/>
      <Screen2/>
      <Screen4 />
      <Screen5/>
      <Screen6/>
      <Screen7/>
    </div>
  )
}
export default Home
