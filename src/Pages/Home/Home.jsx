import React from 'react';
import Banner from './Banner';
import Coverage from './Coverage/Coverage';
import WhyChooseBookCourier from './Coverage/WhyChooseBookCourier ';
import LatestBooks from './LatestBooks';
import BookDetails from '../BookDetails/BookDetails';
import MostPopularBooks from './MostPopularBooks';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <Coverage></Coverage>
      <WhyChooseBookCourier></WhyChooseBookCourier>
      {/* <BookDetails></BookDetails> */}
      <MostPopularBooks></MostPopularBooks>
    </div>
  );
};

export default Home;