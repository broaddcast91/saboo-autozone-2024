import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import partner4TyreBanner from '../img/Ashok-Leyland-partner-4tyre-banner.webp';
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

export const partner4tSpecs = [
  {
    icon: power,
    label: 'POWER',
    value: '80 HP',
  },
  {
    icon: gvw,
    label: 'GVW',
    value: '10ft LB / 6250 Kg <br /> 14ft LB / — Kg',
  },
  {
    icon: wheelbase,
    label: 'WHEEL BASE',
    value: '10ft LB 2685 mm <br /> 14ft LB 3335 mm',
  },
  {
    icon: engine,
    label: 'ENGINE',
    value: '2953 cc',
  },
  {
    icon: fuel,
    label: 'FUEL TANK',
    value: '90 Ltrs',
  },
  {
    icon: payload,
    label: 'PAYLOAD',
    value: '10ft LB / 3760 Kg <br /> 14ft LB / 4565 Kg',
  },
];

export const partner4Specs = [
  {
    title: 'Variant',
    rows: [{ label: 'Variant :', value: '10 ft LB / 14 ft LB' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: 'Gross Vehicle Weight (kg) :', value: '6250 / 7200' },
      { label: 'Rated Payload (FSD) (kg) :', value: '3760 / 4565' },
    ],
  },
  {
    title: 'Load Body Dimensions',
    rows: [
      { label: 'Load Body Length (mm) :', value: '3160 / 4230' },
      { label: 'Load Body Width (mm) (HSD) :', value: '1960 / 2060' },
      { label: 'Side Deck Height (mm) :', value: 'FSD: 460 – HSD: 1840' },
    ],
  },
  {
    title: 'Suspension & Tyres',
    rows: [
      {
        label: 'Front Suspension :',
        value:
          'Parabolic, overslung suspension with Double Acting Shock Absorbers',
      },
      { label: 'No of Leaf Springs (Front) :', value: 'Front : 3' },
      {
        label: 'Rear Suspension :',
        value:
          'Semi-elliptic (main), overslung suspension with Double Acting Shock Absorbers',
      },
      { label: 'No of Leaf Springs (Rear) :', value: '6 main + 2 Helper' },
      { label: 'No. of Tyres :', value: 'Front 2, Rear 2, Spare 1' },
      {
        label: 'Loading Platform Height (mm) :',
        value: '1050 / 1035',
      },
      {
        label: 'Turning Circle Radius (TCR) (m) :',
        value: '6.2 / 7.5',
      },
      { label: 'Min. Ground Clearance :', value: '238 mm' },
    ],
  },
  {
    title: 'Powertrain',
    rows: [
      {
        label: 'Engine Type :',
        value:
          'ZD30 Diesel Engine with DDTi (Double Overhead Camshaft, Common Rail, Direct Injection, Turbo Intercooled)',
      },
      { label: 'Displacement / Cubic Capacity :', value: '2953 cc' },
      { label: 'Maximum Power Output (in HP) :', value: '140 HP @ 2750 RPM' },
      { label: 'Maximum Torque (Nm) :', value: '360 Nm @ 1350–2750 RPM' },
      {
        label: 'Clutch :',
        value: 'Diaphragm Push Type, Single Dry Plate, Hydraulic actuated',
      },
      {
        label: 'Transmission :',
        value: 'Fully Synchronized 5 Speed Gearbox Manual – Kinetic',
      },
      { label: 'Fuel Tank Capacity (litre) :', value: '90 litre' },
    ],
  },
  {
    title: 'Overall Dimensions',
    rows: [
      { label: 'Wheel Base (mm) :', value: '2685 / 3335' },
      { label: 'Overall Length (mm) :', value: '4920 / 5990' },
      {
        label: 'Overall Height (mm) :',
        value:
          'FSD : 2250 / HSD : 2850 (10 ft), FSD : 2250 / HSD : 2810 (14 ft)',
      },
    ],
  },
  {
    title: 'Electricals',
    rows: [
      { label: 'Battery :', value: '1 x 75 AH' },
      { label: 'Alternator :', value: '70 A' },
    ],
  },
  {
    title: 'Steering',
    rows: [{ label: 'Steering System :', value: 'Power' }],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Service Brake :', value: 'Vacuum Assist Hydraulic Brake' },
      { label: 'Exhaust Brakes :', value: 'No / Yes' },
      {
        label: 'Parking Brake :',
        value: 'Transmission mounted, Cable operated',
      },
    ],
  },
  {
    title: 'Performance',
    rows: [{ label: 'Grade ability :', value: '25%' }],
  },
];

function Partner4Tyre() {
  return (
    <>
      <SEO
        title='Ashok Leyland Partner 4 Tyre On-Road Price in Hyderabad | August Monsoon Festive Offers 2025 & Huge Discounts | Saboo AutoZone'
        description='Ashok Leyland Partner 4 Tyre truck on-road price in Hyderabad starts from ₹17 lakh. Grab huge August Monsoon Festive Offers 2025 and exclusive discounts at Saboo AutoZone. Explore Partner 4 Tyre mileage, features, payload, and unbeatable pricing. Call 91002 55555 today for the best deal!'
        keywords='Ashok Leyland Partner 4 Tyre August Offers 2025, Ashok Leyland Partner 4 Tyre Price in Hyderabad, Partner 4 Tyre Truck Best Deals 2025, Ashok Leyland Partner On-Road Price Hyderabad, Ashok Leyland Partner 4 Tyre Specifications & Mileage, Partner 4 Tyre Truck Discounts, Best Price for Ashok Leyland Partner 2025, Saboo AutoZone Partner Truck Offers, Buy Ashok Leyland Partner 4 Tyre in Hyderabad, Commercial Vehicle Festive Discounts Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg'
      />

      <Header />

      <Banner
        imageSrc={partner4TyreBanner}
        altText='Ashok Leyland Partner 4-Tyre Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Partner 4-Tyre'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/Ashok-Leyland-Partner-4tyre-Price.webp')}
          modelName='Partner 4 Tyre'
          brand='Ashok Leyland'
          segment='Commercial Truck'
          price='Starting from ₹ 17 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Commercial-Truck-Partner-10ft-14ft-Brochure.pdf'
          description="The Partner is up to practically any work, on almost any terrain, whether it's for intra-city products transportation or making collections or deliveries in rural areas. The Partner is developed to be a dependable vehicle with potential only outdone by its functionality with new i-Gen BS6 Technology, with an awareness of the subtleties of Indian roadways, people's mobility demands, and newly implemented emission rules. With a modern cabin, impressive built quality, fuel-efficient engine, and best-in-class service intervals, Ashok Leyland's 'Partner' series delivers best-in-class user experience, coupled with exceptional efficiency. With a warranty of 3 Years or 3 Lakh Km, the vehicle delivers best-in-class user experience, coupled with exceptional efficiency."
          colors={['#fff']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Partner 4-Tyre Specifications and Features'
          specsList={partner4tSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Partner 4-Tyre'
          image={require('../img/vehicles/Ashok-Leyland-Partner-4tyre-Price.webp')}
        />

        <TechnicalSpecifications
          specsData={partner4Specs}
          title='Technical Specifications'
        />
      </div>
      <Footer />
    </>
  );
}

export default Partner4Tyre;
