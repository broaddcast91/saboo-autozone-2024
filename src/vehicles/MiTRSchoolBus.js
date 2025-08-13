import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mitrSchoolBusBanner from '../img/mitr-school-bus-banner.webp';
import axios from 'axios';
import {
  Button,
  Row,
  Col,
  Form,
  Accordion,
  Table,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';
import { Banner } from '../components/vehiclereusable/Banner';
import power from '../img/power.webp';
import gvw from '../img/gvw.webp';
import wheelbase from '../img/wheel-base.webp';
import engine from '../img/engine.webp';
import fuel from '../img/fuel.webp';
import { VehicleSpecsCard } from '../components/vehiclereusable/VehicleSpecsCard';

export const mitrSchoolSpecs = [
  {
    icon: power,
    label: 'POWER',
    value: '140 HP',
  },
  {
    icon: gvw,
    label: 'GVW',
    value: '6650 Kg',
  },
  {
    icon: wheelbase,
    label: 'WHEEL BASE',
    value: '3700 mm',
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
];

export const mitr3700Specs = [
  {
    title: 'Variant',
    rows: [
      { label: 'Variant :', value: 'Non AC / AC' },
      { label: 'Non AC', value: 'Available' },
      { label: 'AC', value: 'Available' },
    ],
  },
  {
    title: 'Weight',
    rows: [{ label: 'Gross Vehicle Weight (kg) :', value: '6650' }],
  },
  {
    title: 'Seating',
    rows: [
      {
        label: '2 X 2 (Std Width)',
        value: '22+A+D (HB, SD), 26+A+D (STD, SD)',
      },
      { label: '2 X 2 (Std Width) AC', value: '24+A+D (STD, DD)' },
      {
        label: '3 X 3 (Std Width)',
        value: '39+A+D (STD, SD), 36+A+D (STD, SD)',
      },
      {
        label: '3 X 2 (Wide body)',
        value: '33+A+D (STD, SD), 31+A+D (STD, SD)',
      },
    ],
  },
  {
    title: 'Suspension & Tyres',
    rows: [
      {
        label: 'Front & Rear Suspension :',
        value:
          'Parabolic, Overslung suspension with Double acting Shock Absorbers',
      },
      { label: 'No. of Tyres :', value: 'Front 2, Rear 4, Spare 1' },
      { label: 'Tyre Size :', value: '7.00 × 16-14 PR' },
    ],
  },
  {
    title: 'Powertrain',
    rows: [
      { label: 'Engine Type :', value: 'ZD 30 DDTi Common Rail Diesel Engine' },
      { label: 'Cubic Capacity :', value: '2953 cc' },
      { label: 'Maximum Power Output (in HP) :', value: '140 HP @ 2750 RPM' },
      { label: 'Maximum Torque (Nm) :', value: '360 Nm @ 1350-2750 RPM' },
      { label: 'Clutch :', value: '310 mm' },
      {
        label: 'Transmission :',
        value: 'Fully Synchronised 5 Speed Gearbox Manual',
      },
      { label: 'Fuel Tank Capacity (litre) :', value: '90 Litre' },
    ],
  },
  {
    title: 'Dimensions',
    rows: [
      { label: 'Wheel Base (mm) :', value: '3700' },
      { label: 'Overall Length (mm) :', value: '7060×2200×2630' },
      { label: 'Passenger Platform Height (mm) :', value: '790' },
      { label: 'Min. Turning Radius (m) :', value: '7.2' },
      { label: 'Min. Ground Clearance (mm) :', value: '198' },
    ],
  },
  {
    title: 'Electricals',
    rows: [
      { label: 'Electrical Description :', value: 'Single Pole 12 V' },
      { label: 'Battery (in Ah) (Non AC) :', value: '75' },
      { label: 'Battery (in Ah) (AC) :', value: '110' },
      { label: 'Alternator A (Non AC) :', value: '90' },
      { label: 'Alternator A (AC) :', value: '140' },
      {
        label: 'AC Compressor Capacity :',
        value: 'NA / 220 cc (Single Compressor)',
      },
    ],
  },
  {
    title: 'Brakes',
    rows: [
      {
        label: 'Service Brakes :',
        value: 'Dual circuit, Hydraulic with Vacuum Assist',
      },
      {
        label: 'Parking Brakes :',
        value: 'Transmission Mounted & Mechanical Linkage & Cable Operated',
      },
    ],
  },
];

function MiTRSchoolBus() {
  return (
    <>
      <SEO
        title='Ashok Leyland Mitr School Bus 2x2 – August Monsoon Festive Offers 2025 | Huge Discounts & Best Price in Hyderabad | Saboo AutoZone'
        description='Ashok Leyland Mitr School Bus 2x2, 25D on-road price in Hyderabad starts from ₹27.73 lakh. Avail massive August Monsoon Festive Offers 2025 and exclusive discounts at Saboo AutoZone. Explore mileage, features, seating capacity, and book your Mitr School Bus today. Call 91002 55555 for the best deals!'
        keywords='Ashok Leyland Mitr School Bus August Offers 2025, Mitr 2x2 School Bus Price Hyderabad, Ashok Leyland School Bus Monsoon Festive Discounts, Ashok Leyland Mitr 25D On-Road Price Hyderabad, Ashok Leyland School Bus Best Deals 2025, Mitr School Bus Features & Mileage, Saboo AutoZone Ashok Leyland Bus Offers, Buy Ashok Leyland School Bus in Hyderabad, Ashok Leyland School Bus Huge Discount, School Bus Booking Saboo AutoZone 2025'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-school-bus.jpg'
      />

      <Header />
      <Banner
        imageSrc={mitrSchoolBusBanner}
        altText='Ashok Leyland MiTR School Bus Banner'
        breadcrumbTitle='Light Commercial Vehicles / Ashok Leyland MiTR School Bus'
      />

      <div className='container my-5'>
        <TitleWithImg />
        <VehicleSpecsCard
          specsTitle='Ashok Leyland MiTR School Bus Specifications and Features'
          specsList={mitrSchoolSpecs}
        />
        <VehicleForm />
        {/* <TechnicalSpecifications
          specsData={mitr3700Specs}
              title="MiTR School Bus Technical Specifications"
            /> */}
        <TechSpecs />
      </div>
      <Footer />
    </>
  );
}

const TitleWithImg = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [displayText, setDisplayText] = useState('27,73,876');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setDisplayText(value);
  };

  function handleScrollToComponent() {
    const element = document.getElementById('onRoadPriceComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <div className='row'>
        <div className='mb-3 overflow-hidden col-lg-6'>
          <img
            className='my-auto mw-100 w-100'
            src={require('../img/vehicles/Ashok-Leyland-MiTR School-Bus-Price-in-Hyderabad.webp')}
            alt='Bada-Dost-i3'
          />
        </div>
        <div className='mb-3 col-lg-6'>
          <h4 className='fw-bold fs-2'>
            <span className='fw-light fs-5'>Ashok Leyland</span>&nbsp;MiTR
            School Bus <br></br>
            <span className='fw-light fs-6'>School Bus</span>
            <br></br>
            <span className='fw-light fs-6'>
              Ex-Showroom price in Hyderabad
            </span>
          </h4>
          <h5 className='text-danger'>
            Starting from ₹ <span>{displayText}</span> Lakh<sup>*</sup>
          </h5>
          <div className='m-3'>
            <span className='px-2'>Select Bus Type:</span>
            <select value={selectedOption} onChange={handleChange}>
              <option value='' disabled>
                Select Bus Type
              </option>
              <option value='27,73,876'>34 Seater</option>
              <option value='26,45,257'>39 Seater</option>
            </select>
          </div>
          <small className='text-danger'>
            <sup>*</sup> Prices are subjected to change at any time, final price
            will be shared at showroom.
          </small>
          {/* <p>
            <small className='text-primary'>
              <IoLocationOutline /> Hyderabad
            </small>
          </p> */}
          <small>
            MiTR – the best school bus for your kids – now comes with modern
            i-Gen6 BS6 technology, which stands for dependability, operational
            efficiency, and affordability. The MiTR sets a new standard for
            school and college transportation with its industry-leading comfort
            and safety features. With a diverse choice of school buses, we offer
            the highest standards of safety and comfort for school children,
            sharing the responsibility of parents and school authorities. MiTR
            is a contemporary bus with class-leading fuel efficiency, comfort,
            and safety, designed specifically to provide a safe and enjoyable
            travel for children.
          </small>
          <p className='mt-2 d-flex fw-bold fst-italic'>
            Available Colors:
            <Button
              className='mx-2 border border-2 btn rounded-0'
              style={{ backgroundColor: '#e9bc1b' }}
            ></Button>
          </p>
          <div>
            <Button
              variant='outline-danger me-2 text-uppercase rounded-0'
              className='mb-1 btn-hover'
              style={{ border: '1px solid #9f2a2c', color: '#9f2a2c' }}
              onClick={handleScrollToComponent}
            >
              get on road price
            </Button>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-MiTR-School-Bus-Brochure.pdf'
              target='_blank'
              className='mb-1 btn btn-danger text-uppercase rounded-0'
              rel='noopener noreferrer'
              style={{ backgroundColor: '#9f2a2c' }}
            >
              <BsDownload /> download Brochure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const VehicleForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    vehicle: '',
    outlet: '',
    enquiry: '',
  });
  const { name, email, mobile, vehicle, outlet, enquiry } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [buttonclick, setButtonclick] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!name || !mobile || !vehicle || !outlet || !enquiry) {
      toast.error('Please fill out all fields');
      return;
    }

    // Validate mobile number
    const pattern = /^[6-9][0-9]{6,9}$/;
    if (!pattern.test(mobile)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setButtonclick(true);

    try {
      // First API Call
      await axios.post(
        'https://autozone-backend.onrender.com/onRoadPrice',
        user
      );

      // Handle responses and navigation
      toast.success('Your request has been submitted successfully');
      navigate('/thank-you');
    } catch (error) {
      console.log(error);
      toast.error('Oops! Something went wrong');
    }

    setButtonclick(false);
  };
  return (
    <div
      className='container my-5 border shadow rounded-3'
      id='onRoadPriceComponent'
    >
      <div className='p-3 row align-items-center'>
        <div className='mt-3 col-lg-6 col-md-12 col-12'>
          <h3>Get On Road Price of Mitr School Bus</h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mt-4 row'>
              <div className='mb-3 col-md-6'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                />
              </div>

              <div className='mb-3 col-md-6'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                />
              </div>

              <div className='mb-3 col-md-6'>
                <label className='form-label'>Phone</label>
                <input
                  type='text'
                  name='mobile'
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                  minLength='10'
                  maxLength='10'
                />
              </div>

              <div className='mb-3 col-md-6'>
                <label className='form-label'>Model</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  name='vehicle'
                  value={vehicle}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select Vehicle</option>
                  <option value='Bada Dost i2'>Bada Dost i2</option>
                  <option value='Bada Dost i4'>Bada Dost i4</option>
                  <option value='Bada Dost+'>Bada Dost+</option>
                  <option value='Bada Dost Strong'>Bada Dost Strong</option>
                  <option value='Dost Lite'>Dost Lite</option>
                  <option value='Dost CNG'>Dost CNG</option>
                  <option value='Dost+ CNG'>Dost+ CNG</option>
                  <option value='Partner'>Partner</option>
                  <option value='MiTR School Bus'>MiTR School Bus</option>
                  <option value='MiTR Staff Bus'>MiTR Staff Bus</option>
                </select>
              </div>

              <div className='mb-3 col-md-12'>
                <div className='flex-row d-flex'>
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='get_on_road_price'
                    label='Get On Road Price'
                    name='enquiry'
                    value='Get On Road Price'
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='book_test_drive'
                    name='enquiry'
                    value='Book A Test Drive'
                    label='Book A Test Drive'
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>

              <div className='mb-3 col-md-12'>
                <label className='form-label'>Outlet</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  name='outlet'
                  value={outlet}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value='Attapur'>Attapur</option>
                  <option value='Gadwal'>Gadwal</option>
                  <option value='Jodimetla'>Jodimetla</option>
                  <option value='Kukatpally'>Kukatpally</option>
                  <option value='LB Nagar'>LB Nagar</option>
                  <option value='Mahbubnagar'>Mahbubnagar</option>
                  <option value='Nagaram'>Nagaram</option>
                  <option value='Kalwakurthy'>Kalwakurthy</option>
                  <option value='Siddipet'>Siddipet</option>
                  <option value='Sangareddy'>Sangareddy</option>
                  <option value='Uppal'>Uppal</option>
                  <option value='Vikarabad'>Vikarabad</option>
                </select>
              </div>
            </div>

            <Form.Group as={Row} controlId='formHorizontalCheck'>
              <Col>
                <Form.Check label='I agree to Terms and Conditions' required />
              </Col>
            </Form.Group>

            <Button
              className='px-5 mt-4 btn btn-success text-uppercase'
              type='submit'
              disabled={buttonclick}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className='mt-3 overflow-hidden col-lg-6 col-md-12 col-12 pe-0'>
          <img
            className='w-100'
            src={require('../img/vehicles/Ashok-Leyland-MiTR-School-Bus-Mileage.webp')}
            alt='MiTR-School-Bus-Mileage'
          />
        </div>
      </div>
    </div>
  );
};
const TechSpecs = () => {
  return (
    <>
      <div className='container my-5 border rounded shadow'>
        <div className='p-3 row align-items-center'>
          <div className='mt-3 col-lg-12 col-md-12 col-12'>
            <h4 className='mb-3 text-uppercase'>Technical Specifications</h4>
            <Tabs
              defaultActiveKey='home'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab
                eventKey='home'
                title='Specifications - MiTR-3700 MM WB (7 m)'
                style={{ color: 'red' }}
              >
                <Accordion defaultActiveKey='0' flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>VARIANT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Variant :</td>
                            <td>Non AC/ AC</td>
                            <td>Non AC</td>
                            <td>AC</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>WEIGHT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Gross Vehicle Weight (kg) : </td>
                            <td colSpan={3}>6650</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>SEATING</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>2 X 2 (Std Width)</td>
                            <td>22+A+D (HB, SD) 26+A+D (STD, SD)</td>
                            <td>24+A+D (STD, DD)</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>3 X 3 (Std Width)</td>
                            <td>39+A+D(STD,SD)</td>
                            <td>36+A+D(STD,SD)</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>3 X 2 (Wide body)</td>
                            <td>33+A+D(STD,SD) 31+A+D(STD,SD)</td>
                            <td> NA</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>SUSPENSION & TYRES</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Front & Rear Suspension : </td>
                            <td colSpan={3}>
                              Parabolic, Overslung suspension with Double acting
                              Shock Absorbers
                            </td>
                          </tr>
                          <tr>
                            <td>No. of Tyres: </td>
                            <td colSpan={3}>Front 2, Rear 4, Spare 1</td>
                          </tr>
                          <tr>
                            <td>Tyre Size: </td>
                            <td colSpan={3}>7.00 × 16-14 PR</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>POWERTRAIN</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Engine Type: </td>
                            <td>ZD 30 DDTi Common Rail Diesel Engine</td>
                          </tr>
                          <tr>
                            <td>Cubic Capacity: </td>
                            <td>2953 cc</td>
                          </tr>
                          <tr>
                            <td>Maximum Power Output (in HP): </td>
                            <td>140 HP @ 2750 RPM</td>
                          </tr>
                          <tr>
                            <td>Maximum Torque (Nm): </td>
                            <td>360 Nm @ 1350-2750 RPM</td>
                          </tr>
                          <tr>
                            <td>Clutch: </td>
                            <td>310 mm</td>
                          </tr>
                          <tr>
                            <td>Transmission: </td>
                            <td>Fully Synchronised 5 Speed Gearbox Manual</td>
                          </tr>
                          <tr>
                            <td>Fuel Tank Capacity (litre): </td>
                            <td>90 Litre</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>DIMENSIONS</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Wheel Base (mm): </td>
                            <td colSpan={3}>3700</td>
                          </tr>
                          <tr>
                            <td>Overall Length (mm): </td>
                            <td colSpan={3}>7060×2200×2630</td>
                          </tr>
                          <tr>
                            <td>Passenger Platform Height (mm) :</td>
                            <td colSpan={3}>790</td>
                          </tr>
                          <tr>
                            <td>Min. Turning Radius (m) :</td>
                            <td colSpan={3}>7.2</td>
                          </tr>
                          <tr>
                            <td>Min. Ground Clearance (mm) :</td>
                            <td colSpan={3}>198</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='6'>
                    <Accordion.Header>ELECTRICALS</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Electrical Description: </td>
                            <td colSpan={3}>Single Pole 12 V</td>
                          </tr>
                          <tr>
                            <td>Battery (in Ah) (Non AC/ AC): </td>
                            <td>75</td>
                            <td>110</td>
                          </tr>
                          <tr>
                            <td>Alternator A (Non AC/ AC): </td>
                            <td>90</td>
                            <td>140</td>
                          </tr>
                          <tr>
                            <td>AC Compressor Capacity: </td>
                            <td>NA</td>
                            <td>220 cc(Single Compressor)</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='8'>
                    <Accordion.Header>BRAKES</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Service Brakes: </td>
                            <td colSpan={3}>
                              Dual circuit,Hydraulic with Vacuum Assist
                            </td>
                          </tr>
                          <tr>
                            <td>Parking Brakes : </td>
                            <td colSpan={3}>
                              Transmission Mounted & Mechanical Linkage & Cable
                              Operated
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              <Tab
                eventKey='profile'
                title='Specifications - MiTR-4270 MM WB (8 m)'
              >
                <Accordion defaultActiveKey='0' flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>VARIANT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Variant :</td>
                            <td>Non AC/ AC</td>
                            <td>Non AC</td>
                            <td>AC</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>WEIGHT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Gross Vehicle Weight (kg) : </td>
                            <td colSpan={3}>7200</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>SEATING</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>2 X 2 (Std Width)</td>
                            <td>30+A+D(STD,SD)</td>
                            <td>28+A+D(STD,DD)</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>3 X 3 (Std Width)</td>
                            <td>45+A+D(STD,SD)</td>
                            <td>42+A+D(STD,DD)</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>3 X 2 (Wide body)</td>
                            <td>38+A+D(STD,SD) 36+A+D(STD,DD)</td>
                            <td>NA</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={4}>
                              Note:STD-Standard School Seats,HB - Highback
                              seats, SD- Single Door, DD- Double Door, NA- Not
                              Available, A - Assistant, D- Driver
                            </td>
                          </tr>
                        </tfoot>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>SUSPENSION & TYRES</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Front & Rear Suspension : </td>
                            <td colSpan={3}>
                              Parabolic Suspension with Double Acting Shock
                              Absorbers
                            </td>
                          </tr>
                          <tr>
                            <td>No. of Tyres: </td>
                            <td colSpan={3}>Front 2, Rear 4, Spare 1</td>
                          </tr>
                          <tr>
                            <td>Tyre Size: </td>
                            <td colSpan={3}>7.50 × 16-16 PR</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>POWERTRAIN</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Engine Type: </td>
                            <td>ZD 30 DDTi Common Rail Diesel Engine</td>
                          </tr>
                          <tr>
                            <td>Cubic Capacity: </td>
                            <td>2953 cc</td>
                          </tr>
                          <tr>
                            <td>Maximum Power Output (in HP): </td>
                            <td>140 HP @ 2750 RPM</td>
                          </tr>
                          <tr>
                            <td>Maximum Torque (Nm): </td>
                            <td>360 Nm @ 1350-2750 RPM</td>
                          </tr>
                          <tr>
                            <td>Clutch: </td>
                            <td>310 mm</td>
                          </tr>
                          <tr>
                            <td>Transmission: </td>
                            <td>Fully Synchronized 5 Speed Gearbox Manual</td>
                          </tr>
                          <tr>
                            <td>Fuel Tank Capacity (litre): </td>
                            <td>90 Litre</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>DIMENSIONS</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Wheel Base (mm): </td>
                            <td colSpan={3}>4270</td>
                          </tr>
                          <tr>
                            <td>Overall Dimension (mm): </td>
                            <td colSpan={3}>7970×2200×2630*</td>
                          </tr>
                          <tr>
                            <td>Passenger Platform Height (mm):</td>
                            <td colSpan={3}>815</td>
                          </tr>
                          <tr>
                            <td>Min. Turning Radius (m):</td>
                            <td colSpan={3}>8.3</td>
                          </tr>
                          <tr>
                            <td>Min. Ground Clearance (mm):</td>
                            <td colSpan={3}>209</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='6'>
                    <Accordion.Header>ELECTRICALS</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Electrical Description: </td>
                            <td colSpan={3}>Single Pole 12 V</td>
                          </tr>
                          <tr>
                            <td>Battery (in Ah) (Non AC/ AC): </td>
                            <td>75</td>
                            <td>110</td>
                          </tr>
                          <tr>
                            <td>Alternator A (Non AC/ AC): </td>
                            <td>90</td>
                            <td>140</td>
                          </tr>
                          <tr>
                            <td>AC Compressor Capacity: </td>
                            <td>NA</td>
                            <td>AC Compressor Capacity NA </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='8'>
                    <Accordion.Header>BRAKES</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Service Brakes: </td>
                            <td colSpan={3}>
                              Dual circuit,Hydraulic with Vacuum Assist
                            </td>
                          </tr>
                          <tr>
                            <td>Parking Brakes : </td>
                            <td colSpan={3}>
                              Transmission Mounted & Mechanical Linkage & Cable
                              Operated
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiTRSchoolBus;
