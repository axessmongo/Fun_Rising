import React from 'react';

export default function Contactus() {
    const handleInput = (e) => {
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5 mt-3">
                        <div
                            className="contact-form mb-2"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <h2 className="text-center mb-4 linear-gradient-text">
            Customer Enquiry Form</h2>
                            <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                                <div className="form-floating pt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                    <label htmlFor="name">Name <span className="text"> *</span></label>
                                </div>
                                <div className="form-floating pt-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <label htmlFor="email">Email <span className="text"> *</span></label>
                                </div>
                                <div className="form-floating pt-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        onInput={handleInput}
                                        maxLength="10"
                                        required
                                    />
                                    <label htmlFor="phone">Phone Number <span className="text"> *</span></label>
                                </div>
                                <div className="form-floating pt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="3"
                                        placeholder="Enter your message"
                                        style={{ height: "80px" }}
                                    ></textarea>
                                    <label htmlFor="message">Message <span>(Optional)</span></label>
                                </div>
                                <div id="output" className="text-center"></div>
                                <div className="text-center pt-2">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-7 mt-3" data-aos="zoom-in" data-aos-duration="700">
                        <div id="map" className="h-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7227190712797!2d80.2460233746738!3d12.989578514484684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d48aabc65c1%3A0x6f54da323bd9c8d0!2sATIT!5e0!3m2!1sen!2sin!4v1701325976498!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-100"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div>
            <footer>
        <div class="container">
            <div class="row justify-content-between">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
                    <a class="navbar-brand nav-logo d-inline-flex align-items-center mb-4" href="index.html">
                        <img src="assets/imagesandvectors/logonew.png" alt="" />
                        <p class="m-0 nav-text">Sonikka</p>
                    </a>
                </div>
                <div class="col-12 col-md-5 col-lg-4">
                    <p class="footer-text text-white mb-3" data-aos="fade-up" data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom">
                        © 2022 All rights reserved by Fund Finder Developed by B2B IT Solutions
                    </p>
                </div>
                <div class="col-12 col-md-5 col-lg-4 text-md-end footer-contact" data-aos="fade-up"
                    data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">
                    <div class="mb-1">
                        <a href="https://maps.app.goo.gl/JbM1k4azSpY4E9Rm9" target="_blank"
                            class="text-white footer-text">
                            <i class="bi bi-geo-alt-fill pe-2"></i>
                            GF-04, TIDEL Park, 4, Rajiv Gandhi Salai,<span class="d-none d-lg-block"></span> Tharamani,
                            Chennai-600113
                        </a>
                    </div>
                    <div class="mb-1">
                        <a href="tel:9150051050" target="_blank" class="text-white footer-text">
                            <i class="bi bi-telephone-fill pe-2"></i>
                            +91 91500 55555
                        </a>
                    </div>
                    <div class="mb-1">
                        <a href="tel:7200317222" target="_blank" class="text-white footer-text">
                            <i class="bi bi-telephone-fill pe-2"></i>
                            +91 72003 00000
                        </a>
                    </div>
                    <div>
                        <a href="mailto:info@sonikkapromoters.com" target="_blank" class="text-white footer-text">
                            <i class="bi bi-envelope pe-2"></i>
                            info@funding.com
                        </a>
                    </div>
                </div>
                <div class="col-12 mx-auto border-bottom footer-border border-3 mt-4 mb-5" data-aos="fade"
                    data-aos-duration="600"></div>

                <div class="d-flex justify-content-center mb-3" data-aos="fade-up" data-aos-duration="800"
                    data-aos-anchor-placement="bottom-bottom">
                    <a class="d-block nav-link primary-text footer-link" target="_blank"
                        href="https://www.linkedin.com/in/asecfire/"><i class="bi bi-facebook"></i>
                    </a>

                    <a class="d-block nav-link primary-text footer-link mx-3" target="_blank"
                        href="https://twitter.com/asec_fire"><i class="bi bi-twitter"></i>
                    </a>
                    <a class="d-block nav-link primary-text footer-link" target="_blank"
                        href="https://plus.google.com/u/0/106652385634310929480"><i class="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
       
       
    </footer>
            </div>
        </div>
    );
}
