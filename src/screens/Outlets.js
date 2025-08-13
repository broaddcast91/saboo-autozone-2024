import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';

function Outlets() {
  return (
    <>
      <SEO
        title='Saboo AutoZone Outlets | Ashok Leyland Showrooms in Hyderabad'
        description='Find the nearest Saboo AutoZone Ashok Leyland showroom in Hyderabad. Explore our network of authorized outlets for sales, service, finance, and insurance support. Call now 91002 55555.'
        keywords='Ashok Leyland Showroom in Hyderabad, Saboo AutoZone Outlets, Commercial Vehicle Dealers'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-outlets.jpg'
      />
      <Header />
      <OutletsBanner />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Link to='/showrooms' className='text-center text-white'>
              <img
                src={require('../img/outlets-sales.webp')}
                alt='outlets-sales'
                style={{ width: '100%' }}
              />
              <h4 className='py-3 bg-secondary'>Showrooms</h4>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link to='/service-outlets' className='text-center text-white'>
              <img
                src={require('../img/outlets-services.webp')}
                alt='outlets-services'
                style={{ width: '100%' }}
              />
              <h4 className='py-3 bg-secondary '>Service Centers</h4>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const OutletsBanner = () => {
  return (
    <>
      <img
        className='mw-100'
        src={require('../img/outlets-banner.webp')}
        alt='outlets-banner'
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
              Outlets
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Outlets;
