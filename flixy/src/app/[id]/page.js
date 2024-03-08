import React from 'react';
import DocumentaryDetailPage from '@/components/DetailPage/DetailPage';
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

const DetailPage = () => {
  return (
    <div>
      <Navbar/>
      <DocumentaryDetailPage />
      <Footer/>
    </div>
  );
};

export default DetailPage;
