import React from 'react';
import { Modal, Navbar } from '../components';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Modal />
      <main className="mx-auto px-4 mt-24">{children}</main>
    </>
  );
};

export default Layout;
