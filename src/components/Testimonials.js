import React from 'react'
import '../index.css'
import testimg from '../images/JCXS2291.JPG'
import testi1 from '../images/testi1.JPG'
import testi2 from '../images/testi2.JPG'
import testi3 from '../images/testi3.JPG'
import { NavLink } from 'react-router-dom'

const styleBtnJoin = {
  paddingLeft: 150,
  paddingRight: 150,
  textDecoration: 'none',  
}
const Testimonials = () => {
  return (
   
         <>
    <div className='container mt-lg'>
    <h1 className="text-center mb title">Testimonials</h1>
        <div className="row flex-row">
        <div className="card-testi" style={{marginRight:10}}>
              <img src={testi1} alt="" srcset="" className='card-testi-img' />
                <div className="card-testi-text">
                <h5 className="text-center">Legs Workout</h5>
                  <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.</p>
                </div>

            </div>
            <div className="card-testi" style={{marginRight:10}}>
              <img src={testi2} alt="" srcset="" className='card-testi-img' />
                <div className="card-testi-text">
                <h5 className="text-center">Legs Workout</h5>
                  <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.</p>
                </div>

            </div>
            <div className="card-testi" style={{marginRight:10}}>
              <img src={testi3} alt="" srcset="" className='card-testi-img' />
                <div className="card-testi-text">
                <h5 className="text-center">Legs Workout</h5>
                  <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.</p>
                </div>

            </div>
            <div className="card-testi" style={{marginRight:10}}>
              <img src={testimg} alt="" srcset="" className='card-testi-img' />
                <div className="card-testi-text">
                <h5 className="text-center">Legs Workout</h5>
                  <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.</p>
                </div>

            </div>
        </div>
        <div className="text-center mt-top">
        <NavLink style={styleBtnJoin} type="button" className='btn-btn-purple-lg' to="/Register">{'JOIN NOW'}</NavLink>
      </div>
    </div>
    
  </>
      
 
  )
}

export default Testimonials
