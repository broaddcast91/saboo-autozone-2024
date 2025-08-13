import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
// import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';

function Partner() {
  return (
    <>
   <SEO
  title="Ashok Leyland Partner Price in Hyderabad | Mileage & Specifications"
  description="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers."
  keywords="Ashok Leyland Partner Price, Specifications, Features & Mileage"
  image="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
/>

      <Header />
      <PartnerBanner />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-6'>
            <Link to='/partner-4-tyre-commercial-truck-on-road-price-in-hyderabad'>
              <img
                src={require('../img/new-thumbnails/partner-4-tyre-ph.webp')}
                className='w-100'
                alt='partner-4'
              />
              <h4 className='py-3 text-center text-white bg-secondary'>
                Partner 4 Tyre
              </h4>
            </Link>
          </div>
          <div className='col-6'>
            <Link to='/partner-6-tyre-commercial-truck-on-road-price-in-hyderabad'>
              <img
                src={require('../img/new-thumbnails/partner-6-tyre-phome.webp')}
                className='w-100'
                alt='partner-6'
              />
              <h4 className='py-3 text-center text-white bg-secondary'>
                Partner 6 Tyre
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const PartnerBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/partner-banner.webp')}
        alt='partner-banner'
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
              Light Commercial Vehicles (LCV) / Partner Commercial Truck on road
              price in hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Partner;
