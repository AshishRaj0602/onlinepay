import React from 'react'
import howToUse2Api from "../API/AboutUs2Api"
const AboutUs2 = () => {
    // const [use2Api, setHowToUseApi] = useState(howToUse2Api)
    const [use2Api, setuse2Api] = React.useState(howToUse2Api)
    return (
        <>
            <section className="common-section" id="remove-sec-about">
                <div className="container ">
                    <div className="row" id="margin-top-world-class-support">

                        <div className="col-12 col-lg-7 our-services-list order-lg-first order-last" id="world-class-support">
                            <h3 className="mini-title">
                                {/* --Support in any language */}
                            </h3>
                            <h1 className="main-heading">Do more of what you always wanted</h1>
                            {
                                use2Api.map((ele, index) => {
                                    return (
                                        <div className="row" key={index} id="our-services-info-aboutUs2" >

                                            <div className="col-1  fontawesome-style" id="our-services-number-aboutUs2" 
                                            >
                                                {ele.id}
                                            </div>
                                            <div className="col-10 our-services-data" id="main-hero-para-service-data">
                                                <h2>{ele.title}</h2>
                                                <p className="main-hero-para" id="main-hero-para-aboutUs2">{ele.info}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-5 text-center order-md-first order-sm-first" id="world-class-img">
                            <img src="../images/aboutUs2.png" alt="About section" className="img-fluid" />
                        </div>
                    </div>
                </div>  
            </section>
        </>
    )
}

export default AboutUs2
