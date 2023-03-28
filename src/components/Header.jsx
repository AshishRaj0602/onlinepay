import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex justify-content-center flex-column align-items-start header-left-side order-lg-first order-last ">
                            <h1 className="display-2"> <span className="color-change">Payment </span> Solutions for <br /> any Business</h1>
                            <p className="main-hero-para">Create your online website, share payment links and start collecting payments from Whatsapp, SMS, Email, Facebook and other Social Media platforms.
                            </p>
                            <h3>Get Early Access For You</h3>
                            <div className="input-group mt-3">
                                <input type="text" name="" id="" className="rounded-pill p-2 w-75 me-3 form-control-text" placeholder="Enter Your Email" />
                                <div className="input-group-btn">
                                    Get It Now
                                </div>
                            </div>

                            
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                            <img src="../images/bg-header4.jpg " alt="bg-header1" className="img-fluid" />
                            <img src="../images/bg-header7.jpg " alt="bg-header2" className="img-fuild main-herosection-img2" />

                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}
export default Header
