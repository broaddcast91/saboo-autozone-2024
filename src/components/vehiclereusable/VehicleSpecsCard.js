import React from 'react';

export const VehicleSpecsCard = ({ specsTitle = '', specsList = [] }) => {
  return (
    <>
      <h4>{specsTitle || 'Vehicle Specifications and Features'}</h4>
      <div className='row'>
        {specsList.map((spec, idx) => (
          <div className='mb-3 col-lg-2 col-sm-4' key={idx}>
            <div
              className='shadow-sm card bg-light'
              style={{ border: '1px solid #eee' }}
            >
              <div className='card-body'>
                <div className='text-center d-flex flex-column'>
                  <img
                    src={spec.icon}
                    className='mx-auto mb-2'
                    alt={spec.label}
                    height={54}
                    width={54}
                  />
                  <small className='text-muted'>{spec.label}</small>
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
