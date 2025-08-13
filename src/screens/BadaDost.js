import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
// import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';

function BadaDost() {
  return (
    <>
      <SEO
        title='Ashok Leyland Bada Dost On-Road Price in Hyderabad | August Monsoon Offers 2025 & Huge Discounts | Saboo AutoZone'
        description='Ashok Leyland Bada Dost Light Commercial Vehicle is available in two powerful variants – i3 and i4. Bada Dost i3 LS is priced at ₹8.75 lakh and i4 at ₹8.52 lakh (on-road Hyderabad). Enjoy massive August Monsoon Festive Offers 2025 at Saboo AutoZone. Explore mileage, payload, specs & exclusive discounts. Call 91002 55555 now!'
        keywords='Ashok Leyland Bada Dost August Offers 2025, Ashok Leyland Bada Dost On-Road Price in Hyderabad, Bada Dost i3 i4 Price & Features, Ashok Leyland LCV Best Deals, Ashok Leyland Bada Dost Festive Discounts Hyderabad, Ashok Leyland Bada Dost Mileage & Specs, Commercial Vehicle Offers 2025 Hyderabad, Bada Dost Payload Capacity, Saboo AutoZone Ashok Leyland Bada Dost, Buy Ashok Leyland Bada Dost in Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i3.jpg'
      />

      <Header />
      <BadaDostBanner />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-6'>
            <Link to='/bada-dost-i4-on-road-price-in-hyderabad'>
              <img
                src={require('../img/vehicles/Ashok-Leyland-Bada-Dost-i4-Price-in-Hyderabad.webp')}
                className='w-100'
                alt='Bada-Dost-i4'
              />
              <h4 className='py-3 text-center text-white bg-secondary'>
                Bada Dost i4
              </h4>
            </Link>
          </div>
          <div className='col-6'>
            <Link to='/bada-dost-i3-on-road-price-in-hyderabad'>
              <img
                src={require('../img/vehicles/Ashok-Leyland-Bada-Dost-i3-Price.webp')}
                className='w-100'
                alt='Bada-Dost-i3'
              />
              <h4 className='py-3 text-center text-white bg-secondary'>
                Bada Dost i3
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const BadaDostBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/Bada-Dost-banner.webp')}
        alt='Bada-Dost-banner'
      />
      <div className='py-3 bg-white shadow-sm container-fluid'>
        <div className='container'>
          <ol className='mb-0 breadcrumb'>
            <li className='breadcrumb-item'>
              <Link className='text-black text-decoration-none' to='/'>
                <IoIosHome /> Home
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Light Commercial Vehicles (LCV) / Bada dost on road price in
              hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default BadaDost;
