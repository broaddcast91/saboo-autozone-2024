// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { IoLocationOutline } from "react-icons/io5";
// import { Button, Row, Col, Form } from 'react-bootstrap';

// import axios from 'axios';
import dostLiteBanner from '../img/dost-lite-banner.webp';
// import { toast } from 'react-toastify';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
// dostLiteSpecs.js
import power from '../img/power.webp';
import gvw from '../img/gvw.webp';
import wheelbase from '../img/wheel-base.webp';
import engine from '../img/engine.webp';
import fuel from '../img/fuel.webp';
import payload from '../img/payload.webp';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';
import { TechnicalSpecifications } from '../components/vehiclereusable/TechnicalSpecifications';
import { VehicleIntroCard } from '../components/vehiclereusable/VehicleIntroCard';
import { badaDostLiteSpecs } from '../Data/Dostlite';
import VehicleForm from '../components/VehicleForm/vehicleForm';

export const dostLiteSpecs = [
  { icon: power, label: 'POWER', value: '70 HP' },
  { icon: gvw, label: 'GVW', value: '2590 kg' },
  { icon: wheelbase, label: 'WHEEL BASE', value: '2350 mm' },
  { icon: engine, label: 'ENGINE', value: '1478 cc' },
  { icon: fuel, label: 'FUEL TANK', value: '40 ltrs' },
  { icon: payload, label: 'PAYLOAD', value: '1250 kg' },
];

function DostLite() {
  return (
    <>
      <SEO
        title='Ashok Leyland Dost LiTE BS-VI – August Monsoon Festive Offers 2025 | Huge Discounts & Best On-Road Price in Hyderabad | Saboo AutoZone'
        description='Get the best August Monsoon Festive Offers 2025 on Ashok Leyland Dost LiTE BS-VI in Hyderabad. On-road price starts from ₹8 lakh. Enjoy huge discounts, easy financing, and powerful BS6 performance. Visit Saboo AutoZone or call 91002 55555 for unbeatable deals today!'
        keywords='Ashok Leyland Dost LiTE BS6 August Offers 2025, Dost LiTE BS-VI Monsoon Festive Discounts Hyderabad, Ashok Leyland Dost LiTE Price in Hyderabad, Dost LiTE BS6 On-Road Price 2025, Ashok Leyland Dost LiTE Best Deals, Ashok Leyland Dost LiTE Mileage & Specifications, Dost LiTE BS-VI Features Discounts, Ashok Leyland Light Commercial Vehicle Offers 2025, Saboo AutoZone Ashok Leyland Truck Deals, Huge Discounts on Dost LiTE BS6 Truck Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-strong.jpg'
      />

      <Header />
      <Banner
        imageSrc={dostLiteBanner}
        altText='Ashok Leyland Dost Lite Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland Dost Lite on road price in Hyderabad'
      />

      <div className='container my-5'>
        <VehicleIntroCard
          image={require('../img/vehicles/Ashok-Leyland-dost-lite-price-hyderbad.webp')}
          modelName='Dost LiTE'
          brand='Ashok Leyland'
          price='Starting from ₹ 8 Lakh'
          brochureLink='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/DOST-LiTE-brochure.pdf'
          description='Ashok Leyland understands that the Powering the Dost Lite lineup is a similar BS-IV compliant three-cylinder 1478cc Ashok Leyland Turbo Charged Diesel Common Rail engine. The engine produces a maximum power output of 58hp along with a peak torque rating of up to 157Nm. The three-cylinder engine comes mated to a five-speed manual transmission.'
          colors={['#fff', '#f1ddb7', '#1a4797']}
        />

        <VehicleSpecsCard
          specsTitle='Ashok Leyland Dost LiTE Specifications and Features'
          specsList={dostLiteSpecs}
        />
        <VehicleForm
          title='Get On Road Price of Dost LiTE'
          image={require('../img/vehicles/ashok-leyland-dost-lite-mileage.webp')}
        />
        {/* <VehicleForm /> */}
        <TechnicalSpecifications
          title='Ashok Leyland Bada Dost Lite Technical Specifications'
          specsData={badaDostLiteSpecs}
        />
      </div>
      <Footer />
    </>
  );
}

// const VehicleForm = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     vehicle: '',
//     outlet: '',
//     enquiry: '',
//   });
//   const { name, email, mobile, vehicle, outlet, enquiry } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const [buttonclick, setButtonclick] = useState(false);

//   const navigate = useNavigate();
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     // Check if required fields are filled
//     if (!name || !mobile || !vehicle || !outlet || !enquiry) {
//       toast.error('Please fill out all fields');
//       return;
//     }

//     // Validate mobile number
//     const pattern = /^[6-9][0-9]{6,9}$/;
//     if (!pattern.test(mobile)) {
//       toast.error('Please enter a valid phone number');
//       return;
//     }

//     setButtonclick(true);

//     try {
//       // First API Call
//       await axios.post(
//         'https://autozone-backend.onrender.com/onRoadPrice',
//         user
//       );

//       // Handle responses and navigation
//       toast.success('Your request has been submitted successfully');
//       navigate('/thank-you');
//     } catch (error) {
//       console.log(error);
//       toast.error('Oops! Something went wrong');
//     }

//     setButtonclick(false);
//   };

//   return (
//     <div
//       className='container my-5 border shadow rounded-3'
//       id='onRoadPriceComponent'
//     >
//       <div className='p-3 row align-items-center'>
//         <div className='mt-3 col-lg-6 col-md-12 col-12'>
//           <h3>Get On Road Price of Dost LiTE</h3>
//           <small>
//             Please fill out the form and we'll get back to you right away !
//           </small>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className='mt-4 row'>
//               <div className='mb-3 col-md-6'>
//                 <label className='form-label'>Name</label>
//                 <input
//                   type='text'
//                   name='name'
//                   value={name}
//                   onChange={(e) => onInputChange(e)}
//                   className='form-control'
//                 />
//               </div>

//               <div className='mb-3 col-md-6'>
//                 <label className='form-label'>Email</label>
//                 <input
//                   type='email'
//                   name='email'
//                   value={email}
//                   onChange={(e) => onInputChange(e)}
//                   className='form-control'
//                 />
//               </div>

//               <div className='mb-3 col-md-6'>
//                 <label className='form-label'>Phone</label>
//                 <input
//                   type='text'
//                   name='mobile'
//                   value={mobile}
//                   onChange={(e) => onInputChange(e)}
//                   className='form-control'
//                   minLength='10'
//                   maxLength='10'
//                 />
//               </div>

//               <div className='mb-3 col-md-6'>
//                 <label className='form-label'>Model</label>
//                 <select
//                   className='form-select'
//                   aria-label='Default select example'
//                   name='vehicle'
//                   value={vehicle}
//                   onChange={(e) => onInputChange(e)}
//                 >
//                   <option>Select Vehicle</option>
//                   <option value='Bada Dost i2'>Bada Dost i2</option>
//                   <option value='Bada Dost i4'>Bada Dost i4</option>
//                   <option value='Bada Dost+'>Bada Dost+</option>
//                   <option value='Bada Dost Strong'>Bada Dost Strong</option>
//                   <option value='Dost Lite'>Dost Lite</option>
//                   <option value='Dost CNG'>Dost CNG</option>
//                   <option value='Dost+ CNG'>Dost+ CNG</option>
//                   <option value='Partner'>Partner</option>
//                   <option value='MiTR School Bus'>MiTR School Bus</option>
//                   <option value='MiTR Staff Bus'>MiTR Staff Bus</option>
//                 </select>
//               </div>

//               <div className='mb-3 col-md-12'>
//                 <div className='flex-row d-flex'>
//                   <Form.Check
//                     className='me-3'
//                     type='radio'
//                     id='get_on_road_price'
//                     label='Get On Road Price'
//                     name='enquiry'
//                     value='Get On Road Price'
//                     onChange={(e) => onInputChange(e)}
//                   />
//                   <Form.Check
//                     className='me-3'
//                     type='radio'
//                     id='book_test_drive'
//                     name='enquiry'
//                     value='Book A Test Drive'
//                     label='Book A Test Drive'
//                     onChange={(e) => onInputChange(e)}
//                   />
//                 </div>
//               </div>

//               <div className='mb-3 col-md-12'>
//                 <label className='form-label'>Outlet</label>
//                 <select
//                   className='form-select'
//                   aria-label='Default select example'
//                   name='outlet'
//                   value={outlet}
//                   onChange={(e) => onInputChange(e)}
//                 >
//                   <option>Select</option>
//                   <option value='Attapur'>Attapur</option>
//                   <option value='Gadwal'>Gadwal</option>
//                   <option value='Jodimetla'>Jodimetla</option>
//                   <option value='Kukatpally'>Kukatpally</option>
//                   <option value='LB Nagar'>LB Nagar</option>
//                   <option value='Mahbubnagar'>Mahbubnagar</option>
//                   <option value='Nagaram'>Nagaram</option>
//                   <option value='Kalwakurthy'>Kalwakurthy</option>
//                   <option value='Siddipet'>Siddipet</option>
//                   <option value='Sangareddy'>Sangareddy</option>
//                   <option value='Uppal'>Uppal</option>
//                   <option value='Vikarabad'>Vikarabad</option>
//                 </select>
//               </div>
//             </div>

//             <Form.Group as={Row} controlId='formHorizontalCheck'>
//               <Col>
//                 <Form.Check label='I agree to Terms and Conditions' required />
//               </Col>
//             </Form.Group>

//             <Button
//               className='px-5 mt-4 btn btn-success text-uppercase'
//               type='submit'
//               disabled={buttonclick}
//             >
//               Submit
//             </Button>
//           </form>
//         </div>

//         <div className='mt-3 overflow-hidden col-lg-6 col-md-12 col-12 pe-0'>
//           <img
//             className='w-100'
//             alt='dost-lite'
//             src={require('../img/vehicles/ashok-leyland-dost-lite-mileage.webp')}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default DostLite;
