import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import travel from "../images/travel.png";
import face from "../images/face.png";
import crowd from "../images/crowd.png";
import todo from "../images/todo.png";
import video from "../images/video.png";
import stroke from "../images/stroke.png";
import uparrow from "../images/uparrow.png";

const ProjectCarousel = () => {
  const [carouselOptions, setCarouselOptions] = useState({
    items: 1,
    loop: false,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    slideTransition:'linear',
    smartSpeed:800,
    lazyLoad:true,
    responsive: {
      640: { items: 2 },
      768: { items: 3 },
      1024: { items: 4 },
    },
  });


  return (
    <div className="owl-slider">
      <OwlCarousel className="owl-carousel align-items-center d-flex pb-3 px-4 carouselproject" {...carouselOptions}>
      <div className='item rounded-3'>
        <div>
            <img className='w-100' src={face} alt="face" />
        </div>
        <div className='px-3 py-3 rounded-4 rounded-top-0 bg-f2f2f2'>
        <h6 className='fw-bold text-black'>Face Recognition Attendance System</h6>
        <p className='text-black'>
            The Face Recognition Attendance System is a web-based application developed using Django and Python, designed to streamline the process of employee attendance management through facial recognition technology.
        </p>
        <div>
            <a href="https://github.com/arunnasarain/face_recognition_system" target='_blank'><img className='ms-auto d-block w-unset' src={uparrow} alt="uparrow" /></a>
        </div>
        </div>
        </div>

        <div className='item rounded-3'>
        <div>
            <img className='w-100' src={video} alt="travel" />
        </div>
        <div className='px-3 py-3 rounded-4 rounded-top-0 bg-f2f2f2'>
        <h6 className='fw-bold text-black'>Video Calling and Screen Sharing Application</h6>
        <p className='text-black'>
        This is a web-based video conferencing platform built using Node.js,  PeerJS, and Socket.IO. It enables users to conduct group video calls,  share screens, and communicate with each other in real-time, providing a  seamless virtual meeting experience.
        </p>
        <a href="https://github.com/arunnasarain/videocall_with_screenshare" target='_blank'><img className='ms-auto d-block w-unset' src={uparrow} alt="uparrow" /></a>
        </div>
        </div>

        <div className='item rounded-3'>
        <div>
            <img className='w-100' src={crowd} alt="travel" />
        </div>
        <div className='px-3 py-3 rounded-4 rounded-top-0 bg-f2f2f2'>
        <h6 className='fw-bold text-black'>Crowd Funding Platform</h6>
        <p className='text-black'>
        This project aims to develop a crowd funding platform where users can  create projects, invest in them, and provide feedback. The platform  provides various functionalities for managing projects, investors,  investments, and feedback.
        </p>
        <a href="https://github.com/arunnasarain/crowd_funding" target='_blank'><img className='ms-auto d-block w-unset' src={uparrow} alt="uparrow" /></a>
        </div>
        </div>

        <div className='item rounded-3'>
        <div>
            <img className='w-100' src={todo} alt="travel" />
        </div>
        <div className='px-3 py-3 rounded-4 rounded-top-0 bg-f2f2f2'>
        <h6 className='fw-bold text-black'>TODO Application with GO</h6>
        <p className='text-black'>
        The Todo Application is a simple yet efficient task management tool  built with Golang, Gin, and PostgreSQL. It allows users to create, read,  update, and delete tasks through a user-friendly web interface.
        </p>
        <a href="https://github.com/arunnasarain/todo_application" target='_blank'><img className='ms-auto d-block w-unset' src={uparrow} alt="uparrow" /></a>
        </div>
        </div>

        <div className='item rounded-3'>
        <div>
            <img className='w-100' src={stroke} alt="travel" />
        </div>
        <div className='px-3 py-3 rounded-4 rounded-top-0 bg-f2f2f2'>
        <h6 className='fw-bold text-black'>Acute Stroke Detection System</h6>
        <p className='text-black'>
        Core idea of the project is to monitor people who are bed ridden and  might get stroke. We monitor the patients constantly so that if the  readings drop, we can notify via our mobile app
        </p>
        <a href="https://github.com/arunnasarain/acutestroke" target='_blank'><img className='ms-auto d-block w-unset' src={uparrow} alt="uparrow" /></a>
        </div>
        </div>

        <div className='item rounded-3'>
        <div>
            <img className='w-100' src={travel} alt="travel" />
        </div>
        <div className='px-3 py-3 rounded-4 rounded-top-0 bg-f2f2f2'>
        <h6 className='fw-bold text-black'>Travel and Tourism Planner</h6>
        <p className='text-black'>
        The primary objective of this website is to provide the user with  adequete information about the desired location to visit and to plan the  travel itenary.
        </p>
        <a href="https://github.com/arunnasarain/travelplanner" target='_blank'><img className='ms-auto d-block w-unset' src={uparrow} alt="uparrow" /></a>
        </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default ProjectCarousel;