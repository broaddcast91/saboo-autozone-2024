import dostCngBanner from '../img/dost-cng-banner-1.webp';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';
// dostPlusCNGSpecs.js
import power from '../img/power.webp';
import gvw from '../img/gvw.webp';
import wheelbase from '../img/wheel-base.webp';
import engine from '../img/engine.webp';
import fuel from '../img/fuel.webp';
import payload from '../img/payload.webp';
import { TechnicalSpecifications } from '../components/vehiclereusable/TechnicalSpecifications';
import { VehicleIntroCard } from '../components/vehiclereusable/VehicleIntroCard';
import VehicleForm from '../components/VehicleForm/vehicleForm';

export const dostPlusCNGSpecs = [
  { icon: power, label: 'POWER', value: '58 HP' },
  { icon: gvw, label: 'GVW', value: '2870 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2510 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '120 Lts' },
  { icon: payload, label: 'PAYLOAD', value: '1390 kg' },
];

export const dostPlusCNG = [
  {
    title: 'Engine',
    rows: [
      {
        label: 'Engine :',
        value: '1.5L, 3 Cylinder CNG (BS VI) with Turbocharger',
      },
      { label: 'Displacement/Cubic Capacity : ', value: '1,478 cc' },
      { label: 'Maximum Power @ rpm : ', value: '43.2 kW (58 hp) @ 3300 rpm' },
      { label: 'Maximum Torque @ rpm : ', value: '160 Nm @ 1600-2400 rpm' },
    ],
  },
  {
    title: 'Weight',
    rows: [
      { label: "Gross Vehicle Weight (GVW) in kg's : ", value: '2870' },
      { label: "Payload (FSD LS variant) in kg's : ", value: '1390' },
    ],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm) : ', value: '2510' },
      { label: 'Overall length (in mm) : ', value: '4630' },
      { label: 'Overall width (in mm) : ', value: '1670' },
      { label: 'Overall Height (in mm) : ', value: '1930 (Unladen)' },
      {
        label: 'Load body dimension (FSD) – L x B x H : ',
        value: '(2645 x 1620 x 440) mm (8ft 7in x 5ft 3in x 1ft 4in)',
      },
      { label: 'Ground Clearance (Laden @ Rear Axle) : ', value: '200 mm' },
    ],
  },
  {
    title: 'Suspension',
    rows: [
      {
        label: 'Front : ',
        value:
          'RFS (Rigid Suspension with Parabolic Leaf and Double acting Shock absorber)',
      },
      { label: 'Rear : ', value: 'Semi elliptic overslug suspension' },
    ],
  },
  {
    title: 'Performance',
    rows: [{ label: 'Top Speed (in mm) : ', value: '80 kmph' }],
  },
  {
    title: 'Steering',
    rows: [{ label: 'Steering : ', value: 'Power Steering' }],
  },
  {
    title: 'Clutch',
    rows: [
      {
        label: 'Clutch : ',
        value:
          'Diaphragm, Single dry plate, Pot type, Mechanical cable Operated',
      },
    ],
  },
];

function DostPlusCNG() {
  return (
    <>
      <SEO
        title='Ashok Leyland Dost+ CNG – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo AutoZone'
        description='Get unbeatable August Monsoon Festive Offers 2025 on the Ashok Leyland Dost+ CNG in Hyderabad. On-road price starts from ₹8 lakh. Enjoy huge discounts, best-in-class mileage, and advanced features. Visit Saboo AutoZone or call 91002 55555 for the lowest price and best CNG deals today!'
        keywords='Ashok Leyland Dost+ CNG August Offers 2025, Dost+ CNG Monsoon Festive Discounts Hyderabad, Ashok Leyland Dost+ CNG Price in Hyderabad, Dost+ CNG On-Road Price 2025, Ashok Leyland Dost+ CNG Best Deals, Dost+ CNG Mileage & Specifications, Ashok Leyland Dost+ CNG Features Discounts, Ashok Leyland Commercial Vehicle CNG Offers, Saboo AutoZone Dost+ CNG Festive Deals, Huge Discounts on Ashok Leyland Dost+ CNG Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-cng.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostCngBanner}
        altText='Ashok Leyland Dost+ CNG Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Dost+ CNG on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/Ashok-Leyland-Dost-CNG-Mileage.webp')}
          modelName='Dost Plus CNG'
          brand='Ashok Leyland'
          price='Starting from ₹ 8 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/dost-cng-brochure.pdf'
          description='As a commercial vehicle platform, the Ashok Leyland Dost has become one of the most popular last-mile trucks. Apart from the diesel variations of this little truck, the CNG model is equally popular among city dwellers. Even if the BS6 upgrade has not yet been released, this engine will continue to emit new and stricter emissions for a long time. The power figure may shift. Once the new CNG-changed variations are commercially available, we will keep you informed.'
          colors={['#fff', '#f1ddb7', '#1a4797', '#8a8c8e']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Dost+ CNG BS6 Specifications and Features'
          specsList={dostPlusCNGSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Dost+ CNG'
          image={require('../img/vehicles/Ashok-Leyland-Dost-CNG-Mileage.webp')}
        />
        <TechnicalSpecifications
          specsData={dostPlusCNG}
          title='Dost Plus CNG Technical Specifications'
        />
        <Footer />
      </div>
    </>
  );
}

export default DostPlusCNG;
