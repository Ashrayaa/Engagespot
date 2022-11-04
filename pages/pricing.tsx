import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Topnav from '../components/Home/Topnav';
import PricingIntro from '../components/Pricing/PricingIntro';
import Monthlypricing from '../components/Pricing/Monthlypricing';
import ListIncluded from '../components/Pricing/ListIncluded';
import FAQ from '../components/Pricing/FAQ';
import Footer from '../components/Home/Footer';

const Pricing: NextPage = () => {
    return (
      <div className='lg:px-0 lg:py-8 p-'>
        <Head>
          <title>Engagespot</title>
          <meta name="description" content="Engagespot" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Topnav/>
        <PricingIntro/>
        <Monthlypricing/>
        <ListIncluded/>
        <FAQ/>
        <Footer/>
      </div>
    )
  }
  export default Pricing