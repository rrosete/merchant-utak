import React from 'react';
import { Navbar } from '../components';
import { Loading } from '../components/Loading/Loading';

const Layout = ({ children, openLoading }) => {
  return (
    <>
      <Navbar />
      <Loading openLoading={openLoading} />
      <main className="mx-auto px-4 mt-24">{children}</main>
    </>
  );
};

export default Layout;
