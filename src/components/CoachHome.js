import React from 'react'
import '../index.css'
import coach1 from '../images/coach1.png'
import coach2 from '../images/coach2.png'
import coach3 from '../images/JCXS2291.JPG'
import coach4 from '../images/coach3.png'
import coach5 from '../images/coach4.png'
import { NavLink } from 'react-router-dom'

const styleimg ={
    height: 200,
    width: 200,
    borderRadius:1000,
    backgroundColor: 'purple',
  
}

const styleBtnReadmore = {
  paddingLeft: 30,
  paddingRight: 30,
  textDecoration: 'none', 
  
}

const CoachHome = () => {

  return (
    <div className='container mt-exp '>
        <hr />
        <h1 className='text-center mt text-purple'> {'Meet Our Coaches:'} </h1>
        <div className="flex-row mt-lg mb-lg ">
            <div className="circle-img space-around-even  "  >
              <img src={coach1} alt="" srcset="" style={styleimg} />
              <div className="coach-name text-center">
              <h4 className='text-center mt p-1'> {"Jerry"} </h4>
             <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/CoachProfile">{'View Profile'}</NavLink>
            </div>
            </div>
            <div className="circle-img space-around-even" style={styleimg}>
            <img src={coach2} alt="" srcset="" style={styleimg} />
            <div className="coach-name text-center">
              <h4 className='text-center mt p-1'> {'Thomas'} </h4>
             <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/CoachProfile">{'View Profile'}</NavLink>
            </div>
            </div>
            <div className="circle-img space-around-even" style={styleimg}>
              <img src={coach3} alt="" srcset="" style={styleimg} />
              <div className="coach-name text-center">
              <h4 className='text-center mt p-1'> {'Theophilus'} </h4>
             <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/CoachProfile">{'View Profile'}</NavLink>
            </div>
            </div>
            <div className="circle-img space-around-even" style={styleimg}>
              <img src={coach4} alt="" srcset="" style={styleimg} />
              <div className="coach-name text-center">
              <h4 className='text-center mt p-1'>{'Kluivert'}</h4>
             <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/CoachProfile">{'View Profile'}</NavLink>
            </div>
            </div>
            <div className="circle-img space-around-even" style={styleimg}>
              <img src={coach5} alt="" srcset="" style={styleimg} />
              <div className="coach-name text-center">
              <h4 className='text-center mt p-1'>{'Marcus'}</h4>
             <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/CoachProfile">{'View Profile'}</NavLink>
            </div>
            </div>
        </div>
        <hr />

      
    </div>
  )
}

export default CoachHome
