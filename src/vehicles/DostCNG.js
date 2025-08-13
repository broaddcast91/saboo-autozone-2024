import dostCngBanner from '../img/dost-cng-banner-1.webp';

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

export const cngSpecs = [
  {
    title: 'Engine',
    rows: [
      { label: 'Engine', value: '1.5 Liter-3 Cylinder CNG Engine (BS-4)' },
      { label: 'Displacement/Cubic Capacity', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm', value: '45 hp @ 3300 RPM' },
      { label: 'Maximum Torque @ rpm', value: '105 Nm @ 1600-2400 RPM' },
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
        value: '240 mm, Diameter, Diaphragm, Single dry plate, Pot type',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      {
        label: 'Gear Box',
        value:
          'Fully synchromesh 5-Speed gearbox with Overdrive (5 forward, 1 reverse)',
      },
      { label: 'Gear shifting', value: 'Cable type' },
    ],
  },
  {
    title: 'Brakes',
    rows: [
      {
        label: 'Type',
        value: 'Hydraulic Vacuum assisted booster brakes with LSPV',
      },
      { label: 'Front', value: 'Ventilated Disc type' },
      { label: 'Rear', value: 'Drum' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      { label: 'Front', value: 'Parabolic Leaf Spring, 2 Nos' },
      { label: 'Rear', value: 'Parabolic Leaf Spring, 2 Main + 1 Helper' },
    ],
  },
  {
    title: 'Tyres(Size/Type)',
    rows: [{ label: 'Tyres', value: '185 R14 LT, 8PR; Radial, Tubeless' }],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW)in kg's", value: '2,545' },
      { label: "Payload (FSD LS variant)in kg's", value: '1,215' },
    ],
  },
  {
    title: 'Seating Capacity',
    rows: [{ label: 'Seating Capacity', value: 'Driver + 1' }],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [
      {
        label: 'Capacity',
        value: '60x2=120L Capacity (24 Kg CNG Storage)#',
      },
    ],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm)', value: '2350' },
      { label: 'Overall length (in mm)', value: '4485' },
      { label: 'Overall width (in mm)', value: '1620' },
      { label: 'Overall Height (in mm)', value: '1835 (Unladen)' },
      {
        label: 'Load body dimension (FSD) – L x B x H',
        value: '8.2 ft x 5.3 ft x 1.25',
      },
      { label: 'Loading platform height', value: '840 mm (Unladen)' },
    ],
  },
];

export const dostCngSpecs = [
  { icon: power, label: 'POWER', value: '45 HP' },
  { icon: gvw, label: 'GVW', value: '2545 Kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2350 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '120 Ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1208 Kg' },
];

function DostCNG() {
  return (
    <>
      <SEO
        title='Ashok Leyland Dost CNG – August Monsoon Festive Offers in Hyderabad | Huge Discounts at Saboo Autozone'
        description='Celebrate the August Monsoon Festive season with the Ashok Leyland Dost CNG! Avail huge discounts, special pricing, and exciting offers in Hyderabad. On-road price starts from ₹8 lakh. Check out Dost CNG mileage, features, and specs at Saboo AutoZone showrooms. Call 91002 55555 now!'
        keywords='Ashok Leyland Dost CNG August Offers 2025, Ashok Leyland Dost CNG Festive Discounts Hyderabad, Dost CNG Price in Hyderabad, Dost CNG Huge Discounts, Ashok Leyland Dost BS6 Mileage Features, Dost CNG Monsoon Deals 2025, Ashok Leyland Dost CNG On-Road Price Hyderabad, Saboo Autozone Ashok Leyland Offers, Best Dost CNG Deals Hyderabad, Dost CNG Service & Festive Offers'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-cng.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostCngBanner}
        altText='Ashok Leyland Dost CNG Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Dost CNG on road price in Hyderabad'
      />
      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/Ashok-Leyland-Dost-CNG-Mileage.webp')}
          modelName='Dost CNG'
          brand='Ashok Leyland'
          price='Starting from ₹ 8 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/dost-cng-brochure.pdf'
          description='As a commercial vehicle platform, the Ashok Leyland Dost has become one of the most popular last-mile trucks. Apart from the diesel variations of this little truck, the CNG model is equally popular among city dwellers. Even if the BS6 upgrade has not yet been released, this engine will continue to emit new and stricter emissions for a long time. The power figure may shift. Once the new CNG-changed variations are commercially available, we will keep you informed.'
          colors={['#fff', '#f1ddb7', '#1a4797', '#8a8c8e']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Dost CNG BS6 Specifications and Features'
          specsList={dostCngSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Dost Dost CNG'
          image={require('../img/vehicles/Ashok-Leyland-Dost-CNG-Mileage.webp')}
        />
        <TechnicalSpecifications
          specsData={cngSpecs}
          title='Ashok Leyland Dost CNG Technical Specifications'
        />
        <Footer />
      </div>
    </>
  );
}

export default DostCNG;
