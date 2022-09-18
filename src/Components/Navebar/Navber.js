import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.PNG';
const Navber = () => {
    return (
        <div>
            <nav class="navbar mt-0 nav_color navbar-expand-lg py-3 px-5 shadow-lg">
                <a class="navbar-brand red fs-3 dsi" href='#' ><img height={'50px'} src={logo} alt="" /> <span className='h4 fw-bold text-white ms-2 mt-2 query'>
                    UNITED WELL-BEING FOUNDATION</span></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-sm ">
                        <li class="nav-item ms-2 ">
                            <h6><a class="nav-link text-white hover" aria-current="page" href="#">Home</a></h6>
                        </li>
                        <li class="nav-item ms-2" >
                            <h6> <a class="nav-link text-white hover" href="#">Volunteer</a></h6>
                        </li>
                        <li class="nav-item ms-2">
                            <h6><a class="nav-link text-white hover" href="#">Blogs</a></h6>
                        </li>
                        <li class="nav-item ms-2">
                            <h6><a class="nav-link text-white hover" href="#">Team</a></h6>
                        </li>

                        <li class="nav-item ms-2">
                            <h6> <a class="nav-link text-white hover" href="#">Conbtent</a></h6>
                        </li>
                        <li class="nav-item ms-2">
                            <h6> <a class="nav-link text-white hover" href="#">Account</a></h6>
                        </li>

                    </ul>

                </div>
                {/* </div> */}
            </nav>
        </div>
    );
};

export default Navber;