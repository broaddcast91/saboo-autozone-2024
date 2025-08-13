import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { showroomLocation } from "../json/ShowroomLocation";
import { MdPhoneInTalk } from "react-icons/md";
// import { Helmet } from "react-helmet";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SEO from "../components/SEO/SEO";

function Showrooms() {
  return (
    <>
      <SEO
        title="Ashok Leyland Showrooms in Hyderabad | Saboo AutoZone"
        description="Saboo AutoZone is the leading Ashok Leyland dealers in Hyderabad, Telangana. Visit our web site https://sabooautozone.com/az/ or call 9100255555 to know the locations of Ashok Leyland Service Centers, Ashok Leyland Showrooms."
        keywords="Ashok Leyland Showrooms in Hyderabad, Telangana"
        image="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-outlets.jpg"
      />
      <Header />
      <img
        className="mw-100 w-100"
        src={require("../img/outlets-banner.webp")}
        alt="outlets-banner"
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
              Showrooms
            </li>
          </ol>
        </div>
      </div>
      <ShowroomOutlets />
      <Footer />
    </>
  );
}

const ShowroomOutlets = () => {
  return (
    <div className="container my-5">
      <h3 className="mb-5 text-center">Showroom Outlets</h3>
      <div className="row">
        {showroomLocation.map((location, index) => (
          <div className="my-4 col-lg-4 col-md-6" key={index}>
            <div className="shadow card h-100">
              <div className="card-body" style={{ marginTop: "-50px" }}>
                <div className="mb-2 shadow map">
                  <iframe src={location.link} className="w-100 h-100" title="map"></iframe>
                </div>
                <div className="p-3 shadow box">
                  <h6>Saboo Autozone - {location.location}</h6>
                  <p>
                    <small>{location.address}</small>
                  </p>
                  <small>
                    <MdPhoneInTalk />
                  &nbsp;{location.number}
                  </small>
                  <br />
                  <small>
                    <FaRegEnvelope />
                    &nbsp;sales@sabooautozone.com
                  </small>
                  <br />
                  <small>
                    <IoPricetagsOutline />
                    &nbsp;Showroom
                  </small>
                  <br />
                  <small>
                    <a href={location.direction} className="text-black">
                      <FaTelegramPlane />
                      &nbsp;Direction
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showrooms;
