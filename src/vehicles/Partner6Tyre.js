import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import partner6TyreBanner from '../img/Ashok-Leyland-partner-6tyre-banner.webp';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';
import power from '../img/power.webp';
import gvw from '../img/gvw.webp';
import wheelbase from '../img/wheel-base.webp';
import engine from '../img/engine.webp';
import fuel from '../img/fuel.webp';
import payload from '../img/payload.webp';
import { TechnicalSpecifications } from '../components/vehiclereusable/TechnicalSpecifications';
import { VehicleIntroCard } from '../components/vehiclereusable/VehicleIntroCard';
import VehicleForm from '../components/VehicleForm/vehicleForm';

export const partner6tSpecs = [
  {
    icon: power,
    label: 'POWER',
    value: '140 HP',
  },
  {
    icon: gvw,
    label: 'GVW',
    value: '11/14/17ft LB 7490 Kg',
  },
  {
    icon: wheelbase,
    label: 'WHEEL BASE',
    value: '11ft LB 2820 <br/> 14ft LB 3320 <br/> 17ft LB 3955',
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
    value: '11ft LB 4885 <br/> 14ft LB 4775 <br/> 17ft LB 4579',
  },
];

export const partnerSpecs = [
  {
    title: 'Variant',
    rows: [{ label: 'Variant :', value: '11 ft LB, 14 ft LB, 17 ft LB' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: 'Gross Vehicle Weight (kg) :', value: '7490 (all variants)' },
      {
        label: 'Rated Payload (FSD) (kg) :',
        value: '4885 (11ft), 4775 (14ft), 4579 (17ft)',
      },
    ],
  },
  {
    title: 'Load Body Dimensions',
    rows: [
      {
        label: 'Load Body Length (mm) :',
        value: '3415 (11ft), 4230 (14ft), 5275 (17ft)',
      },
      {
        label: 'Load Body Width (mm) (HSD) :',
        value: '2060 (11ft/14ft), 2209 (17ft)',
      },
      {
        label: 'Side Deck Height (mm) :',
        value: 'FSD: 461 – HSD: 1840 (11ft/14ft), HSD: 1122 (17ft)',
      },
    ],
  },
  {
    title: 'Suspension & Tyres',
    rows: [
      {
        label: 'Front Suspension :',
        value: 'Parabolic, overslung with Double Acting Shock Absorbers',
      },
      { label: 'No of Leaf Springs (Front) :', value: '3' },
      {
        label: 'Rear Suspension :',
        value:
          'Semi-elliptic (main), overslung with Double Acting Shock Absorbers',
      },
      { label: 'No of Leaf Springs (Rear) :', value: '6 main + 4 Helper' },
      { label: 'No. of Tyres :', value: 'Front 2, Rear 4, Spare 1' },
      { label: 'Tyre Size :', value: '7.50 x 16, 16 PR' },
      {
        label: 'Loading Platform Height (mm) :',
        value: '1042 (11ft), 1035 (14ft), 1085 (17ft)',
      },
      {
        label: 'Turning Circle Radius (TCR) (m) :',
        value: '5.7 (11ft), 6.75 (14ft), 6.8 (17ft)',
      },
    ],
  },
  {
    title: 'Powertrain',
    rows: [
      {
        label: 'Engine Type :',
        value: 'ZD30 Diesel Engine with DDTi (DOHC, CRDI, Turbo Intercooled)',
      },
      { label: 'Displacement / Cubic Capacity :', value: '2953 cc' },
      { label: 'Maximum Power Output (in HP) :', value: '140 HP @ 2750 RPM' },
      { label: 'Maximum Torque (Nm) :', value: '360 Nm @ 1350-2750 RPM' },
      {
        label: 'Clutch :',
        value: 'Diaphragm Push Type, Single Dry Plate, Hydraulic actuated',
      },
      {
        label: 'Transmission :',
        value: 'Fully Syncronised 5 Speed Gearbox Manual-Kinetic',
      },
      { label: 'Fuel Tank Capacity (litre) :', value: '90 Litre' },
    ],
  },
  {
    title: 'Overall Dimensions',
    rows: [
      {
        label: 'Wheel Base (mm) :',
        value: '2820 (11ft), 3320 (14ft), 3955 (17ft)',
      },
      {
        label: 'Overall Length (mm) :',
        value: '5170 (11ft), 5990 (14ft), 7085 (17ft)',
      },
      {
        label: 'Overall Height (mm) :',
        value: 'FSD: 2240 HSD: 2832 (11/14ft), HSD: 2870 (17ft)',
      },
    ],
  },
  {
    title: 'Electricals',
    rows: [
      { label: 'Battery :', value: '1 x 75 AH' },
      { label: 'Alternator :', value: '70 A (LS), 90 A (LX)' },
    ],
  },
  {
    title: 'Steering',
    rows: [{ label: 'Steering System :', value: 'Power' }],
  },
  {
    title: 'Brakes',
    rows: [
      {
        label: 'Service Brake :',
        value:
          'Vacuum Assist Hydraulic Brake (11ft/14ft), Pneumatic Brakes (17ft)',
      },
      {
        label: 'Exhaust Brakes / Air Brakes :',
        value: 'Exhaust Brakes (11ft/14ft), Air Brakes (17ft)',
      },
      {
        label: 'Parking Brake :',
        value:
          'Transmission mounted Cable Operated (11ft/14ft), Integrated with rear brakes (17ft)',
      },
    ],
  },
  {
    title: 'Performance',
    rows: [{ label: 'Gradeability :', value: '25% (11ft/14ft), 32% (17ft)' }],
  },
];

function Partner6Tyre() {
  return (
    <>
      <SEO
        title='Ashok Leyland Partner 6-Tyre On-Road Price in Hyderabad | August Monsoon Festive Offers 2025 & Huge Discounts | Saboo AutoZone'
        description='Ashok Leyland Partner 6-Tyre Truck on-road price in Hyderabad starts from ₹17 lakh. Unlock huge August Monsoon Festive Offers 2025 and exclusive dealer discounts at Saboo AutoZone. Check mileage, payload, specs, features, and best pricing. Call 91002 55555 today!'
        keywords='Ashok Leyland Partner 6 Tyre Truck August Offers 2025, Ashok Leyland Partner 6 Tyre Price in Hyderabad, Ashok Leyland Partner Truck On-Road Price 2025, Partner 6 Tyre Truck Mileage and Specifications, Ashok Leyland Partner Best Monsoon Deals, Commercial Truck Discounts Hyderabad 2025, Ashok Leyland Partner Festive Offers Saboo AutoZone, Buy Ashok Leyland Partner Truck Hyderabad, Best Price for Ashok Leyland Partner 2025, Ashok Leyland Partner Truck Features & Payload'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg'
      />

      <Header />
      <Banner
        imageSrc={partner6TyreBanner}
        altText='Ashok Leyland Partner 6-Tyre Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Partner 6-tyre'
      />
      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/autozone-truck-partner-banner-slider-1.png')}
          modelName='Partner 6 Tyre'
          brand='Ashok Leyland'
          segment='Commercial Truck'
          price='Starting from ₹ 17 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Commercial-Truck-Partner-17ft-Brochure.pdf'
          description="The Partner is up to practically any work, on almost any terrain, whether it's for intra-city products transportation or making collections or deliveries in rural areas. The Partner is developed to be a dependable vehicle with potential only outdone by its functionality with new i-Gen BS6 Technology, with an awareness of the subtleties of Indian roadways, people's mobility demands, and newly implemented emission rules. With a modern cabin, impressive built quality, fuel-efficient engine, and best-in-class service intervals, Ashok Leyland's 'Partner' series delivers best-in-class user experience, coupled with exceptional efficiency. With a warranty of 3 Years or 3 Lakh Km, the vehicle delivers best-in-class user experience, coupled with exceptional efficiency."
          colors={['#fff']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Partner 6-Tyre Specifications and Features'
          specsList={partner6tSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Partner 6-Tyre'
          image={require('../img/vehicles/autozone-truck-partner-banner-slider-1.png')}
        />
        <TechnicalSpecifications
          specsData={partnerSpecs}
          title='Technical Specifications'
        />
      </div>
      <Footer />
    </>
  );
}

export default Partner6Tyre;
