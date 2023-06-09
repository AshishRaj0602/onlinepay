import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container clear-fix">
                        <NavLink className="navbar-brand" to="#">OnlinePay</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                {/* added */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/recharge">Bill & Recharge </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                </li>


                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>


                            </ul>
                            {
                                props.userName?<div id="username">{props.userName}</div>:<form className="d-flex">

                                <NavLink className="btn  btn-style" to="/login">LogIn</NavLink>
                                <NavLink className="btn  btn-style btn-style-border" to="/login">SingUp</NavLink>
                            </form>
                            }
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar