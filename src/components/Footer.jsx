import React from 'react';
import toparrow from "../images/toparrow.png";
import Wlinkedin from "../images/wlinkedin.png";
import Wmail from "../images/wmail.png";
import uparrow from "../images/yellowarrow.png";
import yellowarrow from "../images/yellowarrow.png";
export const Footer = () => {
  return (
    <>
    <footer className=" bg-black" id='footer'>
        <div className='container-xl px-xl-0 px-'>
            <div className='border-bottom'>
            <div className="row py-4 align-items-center">
                <div className="col-md-4 col-lg-3 mt-md-0 mt-3">
                <div className='position-relative mx-3' >
                <div className='yellow-round-footer d-md-block d-none rounded-circle'></div>
                <div className='d-md-block d-flex align-items-center'>
                <h2 className='fw-900 text-white mt-md-4 mt-0 mb-0 position-relative z-index-20'>Let’s Work</h2>
                        <h2 className='fw-900 text-white mt-md-1 mt-0 ms-md-0 ms-2 mb-0 position-relative z-index-20'>together</h2>
                </div>
                </div>
                <div className='mt-4 ms-md-0 ms-3'>
                    <span className='text-white'>Follow on - </span>
                    <a className='ms-1' href="https://www.linkedin.com/in/arun-nasarain/" target='_blank'><img src={Wlinkedin} alt="linkedin" /></a>
                    <a className='ms-2' href="mailto:arunnasarain@gmail.com" target='_blank'><img src={Wmail} alt="mail" /></a>
                </div>
                </div>
                <div className="col-md-4 mt-md-0 mt-3">
                <div className='bg-black rounded border p-3 d-flex flex-column justify-content-between h-100'>
                            <div className='row'>
                               <p className='text-white col-9'>Looking for a Developer</p>
                               <div className='col-3'>
                                <a href="mailto:arunnasarain@gmail.com"> <img className='ms-auto d-block y-arrow' src={yellowarrow} alt="yellowarrow" /></a>
                               </div>
                            </div>
                           <div>
                            <h5 className='mt-2 fw-bold font text-ffb647'>arunnasarain@gmail.com</h5>
                           </div>
                        </div>
                </div>
                <div className="col-md-4 col-lg-5 mt-md-0 mt-3">
                <div className='bg-black rounded border p-3 d-flex flex-column justify-content-between h-100'>
                            <div className='row'>
                               <p className='text-white col-9'>Want a more in depth look at my history</p>
                               <div className='col-3'>
                                <a href="tel:+12176224761"> <img className='ms-auto d-block y-arrow' src={yellowarrow} alt="yellowarrow" /></a>
                               </div>
                            </div>
                           <div>
                            <h5 className='mt-2 fw-bold font text-ffb647'>+1 (217) 622-4761</h5>
                           </div>
                        </div>
                </div>
            </div>
            </div>
            <div className='d-flex  justify-content-between py-4'>
                <h6 className='text-white'>Copyright © Arun Nasarain.</h6>
                 <a href="#header" className='text-white text-decoration-none'>Back to top <img className='y-arrow' src={toparrow} alt="toparrow" /></a>
            </div>
        </div>
    </footer>
    </>
  )
}
