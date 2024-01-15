import React from 'react'
import '../index.css'
import png2 from '../images/collabo1.png'
import { NavLink } from 'react-router-dom'

const linkStyle ={
  color: 'white',
  textDecoration: 'none'
}





const Footer=()=> {
  return (
    <div className='container mt-lg'>
    
   <div className="flex-row">
    <div className="flex-row footer-box-1 bg-purple">
      <div className="sub-box-a p-4">
      <h2 className='text-center text-yellow p-1'>IMPORTANT LINKS:</h2>
      <div className="text">
      <ul>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/Register"> {'Register|YB GYM'} </NavLink> </div>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/GymMarket"> {'Gym Market|YB GYM'} </NavLink> </div>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/Aboutus"> {'About Us|YB GYM'} </NavLink> </div>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/Gallery"> {'Gallery|YB GYM'} </NavLink> </div>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/job"> {'Work with us|YB GYM'} </NavLink> </div>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/"> {'YB Delivery'} </NavLink> </div>
         <div className='mt' > <NavLink style={linkStyle}  type="button" className='' to="/"> {'Ophelia Resturant'} </NavLink> </div>

        </ul>
      </div>
       
        <div className="flex-row">
        <div className="footer-img mt">
        <img src={png2} alt="" srcset="" />
        </div>
        <div className="footer-img mt">
        <img src={png2} alt="" srcset="" />
        </div>
        </div>
     
      </div>
      <div className="sub-box-a p-4">
      <h2 className='text-center text-yellow p-1'>ABOUT YB GYM:</h2>
      <div className="text-cente">
      <div className='content'>
         <h5>We care about your health!</h5>
          <p className='mt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis saepe ex asperiores enim doloremque sed eaque debitis voluptates ratione odit necessitatibus autem suscipit obcaecati id dignissimos, sunt architecto nulla distinctio.</p>
          <p className='mt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis saepe ex asperiores enim doloremque sed eaque debitis voluptates ratione odit necessitatibus autem suscipit obcaecati id dignissimos, sunt architecto nulla distinctio.</p>
          
          <h5 className='text-yellow'>TAKE ON DEMO AND AND SEE!</h5>

        </div>
      </div>
       
        <div className="flex-row">
        <div className="footer-img mt">
        <img src={png2} alt="" srcset="" />
        </div>
        <div className="footer-img mt">
        <img src={png2} alt="" srcset="" />
        </div>
        </div>
     
      </div>
    </div>
    <div className="footer-box-2 bg-yellow p-4">
    <h2 className='text-center text-purple'>SUBSCRIBE:</h2>
    <h5 className='text-center'>Subscribe to our newsletter and get lattest updates.</h5>
    <div className="text-center mt p-4">
    <input className='p-4 w-100' placeholder='@EMAIL' type="email" />
    </div>
    <div className="text-center mt p-4">
    <input className='p-4 w-100' placeholder='MOBILE NO.' type="text" />
    </div>
    <div className="text-center mt p-4">
      {/* <button type="button" className='btn-btn-purple-sm w-100 '>SUBSCRIBE!</button>  */}
      <NavLink style={linkStyle} type="button" className='btn-btn-purple-sm w-100' to="/Register">{'Subscribe!!'}</NavLink>
    </div>

    <div className="message mt text-center">
      <h1>THANK YOU!</h1>
    </div>
            
    </div>
   </div>
    </div>
  )
}

export default Footer
