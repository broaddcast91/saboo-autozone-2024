import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
// import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SEO from '../components/SEO/SEO';

function BookService() {
  return (
    <div>
      <SEO
        title='Ashok Leyland Service Centers in Hyderabad | Book Online Service | Saboo AutoZone'
        description='Locate trusted Ashok Leyland Service Centers in Hyderabad and book commercial vehicle service online. Enjoy August Monsoon 2025 service offers, priority slots, and expert care. Book now via https://sabooautozone.com/az/ or call 91002 55555 for instant support.'
        keywords='Ashok Leyland Service Centers in Hyderabad, Ashok Leyland Online Service Booking, Commercial Vehicle Service Hyderabad, Ashok Leyland Truck Maintenance Offers 2025, Saboo AutoZone Ashok Leyland Service, Book Ashok Leyland Truck Service Online, Ashok Leyland Workshop in Hyderabad, Best LCV/HCV Service Center Hyderabad, Ashok Leyland Monsoon Service Discounts, Priority Truck Servicing Hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-book-a-service.jpg'
      />

      <Header />
      <ServiceBanner />
      <BookServiceForm />
      <Footer />
    </div>
  );
}

const ServiceBanner = () => {
  return (
    <>
      <img
        className='mw-100'
        src={require('../img/book-service-banner.webp')}
        alt='service-banner'
      />
      <div className='py-3 bg-white shadow-sm container-fluid'>
        <div className='container'>
          <ol className='mb-0 breadcrumb'>
            <li className='breadcrumb-item'>
              <Link className='text-black text-decoration-none' to='/'>
                <IoIosHome /> Home
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Book A Service
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const BookServiceForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    vehicle: '',
    outlet: '',
    pick_up: '',
  });
  const { name, email, mobile, vehicle, outlet, pick_up } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [buttonloader, setButtonloader] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      user.name === '' ||
      user.mobile === '' ||
      user.vehicle === '' ||
      user.outlet === '' ||
      user.pick_up === ''
    ) {
      toast.error('Please fill out all fields');
      return;
    }

    const pattern = /^[6-9][0-9]{6,9}$/;
    if (!pattern.test(mobile)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setButtonloader(true);

    try {
      // First API Call

      // Second API Call
      await axios.post('https://autozone-backend.onrender.com/service', user);

      // Handle responses and navigation
      toast.success('Successfully booked a service');
      navigate('/thank-you');
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    }

    setButtonloader(false);
  };

  return (
    <div className='container my-5 border rounded shadow'>
      <div className='p-3 row align-items-center'>
        <div className='mt-3 col-lg-6 col-md-12 col-12 border-end'>
          <h3>Book A Service</h3>
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
                  className='form-control'
                  name='mobile'
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                  maxLength={10}
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
              <div className='mb-3 col-md-6'>
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
              <div className='mb-3 col-md-6'>
                <label className='form-label'>Pickup Required</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  name='pick_up'
                  value={pick_up}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
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
              disabled={buttonloader}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className='mt-3 col-lg-6 col-md-12 col-12 pe-0'>
          <img
            className='mw-100 mh-100 py-auto'
            src={require('../img/book-service-tyre.webp')}
            alt='finance-images'
          />
        </div>
      </div>
    </div>
  );
};

export default BookService;
