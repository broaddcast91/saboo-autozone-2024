import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';

export const Banner = ({ imageSrc, altText, breadcrumbTitle }) => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={imageSrc}
        alt={altText}
      />

      <div className='py-3 bg-white shadow-sm container-fluid'>
        <div className='container'>
          <ol className='mb-0 breadcrumb'>
            <li className='breadcrumb-item'>
              <Link className='text-black text-decoration-none' to='/'>
                <IoIosHome /> Home
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {breadcrumbTitle}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
