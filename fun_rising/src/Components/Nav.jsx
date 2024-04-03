import React from 'react';
import nav1 from '../Assets/img/nav2.jpg';
import img1 from '../Assets/img/img1.png'
import img2 from '../Assets/img/img2.png'
import img3 from '../Assets/img/img3.png'
import img4 from '../Assets/img/img4.png'
import img5 from '../Assets/img/img5.png'
export default function Nav() {
    return (
        <div className='overflow-x-hidden'>
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
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="">

                                </a>
                                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".navbar_supported" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </button>

                                <div className="navbar-collapse navbar_supported collapse" >
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

    );
}
