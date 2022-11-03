import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Topnav from '../components/Home/Topnav';
import IntegrationIntro from '../components/Integrations/IntegrationIntro';
import IntegrationGrid from '../components/Integrations/IntegrationGrid';
import Bottombanner from '../components/Home/Bottombanner';

const Integration: NextPage = () => {
    return (
      <div className='lg:px-0 lg:py-8 p-6'>
        <Head>
          <title>Engagespot</title>
          <meta name="description" content="Engagespot" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Topnav/>
       <IntegrationIntro/>
       <IntegrationGrid/>
       <Bottombanner/>

      </div>
    )
  }
  export default Integration