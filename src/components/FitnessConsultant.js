import React from 'react'

const FitnessConsultant = () => {
  return (
    <div className='container text-center bg-grey '>
     
      
       <div className="  text-center form-container form-image p-4  p-4">
       <div className="mt-lg">
      <h1 className='text-purple '> {'Request to our Consultants'} </h1>
      <p className='p-1'>{'Fill the form below and get information about what you will like to know.'}</p>
      </div>
        <div className="form-input mt-exp">
        <input className='p-2 w-50' type="text" placeholder='Full Name' />
        </div>

        <div className="form-input mt-exp" >
        <input className='p-2 w-50' type="text" placeholder='Age' />
        </div>

        <div className="form-input mt-exp">
        <input className='p-2 w-50 ' type="text" placeholder='Weight' />
        </div>

        <div className="form-input mt-exp" >
        <input className='p-2 w-50' type="text" placeholder='Height'/>
        </div>

        <div className="form-input mt-exp">
        <input className='p-2 w-50' type="text" placeholder='Citizen ID or Passport No' />
        </div>
        <div className="form-input mt-exp">
        <input className='p-2 w-50' type="text" placeholder='Address' />
        </div>
        <div className="form-input mt-exp">
        <input className='p-2 w-50' type="text" placeholder='Mobile No' />
        </div>
        <div className="form-input mt-exp">
        <input className='p-2 w-50' type="text" placeholder='Email' />
        </div>

        <div className="form-input mt-exp">
        <textarea className='p-2 w-50' type="textarea" rows="10" cols="10" placeholder='Ask any Question and get response from our Professional Experts.' />
        </div>
       
       </div>

       <div className="text-center mt-exp pb-1">
      <button type="button" className='btn-btn-purple-lg  '>{'Send Message'}</button>
      </div>
    </div>
  )
}

export default FitnessConsultant
