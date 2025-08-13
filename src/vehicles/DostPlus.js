import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import dostPlusBanner from '../img/dost-plus-banner-with-logo.webp';

import power from '../img/power.webp';
import gvw from '../img/gvw.webp';
import wheelbase from '../img/wheel-base.webp';
import engine from '../img/engine.webp';
import fuel from '../img/fuel.webp';
import payload from '../img/payload.webp';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';
import { TechnicalSpecifications } from '../components/vehiclereusable/TechnicalSpecifications';
import { VehicleIntroCard } from '../components/vehiclereusable/VehicleIntroCard';
import VehicleForm from '../components/VehicleForm/vehicleForm';

export const dostPlusSpecs = [
  { icon: power, label: 'POWER', value: '80 HP' },
  { icon: gvw, label: 'GVW', value: '2805 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2510 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '40 ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1500 kg' },
];

const dostPlusSpecs1 = [
  {
    title: 'Engine',
    rows: [
      {
        label: 'Engine :',
        value: '1.5 Liters, 3 Cylinder Diesel Engine BS VI',
      },
      {
        label: 'Type',
        value: 'Turbo Charged Diesel Common Rail (TDCR) Engine',
      },
      { label: 'Displacement/Cubic Capacity : ', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm : ', value: '70 HP @ 3,300 RPM' },
      { label: 'Maximum Torque @ rpm : ', value: '170 Nm @ 1600-2400 RPM' },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'Top Speed (in mm) : ', value: '80 kmph' },
      { label: 'Gradeability (Re-Start) : ', value: '~28.3%' },
    ],
  },
  {
    title: 'Clutch',
    rows: [
      {
        label: 'Clutch : ',
        value:
          '240 mm Diameter, Diaphragm, Single Dry Plate, Mechanical Cable Operated',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      {
        label: 'Type/No. of gears : ',
        value:
          'Fully synchromesh, 5 speed Manual Gearbox (5 Forward, 1 Reverse)',
      },
      { label: 'Gear shifting : ', value: 'Cable Shift' },
    ],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type : ', value: 'Vacuum assisted Hydraulic brakes with LSPV' },
      { label: 'Front : ', value: 'Ventilated Disc Type' },
      { label: 'Rear :', value: 'Drum' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      {
        label: 'Front : ',
        value: 'Independent Suspension with Double Wishbone',
      },
      {
        label: 'Rear : ',
        value: 'Transverse Leaf Spring Parabolic Overslung suspension',
      },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres : ', value: '185 R14 LT, 8PR, Radial' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW) in kg's : ", value: '2590' },
      { label: "Rated Payload in kg's : ", value: '1250' },
    ],
  },
  {
    title: 'Seating Capacity',
    rows: [{ label: 'Seating : ', value: 'Driver + 1' }],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [{ label: 'Capacity : ', value: '40 ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm) : ', value: '2350' },
      { label: 'Overall length (in mm) : ', value: '4485' },
      { label: 'Overall width (in mm) : ', value: '1670' },
      { label: 'Overall Height (in mm) : ', value: '1835' },
      {
        label: 'Load body dimension (FSD) – L x B x H : ',
        value: '2500mm x 1620mm x 440mm (8.2ft x 5.3ft x 1.25ft)',
      },
      { label: 'Loading platform height :', value: '840 mm' },
    ],
  },
];

function DostPlus() {
  return (
    <>
      <SEO
        title='Ashok Leyland Dost Plus – August Monsoon Festive Offers 2025 | Huge Discounts & Best On-Road Price in Hyderabad | Saboo AutoZone'
        description='Ashok Leyland Dost Plus is now available with exciting August Monsoon Festive Offers 2025 in Hyderabad! On-road price starts from ₹8 lakh. Avail huge discounts, top features, and unmatched performance. Visit Saboo AutoZone or call 91002 55555 for the best commercial vehicle deals.'
        keywords='Ashok Leyland Dost Plus August Offers 2025, Dost Plus Monsoon Festive Discounts Hyderabad, Ashok Leyland Dost Plus On-Road Price in Hyderabad, Dost Plus Price 2025, Ashok Leyland Dost Plus Best Deals, Dost Plus Mileage & Specifications, Dost Plus Truck Features & Discounts, Ashok Leyland Light Commercial Vehicle Offers 2025, Saboo AutoZone Truck Discounts, Huge Discounts on Ashok Leyland Dost Plus Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-plus.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostPlusBanner}
        altText='Ashok Leyland Dost Plus Banner'
        breadcrumbTitle='Light Commercial Vehicles (LCV) / Ashok Leyland Dost Plus on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/dost-plus-image-1.webp')}
          modelName='DOST Plus'
          brand='Ashok Leyland'
          price='Starting from ₹ 8 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/DOST-Plus-May-2023-_No-7859.pdf'
          description="Ashok Leyland recognizes that a country's economic stability is dependent on the safe and timely delivery of commodities, and designs vehicles that make this possible in the long run. DOST, an award-winning light commercial vehicle from Ashok Leyland, with i-GEN6 technology, alongside the payload of 1500kgs, it is a suitable vehicle for transporting items carried off larger trucks through crowded city highways and across difficult terrains to even the most distant corners of the country. DOST's car-like simplicity of use and fuel economy make it a practical alternative for navigating through narrower lanes and guaranteeing consumer items are delivered to their doorstep."
          colors={['#fff', '#f1ddb7', '#1a4797']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Dost Plus Specifications and Features'
          specsList={dostPlusSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Dost Plus'
          image={require('../img/vehicles/dost-plus-image02.webp')}
        />
        <TechnicalSpecifications
          specsData={dostPlusSpecs1}
          title='Dost Plus Technical Specifications'
        />
      </div>
      <Footer />
    </>
  );
}

export default DostPlus;
