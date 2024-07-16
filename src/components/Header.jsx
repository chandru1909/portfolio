import React, { useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import uparrow from "../images/uparrow.png";
import an from "../images/an.png";

export const Header = () => {
  useEffect(() => {
    var mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      $('.w-80px').mouseenter(function() {
        $(this).addClass('d-none')
        $('#staticBackdrop').addClass('show');
        $('.offcanvas-backdrops').removeClass('d-none');
        $('#staticBackdrop').css({'transition':'ease 0.3s'});
      });
  
      $('#staticBackdrop').mouseleave(function() {
        $('.w-80px').removeClass('d-none')
        $('#staticBackdrop').removeClass('show');
        $('.offcanvas-backdrops').addClass('d-none');
        $('#staticBackdrop').css({'transition':'ease 0.3s'});
      });
  
      $('.curser').click(function() {
        $('.w-80px').removeClass('d-none')
        $('#staticBackdrop').removeClass('show');
        $('.offcanvas-backdrops').addClass('d-none');
        $('#staticBackdrop').css({'transition':'ease 0.3s'});
      });
  }
  }, []);


  return (
    <>
      <header className="container-fluid bg-ffead9" id='header'>
        <div className="row align-items-center border-black-bottom h-60px">
          <div className="col-4">
            <a href='/' className="fw-bold portfolio"><img className="ms-2 w-60px" src={an} alt="AN" /></a>
          </div>
          <div className="col-8 p-0">
            <div className="d-flex align-items-center justify-content-end">
              <div className='slideright'>
                <a href="https://calendly.com/arunnasarain/30min" target='_blank' className="text-black text-decoration-none"><span className="fw-bold">Let’s talk</span>
                  <img className="ms-2" src={uparrow} alt="uparrow" /></a>
              </div>
              <div className="bg-black h-60px w-80px ms-4 me-1-c d-flex align-items-center justify-content-center navbar" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <FontAwesomeIcon icon={faBars} color="white" />
              </div>
              <div className="offcanvas-backdrops d-none"></div>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header bg-black pb-0">
                  <div data-bs-dismiss="offcanvas" className='curser' aria-label="Close">
                    <FontAwesomeIcon icon={faTimes} color='white' className='fs-3'/>
                  </div>
                </div>
                <div className="offcanvas-body bg-black">
                  <div className='text-center d-flex align-items-center justify-content-center flex-column'>
                    <a href="#about" className='text-white w-100'><h5 className='fw-bold mb-0 py-3 border-bottom'>About me</h5></a>
                    <a href="#specialities" className='text-white w-100'><h5 className='fw-bold py-3 mb-0 border-bottom'>Specialties</h5></a>
                    <a href="#resume" className='text-white w-100'><h5 className='fw-bold mb-0 py-3 border-bottom'>Resume</h5></a>
                    <a href="#portfolio" className='text-white w-100'><h5 className='fw-bold mb-0 py-3 border-bottom'>Portfolio</h5></a>
                    <a href="#project" className='text-white w-100'><h5 className='fw-bold mb-0 py-3 border-bottom'>Works</h5></a>
                    <a href="#contact" className='text-white w-100'><h5 className='fw-bold mb-0 py-3'>Contact</h5></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
