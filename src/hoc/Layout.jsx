import React from 'react';
import { Navbar } from '../components';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto px-4 mt-24">{children}</main>
    </>
  );
};

export default Layout;
