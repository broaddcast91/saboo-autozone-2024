import React from 'react';
import { Link } from 'react-router-dom';

import dostCngBanner from '../img/dost-cng-banner-1.webp';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';

function DostCNGBoth() {
  return (
    <>
      <SEO
        title='Ashok Leyland Partner 6 Tyre Truck – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo Autozone'
        description='Grab the best August Monsoon Festive Offers 2025 on the Ashok Leyland Partner 6-Tyre Truck in Hyderabad! On-road price starting from ₹X lakh. Explore features, mileage, and specifications. Avail huge discounts and best deals only at Saboo Autozone. Call 91002 55555 today!'
        keywords='Ashok Leyland Partner August Monsoon Offers 2025, Ashok Leyland Partner 6 Tyre Truck Price in Hyderabad, Ashok Leyland Partner Festive Discounts, Ashok Leyland Partner Truck Mileage & Specifications, Ashok Leyland Trucks Best Deals Hyderabad, Partner BS6 Truck Offers, On-Road Price of Ashok Leyland Partner in Hyderabad, Saboo Autozone Ashok Leyland Offers, Ashok Leyland Partner Truck Huge Discounts 2025, Ashok Leyland Partner Festive Price Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostCngBanner}
        altText='Dost CNG Vehicles Banner'
        breadcrumbTitle='Light Commercial Vehicles (LCV) / Dost CNG Vehicles on road price in Hyderabad'
      />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-6'>
            <Link to='/dost-cng-on-road-price-in-hyderabad'>
              <img
                src={require('../img/new-thumbnails/dost-cng-main-thumbnail.png')}
                className='w-100'
                alt='partner-4'
              />
              <h4 className='py-3 text-center text-white bg-secondary'>
                Dost CNG
              </h4>
            </Link>
          </div>
          <div className='col-6'>
            <Link to='/dost-plus-cng-on-road-price-in-hyderabad'>
              <img
                src={require('../img/new-thumbnails/dost-plus-cng-main-thubnail.png')}
                className='w-100'
                alt='partner-6'
              />
              <h4 className='py-3 text-center text-white bg-secondary'>
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

export default DostCNGBoth;
