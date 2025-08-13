import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import badaDostI2Banner from '../../src/img/bada-dost-i2-banner.webp';
// data/badaDostI2Specs.js
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

export const badaDostI2Specs = [
  { icon: power, label: 'POWER', value: '80 HP' },
  { icon: gvw, label: 'GVW', value: '2880 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2510 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '40 ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1425 kg' },
];

export const dostPlusSpecs = [
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
    rows: [{ label: 'Top Speed (in mm)', value: '80 kmph' }],
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
        value: 'Fully synchronized 5 Speed, Manual with Sliding Mesh',
      },
      { label: 'PTO Provision', value: 'Yes' },
    ],
  },
  {
    title: 'Steering',
    rows: [{ label: 'Type', value: 'Power Assisted' }],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type', value: 'Hydraulic Vacuum assisted brakes' },
      { label: 'Front', value: 'Disc' },
      { label: 'Rear', value: 'Drum' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      { label: 'Type', value: 'Over slung Parabolic' },
      { label: 'Front', value: 'Over slung Semi Elliptic -2 Stage' },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres', value: '195 R15 LT (Tubeless)' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW)in kg's", value: '2880' },
      { label: "Payload (FSD LS variant)in kg's", value: '1425' },
    ],
  },
  {
    title: 'Seating Capacity',
    rows: [
      {
        label: 'Capactiy',
        value: '3 seater - ARAI certified (1 Driver + 2 Co-driver)',
      },
    ],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [{ label: 'Capacity', value: '40 ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm)', value: '2510' },
      { label: 'Overall length (in mm)', value: '4818' },
      { label: 'Overall width (in mm)', value: '1842' },
      { label: 'Overall Height (in mm)', value: '2056' },
      {
        label: 'Load body dimension (FSD) – L x B x H',
        value: '2745 x 1750 x 440 in mm | 9.0 x 5.7 x 1.4',
      },
      { label: 'Loading platform height', value: '920 mm (3 Feet)' },
    ],
  },
  {
    title: 'Load Body Option',
    rows: [
      { label: 'Standard Bodies', value: 'FSD' },
      { label: 'Other Bodies', value: '' },
    ],
  },
];

function Dosti2() {
  return (
    <>
      <SEO
        title='Ashok Leyland Bada Dost i2 – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo AutoZone'
        description='Explore the best August Monsoon Festive Offers 2025 on Ashok Leyland Bada Dost i2 in Hyderabad. Avail huge discounts, unbeatable pricing, and feature-packed performance. On-road price starts from ₹8.75 lakh. Also available in i1, i3, and i4 variants. Call 91002 55555 for best deals today!'
        keywords='Ashok Leyland Bada Dost i2 August Offers 2025, Bada Dost i2 Monsoon Festive Discounts Hyderabad, Ashok Leyland Bada Dost i2 On-Road Price 2025, Bada Dost i2 Truck Price in Hyderabad, Best Ashok Leyland Bada Dost i2 Deals, Bada Dost i2 Features Mileage & Specifications, Ashok Leyland Small Commercial Vehicle Offers 2025, Bada Dost i2 Festive Season Offers, Saboo AutoZone Ashok Leyland Truck Discounts, Ashok Leyland Bada Dost i2 Huge Discounts Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i3.jpg'
      />

      <Header />
      <Banner
        imageSrc={badaDostI2Banner}
        altText='Ashok Leyland Bada Dost i2 Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Bada Dost i2 Ex-Showroom price in Hyderabad'
      />
      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/i2-thumb-2.webp')}
          modelName='BADA DOST i2'
          brand='Ashok Leyland'
          price='Starting from ₹ 9 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i2-brochure.pdf'
          description="The BADA DOST i2 is a big buddy that provides excellence and links people and businesses - from customers' doorsteps to end users' doorsteps, navigating through congested city streets or traffic and highways with equal ease; the BADA DOST is the right partner. BADA DOST is a comprehensively built system that helps you expand your business successfully while also improving your quality of life. It is powered by the newest i-GEN6 technology. With its future-ready and numerous industry-first and customer-centric solutions, the BADA DOST is all set to embark on a dramatic transformation in customer experience."
          colors={['#fff', '#f1ddb7', '#1a4797', '#8a8c8e']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Bada Dost i2 BS6 Specifications and Features'
          specsList={badaDostI2Specs}
        />
        <VehicleForm
          title='Get On Road Price of Bada Dost i2'
          image={require('../img/vehicles/i2-thumb-1.webp')}
        />
        <TechnicalSpecifications
          specsData={dostPlusSpecs}
          title='Ashok Leyland Dost+ Diesel BS6 Technical Specifications'
        />
      </div>
      <Footer />
    </>
  );
}

export default Dosti2;
