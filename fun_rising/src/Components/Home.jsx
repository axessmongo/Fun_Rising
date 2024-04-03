import React, { useEffect, useState } from 'react'
import nav1 from '../Assets/img/nav2.jpg';
import img1 from '../Assets/img/img1.png'
import img2 from '../Assets/img/img2.png'
import img3 from '../Assets/img/img3.png'
import img4 from '../Assets/img/img4.png'
import img5 from '../Assets/img/img5.png'
import About1 from '../Assets/img/About1.jpg'
import About2 from '../Assets/img/About2.jpg'
import service1 from '../Assets/img/potential-1.jpg'
import service2 from '../Assets/img/potential-2.jpg'
import service3 from '../Assets/img/potential-3.jpg'
import service4 from '../Assets/img/potential-4.jpg'
import service5 from '../Assets/img/potential-5.jpg'
import step1 from "../Assets/img/step-1.png";
import step2 from "../Assets/img/step-2.png";
import step3 from "../Assets/img/step-3.png";
import step4 from "../Assets/img/step-4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from './Scroll';

export default function Home() {
  const [active, setActive] = useState(false)
  AOS.init({
    // Add your AOS options here
  });

  const [isZoomed, setIsZoomed] = useState(false);
  let gotoTop = (secID) => {
    const element = document.getElementById(secID);
    const navbarElement = document.querySelector('.navbar>.container-fluid');

    if (navbarElement) {
      var navHeight = navbarElement.clientHeight;
      // Use navHeight as needed
    }
    console.log(element)
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

    }

  }
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  gotoTop();
  return (
    <div>
      <div className='overflow-x-hidden' >
        <div className='container-fluid '>
          <div className="header_top_area">
            <div className="container">
              <div className="header_top_inner row m-0">
                <ul className="top_menu col-lg-6 col-md-7 p-0">
                  <li><a href="#" className="number"><small><i className="bi bi-telephone-fill"></i></small>73973 12482</a></li>
                  <li><a href="#">info@fundfinder.in</a></li>
                  <li><a href="disclaimer.html">Privacy disclaimer</a></li>
                </ul>
                <div className="right_menu col-lg-6 col-md-5 p-0 d-flex justify-content-center justify-content-md-end ">
                  <ul className="right_nav mt-4">
                    <li className='face'><i className="bi bi-facebook"></i></li>
                    <li><i className="bi bi-whatsapp"></i></li>
                    <li><i className="bi bi-linkedin"></i></li>
                    <li><i className="bi bi-whatsapp"></i></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div>
            <img src={nav1} alt="nav1" />

          </div>
          <header className="main_header_area">
            <div className="container">
              <div className="header_menu">
                <nav className="navbar navbar-expand-lg fixed-top">
                  <a className="navbar-brand" href=""></a>
                  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".navbar_supported" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <div className="navbar-collapse navbar_supported collapse">
                    <ul className="navbar-nav">
                      <li><a href="index.html" className='nav-link'>Home</a></li>
                      <li><a className="nav-link" href="#about">About us</a></li>
                      <li><a className="nav-link" href="#process">Process</a></li>
                      <li><a href="#contact" className='nav-link'>Contact us</a></li>
                      <li><a className="nav-link" href="#"><i className="bi bi-telephone-fill"></i> 73973 12482</a></li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className='mt-5 py-3 text-center mt-4' style={{ color: "white" }}>
                <h2 className='fs-1 mt-5' > We are the One Stop Solutions for all types of <span style={{ color: "#fd7e14" }}>Loans</span></h2>
                <div className='d-flex theme-btn mt-5 p-5' style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <button className="orange-btn">ALL SERVICES</button>
                  <button className="blue-btn">APPLY NOW</button>
                </div>

              </div>
            </div>

          </header>
        </div>
        <section className="achieve_financial_area">
          <div className="container">
            <div className="tittle">
              <img src={img1} alt="" className='mt-0' />
              <h2 className='mt-5'>You can achieve your financial goals. <span>We can help.</span></h2>
            </div>
            <div className="row achieve_inner">
              <div className="col-lg-12 col-md-6 text-center personal_tittle ">
                <p>We will match you with a loan program that meets your financial needs. In short term liquidity, by striving to make funds available to them within 24 hours of application.</p>

                <a href="#form" className="theme_btn " style={{ textDecoration: "none", padding: "5px 5px", borderRadius: "20px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>ALL LOAN SERVICES</a>


              </div>


              <div className="col-lg-3 col-md-6 wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                <div className="achieve" style={{ height: '100%' }}> {/* Add fixed height */}
                  <div className="icon_img"><img src={img2} alt="" /></div>
                  <a href="#form">Professional Services</a>
                  <p>We are giving the best consultation to our customers with our professional experts.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn' }}>
                <div className="achieve" style={{ height: '100%' }}> {/* Add fixed height */}
                  <div className="icon_img"><img src={img5} alt="" /></div>
                  <a href="#form">Low costing</a>
                  <p>We are providing loans to our customers with a lower amount of processing charges.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeIn' }}>
                <div className="achieve" style={{ height: '100%' }}> {/* Add fixed height */}
                  <div className="icon_img"><img src={img3} alt="" /></div>
                  <a href="#form">Live Support</a>
                  <p>We provide 24/7 customer service support to our customers.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeIn' }}>
                <div className="achieve" style={{ height: '100%' }}> {/* Add fixed height */}
                  <div className="icon_img"><img src={img4} alt="" /></div>
                  <a href="#form">Safe and Secure</a>
                  <p>We prioritize protecting your information and privacy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <section>
        <div className='container' id='about'>
          <div className='row py-5'>
            <div className='col-md-6'>
              <div>
                <img src={About1} alt="" className='img-fluid' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className=''>
                <div>
                  <h1 className='font-head'>About</h1>
                  <h5 className='pt-2 font-subhead'>We operate our banking services in all over chennai.</h5>
                  <p className='pt-2'>Established in the year 2017, Fund Finder in Chennai, We are top player in the category Personal loan, Business loan, Loan against Property and Home Loans arranging with all private and nationalized banks in Chennai.</p>
                  <div className='py-2 text-center'> <button className='about-bt'>Call Now: xxxxx xxxxx</button></div>

                </div>
                <div className='pt-2'>
                  <img src={About2} alt="" className='img-fluid w-50' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='py-3 text-center'>
            <h1 className='font-head'>Our Best Services</h1>
            <h5 className='font-subhead pt-3'>We are modern and special for Quick Approval and Disbursement with minimum documentation.</h5>
          </div>
          <div className='row'>
            <div className='col-md-4 pt-3'>
              <div className='card-about'>
                <div>
                  <div className='zooming'>
                    <img src={service1} alt="" className='img-fluid' />
                  </div>
                  <div className='p-3 text-center'>
                    <h2 className='py-2 font-head'>Personal Loan</h2>
                    <p className='font-subhead'>There were times, when something we want or need to buy is slightly out of our financial reach. But as finance market is at rapid growth money is at your finger tips, you just have to search for a good loan lender in chennai and borrow a loan to fulfill your personal requirements.</p>
                    <button className='about-bt'>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-3'>
              <div className='card-about'>
                <div>
                  <div className='zooming'>
                    <img src={service2} alt="" className='img-fluid' />
                  </div>
                  <div className='p-3 text-center'>
                    <h2 className='py-2 font-head'>Business Loan</h2>
                    <p className='font-subhead'>We always ready to help you as we understand your needs we can help you to render business loan at very low interest rate. Business loan are always useful for escalating existing business on higher level, renovating and refining existing medium or small businesses.</p>
                    <button className='about-bt'>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-3'>
              <div className='card-about'>
                <div>
                  <div className='zooming'>
                    <img src={service3} alt="" className='img-fluid' />
                  </div>
                  <div className='p-3 text-center'>
                    <h2 className='py-2 font-head'>Home Loan</h2>
                    <p className='font-subhead'>We always ready to help you as we understand your needs we can help you to render home loan at very low interest rate. If you are spending good amount in paying house rent in chennai Looking for buying a free hold home, flats but doesn’t have enough money to pay complete cost.</p>
                    <button className='about-bt'>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center py-2'>
            <div className='col-md-4 pt-3'>
              <div className='card-about'>
                <div>
                  <div className='zooming'>
                    <img src={service4} alt="" className='img-fluid' />
                  </div>
                  <div className='p-3 text-center'>
                    <h2 className='py-2 font-head'>Loan against property</h2>
                    <p className='font-subhead'>We always ready to help you as we understand your needs we can help you to render loan against property at low interest in chennai as in today’s scenario we never know when we required money it can be any reason.</p>
                    <button className='about-bt'>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-3'>
              <div className='card-about'>
                <div>
                  <div className='zooming'>
                    <img src={service5} alt="" className='img-fluid' />
                  </div>
                  <div className='p-3 text-center'>
                    <h2 className='py-2 font-head'>Working Capital Loan</h2>
                    <p className='font-subhead'>We always ready to help you as we understand your needs we can help you to render loan against property at low interest in chennai as in today’s scenario we never know when we required money it can be any reason.</p>
                    <button className='about-bt'>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="step-bg" id='process'>
        <div id="step-bg-color" className="p-3">
          <div className="container">
            <h2 className="pt-5 tittle">
              Apply in four easy steps <br />{" "}
              <span className="text-white">
                Fast & Easy Application Process.
              </span>
            </h2>
            <div className="row pt-5">
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 1</p>
                    <img src={step1} className="pt-2" alt="" />
                    <p className="fs-5 pt-3 fw-semibold font-style font-color">
                      Contact us first Reach us @ 73973 12482
                    </p>
                    <div className="justify-content-center d-flex pt-5">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 2</p>
                    <img src={step4} className="pt-2" alt="" />
                    <p className="fs-5 pt-2 fw-semibold font-style font-color">
                      Consult with us We'll ask you all the right questions
                    </p>
                    <div className="justify-content-center d-flex pt-3">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 3</p>
                    <img src={step2} className="pt-2" alt="" />
                    <p className="fs-5 pt-2 fw-semibold font-style font-color">
                      Submit your documents. We wil finalize your loan Amount
                    </p>
                    <div className="justify-content-center d-flex ">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 4</p>
                    <img src={step3} className="pt-2" alt="" />
                    <p className="fs-5 pt-2 fw-semibold font-style font-color">
                      Get Approval Become one of us by joining thousands of our
                      happy clients
                    </p>
                    <div className="justify-content-center d-flex ">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
      <Scroll />
    </div>
  )
}

