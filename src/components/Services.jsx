import React,{useState} from 'react'
import ServiceApi from "../API/ServicesApi"
// import FontAwesome from '../react-fontawesome';

// import FontAwesome from "../../node_modules/font-awesome"
const Services = () => {
    const [serviceApi, setserviceApi] = useState(ServiceApi)
    // console.log({serviceAPi});
    return (
        <>
           <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">Six powerful reasons to choose OnlinePay Payment Gateway</h1>   
                    <div className="row">
                    
                       {
                           serviceApi.map((ele,index)=>{
                               return (
                               
                                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={index}>
                                 

                                <i className={ele.logo} id="fontawesome-service"></i>
                                <h2 className="sub-heading">{ele.title}</h2>   
                                <p className="main-hero-para">{ele.info}</p>
                            </div>   
                               )
                           })
                       } 
                    </div> 
                </div>   
            </section> 
        </>
    )
}

export default Services
