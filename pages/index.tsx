import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Intro from "../components/Intro";
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import Screen4 from '../components/Screen4';
import Screen5 from '../components/Screen5';
import Screen6 from '../components/Screen6';
import Screen7 from '../components/Screen7';
import Topnav from '../components/Topnav';

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
