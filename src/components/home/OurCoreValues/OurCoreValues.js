import React from 'react';

const OurCoreValues = () => {
  return (
    <div>
      <div className='py-5 mt-10 text-gray-800 bg-white section '>
        <div className='container px-4 mx-auto'>
          <h4 className='mb-4 text-3xl font-bold'>Our Core Values</h4>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
            {/* Card 1 */}
            <div className='relative'>
              <img
                src="https://autozone-2024.netlify.app/static/media/innovation.0ef802707dfcec07d787.png"
                alt='Card 1'
                className='object-cover w-full h-92 rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgBzVSBccIwDJS7QBkh3cAbNCN4g2YENiiblE4AG4QNYINkA2ACIRH7cHyyZeC44+90cWT5Lb8tGSAgojPGbCEDmrf0YVuQjWQHih8zsRzTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHONfrMNPtCYQd2mWYYMmGtfC4k2BDgr6MvkgEAyewAnzvcT1Ifhaskbe+urny/yib/wA+G5a0EBBWyzj6E+wSPzLmsw/oQx+aivK/sSnSPwq+Rl0fLP2EqFGfgAdTLqB+d3o63AqnHsxQE3mpOUO5i+hBv/FWX/7LhoPlVmvIw6XIw6l23gfF1OvEMftQu5RmOkJ9L9SyNP4eY/CQk8g31Ihd8KasIGFV8JoATiVtVQsI72sNTyKSLIcXnv0ElRZGII0z0kSEdu3k4RxAaSptPeYfuexAAAAAElFTkSuQmCC"
                  alt='Icon'
                  className='w-6 h-6'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-lg font-bold text-white'>Innovation</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='relative'>
              <img
                src="https://autozone-2024.netlify.app/static/media/customer-centric.d897ab70cc5c9d5bdc7b.png"
                alt='Card 2'
                className='object-cover w-full h-92 rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBtVSLEYIwDH14DuAIuIEjMIIbyAhuIBs4go7gBugE4gRlA9igpl6QXmxLEXh3pb+8pCWvAUZAa32mVmIJkONc98gwB8jRyTjmsbICmHFK7UitwL8gcsMOG+1HE/KxGohRcb8J2LwwIcALw6gwIUCFYdyxYIAWcYdYDkmsIanFJDrn6S1JkhpzgZzvhFTNeDfWyYGJyozF3tOh/zKW3xko3+PxvbAYvq0i+zG1Iv4dv5DqCfG/xUzxNXOxN5gDH3+MilLq9jy9koraaKJJmPi9T4yAkbBDCJfPoehzdeQvZeJRhyup0n05TDNEpUTHQoQUJMHLrErGJyHg89uy71MyuH1DrNdrStYWM4F8FdQV9lqomtaIh9f2Df4/CM6GPXGtAAAAAElFTkSuQmCC"
                  alt='Icon'
                  className='w-6 h-6'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-lg font-bold text-white'>Customer Centric</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='relative'>
              <img
                src="https://autozone-2024.netlify.app/static/media/trust.41aa6441d2cee409549b.png"
                alt='Card 3'
                className='object-cover w-full h-92 rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgBzZTvEYIwDMVbJmAE3IAN1A0YgVXcgA3KCDKBOAFsABvoBvHljB7yp7TQD767R6Ekv5ZLqFYrIqIEwwl+wq3WurfF61FyjCEVHwUUj3J6BsN3WaCe7AAu4Ia26yaMRPOD7CSEqkiFVRwaqP4GyC1UhQIy7Ix2ydS7hXYBP7AW3WFwn7gCK0m2wfLZTGnKoRqZT+GHzPGYyryxNHjNAdeZF2YA7RxhX2Cx8NKMvsTQugoOzC0BxgPGyvhf5tOkU9NTxVc9CnaIcOHqXdR+/TKw05K2q5xdgpYL5A8bQLlInQOIY3LlKgvYD2QB7wNt1Qs8i15sE8f8LgAAAABJRU5ErkJggg=="
                  alt='Icon'
                  className='w-4 h-4'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-lg font-bold text-white'>Trust</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className='relative'>
              <img
                src="https://autozone-2024.netlify.app/static/media/partnership.8316741b8ce0c8fc525f.png"
                alt='Card 4'
                className='object-cover w-full h-92 rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgB7ZPhDYIwFIRP4wCMgBu4gTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHvUAIR+GO45Av0CHe0pcCgQT5ZawOPF5MjSUjUJGRDTorAsXJj0U6F321Zd/cs8OVBBWWKCl5CwopwW/Pu1xujXgciMwnxo5qUBBW+IQ90VLIkGxVoyJTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHUG6i4fVEIuXL/R4tS7KvlL2ZI52JlngPtCyBCg49RWcycx/jXbYJeXv8G/Il0TNYI/+VZYmu3CbjxvJzyLkr57mDFjlmypfxs3CqjRrH8Kgqr1Keky73W7JClyoUyTVEX+o1fNB/6gOTxFTqe+lVGgAAAABJRU5ErkJggg=="
                  alt='Icon'
                  className='w-6 h-6'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-lg font-bold text-white'>Partnership</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className='relative'>
              <img
                src="https://autozone-2024.netlify.app/static/media/agility.ca861368402eb0388430.png"
                alt='Card 5'
                className='object-cover w-full h-92 rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4'>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAYAAACX8hZLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgBpZKBDYMgEEWhcQBHsBswgt2ADcoIHaEjdAPdwHQC7AZuYLqBG9B/CTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHCQhXEKSeOGXSgSelVqNWeNeh/isRrfAbQZvwbYMA70PjqnQQv9A+DF7iAM+hTCZXgRZ0Rv0spx3ATXW8SuZ304BmI08mNiMaaC5YJTrsADSSWN28wA+vv63+TNfzLs+Dqt2jdlep2maARGg+Nagm2Valul0nGaCzVcF/XxgijIyN62o9ivr+4sOWJLlocjJTeB8YBhA+00PyoAAAAAElFTkSuQmCC"
                  alt='Icon'
                  className='w-5 h-4'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-lg font-bold text-white'>Agility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
