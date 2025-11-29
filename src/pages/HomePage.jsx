import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Catalog from '../components/sections/Catalog';
import ComplementaryProducts from '../components/sections/ComplementaryProducts';
import HowToGetServices from '../components/sections/HowToGetServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import ContactModal from '../components/sections/ContactModal';

const HomePage = () => {
  return (
    <Layout isHome={true}>
      <Hero />
      <About />
      <Services />
      <Catalog />
      <ComplementaryProducts />
      <HowToGetServices />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <ContactModal />
    </Layout>
  );
};

export default HomePage;
