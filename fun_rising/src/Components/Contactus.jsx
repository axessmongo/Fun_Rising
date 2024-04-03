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
            <div className="container">
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
                                <div className="form-floating">
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
                                <div className="form-floating">
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
                                <div className="form-floating">
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
                                <div className="form-floating">
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
        </div>
    );
}
