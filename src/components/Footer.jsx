import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <ul><li><NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink></li></ul>
                                    <ul>
                                        {/* <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li> */}

                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                <ul><li><NavLink className="nav-link active" aria-current="page" to="/service">Services</NavLink></li></ul>
                                    <ul>
                                        {/* <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li> */}
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                <ul><li><NavLink className="nav-link active" aria-current="page" to="/recharge">Bill & Recharge</NavLink></li></ul>
                                    <ul>
                                        {/* <li><NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                                        <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li> */}
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                {/* <h2><li><NavLink className="nav-link active" aria-current="page" to="#">FallowUs</NavLink></li></h2> */}
                                    <div className="row mt-3">
                                        <div className="col-3 mx-auto">
                                            <i className="fa fa-instagram  fontawesome-style"></i>
                                        </div>

                                        <div className="col-3 mx-auto">
                                            <i className="fa fa-whatsapp fontawesome-style"></i>
                                        </div>

                                        <div className="col-3 mx-auto">
                                            <i className="fa fa-facebook-f fontawesome-style"></i>
                                        </div>

                                        <div className="col-3 mx-auto">
                                            <i className="fa fa-linkedin fontawesome-style"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="m-5">
                                <p className="main-hero-para text-center w-100">Copyright @ 2021 OnlinePay . All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
