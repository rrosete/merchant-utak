import React from 'react';
import { Navbar } from '../components';
import { Loading } from '../components/Loading/Loading';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, openLoading }) => {
  return (
    <>
      <Navbar />
      <Loading openLoading={openLoading} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <main className="mx-auto px-4 mt-24">{children}</main>
    </>
  );
};

export default Layout;
