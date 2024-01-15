import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Register = () => {

  return (
    <div className='container text-center bg-grey'>
    
     <div className=" text-center form-container form-image p-4  p-4">
      <div className="mt-lg">
      <h1 className='text-purple '> {'MEMBERSHIP FORM'} </h1>
    <h5 className='p-1'>{'Register yourself online and make payment as well.'}</h5>
      </div>
      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="text" placeholder='FIRST NAME' />
      </div>

      <div className="form-input mt-exp" >
      <input className='p-2 w-50' type="text" placeholder='LAST NAME' />
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50 ' type="text" placeholder='CITIZEN ID OR PASSPORT NO' />
      </div>

      <div className="form-input mt-exp" >
      <input className='p-2 w-50' type="text" placeholder='AGE'/>
      </div>

      <div className="form-input mt-exp">
        <select name="" id="" className='w-50 p-2'>
          <option value="">SELECT YOUR GENDER</option>
          <option value="Male">Male</option>
          <option value="Male">Female</option>
        </select>
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="number" placeholder='CONTACT' />
      </div>

      <div className="form-input mt-exp">
      <input className='p-2 w-50' type="email" placeholder='EMAIL' />
      </div>

      <div className="form-input mt-exp">
         <select name="" id="" className='w-50 p-2'>
          <option value="">PREFER SCHEDULE FOR NOW</option>
          <option value="Male">Morning</option>
          <option value="Male">Evening</option>
          <option value="Male">Full Time</option>
        </select>
      </div>

     </div>
     <div className="text-center mt-exp pb-1">
      <div>
      <button type="button" className='btn-btn-purple-lg  '>{'REGISTER'}</button>
      </div>
    <div className='mt-exp'>
    <NavLink  type="button"  to="/">{/* {'Cancel'} */}
    <button type="button" className='btn-btn-yellow-lg'>{'CANCEL REGISTERATION'}</button>
    </NavLink>
    </div>
   
    </div>
  </div>
  )
}

export default Register
