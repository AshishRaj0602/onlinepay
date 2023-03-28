import React, { useState } from 'react'
import howToUseApi from "../API/AboutUsApi"
const AboutUs = () => {
    const [useApi, setHowToUseApi] = useState(howToUseApi)
    console.log({ useApi });
    return (
        <>
            {/* 1st section about us */}
            <section className="common-section our-Services">
                <div className="container padding-top">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftSide-img">
                            <img src="../images/aboutUs-section4.jpg" alt="About section" />
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                {/* --Avialable @ Google and IOS App store only */}
                            </h3>
                            <h1 className="main-heading">Why Us ?</h1>
                            {
                                useApi.map((ele, index) => {
                                    return (
                                        <div className="row our-services-info" key={index}>

                                            <div className="col-1 our-services-number" id="hover-aboutUs">
                                                {ele.id}
                                            </div>
                                            <div className="col-10 our-services-data">
                                                <h2>{ele.title}</h2>
                                                <p className="main-hero-para">{ele.info}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2nd section of about us */}
            {/* <section className="common-section our-Services" id="remove-sec-about">
                <div className="container padding-top">
                    <div className="row">

                        <div className="col-12 col-lg-7 our-services-list" id="world-class-support">
                            <h3 className="mini-title">
                                --Support in any language
                            </h3>
                            <h1 className="main-heading">Do more of what you always wanted</h1>
                            {
                                useApi.map((ele, index) => {
                                    return (
                                        <div className="row our-services-info" key={index}>

                                            <div className="col-1 our-services-number  fontawesome-style">
                                                {ele.id}
                                            </div>
                                            <div className="col-10 our-services-data">
                                                <h2>{ele.title}</h2>
                                                <p className="main-hero-para">{ele.info}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-5 text-center our-service-leftSide-img" id="world-class-img">
                            <img src="../images/world-section-img1.jpg" alt="About section" className="img-fluid" />
                        </div>
                    </div>
                </div>  
            </section> */}
        </>
    )
}
 // eslint-disable-next-line
export default AboutUs