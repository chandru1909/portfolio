import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import line from "../images/line.png";
import whitearrow from "../images/white-arrow.png";
import uparrow from "../images/uparrow.png";
import mail from "../images/mail.png";
import linkedin from "../images/linkedin.png";
import li from "../images/li.svg";
import phone from "../images/phone.png";
import arun from "../images/arunimg.png";
import experienceimg from "../images/experienceimg.png";
import name from "../images/arunnasarain.svg";
import ArunNasarain from "../images/ArunNasarain.pdf";
import golang from "../images/golang.png";
import dj from "../images/dj.png";
import node from "../images/node.png";
import devops from "../images/devops.png";
import aws from "../images/aws.png";
import sql from "../images/sql.png";
import yellowarrow from "../images/yellowarrow.png";
import zoho from "../images/zoho.png";
import freshdesk from "../images/freshdesk.png";
import hubspot from "../images/hubspot.png";
import TypedText from './TypedText';
import ProjectCarousel from './ProjectCarousel';

export const Profile = () => {
    return (
        <>
            <main className=''>
                <section className='bg-ffead9'>
                    <div className='container-xl px-xl-0 px-4 '>
                        <div className="row align-items-center">
                            <div className="col-md-5 order-md-1 order-2 py-4 pt-0">
                                <div className='position-relative text-md-start text-center w-fit-content m-auto slideright'>
                                    <div className='d-flex align-items-center justify-content-center justify-content-md-start ms-2 mt-md-0 mt-md-4 mt-2'>
                                        <img src={line} alt="line" className='w-45px h-1px' />
                                        <span className='fw-bold ms-2'>Hello,I'm</span>
                                    </div>
                                    <div className='yellow-round d-md-block d-none rounded-circle'></div>
                                    <h1 className='fw-900 display-1 mb-0 position-relative z-index-20'>Arun</h1>
                                    <h1 className='fw-900 display-1'>Nasarain</h1>
                                    <h5 className='text-4d4d4d fw-bold'>
                                        Software Developer
                                    </h5>
                                    <div className='mt-md-5 mt-4'>
                                        <a href='https://calendly.com/arunnasarain/30min' target='_blank' className='btn bg-black text-white talk'>Let's Talk <img className="ms-2 w-arrow" src={whitearrow} alt="whitearrow" />
                                            <img className="ms-2 d-none u-arrow" src={uparrow} alt="uparrow" />
                                        </a>
                                        <a href='#project' className='btn border-width ms-3 bg-ffead9 work'>My Work <img className="ms-2 u-arrow" src={uparrow} alt="uparrow" />
                                            <img className="ms-2 d-none w-arrow" src={whitearrow} alt="whitearrow" />
                                        </a>
                                    </div>
                                    <div className='mt-3'>
                                        <span>Follow on - </span>
                                        <a className='ms-1' href="https://www.linkedin.com/in/arun-nasarain/" target='_blank'><img src={li} className='w-22px' alt="linkedin" /></a>
                                        <a className='ms-2' href="mailto:arunnasarain@gmail.com" ><img src={mail} className='w-25px' alt="mail" /></a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-7 order-md-2 order-1 py-4">
                                <div className="d-flex justify-content-between">
                                    <div className='w-fit-content m-auto slideleft'>
                                        <img className='ms-auto w-100 h-500px rounded-4 p-2  d-block' src={arun} alt="male1" />
                                    </div>
                                    <div className='d-sm-block d-none'>
                                        <img className='h-500px d-block slidebottom' src={name} alt="name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='specialities' className="bg-white">
                    <div className='container-xl px-xl-0 px-2'>
                        <div className='position-relative mx-3 pt-4' >
                            <div className='yellow-round-small speciality d-md-block d-none rounded-circle'></div>
                            <h5 className='fw-900 display-6 mt-4 pb-md-5 mb-0 position-relative z-index-20'>My Specialties</h5>
                        </div>
                        <div className="row mx-2 py-4">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-sm-4 col-6 mx-0 mt-sm-0 mt-3">
                                        <div className='bg-f2f2f2 rounded p-3 d-flex flex-column h-126px justify-content-between align-items-center'>
                                            <img src={golang} alt="glong" />
                                            <h6 className='fw-bold'>Golang</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-6 mx-0 mt-sm-0 mt-3">
                                        <div className='bg-f2f2f2 rounded p-3 d-flex flex-column h-126px justify-content-between align-items-center'>
                                            <img src={dj} alt="dj" />
                                            <h6 className='fw-bold'>Django</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-6 mx-0 mt-sm-0 mt-3">
                                        <div className='bg-f2f2f2 rounded p-3 d-flex flex-column h-126px justify-content-between align-items-center'>
                                            <img src={node} alt="node" />
                                            <h6 className='fw-bold'>Node.js</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-6 mx-0 mt-3">
                                        <div className='bg-f2f2f2 rounded p-3 d-flex flex-column h-126px justify-content-between align-items-center'>
                                            <img src={aws} alt="aws" />
                                            <h6 className='fw-bold'>AWS</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-6 mx-0 mt-3">
                                        <div className='bg-f2f2f2 rounded p-3 d-flex flex-column h-126px justify-content-between align-items-center'>
                                            <img src={sql} alt="sql" />
                                            <h6 className='fw-bold'>SQL</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-6 mx-0 mt-3">
                                        <div className='bg-f2f2f2 rounded p-3 d-flex flex-column h-126px justify-content-between align-items-center'>
                                            <img src={devops} alt="devops" />
                                            <h6 className='fw-bold'>Devops</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-md-0 mt-4">
                                <a href='mailto:arunnasarain@gmail.com' className='bg-black rounded p-3 d-flex flex-column justify-content-between h-100'>
                                    <div className='row'>
                                        <p className='text-white col-9'>Looking for a Developer</p>
                                        <div className='col-3'>
                                            <img className='ms-auto d-block y-arrow' src={yellowarrow} alt="yellowarrow" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-ffb647'>Hey Hello</span>
                                        <h5 className='mt-2 fw-bold font text-white'>arunnasarain@gmail.com</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='about' className='bg-white'>
                    <div className="row mx-2 py-md-4 py-0 pb-4 align-items-center">
                        <div className="col-md-6">
                            <div className="position-relative">
                                <img className='position-relative w-82 m-auto  h-500px d-block' src={experienceimg} alt="experience" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='position-relative w-fit-content m-auto '>
                                <div className='d-flex align-items-center ms-2 mt-md-0 mt-4'>
                                    <span className='fw-bold text-ffb647 '>Hello,I'm</span>
                                </div>
                                <div className='yellow-round-small d-md-block d-none rounded-circle'></div>
                                <h3 className='fw-900 display-3 mt-4 mb-0 position-relative z-index-20'>Arun</h3>
                                <h3 className='fw-900 display-3'>Nasarain</h3>
                                <h5 className='text-black fw-bold'>
                                    Software Developer
                                </h5>
                                <div className='mt-3'>
                                    <p>As a software engineer with a MS in computer science, I am passionate  about building scalable and reliable backend services using Golang,  JavaScript, Python, and AWS. I have three years of experience in  developing and deploying RESTful APIs, integrations, and microservices  for various domains and platforms.</p>
                                    <h3 className='fw-bold'>06</h3>
                                    <h6>Projects Completed</h6>
                                    <a href={ArunNasarain} target='_blank' className='btn mt-2 bg-black text-white talk'>Download Resume <img className="ms-2 w-arrow" src={whitearrow} alt="whitearrow" />
                                        <img className="ms-2 d-none u-arrow" src={uparrow} alt="uparrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='resume' className='bg-f2f2f2'>
                    <div className='container-xl px-xl-0 px-2 py-4'>
                        <div className='position-relative mx-3 pt-4' >
                            <div className='d-flex align-items-center'>
                                <span className='fw-bold text-ffb647'>Resume</span>
                            </div>
                            <div className='yellow-round-small-all d-md-block d-none rounded-circle'></div>
                            <h5 className='fw-900 display-6 mt-4 mb-0 position-relative z-index-20'>All over my details</h5>
                            <h5 className='fw-900 display-6 mt-3 mb-0 position-relative z-index-20'>find here</h5>
                        </div>
                        {/* <div className="row py-4 mx-2">
                    <div className="nav col-md-6 flex-column gap-3 nav-pills pe-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className="sm-w-100">
                        <button className="nav-link d-flex justify-content-between py-2 active" id="v-pills-experience-tab" data-bs-toggle="pill" data-bs-target="#v-pills-experience" type="button" role="tab" aria-controls="v-pills-experience" aria-selected="false">
                         <span>Experience</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                         <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                         </div>
                        </button>
                        <button className="nav-link d-flex justify-content-between py-2" id="v-pills-education-tab" data-bs-toggle="pill" data-bs-target="#v-pills-education" type="button" role="tab" aria-controls="v-pills-education" aria-selected="false">
                         <span>Education</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                         <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                         </div>
                        </button>
                        <button className="nav-link d-flex justify-content-between py-2" id="v-pills-skill-tab" data-bs-toggle="pill" data-bs-target="#v-pills-skill" type="button" role="tab" aria-controls="v-pills-skill" aria-selected="false">
                         <span>Skills</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                         <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                         </div>
                        </button>
                        <button className="nav-link d-flex justify-content-between py-2" id="v-pills-project-tab" data-bs-toggle="pill" data-bs-target="#v-pills-project" type="button" role="tab" aria-controls="v-pills-project" aria-selected="false">
                        <span>Projects</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                        <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                        </div>
                        </button>
                        </div>
                    </div>
                    <div className="tab-content col-md-6 mt-md-0 mt-3" id="v-pills-tabContent">
                        <div className="tab-pane fade mt-md-0 mt-4 show active" id="v-pills-experience" role="tabpanel" aria-labelledby="v-pills-experience-tab" tabIndex="0">
                            <h4 className='text-black fw-bold'>Software Engineer</h4>
                            <ul className='mt-3'>
                                <li>
                                Successfully spearheaded the development  of Exotel's integration app for the HubSpot marketplace from inception.  Skillfully crafted the server-side using Node.js, orchestrating the  exposure of over 25 REST APIs. Employed JavaScript to construct a  seamless wrapper around HubSpot's Calling SDK. Leveraged React.js, HTML,  and CSS to craft an intuitive front-end. Resulted in an impressive  average onboarding rate of 65 customers per month.
                                </li>
                                <li>
                                Elevated the performance of the Freshdesk  CTI app, with a backend service in Go and a JavaScript-powered FDK app.  Pioneered the implementation of web sockets for seamless communication  between the FDK app and middleware. Implemented critical functionalities  in microservices tailored to user needs, resulting in an impressive 22%  surge in usage.
                                </li>
                                <li>Pioneered the creation of seven  high-impact marketplace apps using PHP and JavaScript. Subsequently,  took charge of the entire service, instigating a comprehensive redesign  of function flows to bolster efficiency. The revamp led to an impressive  47 percent reduction in response time.</li>
                                <li>
                                    Architected and developed a cutting-edge  gRPC module in Go for the common middleware service, prioritizing  scalability. This innovation resulted in a remarkable fivefold increase  in data transfer speed compared to traditional REST.
                                </li>
                                <li>
                                Managed end-to-end ownership of the web  services I developed. This encompassed coding, comprehensive unit  testing, rigorous integration testing, adept debugging, quality  assurance, and seamless deployment. Proficiently utilized a diverse  range of frameworks and tools to ensure optimal outcomes.
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade mt-md-0 mt-4" id="v-pills-education" role="tabpanel" aria-labelledby="v-pills-education-tab" tabIndex="0">
                        <h4 className='text-black fw-bold'>Education</h4>
                            <ul className='d-flex flex-column gap-3 mt-3'>
                                <li>
                                    <h6 className='text-black fw-bold'>Aug 2022 - Dec 2023</h6>
                                Master of Science in Computer Science
                                </li>
                                <li>
                                    <h6 className='text-black fw-bold'>ul 2016 - Dec 2020</h6>
                                Bachelor of Engineering in Computer Science and Engineering
                                </li>
                            </ul>
                        </div>
                        
                        <div className="tab-pane fade" id="v-pills-skill" role="tabpanel" aria-labelledby="v-pills-skill-tab" tabIndex="0">
                        <h4 className='text-black fw-bold'>Skills</h4>
                            <ul className='d-flex flex-column gap-3 mt-3'>
                                <li>
                                    <h6 className='text-black fw-bold'>Tech Stack</h6>
                                    Unix/Linux, Shell  Scripting, SQL/NoSQL, Redis, Git, Cloud Technologies (AWS, Azure),  CI/CD, Jenkins, Argo CD, Ansible, Docker, Aerospike, Apache Kafka,  Kubernetes, ElasticSearch, Logstash, Kibana, Grafana, Nagios.
                                </li>
                                <li>
                                    <h6 className='text-black fw-bold'>Functional Skills</h6>
                                    Agile  software development process, Test-Driven Development, SCRUM, Atlassian  JIRA, Atlassian Confluence, Collaborative, Professional written and  verbal communications skills.
                                </li>
                                <li>
                                    <h6 className='text-black fw-bold'>Programming Languages</h6>
                                    Golang, JavaScript, Python, Java, PHP, C#, C/C++.
                                </li>
                                <li>
                                    <h6 className='text-black fw-bold'>Familiar Databases</h6>
                                    MySQL, PostgreSQL, DynamoDB, SQLite, MongoDB
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="v-pills-project" role="tabpanel" aria-labelledby="v-pills-project-tab" tabIndex="0">
                            <ul className='d-flex flex-column gap-3 mt-3'>
                                <li><h6 className='fw-bold'>Face Recognition Attendance System</h6></li>
                                <li><h6 className='fw-bold'>Video Calling and Screen Sharing Application</h6></li>
                                <li><h6 className='fw-bold'>Crowd Funding Platform</h6></li>
                                <li><h6 className='fw-bold'>TODO Application with GO</h6></li>
                                <li><h6 className='fw-bold'>Acute Stroke Detection System</h6></li>
                                <li><h6 className='fw-bold'>Travel and Tourism Planner</h6></li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                        <div className="row py-4 mx-2">
                            <div className="col-md-6 px-0">
                                <div id="simple-list-example" className="d-flex sm-w-100 flex-column gap-2 simple-list-example-scrollspy text-center">
                                    <a href='#simple-list-item-1' className=" d-flex rounded text-black justify-content-between p-2" >
                                        <span>Experience</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                                            <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                                        </div>
                                    </a>
                                    <a href='#education' className=" d-flex rounded text-black justify-content-between p-2" >
                                        <span>Education</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                                            <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                                        </div>
                                    </a>
                                    <a href='#simple-list-item-3' className=" d-flex rounded text-black justify-content-between p-2" >
                                        <span>Skills</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                                            <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                                        </div>
                                    </a>
                                    <a href='#simple-list-item-4' className=" d-flex rounded text-black justify-content-between p-2" >
                                        <span>Projects</span><div><img className="ms-auto u-arrow" src={uparrow} alt="uparrow" />
                                            <img className="ms-auto w-arrow d-none" src={whitearrow} alt="whitearrow" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                                    <h4 id='simple-list-item-1' className='text-black fw-bold'>Experience</h4>
                                    <h6 className='text-black fw-bold'>Software Engineer</h6>
                                    <ul className='mt-3'>
                                        <li>
                                            Successfully spearheaded the development  of Exotel's integration app for the HubSpot marketplace from inception.  Skillfully crafted the server-side using Node.js, orchestrating the  exposure of over 25 REST APIs. Employed JavaScript to construct a  seamless wrapper around HubSpot's Calling SDK. Leveraged React.js, HTML,  and CSS to craft an intuitive front-end. Resulted in an impressive  average onboarding rate of 65 customers per month.
                                        </li>
                                        <li>
                                            Elevated the performance of the Freshdesk  CTI app, with a backend service in Go and a JavaScript-powered FDK app.  Pioneered the implementation of web sockets for seamless communication  between the FDK app and middleware. Implemented critical functionalities  in microservices tailored to user needs, resulting in an impressive 22%  surge in usage.
                                        </li>
                                        <li>Pioneered the creation of seven  high-impact marketplace apps using PHP and JavaScript. Subsequently,  took charge of the entire service, instigating a comprehensive redesign  of function flows to bolster efficiency. The revamp led to an impressive  47 percent reduction in response time.</li>
                                        <li>
                                            Architected and developed a cutting-edge  gRPC module in Go for the common middleware service, prioritizing  scalability. This innovation resulted in a remarkable fivefold increase  in data transfer speed compared to traditional REST.
                                        </li>
                                        <li id='education'>
                                            Managed end-to-end ownership of the web  services I developed. This encompassed coding, comprehensive unit  testing, rigorous integration testing, adept debugging, quality  assurance, and seamless deployment. Proficiently utilized a diverse  range of frameworks and tools to ensure optimal outcomes.
                                        </li>
                                    </ul>
                                    <h4 id='simple-list-item-2' className='text-black fw-bold'>Education</h4>
                                    <ul className='d-flex flex-column gap-3 mt-3'>
                                        <li>
                                            <h6 className='text-black fw-bold'>Aug 2022 - Dec 2023</h6>
                                            Master of Science in Computer Science
                                        </li>
                                        <li>
                                            <h6 className='text-black fw-bold'>jul 2016 - Dec 2020</h6>
                                            Bachelor of Engineering in Computer Science and Engineering
                                        </li>
                                    </ul>
                                    <h4 id='simple-list-item-3' className='text-black fw-bold'>Skills</h4>
                                    <ul className='d-flex flex-column gap-3 mt-3'>
                                        <li>
                                            <h6 className='text-black fw-bold'>Tech Stack</h6>
                                            Unix/Linux, Shell  Scripting, SQL/NoSQL, Redis, Git, Cloud Technologies (AWS, Azure),  CI/CD, Jenkins, Argo CD, Ansible, Docker, Aerospike, Apache Kafka,  Kubernetes, ElasticSearch, Logstash, Kibana, Grafana, Nagios.
                                        </li>
                                        <li>
                                            <h6 className='text-black fw-bold'>Functional Skills</h6>
                                            Agile  software development process, Test-Driven Development, SCRUM, Atlassian  JIRA, Atlassian Confluence, Collaborative, Professional written and  verbal communications skills.
                                        </li>
                                        <li>
                                            <h6 className='text-black fw-bold'>Programming Languages</h6>
                                            Golang, JavaScript, Python, Java, PHP, C#, C/C++.
                                        </li>
                                        <li>
                                            <h6 className='text-black fw-bold'>Familiar Databases</h6>
                                            MySQL, PostgreSQL, DynamoDB, SQLite, MongoDB
                                        </li>
                                    </ul>
                                    <h4 id="simple-list-item-4" className='text-black fw-bold'>Projects</h4>
                                    <ul className='d-flex flex-column gap-3 mt-3'>
                                        <li><h6 className='fw-bold'>Face Recognition Attendance System</h6></li>
                                        <li><h6 className='fw-bold'>Video Calling and Screen Sharing Application</h6></li>
                                        <li><h6 className='fw-bold'>Crowd Funding Platform</h6></li>
                                        <li><h6 className='fw-bold'>TODO Application with GO</h6></li>
                                        <li><h6 className='fw-bold'>Acute Stroke Detection System</h6></li>
                                        <li><h6 className='fw-bold'>Travel and Tourism Planner</h6></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id='portfolio' className='bg-ffead9 py-5'>
                    <div className='container-xl px-xl-0 px-2'>
                        <h6 className='fw-bold text-center text-ffb647'>Portfolio</h6>
                        <h4 className='fw-bold text-center'>Products I built for Exotel</h4>
                        <div className="row mx-2 mt-4">
                            <div className="col-md-4 col-sm-6">
                                <div className="w-80 m-auto">
                                    <img className='w-100' src={hubspot} alt="hubspot" />
                                    <h5 className='fw-bold my-3'>Hubspot-Exotel Integration</h5>
                                    <p className='text-black mh-240px'>HubSpot Exotel CTI provides a seamless way to handle customer calls from  HubSpot. Make outbound calls, take call notes, get complete call  details including recordings on your HubSpot dashboard.</p>
                                    <a href="https://ecosystem.hubspot.com/marketplace/apps/sales/calling/exotel" target='_blank' className='btn mt-2 bg-black text-white talk d-block text-center'>Learn More <img className="ms-auto w-arrow" src={whitearrow} alt="whitearrow" />
                                        <img className="ms-auto d-none u-arrow" src={uparrow} alt="uparrow" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-sm-0 mt-4">
                                <div className="w-80 m-auto">
                                    <img className='w-100' src={freshdesk} alt="hubspot" />
                                    <h5 className='fw-bold my-3'>Freshdesk Integration</h5>
                                    <p className='text-black mh-240px'>Exotel Freshdesk Plugin enables contextual association of calls with  tickets. It enables an agent to have Incoming Call intimation, visualize  the call details along with call recordings and provide Click2Call  capabilities.</p>
                                    <a href="https://www.freshworks.com/apps/freshdesk/exotel_cti/" target='_blank' className='btn mt-2 bg-black text-white talk d-block text-center'>Learn More <img className="ms-auto w-arrow" src={whitearrow} alt="whitearrow" />
                                        <img className="ms-auto d-none u-arrow" src={uparrow} alt="uparrow" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-md-0 mt-4">
                                <div className='w-80 m-auto'>
                                    <img className='w-100' src={zoho} alt="hubspot" />
                                    <h5 className='fw-bold my-3'>Zoho CRM Integration</h5>
                                    <p className='text-black mh-240px'>Exotel for Zoho enables contextual association of calls with leads,  contacts, tasks, and events. It allows an agent to get notifications for  incoming calls, visualize call details, and simply click to call.</p>
                                    <a href="https://marketplace.zoho.com/app/crm/exotel-for-zoho" target='_blank' className='btn mt-2 bg-black text-white talk d-block text-center'>Learn More <img className="ms-auto w-arrow" src={whitearrow} alt="whitearrow" />
                                        <img className="ms-auto d-none u-arrow" src={uparrow} alt="uparrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='project' className='bg-black py-md-4 pt-5 pb-3'>
                    <div className='container-xl px-xl-0 px-2 py-md-3 py-0'>
                        <h6 className='fw-bold text-center text-ffb647'>Works</h6>
                        <h4 className='fw-bold text-center text-white mb-4'>My Projects</h4>
                        <ProjectCarousel />
                    </div>
                </section>
                <section id='contact' className='bg-ffead9 py-5'>
                    <div className='container-xl px-xl-0 px-4'>
                        <div className="row mx-2">
                            <div className="col-md-4 text-black">
                                <h1 className='fw-bold mb-4'>Contact Me</h1>
                                <h5 className='pt-2'><a href="mailto:arunnasarain@gmail.com" className='text-black align-text'><img src={mail} className='me-2 w-25px align-text' alt="mail" />arunnasarain@gmail.com</a></h5>
                                <div className='pt-2 d-flex'>
                                    <div className='bg-black w-25px d-flex justify-content-center align-items-center roundeddiv'>
                                        <FontAwesomeIcon icon={faPhone} className=' text-ffead9' />
                                    </div>
                                    <h5 className='ms-2'><a className='text-black align-text' href="https://calendly.com/arunnasarain/30min" target='_blank'>+12176224761</a></h5>
                                </div>
                                <h5 className='pt-2 pb-3'><a className='text-black align-text' href="https://www.linkedin.com/in/arun-nasarain/"><img src={li} className='me-2 w-25px align-text' alt="linkedin" />LinkedIn</a></h5>
                                <a href={ArunNasarain} target='_blank' className='btn mt-2 bg-ffead9 work border-width'>Download Resume <img className="ms-2 w-arrow d-none" src={whitearrow} alt="whitearrow" />
                                    <img className="ms-2 u-arrow" src={uparrow} alt="uparrow" />
                                </a>
                            </div>
                            <div className="col-md-8 mt-md-0 mt-4 px-md-3 px-1">
                                <div className="mb-3">
                                    <input type="text" className="form-control py-2" id="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control py-2" id="mail" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="comment" placeholder='Your Message' rows="6"></textarea>
                                </div>
                                <button className='btn border-width bg-ffead9 work submit' type='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
