import React from 'react'
import { Fragment } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

const styleBtnJoin = {
  paddingLeft: 150,
  paddingRight: 150,
  textDecoration: 'none',  
}

const AboutUs = () => {
  const gymName ={
    gymtitle: 'YB Gym',
    subname: 'lions Kingdom'
  }


  const modeOpxn ={
    mode1:'Virtual Mode',
    mode2: 'Hybrid Mode',
    mode3: 'Home Service Mode'
  }
   
  return (
    <Fragment>
      <div className="container">
      <div className="text-center header-format">
      <h1>About <span className="text-purple underline  header-design ">{gymName.gymtitle}</span></h1>
      <p><small>Lions Kingdom</small></p>
      </div>
      <div className="container ">
        <p className="text mt-sm">
          {gymName.gymtitle} which is also known as {gymName.subname} is a well known group in Africa that enables one to reach his/her potential in physical 
          fitness as well as mental fitness. We are located in 10 different african countries with sub-gym in sub region in a country. Our services is extended from 
          one Training hall to another. Meaning, a single registration for the month, goes on for a month in all countries. The registriction counts across all countries in Africa.
        </p>
        <p className='mt-sm'>We have many professional trainers to give you aid in every journey of your gym life. As we are concern about our clients well being and fitness, we allow them to take sections in mode of
          their choice. Basically we have two modes of operation {modeOpxn.mode1} and {modeOpxn.mode2}. We also have another mode of operations which {modeOpxn.mode3} which is for our type a gymers. We 
          only accept this mode base on legal agreements. This Service is offer relatively to our own evaluation and assesment of a client. Even if you meet all the critirias we are most likely to turn
          down your request after our evaluations and assesments.
        </p>
      </div>
      
      <div className="text-center mt-lg mb-lg">
      <NavLink style={styleBtnJoin} type="button" className='btn-btn-purple-lg' to="/Register">{'JOIN NOW'}</NavLink>
        {/* <button type="button" className='btn-btn-purple-lg '>{'JOIN NOW'}</button> */}
      </div>
 

      </div>
      
      
    </Fragment>
  )
}

export default AboutUs
