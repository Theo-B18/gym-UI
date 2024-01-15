import React from 'react'
import { NavLink } from 'react-router-dom'


const styleBtnJoin = {
    paddingLeft: 150,
    paddingRight: 150,
    textDecoration: 'none',  
  }

const PaymentMSg = () => {
  return (
    <div className='container'>
        <div className="mt-lg">
            <h1 className="text-center text-yellow header-design">
                PAYMENT PROCESSED!
            </h1>
            <div className="container">
                <p className='text-center'> You have successfully initiate your payment. As soon as the money reaches our account we will message you. Otherwise, check your bank and wait for further noticed.</p>
            </div>
            <div className=" container signed">
                <div className="container">
                <h1 className="text-purple">Thanks!</h1>
                <p>YB Gym Liberia</p>
                </div>

                <div className="container">
                    <div className="container">
                    <div className="text-center mt-lg mb-lg">
      <NavLink style={styleBtnJoin} type="button" className='btn-btn-purple-lg' to="/">{'Escape Message'}</NavLink>
        {/* <button type="button" className='btn-btn-purple-lg '>{'JOIN NOW'}</button> */}
      </div>
                    </div>
                </div>
                
            </div>
        </div>


      
    </div>
  )
}

export default PaymentMSg
