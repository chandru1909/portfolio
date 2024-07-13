import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import uparrow from "../images/uparrow.png";
export const Header = () => {
  return (
    <>
    <header className="px-md-5 px-3 bg-ffead9" id='header'>
        <div className="row align-items-center border-black-bottom h-60px">
           <div className="col-4">
               <span className="fw-bold portfolio">Portfolio</span>
           </div>
           <div className="col-8 p-0">
            <div className="d-flex align-items-center justify-content-end">
              <div className='slideright'>
              <a href="tel:+12176224761" className="text-black text-decoration-none"><span className="fw-bold">Let’s talk</span>
              <img className="ms-2" src={uparrow} alt="uparrow" /></a>
              </div>
              <div className="bg-black h-60px w-80px ms-4 d-flex align-items-center justify-content-center navbar">
              <FontAwesomeIcon icon={faBars} color="white" />
              </div>
            </div>
           </div>
        </div>
    </header>
    </>
  )
}
