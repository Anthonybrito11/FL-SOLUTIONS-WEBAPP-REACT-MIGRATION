import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, isHome = true }) => {
  return (
    <>
      <Navbar isHome={isHome} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
