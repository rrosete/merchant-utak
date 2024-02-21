import React from 'react';
import { Navbar, Sidebar } from '../components';
import { Loading } from '../components/Loading/Loading';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, openLoading }) => {
  return (
    <div className="font-sans">
      <Navbar />
      <Loading openLoading={openLoading} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="flex flex-row">
        <Sidebar />
        <main className="mx-auto px-4 md:px-10 mt-10 w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
