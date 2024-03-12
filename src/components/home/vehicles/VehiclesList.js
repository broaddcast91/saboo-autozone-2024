import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { BsDownload } from 'react-icons/bs';
import './Vehicles.css';
const vehicles = [
  {
    title: 'BADA DOST i1',
    img: require('../../../img/BADA-DOST/BADA-DOST-I3.png'),
    to: 'bada-dost-i1-on-road-price-in-hyderabad',
    payload: '1250 kg',
    gvw: '2652',
    power: '70',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i1-brochure.pdf',
  },
  {
    title: 'BADA DOST i2',
    img: require('../../../img/BADA-DOST/Bada-Dost-i3-PLUS.jpeg'),
    to: 'bada-dost-i2-on-road-price-in-hyderabad',
    payload: '1425 kg',
    gvw: '2880',
    power: '70',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i2-brochure.pdf',
  },

  {
    title: 'BADA DOST i3',
    img: require('../../../img/BADA-DOST/BADA-DOST-I3.png'),
    to: 'bada-dost-i3-on-road-price-in-hyderabad',
    payload: '1400 kg',
    gvw: '2990',
    power: '80',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Bada-Dost-i3-Brochure.pdf',
  },
  {
    title: 'BADA DOST i3+',
    img: require('../../../img/BADA-DOST/Bada-Dost-i3-PLUS.jpeg'),
    to: 'bada-dost-i3-plus-on-road-price-in-hyderabad',
    payload: '1370 kg',
    gvw: '2990',
    power: '80',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/BADA-DOST-i3.pdf',
  },
  {
    title: 'BADA DOST i4',
    img: require('../../../img/Ashok-Leyland-Bada-Dost-i4.webp'),
    to: 'bada-dost-i4-on-road-price-in-hyderabad',
    payload: '1860 kg',
    gvw: '3490',
    power: '80',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Bada-Dost-i4-Brochure.pdf',
  },
  {
    title: 'DOST+',
    img: require('../../../img/Ashok-Leyland-Dost-Plus-Price-in-Hyderabad.webp'),
    to: 'dost-plus-on-road-price-in-hyderabad',
    payload: '1500 kg',
    gvw: '2805',
    power: '80',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Dost-Plus-Brochure.pdf',
  },
  {
    title: 'New DOST STRONG',
    img: require('../../../img/Ashok-Leyland-Dost-Strong-Features.webp'),
    to: 'dost-strong-on-road-price-in-hyderabad',
    payload: '1250 kg',
    gvw: '2590',
    power: '70',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Dost-Strong-Brochure.pdf',
  },
  {
    title: 'DOST LiTE',
    img: require('../../../img/ashok-leyland-dost-lite.webp'),
    to: 'dost-lite-on-road-price-in-hyderabad',
    payload: '1250 kg',
    gvw: '2545',
    power: '50',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Commercial-Truck-Dost-Lite.pdf',
  },
  {
    title: 'DOST CNG',
    img: require('../../../img/Ashok-Leyland-Dost-CNG-Price-in-Hyderabad.webp'),
    to: 'dost-cng-on-road-price-in-hyderabad',
    payload: '1215 kg',
    gvw: '2545',
    power: '45',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Dost-CNG-Brochure.pdf',
  },
  {
    title: 'PARTNER',
    img: require('../../../img/Ashok-Leyland-Partner-Features-Specifications-and-Safety.webp'),
    to: 'partner-commercial-truck-on-road-price-in-hyderabad',
    payload: '4579 kg',
    gvw: '7490',
    power: '140',
    engine: '2953',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Commercial-Truck-Partner-10ft-14ft-Brochure.pdf',
  },
  {
    title: 'MiTR School',
    img: require('../../../img/Ashok-Leyland-MiTR-School-Bus-Features-Specifications.webp'),
    to: 'mitr-school-bus-on-road-price-in-hyderabad',
    payload: '3700 mm',
    gvw: '6650',
    power: '140',
    engine: '2953',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-MiTR-School-Bus-Brochure.pdf',
  },
  {
    title: 'MiTR Staff',
    img: require('../../../img/mitr-staff-bus-home-2.webp'),
    to: 'mitr-staff-bus-on-road-price-in-hyderabad',
    payload: '3700 mm',
    gvw: '6650',
    power: '140',
    engine: '2953',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-MiTR-Staff-Bus-Brochure.pdf',
  },
];

function VehiclesList() {
  return (
    <div className='container'>
      <div className='row'>
        {vehicles.map((vehicle, index) => (
          <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3' key={index}>
            <div
              className='card bg-light box-hover'
              style={{ border: '1px solid #eee' }}
            >
              <Link to={vehicle.to}>
                <img
                  src={vehicle.img}
                  className='card-img-top'
                  alt={vehicle.title}
                />
              </Link>
              <div className='card-body'>
                <h5 className='text-center' style={{ color: 'rgb(158 42 43)' }}>
                  {vehicle.title}
                </h5>
                <div className='c09ew342 mb-3'></div>

                <div className='d-flex justify-content-between px-3'>
                  <div className='d-flex flex-column '>
                    {/* <small className="text-muted mb-1">PAYLOAD</small> */}
                    <div className='d-flex flex-row align-items-center'>
                      <img
                        src={require('../../../img/payload.webp')}
                        height={24}
                        alt='payload'
                      />
                      <span className='text-muted'> {vehicle.payload}</span>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    {/* <small className="text-muted mb-1">GVW</small> */}
                    <div className='d-flex flex-row align-items-center'>
                      <img
                        src={require('../../../img/gvw.webp')}
                        height={24}
                        alt='gvw'
                      />
                      <span className='text-muted'> {vehicle.gvw} kg</span>
                    </div>
                  </div>
                </div>

                <div className='d-flex justify-content-between mt-4 pb-3 px-3'>
                  <div className='d-flex flex-column'>
                    {/* <small className="text-muted mb-1">POWER</small> */}
                    <div className='d-flex flex-row align-items-center'>
                      <img
                        src={require('../../../img/power.webp')}
                        height={24}
                        alt='power'
                      />
                      <span className='text-muted'> {vehicle.power} HP</span>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    {/* <small className="text-muted mb-1">ENGINE</small> */}
                    <div className='d-flex flex-row align-items-center'>
                      <img
                        src={require('../../../img/engine.webp')}
                        height={24}
                        alt='engine'
                      />
                      <span className='text-muted'> {vehicle.engine} cc</span>
                    </div>
                  </div>
                </div>

                <div className='d-flex justify-content-between mt-4 pb-3 px-3'>
                  <div className='d-flex flex-column'>
                    {/* <small className="text-muted mb-1">POWER</small> */}
                    <div className='d-flex flex-row align-items-center'>
                      <span className='text-muted'>
                        <Link to={vehicle.to}>
                          <Button className='btn-danger d-flex mx-auto px-3 py-2'>
                            Explore
                          </Button>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    {/* <small className="text-muted mb-1">ENGINE</small> */}
                    <div className='d-flex flex-row align-items-center '>
                      <span className='text-muted'>
                        <Link to={vehicle.brochure}>
                          <Button
                            className='btn-info d-flex mx-auto px-3 py-2'
                            style={{
                              backgroundColor: '#0d2034',
                              color: 'white',
                            }}
                          >
                            Brochure
                          </Button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehiclesList;
