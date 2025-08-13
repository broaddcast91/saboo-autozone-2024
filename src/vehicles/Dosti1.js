import badaDostI1Banner from '../img/badadost-i1-banner.webp';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';

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

export const badaDostI1Specs = [
  { icon: power, label: 'POWER', value: '80 HP' },
  { icon: gvw, label: 'GVW', value: '2652 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2350 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '40 ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1250 kg' },
];

export const dieselSpecs = [
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
        value: '215 mm, Single, Diaphragm push type, Cable operated',
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
      { label: 'PTO Provision', value: 'No' },
    ],
  },
  {
    title: 'Steering',
    rows: [{ label: 'Type', value: 'Power Assisted' }],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type', value: 'Hydraulic Vacuum Assisted Brakes' },
      { label: 'Front', value: 'Ventilated Discs' },
      { label: 'Rear', value: 'Drum' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      { label: 'Type', value: 'Over-slung Semi-elliptic' },
      { label: 'Front', value: 'Over-slung Parabolic' },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres', value: '185 R14 LT (Tubeless)' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW)in kg's", value: '2652' },
      { label: "Payload (FSD LS variant)in kg's", value: '1250' },
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
      { label: 'Wheelbase (in mm)', value: '2350' },
      { label: 'Overall length (in mm)', value: '4671' },
      { label: 'Overall width (in mm)', value: '1793' },
      { label: 'Overall Height (in mm)', value: '2018' },
      {
        label: 'Load body dimension (FSD) – L x B x H',
        value: '2596 x 1750 x 440 in mm | 8.5 x 5.7 x 1.4 ft',
      },
      { label: 'Loading platform height', value: '810 mm (2.7 Feet)' },
    ],
  },
  {
    title: 'Load Body Option',
    rows: [
      { label: 'Standard Bodies', value: 'FSD' },
      { label: 'Other Bodies', value: '-' },
    ],
  },
];

function Dosti1() {
  return (
    <>
      <SEO
        title='Ashok Leyland Bada Dost i1 – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo AutoZone'
        description='Unlock August Monsoon Festive Offers 2025 on the Ashok Leyland Bada Dost i1 in Hyderabad! Best-in-class mileage, advanced features & powerful performance. On-road price starts from ₹8.75 lakh. Avail huge discounts on i1, i2, i3, and i4 variants. Call 91002 55555 for the best deals now!'
        keywords='Ashok Leyland Bada Dost i1 August Offers 2025, Bada Dost i1 Monsoon Festive Discounts Hyderabad, Ashok Leyland Bada Dost i1 On-Road Price 2025, Bada Dost i1 i2 i3 i4 Price in Hyderabad, Best Ashok Leyland Bada Dost i1 Deals, Bada Dost i1 Mileage & Specifications, Ashok Leyland Small Commercial Vehicle Festive Offers, Bada Dost i1 Truck Features Discounts, Saboo AutoZone Ashok Leyland Offers, Best Price Bada Dost i1 August 2025'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i3.jpg'
      />

      <Header />

      <Banner
        imageSrc={badaDostI1Banner}
        altText='Ashok Leyland Bada Dost i1 Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Bada Dost i1 on road price in Hyderabad'
      />
      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/dost-i1-p1.webp')}
          modelName='BADA DOST i1'
          brand='Ashok Leyland'
          price='Starting from ₹ 9 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i1-brochure.pdf'
          description="The BADA DOST i1 is a big buddy that provides excellence and links people and businesses - from customers' doorsteps to end users' doorsteps. With i-GEN6 technology and future-ready features, it helps grow your business while improving life quality."
          colors={['#fff', '#f1ddb7', '#1a4797', '#8a8c8e']}
        />

        {/* <TitleWithImg /> */}
        <VehicleSpecsCard
          specsTitle='Ashok Leyland Bada Dost i1 BS6 Specifications and Features'
          specsList={badaDostI1Specs}
        />
        <VehicleForm
          title='Get On Road Price of Bada Dost i1'
          image={require('../img/vehicles/dost-i1-p2.webp')}
        />
        <TechnicalSpecifications
          specsData={dieselSpecs}
          title='Ashok Leyland Dost Diesel BS6 Technical Specifications'
        />
        <Footer />
      </div>
    </>
  );
}

export default Dosti1;
