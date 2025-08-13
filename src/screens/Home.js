import React from 'react';
import Product from '../components/home/products/Product';
import Services from '../components/home/services/Services';
import Slider from '../components/home/slider/Slider';
import VehiclesList from '../components/home/vehicles/VehiclesList';
// import { Helmet } from 'react-helmet';
//confetti
// import Confetti from 'react-confetti';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// import CardSlider from '../components/CardSlider/CardSlider';
// import OurCoreValues from '../components/home/OurCoreValues/OurCoreValues';
import SEO from '../components/SEO/SEO';

function Home() {
  return (
    <>
      <SEO
        title='Ashok Leyland Dealers in Hyderabad | Saboo AutoZone'
        description='We are one of the best Ashok Leyland dealers in Hyderabad, Telangana. Visit your nearest Saboo AutoZone showroom and get best deals on Dost, Dost Plus, Dost Strong, Dost CNG, Bada Dost, Partner, Ashok Leyland School bus and Staff bus. Call now 91002 55555.'
        keywords='Ashok Leyland Dealers in Hyderabad'
      />
      {/* <Confetti /> */}
      <Header />
      <Slider />
      {/* <CardSlider/> */}

      <Product />
      <VehiclesList />
      <Services />

      <Footer />
    </>
  );
}

export default Home;
