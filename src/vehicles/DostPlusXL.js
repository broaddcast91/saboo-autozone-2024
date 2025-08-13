import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import dostPlusXLBanner from '../../src/img/DostPlus-XL/Dostplus-xl-banner.jpg';
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

export const newDostStrongSpecs = [
  { icon: power, label: 'POWER', value: '70 HP' },
  { icon: gvw, label: 'GVW', value: '2590 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2350 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '40 ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1375 kg' },
];

export const dostPlusXL = [
  {
    title: 'Engine',
    rows: [
      { label: 'Engine :', value: '1.5L, 3 Cylinder Diesel Engine (BS VI)' },
      {
        label: 'Type :',
        value: 'Turbo Charged Diesel Common Rail (TDCR) Engine',
      },
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
        value: '250 mm Diaphragm, Single dry plate, Mechanical cable Operated',
      },
    ],
  },
  {
    title: 'Transmission',
    rows: [
      {
        label: 'Gear Box :',
        value:
          'Fully synchromesh, 5 speed Manual Gearbox (5 Forward, 1 Reverse)',
      },
      { label: 'Gear Shifting :', value: 'Cable Shift' },
    ],
  },
  {
    title: 'Brakes',
    rows: [
      { label: 'Type :', value: 'Vacuum Assisted Hydraulic brake with LSPV' },
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
    rows: [{ label: 'Tyres :', value: '185 R14 LT, 8PR Radial' }],
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
    rows: [{ label: 'Capacity :', value: 'Driver + 2 (3 Seater)' }],
  },
  {
    title: 'Fuel Tank Capacity',
    rows: [{ label: 'Capacity :', value: '50 ltrs' }],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheelbase (in mm) :', value: '2550' },
      { label: 'Overall Length (in mm) :', value: '4700' },
      { label: 'Overall Width (in mm) :', value: '1680' },
      { label: 'Overall Height (in mm) :', value: '1950' },
      {
        label: 'Load Body/Cargo Deck (L x W x H) :',
        value: '2700 x 1650 x 450 mm (8.9ft x 5.4ft x 1.5ft)',
      },
      { label: 'Loading Platform Height :', value: '900 mm' },
    ],
  },
];

export default function DostPlusXL() {
  return (
    <div>
      <SEO
        title='Ashok Leyland Dost+ XL – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo AutoZone'
        description='Unlock exclusive August Monsoon Festive Offers 2025 on Ashok Leyland Dost+ XL in Hyderabad. On-road price starts from ₹8 lakh. Avail huge discounts, excellent mileage, and powerful performance. Visit Saboo AutoZone or call 91002 55555 for unbeatable deals on Dost+ XL today!'
        keywords='Ashok Leyland Dost+ XL August Offers 2025, Dost+ XL Monsoon Festive Discounts Hyderabad, Ashok Leyland Dost+ XL On-Road Price Hyderabad, Dost+ XL Price 2025, Ashok Leyland Dost+ XL Best Deals, Dost+ XL Mileage & Features, Ashok Leyland Dost+ XL Specifications & Discounts, Commercial Vehicle Offers 2025, Saboo AutoZone Dost+ XL Truck Discounts, Huge Discounts on Ashok Leyland Dost+ XL Hyderabad'
       image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-cng.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostPlusXLBanner}
        altText='Ashok Leyland Dost+ XL Banner'
        breadcrumbTitle='Light Commercial Vehicles (LCV) / Ashok Leyland DOST + XL on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../../src/img/DostPlus-XL/Dostplus-xl-banner.jpg')}
          modelName='DOST + XL'
          brand='Ashok Leyland'
          price='Coming-soon....'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Dost-XL-_-Brochure-A4_04.pdf'
          description="Ashok Leyland recognizes that a country's economic stability depends on the safe and timely delivery of commodities and designs vehicles that ensure this in the long run. DOST+ XL, an award-winning light commercial vehicle from Ashok Leyland, comes equipped with advanced i-GEN6 technology and offers a high payload capacity of 1600 kg. It is an ideal choice for transporting goods from larger trucks through congested city roads and across challenging terrains to even the most remote parts of the country. DOST+ XL combines car-like ease of use, superior mileage, and robust performance, making it a practical and efficient solution for navigating narrow lanes and ensuring last-mile delivery with reliability."
          colors={['#fff', '#A8A8A8', '#E7D9C9']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland New Dost Strong Specifications and Features'
          specsList={newDostStrongSpecs}
        />
        <VehicleForm
          title='Get On Road Price of DOST + XL'
          image={require('../../src/img/DostPlus-XL/Dostplus-xl-banner.jpg')}
        />
        <TechnicalSpecifications
          specsData={dostPlusXL}
          title='Dost Plus XL Technical Specifications'
        />
      </div>
      <Footer />
    </div>
  );
}
