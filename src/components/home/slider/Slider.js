import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { GoPerson } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const banners = [
  // {
  //   id: 1,
  //   banner_img: require('../../../img/BADA-DOST/Saboo Autozone Bada Dost i1 Home Banner.webp'),
  // },
   {
    id: 1,
    banner_img: require("../../../img/saathi/banner_saathi.png"),
      
  },
  
  {
    id: 2,
    banner_img: require("../../../img/BADA-DOST/Saboo Autozone Bada Dost i2 Home Banner.webp"),
  },
  // {
  //   id: 3,
  //   banner_img: require("../../../img/autozone-bada-coming-soon.webp"),
  // },
  {
    id: 3,
    banner_img: require("../../../img/banner1.webp"),
  },
  {
    id: 4,
    banner_img: require("../../../img/banner2.webp"),
  },
  {
    id: 5,
    banner_img: require("../../../img/banner3.webp"),
  },
  {
    id: 6,
    banner_img: require("../../../img/banner4.webp"),
  },
  {
    id: 7,
    banner_img: require("../../../img/banner5.webp"),
  },
];

const BannerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              className="slider-img mw-100 w-100"
              src={banner.banner_img}
              alt={banner.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const RequestCall = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, mobile } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (user.name === "") {
      toast.error("Enter Name");
    }
    if (user.mobile === "") {
      toast.error("Enter Mobile");
    }

    if (user.name !== "" && user.mobile !== "") {
      setLoading(true);

      // First API Call

      await axios
        .post("https://autozone-backend.onrender.com/callBacks", user)
        .then(function (response) {
          // Second API Call

          navigate("thank-you");
          // // console.log(response);
        })
        .catch(function (error) {
          toast.error("Oops! something went wrong");
          console.log(error);
        });
    }
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
    <>
    <div
        className="py-5 section"
        style={{ backgroundColor: "#0d2034", color: "white" }}
      >
      <div className='container px-4 mx-auto'>
        <h4 className='mb-4 text-3xl font-bold'>Request a Call back</h4>
        <div className='mb-4 font-light'>
            Please get in touch with our support team and expect a response
            within 24 working hours.
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="pt-2 row">
              <div className="col-lg-3 col-md-6 col-12">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Name"
                    id="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                      className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <InputGroup.Text>
                    <GoPerson />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Email"
                    type="email"
                   className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                    ftype="email"
                    id="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <InputGroup className="mb-3 ">
                  <FormControl
                    placeholder="Mobile"
                    type="text"
                    id="Phone"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => onInputChange(e)}
                    maxLength={10}
                   className='w-full px-4 py-2 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <InputGroup.Text>
                    <FiPhoneCall />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
               <Button
                  className="btn btn-danger text-uppercase w-100"
                  type="submit"
                  style={{ lineHeight: "28px" }}
                  disabled={loading}
                >
                  submit now
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function Slider() {
  return (
    <>
      <BannerSlider />
      <RequestCall />
      {/* <Test/> */}
    </>
  );
}

export default Slider;
