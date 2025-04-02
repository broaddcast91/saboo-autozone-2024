import React from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';


import { Link, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsDownload } from "react-icons/bs";
import { Button, Row, Col, Form, Accordion, Table } from "react-bootstrap";



export default function DostPlusXL() {
  return (
    <div>
      <Helmet>
              <title>
              Ashok Leyland Dost+ XL Price in Hyderabad | Exclusive Summer Offers 2025 | Saboo AutoZone
              </title>
              <meta
                name="title"
                content=" Ashok Leyland Dost+ XL Price in Hyderabad | Exclusive Summer Offers 2025 | Saboo AutoZone"
              />
              <meta
                name="description"
                content="Get the best Summer 2025 offers on Ashok Leyland Dost+ XL in Hyderabad. On-road price starts from ₹8 lakh. Explore mileage, specifications, features, and exclusive discounts at Saboo AutoZone. Call 91002 55555 for the latest deals!"
              />
              <meta
                name="keywords"
                content="Ashok Leyland Dost+ XL Summer Offers 2025, Ashok Leyland Dost+ XL Price in Hyderabad, Ashok Leyland Dost+ XL Best Deals, Ashok Leyland Dost+ XL On-Road Price Hyderabad, Ashok Leyland Dost+ XL Mileage & Specifications, Ashok Leyland Dost+ XL Features & Discounts, Best Price for Ashok Leyland Dost+ XL 2025, Ashok Leyland Dost+ XL Latest Summer Offers, Ashok Leyland Commercial Vehicle Summer Discounts, Ashok Leyland Dost+ XL Exclusive Deals 2025."
              />
              <meta name="author" content="Broaddcast" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.sabooautozone.com/" />
              <meta
                property="og:title"
                content=" Ashok Leyland Dost+ XL Price in Hyderabad | Exclusive Summer Offers 2025 | Saboo AutoZone"
              />
              <meta
                property="og:description"
                content="Get the best Summer 2025 offers on Ashok Leyland Dost+ XL in Hyderabad. On-road price starts from ₹8 lakh. Explore mileage, specifications, features, and exclusive discounts at Saboo AutoZone. Call 91002 55555 for the latest deals!"
              />
              {/* <meta
                property="og:image"
                content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-cng.jpg"
              /> */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://www.sabooautozone.com/" />
              <meta
                property="twitter:title"
                content=" Ashok Leyland Dost+ XL Price in Hyderabad | Exclusive Summer Offers 2025 | Saboo AutoZone"
              />
              <meta
                property="twitter:description"
                content="Get the best Summer 2025 offers on Ashok Leyland Dost+ XL in Hyderabad. On-road price starts from ₹8 lakh. Explore mileage, specifications, features, and exclusive discounts at Saboo AutoZone. Call 91002 55555 for the latest deals!"
              />
              {/* <meta
                property="twitter:image"
                content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-cng.jpg"
              /> */}
            </Helmet>
    <Header />
    <DostPlusXLBanner/>
    <div className="container my-5">
    <TitleWithImg/>
     <Specsi3/>
     <VehicleForm/>
     <TechSpecs/>
     </div>
      <Footer />
     
  </div>
  )
}

const DostPlusXLBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../../src/img/DostPlus-XL/Dostplus-xl-banner.jpg")}
        alt="vehciles-banner"
      />

      <div className="py-3 bg-white shadow-sm container-fluid">
        <div className="container">
          <ol className="mb-0 breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-black text-decoration-none" to="/">
                <IoIosHome /> Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Light Commercial Vehicles (LCV) / Ashok Leyland DOST + XL on road
              price in Hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};



const TitleWithImg = () => {
  function handleScrollToComponent() {
    const element = document.getElementById("onRoadPriceComponent");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  const [language, setLanguage] = useState();

  useEffect(() => {
    const getBasha = localStorage.getItem("language");
    setLanguage(getBasha);
    const interval = setInterval(() => {
      const getBasha = localStorage.getItem("language");
      setLanguage(getBasha);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mb-2 row">
        <div className="mb-3 overflow-hidden col-lg-6">
          <img
            className="my-auto rounded mw-100 w-100"
            src={require("../../src/img/DostPlus-XL/Dostplus-xl-banner.jpg")}
            alt="Bada-Dost-Plus"
          />
        </div>
        <div className="mb-3 col-lg-6 ps-4">
          <h4 className="fw-bold fs-2">
            <span className="fw-light fs-5">Ashok Leyland</span>&nbsp;DOST + XL{" "}
            <br></br>
            <span className="fw-light fs-6">
              Ex-Showroom price in Hyderabad
            </span>
          </h4>
          <h5 className="text-danger">
            Coming-soon.... <sup>*</sup>                        {/* Starting from ₹ */}
          </h5>
          <small className="text-danger">
            *
            {language === "2"
              ? "ధరలు ఎప్పుడైనా మార్పుకు లోబడి ఉంటాయి, చివరి ధర షోరూమ్‌లో భాగస్వామ్యం చేయబడుతుంది"
              : language === "3"
              ? "कीमतों में किसी भी समय परिवर्तन किया जा सकता है, अंतिम कीमत शोरूम में साझा की जाएगी"
              : "Prices are subjected to change at anytime, final price will beshared at showroom."}
          </small>
          {/* <p>
            <small className='text-primary'>
              <IoLocationOutline /> Hyderabad
            </small>
          </p> */}
          <small>
          Ashok Leyland recognizes that a country's economic stability depends on the safe and timely delivery of commodities and
          designs vehicles that ensure this in the long run. DOST+ XL, an award-winning light commercial vehicle from Ashok Leyland,
          comes equipped with advanced i-GEN6 technology and offers a high payload capacity of 1600 kg. It is an ideal choice for 
          transporting goods from larger trucks through congested city roads and across challenging terrains to even the most remote
          parts of the country. DOST+ XL combines car-like ease of use, superior mileage, and robust performance, making it a practical
          and efficient solution for navigating narrow lanes and ensuring last-mile delivery with reliability.
          </small>
          <p className="mt-2 d-flex fw-bold fst-italic">
            Available Colors :
            <Button
              className="mx-2 border border-2 btn rounded-0"
              style={{ backgroundColor: "#fff" }}
            ></Button>
            <Button
              className="mx-2 border border-2 btn rounded-0"
              style={{ backgroundColor: "#A8A8A8" }}
            ></Button>
             <Button
              className="mx-2 border border-2 btn rounded-0"
              style={{ backgroundColor: " #E7D9C9" }}
            ></Button>
            {/* <Button
              className="border border-2 btn rounded-0 me-2"
              style={{ backgroundColor: "#f1ddb7" }}
            ></Button> */}
           
          </p>
          <div>
            <Button
              variant="outline-danger me-2 text-uppercase rounded-0"
              className="mb-1 btn-hover"
              style={{ border: "1px solid #9f2a2c", color: "#9f2a2c" }}
              onClick={handleScrollToComponent}
            >
              get on road price
            </Button>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Dost-XL-_-Brochure-A4_04.pdf"
              target="_blank"
              className="mb-1 btn btn-danger text-uppercase rounded-0"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#9f2a2c" }}
            >
              <BsDownload /> download Brochure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};



const Specsi3 = () => {
  const specs = [
    { img: "power.webp", label: "POWER", value: "70 hp" },
    { img: "gvw.webp", label: "GVW", value: "1600 kg" },
    { img: "wheel-base.webp", label: "WHEEL BASE", value: "2510 mm" },
    { img: "engine.webp", label: "ENGINE", value: "1478 cc" },
    { img: "fuel.webp", label: "FUEL TANK", value: "40 ltrs" },
    { img: "payload.webp", label: "PAYLOAD", value: "1600 kg" },
  ];

  return (
    <>
      <h4>Ashok Leyland DOST+ XL Specifications and Features</h4>
      <div className="row">
        {specs.map((spec, index) => (
          <div key={index} className="mb-3 col-lg-2 col-sm-4">
            <div className="shadow-sm card bg-light" style={{ border: "1px solid #eee" }}>
              <div className="card-body">
                <div className="text-center d-flex flex-column">
                  <img
                    src={require(`../img/${spec.img}`)}
                    className="mx-auto mb-2"
                    alt={spec.label}
                    height={54}
                    width={54}
                  />
                  <small className="text-muted">{spec.label}</small>
                  <span>{spec.value}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};




const VehicleForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    vehicle: "",
    outlet: "",
    enquiry: "",
  });
  const { name, email, mobile, vehicle, outlet, enquiry } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [buttonClick, setButtonClick] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !vehicle || !outlet || !enquiry) {
      toast.error("Please fill out all fields");
      return;
    }

    const pattern = /^[6-9][0-9]{6,9}$/;
    if (!pattern.test(mobile)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setButtonClick(true);

    try {
      // First API Call
      await axios.post(
        "https://autozone-backend.onrender.com/onRoadPrice",
        user
      );

      toast.success("Your request has been submitted successfully");
      navigate("/thank-you");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong");
    }

    setButtonClick(false);
  };

  const [language, setLanguage] = useState();

  useEffect(() => {
    const getBasha = localStorage.getItem("language");
    setLanguage(getBasha);
    const interval = setInterval(() => {
      const getBasha = localStorage.getItem("language");
      setLanguage(getBasha);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container my-5 border shadow rounded-3" id="onRoadPriceComponent">
      <div className="p-3 row align-items-center">
        <div className="mt-3 col-lg-6 col-md-12 col-12">
          <h3>
            {language === "2" ? "దోస్త్ ప్లస్ ఆన్ రోడ్ ధరను పొందండి" :
              language === "3" ? "दोस्त प्लस की ऑन-रोड कीमत प्राप्त करें" :
              "Get On Road Price of DOST + XL"}
          </h3>
          <small>Please fill out the form and we'll get back to you right away!</small>

          <form onSubmit={onSubmit}>
            <div className="mt-4 row">
              <div className="mb-3 col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={onInputChange}
                  className="form-control"
                  minLength="10"
                  maxLength="10"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Model</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="vehicle"
                  value={vehicle}
                  onChange={onInputChange}
                >
                  <option>Select Vehicle</option>
                  <option value="DOST + XL">DOST + XL</option>
                  <option value="Saathi">Saathi</option>
                  <option value="Bada Dost i2">Bada Dost i2</option>
                  <option value="Bada Dost i4">Bada Dost i4</option>
                  <option value="Bada Dost+">Bada Dost+</option>
                  <option value="Bada Dost Strong">Bada Dost Strong</option>
                  <option value="Dost Lite">Dost Lite</option>
                  <option value="Dost CNG">Dost CNG</option>
                  <option value="Dost+ CNG">Dost+ CNG</option>
                  <option value="Partner">Partner</option>
                  <option value="MiTR School Bus">MiTR School Bus</option>
                  <option value="MiTR Staff Bus">MiTR Staff Bus</option>
                </select>
              </div>

              <div className="mb-3 col-md-12">
                <div className="flex-row d-flex">
                  <Form.Check
                    className="me-3"
                    type="radio"
                    id="get_on_road_price"
                    label="Get On Road Price"
                    name="enquiry"
                    value="Get On Road Price"
                    onChange={onInputChange}
                  />
                  <Form.Check
                    className="me-3"
                    type="radio"
                    id="book_test_drive"
                    name="enquiry"
                    value="Book A Test Drive"
                    label="Book A Test Drive"
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 col-md-12">
                <label className="form-label">Outlet</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="outlet"
                  value={outlet}
                  onChange={onInputChange}
                >
                  <option>Select</option>
                  <option value="Attapur">Attapur</option>
                  <option value="Gadwal">Gadwal</option>
                  <option value="Jodimetla">Jodimetla</option>
                  <option value="Kukatpally">Kukatpally</option>
                  <option value="LB Nagar">LB Nagar</option>
                  <option value="Mahbubnagar">Mahbubnagar</option>
                  <option value="Nagaram">Nagaram</option>
                  <option value="Kalwakurthy">Kalwakurthy</option>
                  <option value="Siddipet">Siddipet</option>
                  <option value="Sangareddy">Sangareddy</option>
                  <option value="Uppal">Uppal</option>
                  <option value="Vikarabad">Vikarabad</option>
                </select>
              </div>
            </div>

            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col>
                <Form.Check label="I agree to Terms and Conditions" required />
              </Col>
            </Form.Group>

            <Button
              className="px-5 mt-4 btn btn-success text-uppercase"
              type="submit"
              disabled={buttonClick}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className="mt-3 overflow-hidden col-lg-6 col-md-12 col-12 pe-0">
          <img
            className="rounded w-100"
            src={require("../../src/img/DostPlus-XL/Dostplus-xl-banner.jpg")}
            alt="Dost-Plus-Mileage"
          />
        </div>
      </div>
    </div>
  );
};




const TechSpecs = () => {
  const specs = [
    {
      title: "Engine",
      details: [
        ["Engine", "1.5 Litres, Turbo Charged, 3 Cylinder Diesel Engine"],
        ["Type", "Diesel"],
        ["Displacement/Cubic Capacity", "1,478 cc"],
        ["Maximum Power @ rpm", "52 kW(70 hp) at 3,300 RPM"],
        ["Maximum Torque @ rpm", "190 Nm @ 1600-2400 RPM"],
      ],
    },
    {
      title: "Performance",
      details: [
        ["Top Speed", "80 kmph"],
        ["Gradeability (Re-Start)", "~23.2%"],
      ],
    },
    {
      title: "Clutch",
      details: [["Clutch", "240 mm Diaphragm, Single dry plate, Mechanical cable Operated"]],
    },
    {
      title: "Transmission",
      details: [
        ["Gear Box", "5F+1R Manual Gearbox"],
        ["Gear Shifting", "Cable Shift"],
      ],
    },
    {
      title: "Brakes",
      details: [
        ["Type", "Vacuum Assisted Hydraulic brake with LSPV"],
        ["Front, Rear", "Disc Type, Drum Type"],
      ],
    },
    {
      title: "Suspension",
      details: [
        ["Front", "Parabolic Leaf Spring-Rigid Axle Suspension"],
        ["Rear", "Parabolic Leaf Spring-Rigid Axle Suspension"],
      ],
    },
    { title: "Tyres(Size/Type)", details: [["Tyres", "165 R14 LT, 8PR"]] },
    {
      title: "Weight",
      details: [
        ["Gross Vehicle Weight (GVW)", "1600 kg"],
        ["Rated Payload", "1600 kg"],
      ],
    },
    { title: "Seating Capacity", details: [["Capacity", "Driver + 1"]] },
    { title: "Fuel Tank Capacity", details: [["Capacity", "40 ltrs"]] },
    {
      title: "Dimensions",
      details: [
        ["Wheelbase", "2510 mm"],
        ["Overall length", "4785 mm"],
        ["Overall Width", "1663 mm"],
        ["Overall Height", "1930 mm"],
        ["Load Body/Cargo Deck (L x W x H)", "(2805x1620x440) mm (9ft 2in X 5ft 4in X 1ft 5in)"],
        ["Loading Height", "945mm (3.1ft)"],
      ],
    },
    { title: "Variant", details: [["Type", "CBC, FSD, HSD"]] },
  ];

  return (
    <div className="container my-5 border rounded shadow">
      <div className="p-3 row align-items-center">
        <div className="mt-3 col-lg-12 col-md-12 col-12">
          <h4 className="mb-3 text-uppercase">Technical Specifications</h4>
          <Accordion defaultActiveKey="0" flush>
            {specs.map((spec, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{spec.title}</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      {spec.details.map(([key, value], idx) => (
                        <tr key={idx}>
                          <td>{key}:</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};


