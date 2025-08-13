import React from 'react';

import MyTabs from './MyTabs';

const CardSlider = () => {
  return (
    <div className='py-5 mt-10 text-gray-800 bg-white section'>
      <div className='container px-4 mx-auto '>
        <h4 className='mb-4 text-3xl font-bold '>Trending Products</h4>
        <MyTabs />
      </div>
    </div>
  );
};

export default CardSlider;
