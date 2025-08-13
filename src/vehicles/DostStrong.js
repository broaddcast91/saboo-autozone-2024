import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import dostStrongBanner from '../img/dost-strong-new-banner.webp';
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

export const newDostStrongSpecs = [
  {
    icon: power,
    label: 'POWER',
    value: '70 HP',
  },
  {
    icon: gvw,
    label: 'GVW',
    value: '2590 kg',
  },
  {
    icon: wheelbase,
    label: 'WHEEL BASE',
    value: '2350 mm',
  },
  {
    icon: engine,
    label: 'ENGINE',
    value: '1478 cc',
  },
  {
    icon: fuel,
    label: 'FUEL TANK',
    value: '40 ltrs',
  },
  {
    icon: payload,
    label: 'PAYLOAD',
    value: '1375 kg',
  },
];
export const dostStrongSpecs = [
  {
    title: 'Engine',
    rows: [
      { label: 'Engine :', value: '1.5L, 3 Cylinder Diesel Engine (BS VI)' },
      { label: 'Type', value: 'Diesel' },
      { label: 'Displacement/Cubic Capacity :', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm :', value: '75 HP @ 3,300 RPM' },
      { label: 'Maximum Torque @ rpm :', value: '190 Nm @ 1600-2600 RPM' },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'Top Speed :', value: '90 kmph' },
      { label: 'Gradeability (Re-Start) :', value: '~30%' },
    ],
  },
  {
    title: 'Clutch',
    rows: [
      {
        label: 'Clutch :',
        value:
          '250 mm Diameter Diaphragm, Single dry plate, Mechanical cable Operated',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      {
        label: 'Type/No. of Gears :',
        value:
          'Fully synchromesh, 5 speed-Gearbox Manual, Integrated Bell Housing (5 Forward + 1 reverse gears)',
      },
      { label: 'Gear Shifting :', value: 'Cable type' },
    ],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type :', value: 'Vacuum assisted Hydraulic brake with LSPV' },
      { label: 'Front :', value: 'Ventilated Disc Type' },
      { label: 'Rear :', value: 'Drum Type' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      {
        label: 'Front :',
        value: 'Independent Suspension with Double Wishbone',
      },
      {
        label: 'Rear :',
        value: 'Parabolic Leaf Spring with Double acting Shock absorber',
      },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres :', value: '185 R14 LT, 8PR, Radial' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW) in kg's :", value: '2950' },
      { label: "Rated Payload in kg's :", value: '1500' },
    ],
  },
  {
    title: 'Seating Capacity',
    rows: [{ label: 'Capacity :', value: 'Driver + 2' }],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [{ label: 'Capacity :', value: '50 ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm) :', value: '2550' },
      { label: 'Overall length (in mm) :', value: '4700' },
      { label: 'Overall Width (in mm) :', value: '1680' },
      { label: 'Overall Height (in mm) :', value: '1950' },
      {
        label: 'Load Body/Cargo Deck (L x W x H) :',
        value: '2700 x 1650 x 450 mm (8.9ft x 5.4ft x 1.5ft)',
      },
      { label: 'Loading Height (in mm) :', value: '900' },
    ],
  },
];

function DostStrong() {
  return (
    <>
      <SEO
        title='Ashok Leyland New Dost Strong – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo AutoZone'
        description='Get the Ashok Leyland New Dost Strong BS6 with August Monsoon Festive Offers 2025 in Hyderabad. Starting at just ₹8 lakh, enjoy superior mileage, top features, and huge discounts across all variants. Visit Saboo AutoZone or call 91002 55555 for the best deals today!'
        keywords='Ashok Leyland New Dost Strong August Offers 2025, Dost Strong Monsoon Festive Discounts Hyderabad, New Dost Strong On-Road Price Hyderabad, Ashok Leyland Dost Strong 2025 Price & Mileage, Dost Strong BS6 Features & Specifications, Best Price for New Dost Strong Truck, Ashok Leyland Small Commercial Vehicle Offers, New Dost Strong Best Deals Saboo AutoZone, Commercial Vehicle Discounts Hyderabad, Ashok Leyland Trucks Huge Offers 2025'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-strong.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostStrongBanner}
        altText='Ashok Leyland New Dost Strong Banner'
        breadcrumbTitle='Light Commercial Vehicles (LCV) / Ashok Leyland New Dost Strong on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/dost-strong-s11.webp')}
          modelName='Bada Dost Strong'
          brand='Ashok Leyland'
          price='Starting from ₹ 8 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/DOST-STRONG-May-2023_N0-7692-1.pdf'
          description="Ashok Leyland recognizes that a country's economic stability is dependent on the safe and timely delivery of commodities, and designs vehicles that make this possible in the long run. DOST, an award-winning light commercial vehicle from Ashok Leyland, now has i-GEN6 technology, making it a suitable vehicle of 1250kgs for transporting items carried off larger trucks through crowded city highways and across difficult terrains to even the most distant corners of the country. DOST's car-like simplicity of use and fuel economy make it a practical alternative for navigating through narrower lanes and guaranteeing consumer items are delivered to their doorstep."
          colors={['#fff', '#f1ddb7', '#1a4797']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland New Dost Strong Specifications and Features'
          specsList={newDostStrongSpecs}
        />
        <VehicleForm
          title='Get On Road Price of New Dost Strong'
          image={require('../img/dost-strong-s22.webp')}
        />
        <TechnicalSpecifications
          specsData={dostStrongSpecs}
          title='Dost Strong Technical Specifications'
        />
      </div>
      <Footer />
    </>
  );
}

export default DostStrong;
