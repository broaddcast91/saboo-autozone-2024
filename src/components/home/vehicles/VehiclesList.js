import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { BsDownload } from 'react-icons/bs';
import './Vehicles.css';
const vehicles = [
   
  {
    title: 'DOST + XL',
    img: require('../../../img/new-thumbnails/dostplusXL.png'),
    to: 'dostplusXL-on-road-price-in-hyderabad',
    payload: '1600 kg',
    gvw: '2288',
    power: '70',
    engine: '1478',
    brochure:
      '',
  },



  
  {
    title: 'Saathi',
    img: require('../../../img/new-thumbnails/saathi_new.png'),
    to: 'Saathi-on-road-price-in-hyderabad',
    payload: '1120 kg',
    gvw: '2288',
    power: '45',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i2-brochure.pdf',
  },

  {
    title: 'BADA DOST i2',
    img: require('../../../img/new-thumbnails/dost-i2.png'),
    to: 'bada-dost-i2-on-road-price-in-hyderabad',
    payload: '1425 kg',
    gvw: '2880',
    power: '70',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/Bada-Dost-i2-brochure.pdf',
  },


  {
    title: 'BADA DOST i4',
    img: require('../../../img/new-thumbnails/dost-i4.png'),
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
    img: require('../../../img/new-thumbnails/dost-plus.png'),
    to: 'dost-plus-on-road-price-in-hyderabad',
    payload: '1500 kg',
    gvw: '2805',
    power: '70',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Dost-Plus-Brochure.pdf',
  },
  {
    title: 'DOST STRONG',
    img: require('../../../img/new-thumbnails/dost-strong.png'),
    to: 'dost-strong-on-road-price-in-hyderabad',
    payload: '1375 kg',
    gvw: '2590',
    power: '60',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-STRONG.pdf',
  },
  {
    title: 'DOST LiTE',
    img: require('../../../img/new-thumbnails/dost-lite.png'),
    to: 'dost-lite-on-road-price-in-hyderabad',
    payload: '1375 kg',
    gvw: '2590',
    power: '60',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-LiTE.pdf',
  },
  {
    title: 'DOST CNG',
    img: require('../../../img/new-thumbnails/dost-cng.png'),
    to: 'dost-cng-on-road-price-in-hyderabad',
    payload: '1215 kg',
    gvw: '2545',
    power: '45',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-CNG-1.pdf',
  },
  {
    title: 'DOST+ CNG',
    img: require('../../../img/new-thumbnails/dost plus cng.png'),
    to: 'dost-cng-on-road-price-in-hyderabad',
    payload: '1390 kg',
    gvw: '2870',
    power: '58',
    engine: '1478',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone/DOST-CNG-1.pdf',
  },
  {
    title: 'PARTNER',
    img: require('../../../img/new-thumbnails/partner-6-tyre.png'),
    to: 'partner-commercial-truck-on-road-price-in-hyderabad',
    payload: '4885 kg',
    gvw: '7490',
    power: '140',
    engine: '2953',
    brochure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Commercial-Truck-Partner-10ft-14ft-Brochure.pdf',
  },
  {
    title: 'MiTR School',
    img: require('../../../img/new-thumbnails/mitr-school-bus.webp'),
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
    img: require('../../../img/new-thumbnails/mitr-staff-bus.webp'),
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
          <div className='mb-3 col-xl-3 col-lg-4 col-md-6 col-sm-6' key={index}>
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
                <div className='mb-3 c09ew342'></div>

                <div className='px-3 d-flex justify-content-between'>
                  <div className='d-flex flex-column '>
                    {/* <small className="mb-1 text-muted">PAYLOAD</small> */}
                    <div className='flex-row d-flex align-items-center'>
                      <img
                        src={require('../../../img/payload.webp')}
                        height={24}
                        alt='payload'
                      />
                      <span className='text-muted'> {vehicle.payload}</span>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    {/* <small className="mb-1 text-muted">GVW</small> */}
                    <div className='flex-row d-flex align-items-center'>
                      <img
                        src={require('../../../img/gvw.webp')}
                        height={24}
                        alt='gvw'
                      />
                      <span className='text-muted'> {vehicle.gvw} kg</span>
                    </div>
                  </div>
                </div>

                <div className='px-3 pb-3 mt-4 d-flex justify-content-between'>
                  <div className='d-flex flex-column'>
                    {/* <small className="mb-1 text-muted">POWER</small> */}
                    <div className='flex-row d-flex align-items-center'>
                      <img
                        src={require('../../../img/power.webp')}
                        height={24}
                        alt='power'
                      />
                      <span className='text-muted'> {vehicle.power} HP</span>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    {/* <small className="mb-1 text-muted">ENGINE</small> */}
                    <div className='flex-row d-flex align-items-center'>
                      <img
                        src={require('../../../img/engine.webp')}
                        height={24}
                        alt='engine'
                      />
                      <span className='text-muted'> {vehicle.engine} cc</span>
                    </div>
                  </div>
                </div>

                <div className='px-3 pb-3 mt-4 d-flex justify-content-between'>
                  <div className='d-flex flex-column'>
                    {/* <small className="mb-1 text-muted">POWER</small> */}
                    <div className='flex-row d-flex align-items-center'>
                      <span className='text-muted'>
                        <Link to={vehicle.to}>
                          <Button className='px-3 py-2 mx-auto btn-danger d-flex'>
                            Explore
                          </Button>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    {/* <small className="mb-1 text-muted">ENGINE</small> */}
                    <div className='flex-row d-flex align-items-center '>
                      <span className='text-muted'>
                        <a href={vehicle.brochure}>
                          <Button
                            className='px-3 py-2 mx-auto btn-info d-flex'
                            style={{
                              backgroundColor: '#0d2034',
                              color: 'white',
                            }}
                          >
                            Brochure
                          </Button>
                        </a>
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
