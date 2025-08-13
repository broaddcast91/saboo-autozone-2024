import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';

export const VehicleIntroCard = ({
  image,
  altText = 'Vehicle Image',
  brand = 'Ashok Leyland',
  modelName,
  subTitle = 'Ex-Showroom price in Hyderabad',
  price,
  brochureLink,
  description,
  colors = [],
}) => {
  const [language, setLanguage] = useState();

  useEffect(() => {
    const getLang = () => localStorage.getItem('language');
    setLanguage(getLang());
    const interval = setInterval(() => setLanguage(getLang()), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToComponent = () => {
    const element = document.getElementById('onRoadPriceComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const disclaimer =
    language === '2'
      ? 'ధరలు ఎప్పుడైనా మార్పుకు లోబడి ఉంటాయి, చివరి ధర షోరూమ్‌లో భాగస్వామ్యం చేయబడుతుంది'
      : language === '3'
      ? 'कीमतों में किसी भी समय परिवर्तन किया जा सकता है, अंतिम कीमत शोरूम में साझा की जाएगी'
      : 'Prices are subject to change at any time, final price will be shared at showroom.';

  return (
    <div className='mb-2 row'>
      <div className='mb-3 overflow-hidden col-lg-6'>
        <img
          className='my-auto rounded mw-100 w-100'
          src={image}
          alt={altText}
        />
      </div>
      <div className='mb-3 col-lg-6 ps-4'>
        <h4 className='fw-bold fs-2'>
          <span className='fw-light fs-5'>{brand}</span>&nbsp;{modelName}
          <br />
          <span className='fw-light fs-6'>{subTitle}</span>
        </h4>

        {price && (
          <h5 className='text-danger'>
            {price} <sup>*</sup>
          </h5>
        )}

        <small className='text-danger'>* {disclaimer}</small>

        <small className='mt-2 d-block'>{description}</small>

        {colors.length > 0 && (
          <p className='mt-2 d-flex fw-bold fst-italic'>
            Available Colors:
            {colors.map((color, idx) => (
              <Button
                key={idx}
                className='mx-2 border border-2 btn rounded-0'
                style={{ backgroundColor: color }}
              ></Button>
            ))}
          </p>
        )}

        <div className='mt-3'>
          <Button
            variant='outline-danger me-2 text-uppercase rounded-0'
            className='mb-1 btn-hover'
            style={{ border: '1px solid #9f2a2c', color: '#9f2a2c' }}
            onClick={handleScrollToComponent}
          >
            get on road price
          </Button>

          {brochureLink && (
            <a
              href={brochureLink}
              target='_blank'
              rel='noopener noreferrer'
              className='mb-1 btn btn-danger text-uppercase rounded-0'
              style={{ backgroundColor: '#9f2a2c' }}
            >
              <BsDownload /> download brochure
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
