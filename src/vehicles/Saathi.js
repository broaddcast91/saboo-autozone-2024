import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import saathiBanner from '../../src/img/saathi/banner_saathi.png';
import { VehicleIntroCard } from '../components/vehiclereusable/VehicleIntroCard';
import saathiImg from '../../src/img/saathi/SAATHI-PHOTO.png';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';
import powerIcon from '../img/power.webp';
import gvwIcon from '../img/gvw.webp';
import engineIcon from '../img/engine.webp';
import fuelIcon from '../img/fuel.webp';
import payloadIcon from '../img/payload.webp';
import wheelBaseIcon from '../img/wheel-base.webp';
import { TechnicalSpecifications } from '../components/vehiclereusable/TechnicalSpecifications';
import VehicleForm from '../components/VehicleForm/vehicleForm';

const saathiSpecs = [
  {
    title: 'Engine',
    rows: [
      {
        label: 'Engine',
        value: '1.5 Litres, Turbo Charged, 3 Cylinder Diesel Engine',
      },
      { label: 'Type', value: 'Diesel' },
      { label: 'Displacement/Cubic Capacity', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm', value: '45 HP at 3300 RPM' },
      { label: 'Maximum Torque @ rpm', value: '110Nm at 1000-2400 RPM' },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'Top Speed', value: '80 kmph' },
      { label: 'Gradeability (Re-Start)', value: '~23.2%' },
    ],
  },
  {
    title: 'Clutch',
    rows: [
      {
        label: 'Clutch',
        value: '215mm Dry Type, Single plate/Mechanical actuation',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      { label: 'Gear Box', value: '5F+1R Manual Gearbox' },
      { label: 'Gear Shifting', value: 'Cable Shift' },
    ],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type', value: 'Vacuum Assisted Hydraulic brake with LSPV' },
      { label: 'Front, Rear', value: 'Disc Type, Drum Type' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      {
        label: 'Front',
        value: 'Parabolic Leaf spring (2L) with double acting Shock absorber',
      },
      {
        label: 'Rear',
        value: 'Parabolic Leaf spring (3L) with double acting Shock absorber',
      },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres', value: '165 R14 LT, 8PR' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: 'Gross Vehicle Weight (GVW)', value: '2288 kg' },
      { label: 'Rated Payload', value: '1120 kg' },
    ],
  },
  {
    title: 'Seating Capacity',
    rows: [{ label: 'Capacity', value: 'Driver + 1' }],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [{ label: 'Capacity', value: '40 ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase', value: '2250 mm' },
      { label: 'Overall length', value: '4406 mm' },
      { label: 'Overall Width', value: '1663 mm' },
      { label: 'Overall Height', value: '1833 mm' },
      {
        label: 'Load Body/Cargo Deck (L x W x H)',
        value: '2500 X 1620 X 380 mm (8 ft 2 in X 5 ft 3 in X 1 ft 2 in)',
      },
      { label: 'Loading Height', value: '835 mm' },
    ],
  },
];

const saathiSpecs1 = [
  { icon: powerIcon, label: 'POWER', value: '45 HP' },
  { icon: gvwIcon, label: 'GVW', value: '2288 kg' },
  { icon: wheelBaseIcon, label: 'WHEEL BASE', value: '2250 mm' },
  { icon: engineIcon, label: 'ENGINE', value: '1478 cc' },
  { icon: fuelIcon, label: 'FUEL TANK', value: '40 ltrs' },
  { icon: payloadIcon, label: 'PAYLOAD', value: '1120 kg' },
];
export const Saathi = () => {
  return (
    <div>
      <SEO
        title='Ashok Leyland Saathi On-Road Price in Hyderabad | August Monsoon Festive Offers 2025 & Huge Discounts | Saboo AutoZone'
        description='Ashok Leyland Saathi on-road price in Hyderabad starts from ₹8 lakh. Avail massive August Monsoon Festive 2025 discounts only at Saboo AutoZone. Explore top features, mileage, specifications, and the best commercial vehicle offers today. Call 91002 55555 for more info!'
        keywords='Ashok Leyland Saathi August Offers 2025, Ashok Leyland Saathi Monsoon Festive Discounts, Saathi On-Road Price Hyderabad 2025, Ashok Leyland Saathi Mileage & Features, Ashok Leyland Saathi Price List Hyderabad, Best Ashok Leyland Saathi Deals, Commercial Vehicle Offers 2025 Hyderabad, Ashok Leyland Light Truck Price in Hyderabad, Ashok Leyland Saathi Payload Specs, Saboo AutoZone Ashok Leyland Saathi Best Offers'
        image='../../src/img/saathi/banner_saathi.png'
      />

      <Header />

      <Banner
        imageSrc={saathiBanner}
        altText='Ashok Leyland Saathi Banner'
        breadcrumbTitle='Light Commercial Vehicles (LCV) / Ashok Leyland Saathi on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={saathiImg}
          modelName='SAATHI'
          price='Starting from ₹ 6.79'
          description="Ashok Leyland recognizes that a country's economic stability is dependent on the safe and timely delivery of commodities, and designs vehicles that make this possible in the long run. SAATHI, an award-winning light commercial vehicle from Ashok Leyland, with i-GEN6 technology, alongside the payload of 1120kgs, it is a suitable vehicle for transporting items carried off larger trucks through crowded city highways and across difficult terrains to even the most distant corners of the country. SAATHI's car-like simplicity of use and fuel economy make it a practical alternative for navigating through narrower lanes and guaranteeing consumer items are delivered to their doorstep."
          colors={['#ffffff', '#00ffff']}
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/SAATHI-Brochure_Updated.pdf'
        />
        <VehicleSpecsCard
          specsTitle='Ashok Leyland Saathi Specifications and Features'
          specsList={saathiSpecs1}
        />

        <VehicleForm
          title='Get On Road Price of Saathi'
          image={require('../../src/img/saathi/banner_saathi.png')}
        />
        <TechnicalSpecifications
          specsData={saathiSpecs}
          title='Ashok Leyland Saathi Technical Specifications'
        />
      </div>
      <Footer />
    </div>
  );
};
