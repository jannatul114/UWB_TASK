import React from 'react';
import people1 from '../../images/1.jpg';
import people2 from '../../images/2.jpg';
import people3 from '../../images/3.jpg';
import people4 from '../../images/4.jpg';
import facebook from '../../images/fabebook.PNG';
import twitter from '../../images/twitter.PNG';
import insta from '../../images/insta.PNG';
import email from '../../images/email.PNG';
import linkedin from '../../images/linkedin.PNG';
import './Psychologist.css';
const Psychologist = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-3 fw-bold '>Our Psychologists</h2>


            <div className='my-5'>
                <div class="row d-flex justify-content-between align-items-center gy-3">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <div className='shadow-lg p-3 rounded-2' data-aos="fade-up"
                            data-aos-easing="ease-in"
                            data-aos-delay="0"
                            data-aos-offset="0"
                            data-aos-duration="1000">
                            <div className='d-flex justify-content-center'>
                                <img height={'200px'} className='rounded-3' src={people1} alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>Psychologist</h6>
                            <h5 className=' text-center fw-bold my-3'>Sudipa Datta</h5>
                            <h6 className='text-center'>Associate Degree in Psychology</h6>
                            <h6 className='text-center'><span className='fw-semibold'>Experiance:</span> 3 years</h6>

                            <div className='d-flex justify-content-center'>
                                <button className='nav_color mt-4 p-2 text-white fw-bold  border-0 '>Book Now!</button>
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <div className='flex justify-content-around'>
                                    <img height={'20px'} src={facebook} alt="" />
                                    <img className='mx-2' height={'20px'} src={twitter} alt="" />
                                    <img height={'20px'} src={insta} alt="" />
                                    <img className='mx-2' height={'20px'} src={linkedin} alt="" />
                                    <img height={'20px'} src={email} alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className=' shadow-lg p-3 rounded-2' data-aos="fade-up"
                            data-aos-easing="ease-in"
                            data-aos-delay="0"
                            data-aos-offset="0"
                            data-aos-duration="1000">
                            <div className='d-flex justify-content-center'>
                                <img height={'200px'} className='rounded-3' src={people2} alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>Psychologist</h6>
                            <h5 className=' text-center fw-bold my-3'>Sandip Roy</h5>

                            <h6 className='text-center'>Bachelor's Degree in Psychology</h6>
                            <h6 className='text-center'><span className='fw-semibold'>Experiance:</span> 2 years</h6>
                            <div className='d-flex justify-content-center'>
                                <button className='nav_color mt-4 p-2 text-white fw-bold  border-0 '>Book Now!</button>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <div className='flex justify-content-around'>
                                    <img height={'20px'} src={facebook} alt="" />
                                    <img className='mx-2' height={'20px'} src={twitter} alt="" />
                                    <img height={'20px'} src={insta} alt="" />
                                    <img className='mx-2' height={'20px'} src={linkedin} alt="" />
                                    <img height={'20px'} src={email} alt="" />
                                </div>
                            </div>

                        </div>



                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <div className='shadow-lg p-3 rounded-2' data-aos="fade-up"
                            data-aos-easing="ease-in"
                            data-aos-delay="0"
                            data-aos-offset="0"
                            data-aos-duration="1000">
                            <div className='d-flex justify-content-center '>
                                <img height={'200px'} src={people3} className='rounded-3' alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>Psychologist</h6>
                            <h5 className=' text-center fw-bold my-3'>Karina khan</h5>
                            <h6 className='text-center'>Master's Degree in Psychology</h6>
                            <h6 className='text-center'><span className='fw-semibold'>Experiance:</span> 4 years</h6>

                            <div className='d-flex justify-content-center'>
                                <button className='nav_color mt-4 p-2 text-white fw-bold  border-0 '>Book Now!</button>
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <div className='flex justify-content-around'>
                                    <img height={'20px'} src={facebook} alt="" />
                                    <img className='mx-2' height={'20px'} src={twitter} alt="" />
                                    <img height={'20px'} src={insta} alt="" />
                                    <img className='mx-2' height={'20px'} src={linkedin} alt="" />
                                    <img height={'20px'} src={email} alt="" />
                                </div>
                            </div>


                        </div>


                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 ">
                        <div className=' shadow-lg p-3 rounded-2' data-aos="fade-up"
                            data-aos-easing="ease-in"
                            data-aos-delay="0"
                            data-aos-offset="0"
                            data-aos-duration="1000">
                            <div className='d-flex justify-content-center'>
                                <img height={'200px'} src={people4} className='rounded-3' alt="" />
                            </div>
                            <h6 className='red text-center fw-semibold my-3'>Psychologist</h6>
                            <h5 className=' text-center fw-bold my-3'>Devid Brown</h5>
                            <h6 className='text-center'>Doctor of Psychology</h6>
                            <h6 className='text-center'><span className='fw-semibold'>Experiance:</span> 5 years</h6>


                            <div className='d-flex justify-content-center'>
                                <button className='nav_color mt-4 p-2 text-white fw-bold  border-0 '>Book Now!</button>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <div className='flex justify-content-around'>
                                    <img height={'20px'} src={facebook} alt="" />
                                    <img className='mx-2' height={'20px'} src={twitter} alt="" />
                                    <img height={'20px'} src={insta} alt="" />
                                    <img className='mx-2' height={'20px'} src={linkedin} alt="" />
                                    <img height={'20px'} src={email} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Psychologist;