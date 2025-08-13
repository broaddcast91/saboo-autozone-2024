import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';

const VehicleForm = ({ title, image, }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    vehicle: '',
    outlet: '',
    enquiry: '',
  });
  const { name, email, mobile, vehicle, outlet, enquiry } = user;

  const [buttonclick, setButtonclick] = useState(false);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !vehicle || !outlet || !enquiry) {
      toast.error('Please fill out all fields');
      return;
    }

    const pattern = /^[6-9][0-9]{6,9}$/;
    if (!pattern.test(mobile)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setButtonclick(true);

    try {
      await axios.post('https://autozone-backend.onrender.com/onRoadPrice', user);
      toast.success('Your request has been submitted successfully');
      navigate('/thank-you');
    } catch (error) {
      console.error(error);
      toast.error('Oops! Something went wrong');
    }

    setButtonclick(false);
  };

  return (
    <div className='container my-5 border shadow rounded-3'>
      <div className='p-3 row align-items-center'>
        <div className='mt-3 col-lg-6 col-md-12 col-12'>
          <h3>{title}</h3>
          <small>
            Please fill out the form and we'll get back to you right away!
          </small>

          <form onSubmit={onSubmit}>
            <div className='mt-4 row'>
              {/* Name */}
              <div className='mb-3 col-md-6'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={onInputChange}
                  className='form-control'
                />
              </div>

              {/* Email */}
              <div className='mb-3 col-md-6'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                 
                  value={email}
                  onChange={onInputChange}
                  className='form-control'
                />
              </div>

              {/* Phone */}
              <div className='mb-3 col-md-6'>
                <label className='form-label'>Phone</label>
                <input
                  type='text'
                  name='mobile'
                  placeholder='Enter  your  phone  number'
                  value={mobile}
                  onChange={onInputChange}
                  className='form-control'
                  minLength='10'
                  maxLength='10'
                />
              </div>

              {/* Vehicle Model */}
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

              {/* Enquiry Type */}
              <div className='mb-3 col-md-12'>
                <div className='flex-row d-flex'>
                  <Form.Check
                    className='me-3'
                    type='radio'
                    label='Get On Road Price'
                    name='enquiry'
                    value='Get On Road Price'
                    onChange={onInputChange}
                  />
                  <Form.Check
                    className='me-3'
                    type='radio'
                    name='enquiry'
                    value='Book A Test Drive'
                    label='Book A Test Drive'
                    onChange={onInputChange}
                  />
                </div>
              </div>

              {/* Outlet */}
              <div className='mb-3 col-md-12'>
                <label className='form-label'>Outlet</label>
                <select
                  className='form-select'
                  name='outlet'
                  value={outlet}
                  onChange={onInputChange}
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
          <img className='w-100' alt='vehicle' src={image} />
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;
