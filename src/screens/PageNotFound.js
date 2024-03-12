import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function PageNotFound() {
  return (
    <>
    <Header />
    <div className="text-center" style={{ margin: "112px 0" }}>
      <h1 style={{ fontSize: "130px" }}>404</h1>
      <h4>Not Found</h4>
      <p>The resource requested could not be found on this server!</p>
      <Link to="/">
        <BsArrowRight /> &nbsp;Go to Home
      </Link>
    </div>
    <Footer />
    </>
  );
}

export default PageNotFound;
