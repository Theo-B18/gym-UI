import React from 'react'
import coach1 from '../images/coach1.png'
import CoachSessionVideos from './CoachSessionVideos'
import { NavLink } from 'react-router-dom'

const styleBtnJoin = {
  paddingLeft: 150,
  paddingRight: 150,
  textDecoration: 'none',  
}

const styleimg ={
  height: 300,
  width: 300,
  /* borderRadius:1000, */
  backgroundColor: 'purple',

}

// const styleFollowbtn = {
// paddingLeft: 30,
// paddingRight: 30,
// textDecoration: 'none', 

// }
const CoachProfile = () => {
  return (
    <div className='container'>
      <div className="container  ">
        <div className="flex-row ">
        <div className="col-30 mt-ex-lg  text-center">
        <div className="profile-image">
        <img style={styleimg} src={coach1} alt="" sizes="" srcset="" />
        <div className='follow-btn mt  text-center'>
        <div className='follow-btn'>
          <h1 className='text-center text-purple'>Posture Coach</h1>
          </div>
          <div className="mt">
          <button type="button" className='btn-btn-yellow-sm'>+ FOLLOW</button>
          </div>
          
          <div className='mt'>
          <button type="button" className='btn-btn-yellow-sm'>Join Whatsapp</button>
          </div>
          
        </div>
        </div>
        </div>

        <div className="col-70 mt-ex-lg bg-grey p-4">
        <div className="profile-info">
          <h3 className="text-center text-purple underline">COACH INFORMATIONS</h3>
          <div className="flex-row">
          <div className="info-box p-1 col-50">
          <h3 className='text-center'>Bio Data</h3>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          <h5 className='p-1 mt'>Full Name:______________________________________________</h5>
          </div>
          <div className="info-box p-1 col-50">
          <h3 className='text-center'>BLOG</h3>
          <p className='mt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas incidunt quia repudiandae? Numquam temporibus nulla perspiciatis. Architecto, quasi. Ipsum, architecto!</p>
          <p className='mt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas incidunt quia repudiandae? Numquam temporibus nulla perspiciatis. Architecto, quasi. Ipsum, architecto!</p>
          <p className='mt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas incidunt quia repudiandae? Numquam temporibus nulla perspiciatis. Architecto, quasi. Ipsum, architecto!</p>
          <p className='mt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas incidunt quia repudiandae? Numquam temporibus nulla perspiciatis. Architecto, quasi. Ipsum, architecto!</p>
          </div>
          </div> 
        </div>
        </div>
        </div>
      </div>




<hr className='mt-top' />

<div className="flex-row">
<div className="col-30 mt">
  <div className="">
<h3 className="text-purple text-center">Weekly Schedule</h3>
<div className="flex-row">
  <div className="sch-day border-yellow">
    <h5>M</h5>
  </div>
  <div className="sch-day border-yellow">
    <h5>T</h5>
  </div>
  <div className="sch-day border-yellow">
    <h5>W</h5>
  </div>
  <div className="sch-day border-yellow">
    <h5>T</h5>
  </div>
  <div className="sch-day border-yellow">
    <h5>F</h5>
  </div>
  <div className="sch-day border-yellow">
    <h5>S</h5>
  </div>
</div>
  </div>
</div>
<div className="col-30 mt">
  <div className="">
<h3 className="text-purple text-center ">Daily Session</h3>
<div className="flex-row">
  <div className="sch-day box-shadow-black-thick">
    <h5>Full Time</h5>
  </div>
</div>
  </div>
</div>

  <div className="col-30">
<h3 className="text-purple text-center">Members/Sessions</h3>
<div className="flex-row">
  <div className="sch-day box-shadow-black-thick">
    <h1>10+</h1>
  </div>
</div>
  </div>
  <div className="">
<h3 className="text-purple text-center">Total</h3>
<div className="flex-row">
  <div className="sch-day box-shadow-black-thick">
    <h1>22</h1>
  </div>
</div>
  </div>
</div>
   <CoachSessionVideos></CoachSessionVideos>  
   <div className="text-center mt-lg mb-lg">
      <NavLink style={styleBtnJoin} type="button" className='btn-btn-purple-lg' to="/Register">{'JOIN NOW'}</NavLink>
        {/* <button type="button" className='btn-btn-purple-lg '>{'JOIN NOW'}</button> */}
      </div>
    </div>
  )
}

export default CoachProfile
