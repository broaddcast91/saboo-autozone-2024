import dostBanner from '../img/dost-banner.webp';

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

export const badaDostI4Specs = [
  { icon: power, label: 'POWER', value: '80 HP' },
  { icon: gvw, label: 'GVW', value: '3490 Kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2590 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '50 Ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1860 Kg' },
];

export const badaDostI4Specs1 = [
  {
    title: 'Engine',
    rows: [
      {
        label: 'Engine',
        value: '1.5 Liters, 4 Cylinder Diesel Engine BS VI compliant',
      },
      {
        label: 'Type',
        value: 'Turbo Charged Intercooled with Lean NOx Trap (LNT)',
      },
      { label: 'Displacement/Cubic Capacity', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm', value: '85 HP @ 3,400 RPM' },
      { label: 'Maximum Torque @ rpm', value: '200 Nm @ 1600-2600 RPM' },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'Top Speed (in kmph)', value: '85 kmph' },
      { label: 'Gradeability (Re-Start)', value: '~25 %' },
    ],
  },
  {
    title: 'Clutch',
    rows: [
      {
        label: 'Clutch',
        value: '250 mm, Single, Diaphragm push type, Cable operated',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      {
        label: 'Gear Box',
        value: 'Fully synchronized 6 Speed, Manual with Cable Shift',
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
        value: 'Over slung Semi Elliptic (3+3 Leaves) – 2 Stage',
      },
      { label: 'Front', value: 'Over slung Parabolic (3 Leaves) – 2 Stage' },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres', value: '7.50 R16 LT –14PR (Tube type)' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW) in kg's", value: '3700' },
      { label: "Payload (FSD LS variant) in kg's", value: '1900' },
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
    rows: [{ label: 'Capacity', value: '55 Ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm)', value: '2650' },
      { label: 'Overall length (in mm)', value: '5100' },
      { label: 'Overall width (in mm)', value: '1870' },
      { label: 'Overall Height (in mm)', value: '2080' },
      {
        label: 'Load body dimension (FSD) – L x B x H',
        value: '3000 x 1800 x 500 in mm | 9 ft 10 in x 5 ft 11 in x 1 ft 8 in',
      },
      { label: 'Loading platform height', value: '950 mm (3.12 Feet)' },
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

function Dosti4() {
  return (
    <>
      <SEO
        title='Ashok Leyland Bada Dost i4 – August Monsoon Festive Offers 2025 | Huge Discounts & Best On-Road Price in Hyderabad | Saboo AutoZone'
        description='Ashok Leyland Bada Dost i4 is now available with exclusive August Monsoon Festive Offers 2025 in Hyderabad! On-road price starts from ₹10 lakh. Enjoy huge discounts, powerful performance, and top-class mileage. Call 91002 55555 today for unbeatable festive deals at Saboo AutoZone!'
        keywords='Ashok Leyland Bada Dost i4 August Offers 2025, Bada Dost i4 Monsoon Festive Discounts Hyderabad, Ashok Leyland Bada Dost i4 On-Road Price Hyderabad, Bada Dost i4 Price 2025, Ashok Leyland Bada Dost i4 Best Deals, Bada Dost i4 Features Mileage & Specifications, Ashok Leyland Small Commercial Vehicle Offers 2025, Saboo AutoZone Truck Discounts, Huge Discounts on Ashok Leyland Bada Dost i4, Best Festive Offers Ashok Leyland Bada Dost i4 Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i4.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostBanner}
        altText='Ashok Leyland Bada Dost i4 Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Bada Dost i4 on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/Ashok-Leyland-Bada-Dost-i4-Price-in-Hyderabad.webp')}
          modelName='BADA DOST i4'
          brand='Ashok Leyland'
          price='Starting ₹ 10 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Bada-Dost-i4-Brochure.pdf'
          description='BADA DOST i4 is the big friend that delivers and connects people and business together - right from the doorstep of clients to reaching the door step of end users, navigating through city lanes and highways with equal ease; the BADA DOST is the ideal friend. Powered by the latest i-GEN6 technology, BADA DOST is holistically designed and helps you grow your business profitably and enhance quality of life. The BADA DOST is all set to create a paradigm shift in the customer experience with its future ready and many industry-first customer-centric offerings.'
          colors={['#fff', '#f1ddb7', '#1a4797', '#8a8c8e']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Bada Dost i4 BS6 Specifications and Features'
          specsList={badaDostI4Specs}
        />
        <VehicleForm
          title='Get On Road Price of Bada Dost i4'
          image={require('../img/vehicles/Ashok-Leyland-Bada-Dost-i4-Mileage.webp')}
        />
        <TechnicalSpecifications
          specsData={badaDostI4Specs1}
          title='Ashok Leyland Bada Dost i4 BS6 Technical Specifications'
        />

        <Footer />
      </div>
    </>
  );
}

export default Dosti4;
