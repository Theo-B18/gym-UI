import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='container text-center bg-grey'>
    
    <div className=" text-center form-container form-image p-4  p-4">
     <div className="mt-lg">
     <h1 className='text-purple '> {'Login'} </h1>
   <h5 className='p-1'>{'Register yourself online and make payment as well.'}</h5>
     </div>
     <div className="form-input mt-exp">
     <input className='p-2 w-50' type="text" placeholder='email' />
     </div>

     <div className="form-input mt-exp" >
     <input className='p-2 w-50' type="text" placeholder='password' />
     </div>

     

    </div>
    <div className="text-center mt-exp pb-1">
     <div>
     <button type="button" className='btn-btn-purple-lg  '>{'Login'}</button>
     </div>
   <div className='mt-exp'>
   <button type="button" className='btn-btn-yellow-lg  '>{'CANCEL'}</button>
   </div>
  
   </div>
 </div>
      
    </div>
  )
}

export default Login
