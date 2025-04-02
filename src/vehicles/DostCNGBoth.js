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
          content="Ashok Leyland Partner Summer Offers 2025 | Best Deals & Price in Hyderabad | Saboo Autozone | Mileage & Specifications"
        />
        <meta
          name="description"
          content="Ashok Leyland Partner 6-Tyre Truck on-road price in Hyderabad. Avail exclusive Summer 2025 offers at Saboo AutoZone. Explore technical specifications, mileage, and features. Call 91002 55555 for the best summer discounts!"
        />
        <meta
          name="keywords"
          content="Ashok Leyland Partner Summer Offers 2025, Ashok Leyland Dost CNG Summer Discounts, Ashok Leyland Partner Price in Hyderabad, Ashok Leyland Dost CNG Price Hyderabad, Best Summer Deals on Ashok Leyland Trucks, Ashok Leyland Partner Mileage & Features, Ashok Leyland Dost CNG Specifications, Ashok Leyland Partner On-Road Price Hyderabad, Saboo AutoZone Summer Offers, Ashok Leyland Truck Discounts 2025."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Partner Summer Offers 2025 | Best Deals & Price in Hyderabad | Saboo Autozone | Mileage & Specifications"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Partner 6-Tyre Truck on-road price in Hyderabad. Avail exclusive Summer 2025 offers at Saboo AutoZone. Explore technical specifications, mileage, and features. Call 91002 55555 for the best summer discounts!"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Partner Summer Offers 2025 | Best Deals & Price in Hyderabad | Saboo Autozone | Mileage & Specifications"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Partner 6-Tyre Truck on-road price in Hyderabad. Avail exclusive Summer 2025 offers at Saboo AutoZone. Explore technical specifications, mileage, and features. Call 91002 55555 for the best summer discounts!"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
        />
        <title>
        Ashok Leyland Partner Summer Offers 2025 | Best Deals & Price in Hyderabad | Saboo Autozone | Mileage & Specifications
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
