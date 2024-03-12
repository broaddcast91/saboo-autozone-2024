import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import { Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>
          Saboo AutoZone | Contact us for Ashok Leyland Light Commercial Trucks
          Sales & Service
        </title>
        <meta
          name='title'
          content='Saboo AutoZone | Contact us for Ashok Leyland Light Commercial Trucks Sales & Service'
        />
        <meta
          name='description'
          content='Contact your nearest Saboo AutoZone showroom for any Ashok Leyland Commercial vehicle enquiry. For queries about any of the Ashok Leyland light commercial vehicles, feedback or complaints call now 91002 55555.'
        />
        <meta name='keywords' content='CONTACT US' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sabooautozone.com/' />
        <meta
          property='og:title'
          content='Saboo AutoZone | Contact us for Ashok Leyland Light Commercial Trucks Sales & Service'
        />
        <meta
          property='og:description'
          content='Contact your nearest Saboo AutoZone showroom for any Ashok Leyland Commercial vehicle enquiry. For queries about any of the Ashok Leyland light commercial vehicles, feedback or complaints call now 91002 55555.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-contact-us.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.sabooautozone.com/' />
        <meta
          property='twitter:title'
          content='Saboo AutoZone | Contact us for Ashok Leyland Light Commercial Trucks Sales & Service'
        />
        <meta
          property='twitter:description'
          content='Contact your nearest Saboo AutoZone showroom for any Ashok Leyland Commercial vehicle enquiry. For queries about any of the Ashok Leyland light commercial vehicles, feedback or complaints call now 91002 55555.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-contact-us.jpg'
        />
      </Helmet>
      <Header />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}
const ContactBanner = () => {
  return (
    <>
      <img
        className='mw-100'
        src={require('../img/contact-banner.webp')}
        alt='service-banner'
      />
      <div className='container-fluid bg-white py-3 shadow-sm'>
        <div className='container'>
          <ol className='breadcrumb mb-0'>
            <li className='breadcrumb-item'>
              <Link className='text-decoration-none text-black' to='/'>
                <IoIosHome /> Home
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Contact Us
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
const ContactForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    outlet: '',
    desc: '',
  });
  const { name, email, mobile, subject, outlet, desc } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [buttonloader, setButtonloader] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !subject || !outlet || !desc) {
      toast.error('Please fill out all fields', {
        theme: 'colored',
      });
      return;
    }

    const pattern = /^[6-9][0-9]{6,9}$/;
    if (!pattern.test(mobile)) {
      toast.error('Please enter a valid phone number', {
        theme: 'colored',
      });
      return;
    }

    setButtonloader(true);

    try {
      // First API Call
      await axios.post('https://saboogroups.com/autozone/api/contact', user);

      // Second API Call
      await axios.post('https://autozone-backend.onrender.com/contatUs', user);

      // Handle responses and navigation
      toast.success('Your message has been sent successfully', {
        theme: 'colored',
      });
      navigate('/thank-you');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', {
        theme: 'colored',
      });
    }

    setButtonloader(false);
  };

  return (
    <div className='container shadow rounded border my-5'>
      <div className='row p-3 align-items-center'>
        <div className='col-lg-6 col-md-12 col-12 mt-3 border-end'>
          <h3>GOT A QUESTION?</h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='row mt-4'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                />
              </div>

              <div className='col-md-6 mb-3'>
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

              <div className='col-md-6 mb-3'>
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
              <div className='col-md-6  mb-3'>
                <div className='d-flex flex-row'>
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='ENQUIRY'
                    label='ENQUIRY'
                    name='subject'
                    value='Enquiry'
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='FEEDBACK'
                    label='FEEDBACK'
                    name='subject'
                    value='Feedback'
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='COMPLIANT'
                    label='COMPLIANT'
                    name='subject'
                    value='Complaint'
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-12 mb-3'>
              <label className='form-label'>Message</label>
              <textarea
                className='form-control'
                rows='3'
                name='desc'
                value={desc}
                onChange={(e) => onInputChange(e)}
              ></textarea>
            </div>
            <Form.Group as={Row} controlId='formHorizontalCheck'>
              <Col>
                <Form.Check label='I agree to Terms and Conditions' required />
              </Col>
            </Form.Group>

            <Button
              className='btn btn-success mt-4 text-uppercase px-5'
              type='submit'
              disabled={buttonloader}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className='col-lg-6 col-md-12 col-12 pe-0 mt-3'>
          <a
            href='tel:9100255555'
            className='btn btn-danger mb-3 me-3 text-decoration-none'
          >
            <MdPhoneInTalk /> +91 9100255555
          </a>
          <a
            href='mailto:sales@sabooautozone.com'
            className='btn btn-danger mb-3 text-decoration-none'
          >
            <MdPhoneInTalk /> sales@sabooautozone.com
          </a>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.5067210221846!2d79.09390555071055!3d17.673506987848445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ece9630fe43%3A0xf8c05973dfc644c1!2sSaboo%20Autozone%20-%20Uppal!5e0!3m2!1sen!2sin!4v1611231085912!5m2!1sen!2sin'
            height={500}
            style={{ width: '100%' }}
            title='contact'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
