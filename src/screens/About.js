import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';

function About() {
  return (
    <>
      <SEO
        title='Ashok Leyland Authorized Dealers in Hyderabad | Saboo AutoZone'
        description='Saboo AutoZone is leading Ashok Leyland authorized dealers in Hyderabad, Telangana. Ashok Leyland light commercial vehicles, trucks & buses are the leading brand in light commercial vehicle segment in India.'
        keywords='Ashok Leyland Authorized Dealers in Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-about-us.jpg'
      />
      <Header />
      {/* <MainHeader2/> */}
      <AboutBanner />
      <div className='container my-5'>
        <p>
          Saboo Autozone Pvt. Ltd. headquartered in Hyderabad, Telangana, is an
          automotive services company that operates Ashok Leyland light
          commercial vehicle dealerships. First established It’s dealerships in
          Hyderabad during 2013 they have gone on to sell 15,000+ Vehicles,
          establishing itself as a mainstay of the LCV sector of Hyderabad.
        </p>
        <p>
          With an excellent track record for the impeccable quality of our
          service and customer satisfaction, we look forward to growing in a
          dynamic business environment and keep up with the need to anticipate
          and embrace change, and continuously reinvent ourselves. The Saboo
          Autozone family has grown to 250+ employees that operate 13
          Dealerships and 6 Service outlets in and around Hyderabad.
        </p>
        <p>
          Saboo Autozone leadership comprises of seasoned automobile
          entrepreneurs with more than 4 decades of experience dealing in the
          domain of automobiles in Hyderabad. Directors of Saboo Autozone Pvt.
          Ltd. are Deepal Saboo Adeppa and Meetal Boob.
        </p>
      </div>
      <Footer />
    </>
  );
}

const AboutBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/vehicles-banner.webp')}
        alt='vehicles-banner'
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
              About us
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
