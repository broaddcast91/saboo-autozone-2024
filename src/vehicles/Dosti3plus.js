import { Button } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import dostI3PlusBanner from '../img/Dosti3+_banner.webp';

import power from '../img/power.webp';
import gvw from '../img/gvw.webp';
import wheelbase from '../img/wheel-base.webp';
import engine from '../img/engine.webp';
import fuel from '../img/fuel.webp';
import payload from '../img/payload.webp';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';
import { TechnicalSpecifications } from '../components/vehiclereusable/TechnicalSpecifications';
import VehicleForm from '../components/VehicleForm/vehicleForm';

export const badaDostI3PlusSpecs = [
  { icon: power, label: 'POWER', value: '80 HP' },
  { icon: gvw, label: 'GVW', value: '2990 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2590 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '50 ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1370 kg' },
];

export const badaDostPlusSpecs = [
  {
    title: 'Engine',
    rows: [
      {
        label: 'Engine',
        value: '1.5 Liters, 3 Cylinder Diesel Engine BS VI compliant',
      },
      {
        label: 'Type',
        value: 'Turbo Charged Intercooled with Lean NOx Trap (LNT)',
      },
      { label: 'Displacement/Cubic Capacity', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm', value: '80 HP @ 3,300 RPM' },
      { label: 'Maximum Torque @ rpm', value: '190 Nm @ 1600-2400 RPM' },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'Top Speed (in mm)', value: '80 kmph' },
      // { label: "Gradeability (Re-Start)", value: "~28.3%" }, // commented out in your code
    ],
  },
  {
    title: 'Clutch',
    rows: [
      {
        label: 'Clutch',
        value: '240 mm, Single, Diaphragm push type, Cable operated',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      {
        label: 'Gear Box',
        value: 'Fully synchronized 5 Speed, Manual with Cable Shift',
      },
      { label: 'PTO Provision', value: 'Yes' },
    ],
  },
  {
    title: 'Steering',
    rows: [{ label: 'Type', value: 'Power Assisted, Tiltable Column' }],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type', value: 'Hydraulic Vacuum assisted brakes' },
      { label: 'Front', value: 'Ventilated Discs' },
      { label: 'Rear', value: 'Drum' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      {
        label: 'Type',
        value: 'Over-slung Semi-elliptic (3+3 Leaves) – 2 Stage',
      },
      { label: 'Front', value: 'Over-slung Parabolic (3 Leaves) – 2 Stage' },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres', value: '7.00 R15 LT -12PR (Tube type)' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW)in kg's", value: '2990' },
      { label: "Payload (FSD LS variant)in kg's", value: '1370' },
    ],
  },
  {
    title: 'Seating Capacity',
    rows: [
      {
        label: 'Capacity',
        value: '3 seater - ARAI certified (1 Driver + 2 Co-driver)',
      },
    ],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [{ label: 'Capacity', value: '50 ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm)', value: '2590' },
      { label: 'Overall length (in mm)', value: '4935' },
      { label: 'Overall width (in mm)', value: '1842' },
      { label: 'Overall Height (in mm)', value: '2061' },
      {
        label: 'Load body dimension (FSD) – L x B x H',
        value: '2860 X 1750 X 441 (9.5ft*5.9ft*1.5ft)',
      },
      { label: 'Loading platform height', value: '945 mm (3.1 Feet)' },
    ],
  },
  {
    title: 'Load Body Option',
    rows: [
      { label: 'Standard Bodies', value: 'CBC, FSD' },
      {
        label: 'Other Bodies',
        value: 'HSD, Container, Reefer body, Refuse collection',
      },
    ],
  },
];

function Dosti3plus() {
  return (
    <>
      <SEO
        title='Ashok Leyland Bada Dost i3 Plus – August Monsoon Festive Offers 2025 | Huge Discounts & Best On-Road Price in Hyderabad | Saboo AutoZone'
        description='Discover the Ashok Leyland Bada Dost i3 Plus with exclusive August Monsoon Festive Offers 2025 in Hyderabad! Avail huge discounts, superior mileage, and feature-loaded performance. On-road price starts from ₹8.75 lakh. Call 91002 55555 for the best festive deals at Saboo AutoZone today!'
        keywords='Ashok Leyland Bada Dost i3 Plus August Offers 2025, Bada Dost i3 Plus Monsoon Festive Discounts, Ashok Leyland Bada Dost i3 Plus On-Road Price Hyderabad, Bada Dost i3 Plus Truck Price 2025, Best Ashok Leyland Bada Dost i3 Plus Deals Hyderabad, i3 Plus Mileage & Features, Ashok Leyland Light Commercial Vehicle Offers 2025, Saboo AutoZone Truck Discounts, Huge Discounts Bada Dost i3 Plus Hyderabad, Ashok Leyland i3 Plus Festive Season Offers'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i3.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostI3PlusBanner}
        altText='Ashok Leyland Bada Dost i3+ Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Bada Dost i3+ on road price in Hyderabad'
      />

      <div className='container my-5'>
        <TitleWithImg />
        <VehicleSpecsCard
          specsTitle='Ashok Leyland Bada Dost i3+ BS6 Specifications and Features'
          specsList={badaDostI3PlusSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Bada Dost i3+'
          image={require('../img/dosti-i3-plus-white.png')}
        />
        <TechnicalSpecifications
          specsData={badaDostPlusSpecs}
          title='Ashok Leyland Bada Dost+ BS6 Technical Specifications'
        />
        <Footer />
      </div>
    </>
  );
}

const TitleWithImg = () => {
  function handleScrollToComponent() {
    const element = document.getElementById('onRoadPriceComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <div className='mb-2 row'>
        <div className='mb-3 overflow-hidden col-lg-6'>
          <img
            className='my-auto mw-100 w-100'
            src={require('../img/dosti-i3-plus-black.png')}
            alt='Bada-Dost-i3-plus'
          />
        </div>
        <div className='mb-3 col-lg-6 ps-4'>
          <h4>Ashok Leyland BADA DOST i3+ on road price in Hyderabad</h4>
          <h5>
            ₹ Coming Soon<sup>*</sup>
          </h5>
          <small className='text-secondary'>
            <sup>*</sup>Prices are subjected to change at anytime, final price
            will be shared at showroom.
          </small>
          {/* <p>
            <small className='text-primary'>
              <IoLocationOutline /> Hyderabad
            </small>
          </p> */}
          <small>
            BADA DOST i3+ is the big friend that delivers and connects people
            and business together – right from the doorstep of clients to
            reaching the door step of end users, navigating through city lanes
            and highways with equal ease; BADA DOST is the ideal friend. Powered
            by the latest i-GEN6 technology, BADA DOST is holistically designed
            and helps you grow your business profitably and enhance quality of
            life. BADA DOST is all set to create a paradigm shift in the
            customer experience with its future ready and many industry-first
            customer-centric offerings.
          </small>
          <p className='mt-2 d-flex fw-bold fst-italic'>
            Available Colors :
            <Button
              className='mx-2 border border-2 btn rounded-0'
              style={{ backgroundColor: '#fff' }}
            ></Button>
            {/* <Button
              className="border border-2 btn rounded-0 me-2"
              style={{ backgroundColor: "#f1ddb7" }}
            ></Button>
            <Button
              className="border border-2 btn rounded-0 me-2"
              style={{ backgroundColor: "#1a4797" }}
            ></Button>
            <Button
              className="border border-2 btn rounded-0 me-2"
              style={{ backgroundColor: "#8a8c8e" }}
            ></Button> */}
          </p>
          <div>
            <Button
              variant='outline-danger me-2 text-uppercase rounded-0'
              className='mb-1 btn-hover'
              style={{ border: '1px solid #9f2a2c', color: '#9f2a2c' }}
              onClick={handleScrollToComponent}
            >
              get on road price
            </Button>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/BADA-DOST-i3.pdf'
              target='_blank'
              className='mb-1 btn btn-danger text-uppercase rounded-0'
              style={{ backgroundColor: '#9f2a2c' }}
              rel='noreferrer'
            >
              <BsDownload /> download Brochure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dosti3plus;
