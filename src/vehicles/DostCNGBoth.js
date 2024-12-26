import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function DostCNGBoth() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Ashok Leyland Partner Price in Hyderabad For best offers 2025 Festive season  Contact and visit Saboo Autozone | Mileage & Specifications"
        />
        <meta
          name="description"
          content="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers 2025 Festive season ."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Partner Price, Specifications, Features & Mileage, 2025 Festive season , ashok leyland Dost CNGboth price in hyderabad starts from from ₹8 lakh.


"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Partner Price in Hyderabad -  For best festive offers Contact and visit Saboo Autozone | Mileage & Specifications"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Partner Price in Hyderabad -  For best festive offers Contact and visit Saboo Autozone| Mileage & Specifications"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for 2025 festive best offers."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
        />
        <title>
          Ashok Leyland Dost CNG Price in Hyderabad - For best festive offers
          Contact and visit Saboo Autozone| Mileage & Specifications
        </title>
      </Helmet>
      <Header />
      <DostCNGBothBanner />
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <Link to="/dost-cng-on-road-price-in-hyderabad">
              <img
                src={require("../img/new-thumbnails/dost-cng-main-thumbnail.png")}
                className="w-100"
                alt="partner-4"
              />
              <h4 className="py-3 text-center text-white bg-secondary">
                Dost CNG
              </h4>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/dost-plus-cng-on-road-price-in-hyderabad">
              <img
                src={require("../img/new-thumbnails/dost-plus-cng-main-thubnail.png")}
                className="w-100"
                alt="partner-6"
              />
              <h4 className="py-3 text-center text-white bg-secondary">
                Dost CNG Plus
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const DostCNGBothBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/dost-cng-banner-1.webp')}
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
              Light Commercial Vehicles (LCV) / Dost CNG Vehicles on road price
              in hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default DostCNGBoth;
