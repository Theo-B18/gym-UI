import React from 'react'
import { NavLink } from 'react-router-dom'

const styleBtnJoin = {
  paddingLeft: 150,
  paddingRight: 150,
  textDecoration: 'none',  
}



const Buyform = () => {

const displayPayment = () =>{
  const getOnlineID = document.getElementById('payOnline').value;
  const getCashID = document.getElementById('payCash').value;
  const getPaymentBody = document.getElementById('payment-form');
  const getbtnDelivery = document.getElementById('btn-delivery');
  const getbtnCancel = document.getElementById('btn-cancel'); 
  if(getOnlineID === 'online'){
    getPaymentBody.style.display = 'block';

  }
  if(getCashID === 'cash'){
    getbtnDelivery.style.display = 'none';
    getbtnCancel.style.display = 'none';

  }
 
}
const blurPayment = () =>{
  const getOnlineID = document.getElementById('payOnline').value;
  const getCashID = document.getElementById('payCash').value;
  const getPaymentBody = document.getElementById('payment-form');
  const getbtnDelivery = document.getElementById('btn-delivery');
  
  if(getCashID === 'cash'){
    getbtnDelivery.style.display = 'block';
   

  }
  if(getOnlineID === 'online'){
    getPaymentBody.style.display = 'none';
  } 
}

  return (
    <>
    <div className='container text-center bg-grey p-4'>
    <h1 className='text-purple mt-exp'> {'BUYING FORM'} </h1>
    <p>Purchase any Equiptment <span className="text-yellow bg-purple">FREE DELIVERY</span> </p>
     <div className=" text-center form-container form-image p-4  p-4">
      <div className="form-input mt-exp">
        <div>
        <label htmlFor="code">System Generated Equiptment code</label>
        </div>
      <input className='p-2 w-50' type="text" placeholder='11110982' />
      </div>
      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="text" placeholder='FULL NAME' />
      </div>

      <div className="form-input mt-exp" >
      <input className='p-2 w-50' type="text" placeholder='MOBILE NUMBER 1' />
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50 ' type="text" placeholder='MOBILE NUMBER 2' />
      </div>

      <div className="form-input mt-exp" >
      <input className='p-2 w-50' type="text" placeholder='ADDRESS'/>
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="number" placeholder='HOUSE NUMBER' />
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="email" placeholder='AREA PIN' />
      </div>
      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="email" placeholder='LAND MARK' />
      </div>
      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="email" placeholder='EMAIL ADDRESS' />
      </div>
      

     </div>
      <div className="form-input mt-exp flex-row ">
        <label htmlFor="Pay Online" className='mr'> Pay Online</label>
      <input className='p-2 mr' type="radio" name='choice' id='payOnline' value={'online'}  onClick={displayPayment}/>
        <label htmlFor="Pay Online" className='mr'> Pay on Delivery</label>
      <input className='p-2 mr' type="radio" name='choice' id='payCash' value={'cash'} onClick={blurPayment} />
      <button type="button" className='btn-btn-purple-squre-sm ' id='btn-delivery' >Pay On Delivery</button>
      </div>

      <div className='mt-exp mr'>
    <button type="button" className='btn-btn-yellow-lg' id='btn-cancel'>{'CANCEL'}</button>
    </div>

<div className="container-form" id="payment-form">
<h1 className='text-purple mt-exp'> {'CARD DETAILS'} </h1>
<div className="form-input mt-exp">
      <input className='p-2 w-50' type="text" placeholder='CARD NUMBER' />
      </div>

      <div className="form-input mt-exp" >
      <input className='p-2 w-50' type="text" placeholder='CVV NUMBER' />
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50 ' type="text" placeholder='HOLDER`S NAME ON CARD' />
      </div>
      <div className="text-center mt-exp pb-1">  

      <div className="text-center mt-top mb p-4">
      <NavLink style={styleBtnJoin} type="button" className='btn-btn-purple-lg' to="/PaymentMsg">{'MAKE PAYMENT'}</NavLink>
        {/* <button type="button" className='btn-btn-purple-lg '>{'JOIN NOW'}</button> */}
      </div>


      <div className="text-center mt-top mt">
      <NavLink style={styleBtnJoin} type="button" className='btn-btn-yellow-lg' to="/">{'CANCEL PAYMENT'}</NavLink>
        {/* <button type="button" className='btn-btn-purple-lg '>{'JOIN NOW'}</button> */}
      </div>
    </div>
</div>


   
  </div>


    </>
  )
}

export default Buyform
