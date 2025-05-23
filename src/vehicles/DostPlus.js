import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Button, Row, Col, Form, Accordion, Table } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function DostPlus() {
  return (
    <>
      <Helmet>
        <title>
        Ashok Leyland Dost Plus Summer Offers 2025 | Best On-Road Price in Hyderabad | Saboo AutoZone
        </title>
        <meta
          name="title"
          content="Ashok Leyland Dost Plus Summer Offers 2025 | Best On-Road Price in Hyderabad | Saboo AutoZone"
        />
        <meta
          name="description"
          content="The Ashok Leyland Dost Plus on-road price in Hyderabad starts from ₹8 lakh. Get exclusive Summer 2025 offers at Saboo AutoZone, a top Ashok Leyland authorized commercial truck dealer in Telangana. Call 91002 55555 for Dost Plus features, specifications, and best deals!"
        />
        <meta
          name="keywords"
          content="Ashok Leyland Dost Plus Summer Offers 2025, Ashok Leyland Dost Plus Price in Hyderabad, Ashok Leyland Dost Plus Best Deals, Ashok Leyland Dost Plus On-Road Price Hyderabad, Ashok Leyland Dost Plus Mileage & Specifications, Ashok Leyland Dost Plus Features & Discounts, Best Price for Ashok Leyland Dost Plus 2025, Ashok Leyland Bada Dost Plus Summer Offers, Ashok Leyland Commercial Vehicle Summer Discounts, Ashok Leyland Bada Dost Plus Latest Summer Deals, Ashok Leyland Small Commercial Vehicle Offers 2025."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Dost Plus Summer Offers 2025 | Best On-Road Price in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="og:description"
          content="The Ashok Leyland Dost Plus on-road price in Hyderabad starts from ₹8 lakh. Get exclusive Summer 2025 offers at Saboo AutoZone, a top Ashok Leyland authorized commercial truck dealer in Telangana. Call 91002 55555 for Dost Plus features, specifications, and best deals!"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-plus.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Dost Plus Summer Offers 2025 | Best On-Road Price in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="twitter:description"
          content="The Ashok Leyland Dost Plus on-road price in Hyderabad starts from ₹8 lakh. Get exclusive Summer 2025 offers at Saboo AutoZone, a top Ashok Leyland authorized commercial truck dealer in Telangana. Call 91002 55555 for Dost Plus features, specifications, and best deals!"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-plus.jpg"
        />
      </Helmet>
      <Header />
      <DostPlusBanner />
      <div className="container my-5">
        <TitleWithImg />
        <Specsi3 />
        <VehicleForm />
        <TechSpecs />
        </div>
        <Footer />
      
    </>
  );
}

const DostPlusBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/dost-plus-banner-with-logo.webp")}
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
              Light Commercial Vehicles (LCV) / Ashok Leyland Dost Plus on road
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
            src={require("../img/vehicles/dost-plus-image-1.webp")}
            alt="Bada-Dost-Plus"
          />
        </div>
        <div className="mb-3 col-lg-6 ps-4">
          <h4 className="fw-bold fs-2">
            <span className="fw-light fs-5">Ashok Leyland</span>&nbsp;DOST Plus{" "}
            <br></br>
            <span className="fw-light fs-6">
              Ex-Showroom price in Hyderabad
            </span>
          </h4>
          <h5 className="text-danger">
            Starting from ₹ 8 Lakh<sup>*</sup>
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
            Ashok Leyland recognizes that a country's economic stability is
            dependent on the safe and timely delivery of commodities, and
            designs vehicles that make this possible in the long run. DOST, an
            award-winning light commercial vehicle from Ashok Leyland, with
            i-GEN6 technology, alongside the payload of 1500kgs, it is a
            suitable vehicle for transporting items carried off larger trucks
            through crowded city highways and across difficult terrains to even
            the most distant corners of the country. DOST's car-like simplicity
            of use and fuel economy make it a practical alternative for
            navigating through narrower lanes and guaranteeing consumer items
            are delivered to their doorstep.
          </small>
          <p className="mt-2 d-flex fw-bold fst-italic">
            Available Colors :
            <Button
              className="mx-2 border border-2 btn rounded-0"
              style={{ backgroundColor: "#fff" }}
            ></Button>
            <Button
              className="border border-2 btn rounded-0 me-2"
              style={{ backgroundColor: "#f1ddb7" }}
            ></Button> 
            <Button
              className="border border-2 btn rounded-0 me-2"
              style={{ backgroundColor: "#1a4797" }}
            ></Button>
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
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/DOST-Plus-May-2023-_No-7859.pdf"
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
  return (
    <>
      <h4>Ashok Leyland Dost Plus Specifications and Features</h4>
      <div className="row">
        <div className="mb-3 col-lg-2 col-sm-4">
          <div
            className="shadow-sm card bg-light"
            style={{ border: "1px solid #eee" }}
          >
            <div className="card-body">
              <div className="text-center d-flex flex-column">
                <img
                  src={require("../img/power.webp")}
                  className="mx-auto mb-2"
                  alt="payload"
                  height={54}
                  width={54}
                />
                <small className="text-muted">POWER</small>
                <span> 80 HP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 col-lg-2 col-sm-4">
          <div
            className="shadow-sm card bg-light"
            style={{ border: "1px solid #eee" }}
          >
            <div className="card-body">
              <div className="text-center d-flex flex-column">
                <img
                  src={require("../img/gvw.webp")}
                  className="mx-auto mb-2"
                  alt="payload"
                  height={54}
                  width={54}
                />
                <small className="text-muted">GVW</small>
                <span> 2805 kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 col-lg-2 col-sm-4">
          <div
            className="shadow-sm card bg-light"
            style={{ border: "1px solid #eee" }}
          >
            <div className="card-body">
              <div className="text-center d-flex flex-column">
                <img
                  src={require("../img/wheel-base.webp")}
                  className="mx-auto mb-2"
                  alt="payload"
                  height={54}
                  width={54}
                />
                <small className="text-muted">WHEEL BASE</small>
                <span> 2510 mm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 col-lg-2 col-sm-4">
          <div
            className="shadow-sm card bg-light"
            style={{ border: "1px solid #eee" }}
          >
            <div className="card-body">
              <div className="text-center d-flex flex-column">
                <img
                  src={require("../img/engine.webp")}
                  className="mx-auto mb-2"
                  alt="payload"
                  height={54}
                  width={54}
                />
                <small className="text-muted">ENGINE</small>
                <span> 1478 cc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 col-lg-2 col-sm-4">
          <div
            className="shadow-sm card bg-light"
            style={{ border: "1px solid #eee" }}
          >
            <div className="card-body">
              <div className="text-center d-flex flex-column">
                <img
                  src={require("../img/fuel.webp")}
                  className="mx-auto mb-2"
                  alt="payload"
                  height={54}
                  width={54}
                />
                <small className="text-muted">FUEL TANK</small>
                <span> 40 ltrs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 col-lg-2 col-sm-4">
          <div
            className="shadow-sm card bg-light"
            style={{ border: "1px solid #eee" }}
          >
            <div className="card-body">
              <div className="text-center d-flex flex-column">
                <img
                  src={require("../img/payload.webp")}
                  className="mx-auto mb-2"
                  alt="payload"
                  height={54}
                  width={54}
                />
                <small className="text-muted">PAYLOAD</small>
                <span> 1500 kg</span>
              </div>
            </div>
          </div>
        </div>
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

  const [buttonclick, setButtonclick] = useState(false);

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

    setButtonclick(true);

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

    setButtonclick(false);
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
    <div
      className="container my-5 border shadow rounded-3"
      id="onRoadPriceComponent"
    >
      <div className="p-3 row align-items-center">
        <div className="mt-3 col-lg-6 col-md-12 col-12">
          <h3>
            {language === "2"
              ? "దోస్త్ ప్లస్ ఆన్ రోడ్ ధరను పొందండి"
              : language === "3"
              ? "दोस्त प्लस की ऑन-रोड कीमत प्राप्त करें"
              : "Get On Road Price of Dost Plus"}
          </h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mt-4 row">
              <div className="mb-3 col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
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
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select Vehicle</option>
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
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Check
                    className="me-3"
                    type="radio"
                    id="book_test_drive"
                    name="enquiry"
                    value="Book A Test Drive"
                    label="Book A Test Drive"
                    onChange={(e) => onInputChange(e)}
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
                  onChange={(e) => onInputChange(e)}
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
              disabled={buttonclick}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className="mt-3 overflow-hidden col-lg-6 col-md-12 col-12 pe-0">
          <img
            className="rounded w-100"
            src={require("../img/vehicles/dost-plus-image02.webp")}
            alt="Dost-Plus-Mileage"
          />
        </div>
      </div>
    </div>
  );
};

const TechSpecs = () => {
  return (
    <>
      <div className="container my-5 border rounded shadow">
        <div className="p-3 row align-items-center">
          <div className="mt-3 col-lg-12 col-md-12 col-12">
            <h4 className="mb-3 text-uppercase">Technical Specifications</h4>
            <Accordion defaultActiveKey="0" flush>
              {/* Engine Starts */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>Engine</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Engine :</td>
                        <td>1.5 Liters, 3 Cylinder Diesel Engine BS VI</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Diesel</td>
                      </tr>
                      <tr>
                        <td>Displacement/Cubic Capacity : </td>
                        <td>1,478 cc</td>
                      </tr>
                      <tr>
                        <td>Maximum Power @ rpm : </td>
                        <td>80 HP @ 3,300 RPM</td>
                      </tr>
                      <tr>
                        <td>Maximum Torque @ rpm : </td>
                        <td>190 Nm @ 1600-2400 RPM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Engine ends */}

              {/* Performance Starts */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Performance</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Top Speed (in mm) : </td>
                        <td>80 kmph</td>
                      </tr>
                      <tr>
                        <td>Gradeability (Re-Start) : </td>
                        <td>~23.2%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Performance ends */}

              {/* Clutch Starts */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>Clutch</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Clutch : </td>
                        <td>
                          240 mm Diaphragm, Single dry plate ,Mechanical cable
                          Operated
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Clutch ends */}

              {/* Transmission Starts */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>Transmission</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Gear Box : </td>
                        <td>
                          Fully synchromesh, 5 speed gearbox Manual,Integrated
                          Bell Housing
                        </td>
                      </tr>
                      <tr>
                        <td>Gear Shifting : </td>
                        <td>Cable type</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Transmission ends */}

              {/* Brakes Starts */}
              <Accordion.Item eventKey="5">
                <Accordion.Header>Brakes</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Type : </td>
                        <td>Vacuum assisted Hydraulic brake with LSPV</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Brakes ends */}

              {/* Suspension Starts */}
              <Accordion.Item eventKey="6">
                <Accordion.Header>Suspension</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Front : </td>
                        <td>
                          Rigid Suspension with Parabolic Leaf and Double-acting
                          Shock absorber
                        </td>
                      </tr>
                      <tr>
                        <td>Rear : </td>
                        <td>
                          Semi elliptic Leaf spring with Double acting Shock
                          absorber
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Suspension ends */}

              {/* Tyre size starts */}
              <Accordion.Item eventKey="7">
                <Accordion.Header>Tyres(Size/Type)</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Tyres : </td>
                        <td>195 R15 LT 8 PR</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Tyre size ends */}

              {/* Weight Starts */}
              <Accordion.Item eventKey="8">
                <Accordion.Header>Weight</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Gross Vehicle Weight (GVW)in kg's : </td>
                        <td>2805</td>
                      </tr>
                      <tr>
                        <td>Rated Payload in kg's : </td>
                        <td>1500</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Weight ends */}

              {/* Seating Capacity Starts */}
              <Accordion.Item eventKey="9">
                <Accordion.Header>Seating Capacity</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Capacity : </td>
                        <td>
                          3 seater - ARAI certified (1 Driver + 2 Co-driver)
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Seating Capacity ends */}

              {/* Fuel Tank Capacity Starts */}
              <Accordion.Item eventKey="10">
                <Accordion.Header>Fuel Tank Capacity</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Capacity : </td>
                        <td>40 ltrs</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Fuel Tank Capacity ends */}

              {/* Dimensions Starts */}
              <Accordion.Item eventKey="11">
                <Accordion.Header>Dimensions</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Wheelbase (in mm) : </td>
                        <td>2510</td>
                      </tr>
                      <tr>
                        <td>Overall length (in mm) : </td>
                        <td>4630</td>
                      </tr>
                      <tr>
                        <td>Overall Height (in mm) : </td>
                        <td>1900</td>
                      </tr>
                      <tr>
                        <td>Load Body/Cargo Deck (L x W x H) : </td>
                        <td>2645x1620x380 (8.7ft x 5.3ft x 1.2ft)</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Dimensions ends */}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default DostPlus;
