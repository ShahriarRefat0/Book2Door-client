import React from 'react';
import Banner from './Banner';
import Coverage from './Coverage/Coverage';
import WhyChooseBookCourier from './Coverage/WhyChooseBookCourier ';
import LatestBooks from './LatestBooks';
import MostPopularBooks from './MostPopularBooks';
import Brands from './Brands';
import Blogs from './Blogs';
import Categories from './Categories/Categories';
import Statistics from './Statistics';
import Testimonials from '../Testimonials';
import FAQ from './FAQ';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <Coverage></Coverage>
      <WhyChooseBookCourier></WhyChooseBookCourier>
      <MostPopularBooks></MostPopularBooks>
      <Categories></Categories>
      <Statistics></Statistics>
      <Brands></Brands>
      <Blogs></Blogs>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;