import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Topnav from '../components/Home/Topnav';
import PricingIntro from '../components/Pricing/Pricingintro';

const Pricing: NextPage = () => {
    return (
      <div className='lg:px-0 lg:py-8 p-6'>
        <Head>
          <title>Engagespot</title>
          <meta name="description" content="Engagespot" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Topnav/>
        <PricingIntro/>
      </div>
    )
  }
  export default Pricing