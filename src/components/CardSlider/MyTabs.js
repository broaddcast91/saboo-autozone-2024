import { Tab } from '@headlessui/react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Navigation } from "swiper";

export const scvproducts = [
  {
    id: 1,
    name: 'DOST + XL',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img:require('../../img/new-thumbnails/dostplusXL.png'),
    brouchure: 
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Dost-XL-_-Brochure-A4_04.pdf',
    explore: '/dostplusXL-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
    payload :'1200'
  },
  {
    id: 2,
    name: 'Saathi',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/saathi_new.png'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i2-brochure.pdf',
    explore: '/Saathi-on-road-price-in-hyderabad',
    bookNow: 'Saathi-on-road-price-in-hyderabad',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 3,
    name: 'BADA DOST i2',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost-i2.png'),
    brouchure:
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i2-brochure.pdf',
    explore: '/bada-dost-i2-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 4,
    name: 'BADA DOST i4',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost-i4.png'),
    brouchure:
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Bada-Dost-i4-Brochure.pdf',
    explore: '/bada-dost-i4-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 5,
    name: 'DOST+',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost-plus.png'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Dost-Plus-Brochure.pdf',
    explore: '/dost-plus-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 6,
    name: 'DOST STRONG',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost-strong.png'),
    brouchure:
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-STRONG.pdf',
    explore: '/dost-strong-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 7,
    name: 'Dost LiTE',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost-lite.png'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/dost-lite-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'DOST CNG',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost-cng.png'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-CNG-1.pdf',
    explore: '/dost-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'DOST+ CNG',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/dost plus cng.png'),
    brouchure:
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-CNG-1.pdf',
    explore: '/dost-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'Dost XL',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/ashok-leyland-dost-lite.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
 
];

export const lcvproducts = [
  {
    id: 1,
    name: 'Partnet 6 Tyre',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/partner-6-tyre.png'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'Partner 4 Tyre',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/ashok-leyland-dost-lite.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
 
];

export const passengerproducts = [
  {
    id: 1,
    name: 'MiTR School Bus',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/mitr-school-bus.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-MiTR-School-Bus-Brochure.pdf',
    explore: '/mitr-school-bus-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'SMiTR Staff Bus',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../img/new-thumbnails/mitr-staff-bus.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-MiTR-Staff-Bus-Brochure.pdf',
    explore: '/mitr-staff-bus-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MyTabs = () => {
  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 border-b-2 border-gray-300'>
          {['SCV Goods Carrier', 'LCV Goods Carrier', 'LCV Passenger'].map(
            (tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm font-medium leading-5 text-gray-700',
                    'focus:outline-none',
                    selected
                      ? 'border-b-4 border-[#9E2A31] font-bold'
                      : 'hover:text-[#9E2A31]'
                  )
                }
              >
                {tab}
              </Tab>
            )
          )}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <div>
              <Tab1Content />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <Tab2Content />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <Tab3Content />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const Tab1Content = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        {scvproducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full max-w-lg flex flex-col bg-[#eee] border relative overflow-hidden rounded-3xl">
              {/* Product Image */}
              <div className="flex-auto overflow-hidden">
                <Link to={item.explore}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center"
                  />
                </Link>
              </div>
              
              {/* Product Details */}
              <div className="flex-auto p-5 bg-white">
                {/* Product Name */}
                <div className="flex items-center justify-between mb-4 text-xl font-semibold">
                  <p>{item.name}</p>
                </div>
                
                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Payload */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/payload.webp')}
                      className="w-6 h-6"
                      alt="payload"
                    />
                    <div>
                      <div className="text-sm text-gray-500">PAYLOAD</div>
                      <div className="font-semibold">{item.payload} kg</div>
                    </div>
                  </div>
                  
                  {/* GVW */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/gvw.webp')}
                      className="w-6 h-6"
                      alt="gvw"
                    />
                    <div>
                      <div className="text-sm text-gray-500">GVW</div>
                      <div className="font-semibold">{item.gvw} kg</div>
                    </div>
                  </div>
                  
                  {/* Power */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/power.webp')}
                      className="w-6 h-6"
                      alt="power"
                    />
                    <div>
                      <div className="text-sm text-gray-500">POWER</div>
                      <div className="font-semibold">{item.power} HP</div>
                    </div>
                  </div>
                  
                  {/* Engine */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/engine.webp')}
                      className="w-6 h-6"
                      alt="engine"
                    />
                    <div>
                      <div className="text-sm text-gray-500">ENGINE</div>
                      <div className="font-semibold">{item.engine} cc</div>
                    </div>
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold">₹ {item.price} Onwards</p>
                </div>
                
                {/* Enquire Button */}
                <div className="flex justify-center">
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center w-full px-12 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Arrows */}
      <div
        ref={navigationPrevRef}
        className="absolute left-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer transform -translate-y-1/2"
      >
        <GrFormPrevious className="text-lg text-white" />
      </div>
      <div
        ref={navigationNextRef}
        className="absolute right-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer transform -translate-y-1/2"
      >
        <GrFormNext className="text-lg text-white" />
      </div>
    </div>
  );
};

const Tab2Content = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  const isLoopEnabled = lcvproducts.length > 2;

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        modules={[Navigation]}
        slidesPerView={1}
        loop={isLoopEnabled}
        breakpoints={{
          640: { slidesPerView: Math.min(2, lcvproducts.length), spaceBetween: 20 },
          768: { slidesPerView: Math.min(2, lcvproducts.length), spaceBetween: 40 },
          1024: { slidesPerView: Math.min(3, lcvproducts.length), spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        {lcvproducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full max-w-lg flex flex-col bg-[#eee] border relative overflow-hidden rounded-3xl">
              {/* Product Image */}
              <div className="flex-auto overflow-hidden">
                <Link to={item.explore}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover object-center w-full mx-auto product_image h-[270px]"
                  />
                </Link>
              </div>

              {/* Product Details */}
              <div className="flex-auto p-5 bg-white">
                <div className="flex items-center justify-between mb-4 text-xl font-semibold">
                  <p>{item.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <img src={require('../../img/payload.webp')} className="w-6 h-6" alt="payload" />
                    <div>
                      <div className="text-sm text-gray-500">PAYLOAD</div>
                      <div className="font-semibold">{item.payload} kg</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img src={require('../../img/gvw.webp')} className="w-6 h-6" alt="gvw" />
                    <div>
                      <div className="text-sm text-gray-500">GVW</div>
                      <div className="font-semibold">{item.gvw} kg</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img src={require('../../img/power.webp')} className="w-6 h-6" alt="power" />
                    <div>
                      <div className="text-sm text-gray-500">POWER</div>
                      <div className="font-semibold">{item.power} HP</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img src={require('../../img/engine.webp')} className="w-6 h-6" alt="engine" />
                    <div>
                      <div className="text-sm text-gray-500">ENGINE</div>
                      <div className="font-semibold">{item.engine} cc</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold">₹ {item.price} Onwards</p>
                </div>

                <div className="flex justify-center">
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center w-full px-12 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      {lcvproducts.length > 1 && (
        <>
          <div
            ref={navigationPrevRef}
            className="absolute left-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer transform -translate-y-1/2"
          >
            <GrFormPrevious className="text-lg text-white" />
          </div>
          <div
            ref={navigationNextRef}
            className="absolute right-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer transform -translate-y-1/2"
          >
            <GrFormNext className="text-lg text-white" />
          </div>
        </>
      )}
    </div>
  );
};


const Tab3Content = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  const isLoopEnabled = passengerproducts.length > 2;

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        modules={[Navigation]}
        slidesPerView={1}
        loop={isLoopEnabled}
        breakpoints={{
          640: {
            slidesPerView: Math.min(2, passengerproducts.length),
            spaceBetween: 20,
          },
          768: {
            slidesPerView: Math.min(2, passengerproducts.length),
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: Math.min(3, passengerproducts.length),
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {passengerproducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full max-w-lg flex flex-col bg-[#eee] border relative overflow-hidden rounded-3xl">
              {/* Product Image */}
              <div className="flex-auto overflow-hidden">
                <Link to={item.explore}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="mx-auto product_image h-[250px] w-full object-cover object-center"
                  />
                </Link>
              </div>

              {/* Product Details */}
              <div className="flex-auto p-5 bg-white">
                <div className="flex items-center justify-between mb-4 text-xl font-semibold">
                  <p>{item.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/payload.webp')}
                      className="w-6 h-6"
                      alt="payload"
                    />
                    <div>
                      <div className="text-sm text-gray-500">PAYLOAD</div>
                      <div className="font-semibold">{item.payload} kg</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/gvw.webp')}
                      className="w-6 h-6"
                      alt="gvw"
                    />
                    <div>
                      <div className="text-sm text-gray-500">GVW</div>
                      <div className="font-semibold">{item.gvw} kg</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/power.webp')}
                      className="w-6 h-6"
                      alt="power"
                    />
                    <div>
                      <div className="text-sm text-gray-500">POWER</div>
                      <div className="font-semibold">{item.power} HP</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img
                      src={require('../../img/engine.webp')}
                      className="w-6 h-6"
                      alt="engine"
                    />
                    <div>
                      <div className="text-sm text-gray-500">ENGINE</div>
                      <div className="font-semibold">{item.engine} cc</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold">₹ {item.price} Onwards</p>
                </div>

                <div className="flex justify-center">
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center w-full px-12 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      {passengerproducts.length > 1 && (
        <>
          <div
            ref={navigationPrevRef}
            className="absolute left-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer transform -translate-y-1/2"
          >
            <GrFormPrevious className="text-lg text-white" />
          </div>
          <div
            ref={navigationNextRef}
            className="absolute right-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer transform -translate-y-1/2"
          >
            <GrFormNext className="text-lg text-white" />
          </div>
        </>
      )}
    </div>
  );
};


export default MyTabs;
