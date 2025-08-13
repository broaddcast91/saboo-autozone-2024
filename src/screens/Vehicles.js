import React from 'react';

import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { carslist } from '../json/CarsList';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Vehicles() {
  return (
    <>
      <SEO
        title='Ashok Leyland Light Commercial Vehicles | Saboo AutoZone'
        description='Ashok Leyland Light Commercial Vehicles include Bada Dost, DOST, Dost +, Dost Strong, Dost CNG, Partner, Mitr School and Staff bus. Get best offers on Ashok Leyland commercial vehicles. Call now 91002 55555.'
        keywords='Ashok Leyland Light Commercial Vehicles'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-light-vehicles.jpg'
      />
      <Header />
      <VehicleBanner />
      <div className='my-5 text-center'>
        <h2>Light Commercial Vehicles (LCV)</h2>
      </div>

      <div className='container'>
        <div className='mb-5 row'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              210: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            className='mySwiper'
          >
            {carslist.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className='mb-3 shadow-sm' key={vehicle.title}>
                  <div
                    className='card bg-light'
                    style={{ border: '1px solid #eee' }}
                  >
                    <Link to={vehicle.to}>
                      <img
                        src={vehicle.img}
                        className='card-img-top'
                        alt={vehicle.title}
                      />
                    </Link>
                    <div className='card-body'>
                      <h5
                        className='text-center'
                        style={{ color: 'rgb(158 42 43)' }}
                      >
                        {vehicle.title}
                      </h5>
                      <div className='mb-3 c09ew342'></div>

                      <div className='px-3 d-flex justify-content-between'>
                        <div className='d-flex flex-column '>
                          <small className='mb-1 text-muted'>PAYLOAD</small>
                          <div className='flex-row d-flex align-items-center'>
                            <img
                              src={require('../img/payload.webp')}
                              height={24}
                              alt='payload'
                            />
                            <span className='text-muted'>
                              {' '}
                              {vehicle.payload}
                            </span>
                          </div>
                        </div>
                        <div className='d-flex flex-column'>
                          <small className='mb-1 text-muted'>GVW</small>
                          <div className='flex-row d-flex align-items-center'>
                            <img
                              src={require('../img/gvw.webp')}
                              height={24}
                              alt='gvw'
                            />
                            <span className='text-muted'>
                              {' '}
                              {vehicle.gvw} kg
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='px-3 pb-3 mt-4 d-flex justify-content-between'>
                        <div className='d-flex flex-column'>
                          <small className='mb-1 text-muted'>POWER</small>
                          <div className='flex-row d-flex align-items-center'>
                            <img
                              src={require('../img/power.webp')}
                              height={24}
                              alt='power'
                            />
                            <span className='text-muted'>
                              {' '}
                              {vehicle.power} HP
                            </span>
                          </div>
                        </div>
                        <div className='d-flex flex-column'>
                          <small className='mb-1 text-muted'>ENGINE</small>
                          <div className='flex-row d-flex align-items-center'>
                            <img
                              src={require('../img/engine.webp')}
                              height={24}
                              alt='engine'
                            />
                            <span className='text-muted'>
                              {' '}
                              {vehicle.engine} cc
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link to={vehicle.to}>
                        <Button className='px-4 py-2 mx-auto btn-danger d-flex'>
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

const VehicleBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/vehicles-banner.webp')}
        alt='vehciles-banner'
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
              Light Commercial Vehicles (LCV)
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
