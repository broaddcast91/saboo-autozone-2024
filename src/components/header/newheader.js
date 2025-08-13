import React, { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const tabs = ['SCV Goods Carrier', 'LCV Goods Carrier', 'LCV Passenger'];

const navigation = {
  categories: [
    {
      id: '1',
      name: 'Vehicles',
      featured: [
        {
          name: 'DOST + XL',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp',
          href: '/dostplusXL-on-road-price-in-hyderabad',
          imageSrc:require('../../img/new-thumbnails/dostplusXL.png'),
          imageAlt: 'DOST + XL',
          price: '₹ 24,79,000*',
        },
        {
          name: 'Saathi',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/Saathi-on-road-price-in-hyderabad',
          imageSrc: require('../../img/new-thumbnails/saathi_new.png'),
          imageAlt: 'Saathi',
          price: '₹ 7,46,500*',
        },
        {
          name: 'BADA DOST i2',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/120x30+black.webp',
          href: '/bada-dost-i2-on-road-price-in-hyderabad',
          imageSrc: "https://autozone-2024.netlify.app/static/media/Bada-Dost-i2.b1ebae9ce7e9cdd1e816.jpg",
          imageAlt: 'BADA DOST i2',
          price: '₹ 12,74,000*',
        },
        {
          name: 'BADA DOST i4',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp',
          href: '/bada-dost-i4-on-road-price-in-hyderabad',
          imageSrc:require('../../img/new-thumbnails/dost-i4.png'),
          imageAlt: 'BADA DOST i4',
          price: ' ₹ 10,45,000*',
        },
        {
          name: 'DOST+',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp',
          href: '/dost-plus-on-road-price-in-hyderabad',
          imageSrc: require('../../img/new-thumbnails/dost-plus.png'),
          imageAlt: 'DOST+',
          price: '₹ 11,29,000*',
        },

        {
          name: 'DOST STRONG',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-logo.webp',
          href: '/dost-strong-on-road-price-in-hyderabad',
          imageSrc: require('../../img/new-thumbnails/dost-strong.png'),
          imageAlt: 'DOST STRONG',
          price: ' ₹ 8,99,500*',
        },
        {
          name: 'Dost LiTE',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png',
          href: '/dost-lite-on-road-price-in-hyderabad',
          imageSrc: require('../../img/new-thumbnails/dost-lite.png'),
          imageAlt: 'Dost LiTE',
          price: '₹ 6,49,000*',
        },
        {
          name: 'Dost CNG',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Ignis-logo.webp',
          href: '/dost-cng-on-road-price-in-hyderabad',
          imageSrc: require('../../img/new-thumbnails/dost-cng.png'),
          imageAlt: 'Dost CNG',
          price: '₹ 5,35,000*',
        },
      ],

      featured2: [
        {
          name: 'Partner 6 Type',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp',
          href: '/maruti-invicto-price-in-hyderabad',
          imageSrc:"https://autozone-2024.netlify.app/static/media/partner-6-tyre.f94bb08ea63cefaa9531.webp",
          imageAlt: 'Partner 6 Type',
          price: '₹ 24,79,000*',
        },
        {
          name: 'Partner 4 Tyre',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/maruti-fronx-price-in-hyderabad',
          imageSrc: "https://autozone-2024.netlify.app/static/media/partnet-4-tyre.85a2b5ff8aacad042802.webp",
          imageAlt: 'Partner 4 Tyre',
          price: '₹ 7,46,500*',
        },
      ],
      featured3: [
        {
          name: 'School Bus',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp',
          href: '/school-bus',
          imageSrc: "https://autozone-2024.netlify.app/static/media/02_MiTR-Staff-Bus_Banner-Mobile-360x288px.bea8ee0265d3a4d9fe9a.jpg",
          imageAlt: 'School Bus',
          price: '₹ 24,79,000*',
        },
        {
          name: 'Staff Bus',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/staff-bus',
          imageSrc: "https://autozone-2024.netlify.app/static/media/MiTR-School-Bus_Banner-Mobile-360x288px.575a84a913c4648c0d3d.jpg",
          imageAlt: 'Staff Bus',
          price: '₹ 27,46,500*',
        },
      ],
    },
  ],

  servicepages: [
    {
      name: 'Insurance',
      to: '/insurance',
    },
    {
      name: 'Finance',
      to: '/finance',
    },
  ],

  outlets: [
    {
      name: 'Showrooms',
      to: '/showrooms',
    },
    {
      name: 'Workshop',
      to: '/workshop',
    },
  ],
  more: [
    {
      name: 'CNG',
      to: '/cng',
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MainHeader2({ category, menuoption }) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={navbar ? 'bg-white px-0 border' : 'bg-white px-3 border'}>
      {/* Mobile menu */}
      {open && (
  <div className="fixed inset-0 z-50 flex lg:hidden">
    {/* Overlay */}
    <div
      className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    ></div>

    {/* Drawer Panel */}
    <div className="relative z-50 w-4/5 max-w-xs overflow-y-auto transition-transform duration-300 ease-in-out transform bg-white shadow-xl">
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setOpen(false)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="px-6 pb-6 space-y-2">
        <Link
          to="/"
          className="block px-3 py-2 text-base font-medium text-gray-900 transition rounded-md hover:bg-gray-100"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="block px-3 py-2 text-base font-medium text-gray-900 transition rounded-md hover:bg-gray-100"
        >
          About Us
        </Link>

        {/* Dropdown Categories */}
        {navigation.categories.map((category) => (
          <Popover key={category.name} className="w-full">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    'flex w-full justify-between items-center px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md transition',
                    open && 'text-red-600'
                  )}
                >
                  <span>{category.name}</span>
                  <ChevronDownIcon
                    className={classNames(
                      'h-5 w-5 transition-transform duration-200',
                      open && 'rotate-180 text-red-600'
                    )}
                  />
                </Popover.Button>

                <Transition
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel static className="pl-4 pr-2">
                    <div className="ml-2 space-y-1 border-l border-gray-200">
                      {category.featured.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-3 py-2 text-sm text-gray-700 transition rounded-md hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}

        <Link
          to="/contact"
          className="block px-3 py-2 text-base font-medium text-gray-900 transition rounded-md hover:bg-gray-100"
        >
          Contact
        </Link>
      </nav>
    </div>
  </div>
)}

      {/* Desktop, Tab Menu */}
      <div
        className={
          navbar
            ? 'fixed top-0 z-50 w-full bg-white shadow-2xl drop-shadow-2xl'
            : ''
        }
      >
        <header className='relative'>
          <nav aria-label='Top' className='container px-4 mx-auto'>
            <div className='border-gray-200'>
              <div className='flex items-center h-16'>
                {/* Logo */}
                <div className='flex ml-2 mr-auto lg:ml-0'>
                  <Link to='/'>
                    <img
                      className='w-auto h-12'
                       src={require('../../img/logo.webp')}
                      alt='logo'
                    />
                  </Link>
                </div>

                <button
                  type='button'
                  className='p-2 text-gray-200 rounded-md lg:hidden'
                  onClick={() => setOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='w-6 h-6' aria-hidden='true' />
                </button>

                {/* Flyout menus */}
                <Popover.Group className='hidden ml-auto lg:block lg:self-stretch'>
                  <div className='flex h-full space-x-8'>
                    <Link
                      key='Home'
                      to='/'
                      className='flex items-center text-sm font-medium text-black-200 hover:text-gray-400'
                    >
                      Home
                    </Link>
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className='flex'>
                        {({ open }) => (
                          <>
                            <div className='relative flex'>
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-red-600 text-red-600'
                                    : 'border-transparent text-black-200 hover:text-red-400',
                                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none'
                                )}
                              >
                                {category.name}
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'text-red-600' : 'text-black-200',
                                    'ml-1 h-4 w-4 group-hover:text-black-200'
                                  )}
                                />
                              </Popover.Button>
                            </div>

                            <Transition
                              as={React.Fragment}
                              enter='transition ease-out duration-200'
                              enterFrom='opacity-0'
                              enterTo='opacity-100'
                              leave='transition ease-in duration-150'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Popover.Panel className='absolute inset-x-0 z-10 text-sm text-red-500 shadow top-full'>
                                <div
                                  className='absolute inset-0 top-1/1'
                                  aria-hidden='true'
                                />

                                <div className='relative bg-white'>
                                  <div className='container px-8 mx-auto'>
                                    <div className='flex'>
                                      {/* Tabs on the left */}
                                      <div className='w-1/4 p-6'>
                                        {tabs.map((tab) => (
                                          <div
                                            key={tab}
                                            className={`cursor-pointer p-3 mb-4 text-lg rounded-3xl ${
                                              activeTab === tab
                                                ? 'bg-red-100 text-black font-semibold'
                                                : 'hover:bg-red-100 text-gray-400'
                                            }`}
                                            onClick={() => setActiveTab(tab)}
                                          >
                                            {tab}
                                          </div>
                                        ))}
                                      </div>

                                      {/* Main content on the right */}
                                      <div className='w-3/4 p-4'>
                                        {activeTab === tabs[0] && (
                                          <div>
                                            <div className='flex justify-between'>
                                              <div className='text-3xl text-[#9E2A31]'>
                                                SCV Goods Carrier
                                              </div>
                                              <div className='ml-auto'>
                                                <HashLink
                                                  to ='/allvehicles#scvgc'
                                                  className='relative inline-flex items-center px-8 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A31] rounded-full hover:text-white group hover:bg-gray-50'
                                                >
                                                  <span className='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                                                  <span className='absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                                                    <svg
                                                      className='w-4 h-4'
                                                      fill='none'
                                                      stroke='currentColor'
                                                      viewBox='0 0 24 24'
                                                      xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                      <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                                                      ></path>
                                                    </svg>
                                                  </span>
                                                  <span className='relative'>
                                                    View All
                                                  </span>
                                                </HashLink>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 py-6'>
                                              {category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className='relative p-2 text-base rounded-lg group sm:text-sm hover:bg-gradient-to-tr from-white via-stone-200 to-white'
                                                >
                                                  <div className='p-3 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 group-hover:scale-110'>
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className='object-cover object-center mx-auto'
                                                    />
                                                  </div>
                                                  <Link
                                                    to={item.href}
                                                    className='block mt-6 font-medium text-center text-gray-900'
                                                  >
                                                    <span
                                                      className='absolute inset-0 z-10'
                                                      aria-hidden='true'
                                                    />
                                                    {item.name}
                                                  </Link>
                                                  <p
                                                    aria-hidden='true'
                                                    className='mt-1 text-center text-gray-900'
                                                  >
                                                    <span>
                                                      <b>{item.price}</b>
                                                    </span>
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        )}

                                        {activeTab === tabs[1] && (
                                          <div>
                                            <div className='flex justify-between'>
                                              <div className='text-3xl text-[#9E2A31]'>
                                                LCV Goods Carrier
                                              </div>
                                              <div className='ml-auto'>
                                                <HashLink
                                                  to='/allvehicles#lcvgc'
                                                  smooth={true}
                                                  duration={500}
                                                  className='relative inline-flex items-center px-8 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A31] rounded-full hover:text-white group hover:bg-gray-50'
                                                >
                                                  <span className='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                                                  <span className='absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                                                    <svg
                                                      className='w-4 h-4'
                                                      fill='none'
                                                      stroke='currentColor'
                                                      viewBox='0 0 24 24'
                                                      xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                      <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                                                      ></path>
                                                    </svg>
                                                  </span>
                                                  <span className='relative'>
                                                    View All
                                                  </span>
                                                </HashLink>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 py-6'>
                                              {category.featured2.map(
                                                (item) => (
                                                  <div
                                                    key={item.name}
                                                    className='relative p-2 text-base rounded-lg group sm:text-sm hover:bg-gradient-to-tr from-white via-stone-200 to-white'
                                                  >
                                                    <div className='p-3 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 group-hover:scale-110'>
                                                      <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        className='object-cover object-center mx-auto'
                                                      />
                                                    </div>
                                                    <Link
                                                      to={item.href}
                                                      className='block mt-6 font-medium text-center text-gray-900'
                                                    >
                                                      <span
                                                        className='absolute inset-0 z-10'
                                                        aria-hidden='true'
                                                      />
                                                      {item.name}
                                                    </Link>
                                                    <p
                                                      aria-hidden='true'
                                                      className='mt-1 text-center text-gray-900'
                                                    >
                                                      <span>
                                                        <b>{item.price}</b>
                                                      </span>
                                                    </p>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}

                                        {activeTab === tabs[2] && (
                                          <div>
                                            <div className='flex justify-between'>
                                              <div className='text-3xl text-[#9E2A31]'>
                                                LCV Passenger
                                              </div>
                                              <div className='ml-auto'>
                                                <HashLink
                                                  to='/allvehicles#lcvpc'
                                                  className='relative inline-flex items-center px-8 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A31] rounded-full hover:text-white group hover:bg-gray-50'
                                                >
                                                  <span className='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                                                  <span className='absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                                                    <svg
                                                      className='w-4 h-4'
                                                      fill='none'
                                                      stroke='currentColor'
                                                      viewBox='0 0 24 24'
                                                      xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                      <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                                                      ></path>
                                                    </svg>
                                                  </span>
                                                  <span className='relative'>
                                                    View All
                                                  </span>
                                                </HashLink>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 py-6'>
                                              {category.featured3.map(
                                                (item) => (
                                                  <div
                                                    key={item.name}
                                                    className='relative p-2 text-base rounded-lg group sm:text-sm hover:bg-gradient-to-tr from-white via-stone-200 to-white'
                                                  >
                                                    <div className='p-3 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 group-hover:scale-110'>
                                                      <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        className='object-cover object-center mx-auto'
                                                      />
                                                    </div>
                                                    <Link
                                                      to={item.href}
                                                      className='block mt-6 font-medium text-center text-gray-900'
                                                    >
                                                      <span
                                                        className='absolute inset-0 z-10'
                                                        aria-hidden='true'
                                                      />
                                                      {item.name}
                                                    </Link>
                                                    <p
                                                      aria-hidden='true'
                                                      className='mt-1 text-center text-gray-900'
                                                    >
                                                      <span>
                                                        <b>{item.price}</b>
                                                      </span>
                                                    </p>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                    <Link
                      key='About'
                      to='/about'
                      className='flex items-center text-sm font-medium hover:text-red-400'
                    >
                      About Us
                    </Link>
                    <Popover className='relative'>
                      {/* Solutions section */}
                      <Popover.Button className='flex items-center mt-4 text-sm font-medium text-black-200 hover:text-red-400'>
                        Services
                        <ChevronDownIcon className='w-4 h-4 ml-1' />
                      </Popover.Button>
                      <Transition
                        as={React.Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Popover.Panel className='absolute z-10 max-w-sm mt-3 -ml-12 transform lg:max-w-md'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 p-6 bg-white'>
                              <Link
                                to='/finance'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Finance
                              </Link>
                              <Link
                                to='/insurance'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Insurance
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      {/* Solutions section */}
                      <Popover.Button className='flex items-center mt-4 text-sm font-medium text-black-200 hover:text-red-400'>
                        Outlets
                        <ChevronDownIcon className='w-4 h-4 ml-1' />
                      </Popover.Button>
                      <Transition
                        as={React.Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Popover.Panel className='absolute z-10 max-w-sm mt-3 -ml-12 transform lg:max-w-md'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 p-6 bg-white'>
                              <Link
                                to='/outlet'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Showrooms
                              </Link>
                              <Link
                                to='/insurance'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Service Center
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Link
                      to='/contact'
                      className='flex items-center text-sm font-medium hover:text-red-400'
                    >
                      Contact
                    </Link>
                  </div>
                </Popover.Group>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default MainHeader2;


