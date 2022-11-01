import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Intro from "../components/Intro";
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import Screen4 from '../components/Screen4';
import Screen5 from '../components/Screen5';
import Topnav from '../components/Topnav';

const Home: NextPage = () => {
  return (
    <div className='lg:px-2 lg:py-6 p-6'>
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
    </div>
  )
}
export default Home
