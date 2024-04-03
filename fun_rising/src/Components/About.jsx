import React from 'react'
import About1 from '../Assets/img/About1.jpg'
import About2 from '../Assets/img/About2.jpg'
import service1 from '../Assets/img/potential-1.jpg'
import service2 from '../Assets/img/potential-2.jpg'
import service3 from '../Assets/img/potential-3.jpg'
import service4 from '../Assets/img/potential-4.jpg'
import service5 from '../Assets/img/potential-5.jpg'


function About() {
    return (
        <>
            <section>
                <div className='container'>
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
        </>
    )
}

export default About