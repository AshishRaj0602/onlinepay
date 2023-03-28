import React from 'react'
import RechargePayBillApi from "../API/RechargePayBillApi"
import BookBuyApi from '../API/BookBuyApi'
const RechargePay = () => {
    const [rechargeBill, setrechargeBill] = React.useState(RechargePayBillApi)
    const [bookBuy, setbookBuy] = React.useState(BookBuyApi)
    // console.log(rechargeBill);
    return (
        <>
            <section className="RechargeBill-main-container">
                <div className="container-fluid RechargeBill-sub-container">
                    <h2 className="recharge_book_heading">
                        Recharge & Pay Bills on OnlinePay.
                    </h2>
                    <div className="row">
                        <div className="col-lg-10 col-10 mx-auto">
                            <div className="row">
                                {

                                    rechargeBill.map((ele, index) => {
                                        return (
                                            <div className="col-lg-2 col-md-4 col-sm-6  RechargeBill-data-div" key={ele.id}>
                                                <i className={ele.logo} id="rechargeBillPay-fontawesome"></i>
                                                <span>{ele.info1}</span>
                                                <span>{ele.info2}</span>
                                                <span>{ele.info3} <i className={ele.info4} ></i></span>
                                                {/* <span></span> */}

                                            </div>
                                        )
                                    })

                                }
                            </div>

                        </div>
                    </div>
                    <div className="row full-width">
                        <div className="col-lg-10 col-10 mx-auto">
                        <h2 className="recharge_book_heading">
                                    Book & Buy on OnlinePay
                                </h2>
                            <div className="row">
                               
                                {

                                    bookBuy.map((ele, index) => {
                                        return (
                                            <div className="col-md-4 col-lg-2 col-sm-6 RechargeBill-data-div" id="bookPay-extra-hover" key={ele.id}>
                                                <i className={ele.logo} id="rechargeBillPay-fontawesome"></i>
                                                <span>{ele.info1}</span>
                                                
                                                <span>{ele.info2} <i className={ele.info4} id="transition-arrow" ></i></span>
                                                

                                            </div>
                                        )
                                    })

                                }
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default RechargePay
