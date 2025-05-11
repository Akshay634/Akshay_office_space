import Banner from '@/components/Banner';
import ChooseUs from '@/components/ChooseUs';
import DownloadNow from '@/components/DownloadNow';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SpaceOverview from '@/components/SpaceOverview';
import React from 'react';

const LandingPage = () => {
  return (
    <div style={{background: '#f9f9f9'}}>
      <Header />
      <Banner />
      <ChooseUs />
      <SpaceOverview />
      <DownloadNow />
      <Footer />
    </div>
  );
};

export default LandingPage;
