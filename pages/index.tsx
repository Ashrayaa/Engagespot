import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from "../components/Home/Intro";
import Screen2 from '../components/Home/Trusteddev';
import Screen4 from '../components/Home/Grid';
import Screen5 from '../components/Home/List';
import Screen6 from '../components/Home/Application';
import Screen7 from '../components/Home/Bottombanner';
import Topnav from '../components/Home/Topnav';
import Footer from '../components/Home/Footer';

const Home: NextPage = () => {
  return (
    <div className='lg:px-0 lg:py-8'>
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
      <Footer/>
    </div>
  )
}
export default Home
