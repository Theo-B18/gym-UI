import React from 'react'
import ReactPlayer from 'react-player'
import '../index.css'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const styleBtnReadmore = {
  paddingLeft: 30,
  paddingRight: 30,
  textDecoration: 'none', 
  
}


function Card() {
  return (
  <Fragment>
    <div className='container mt-top'>
    <h1 className="text-center mt title mb"> {'Watch Our Videos'} </h1>
        <div className="row flex-row">
            <div className="card" style={{marginRight:10}}>
            <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=HG7_XInTExo'}  controls={true}></ReactPlayer>
                <div className="card-text p-4">
                <h5 className="text-center">{'Dumbell Legs Workout'}</h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
            <div className="card" style={{marginRight:10}}>
                <div className="card-video" >
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=JfSee0Q-vRQ'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Dumbell Triceps Workout'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
            <div className="card" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=Sa0sBKUiOvU'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Dumbells Back Exercise'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
            <div className="card" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=4o1YzksPuqg'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Dumbell Chest Workout'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
        </div>
      
    </div>
    <div className='container mt-sm mb-lg'>
        <div className="row flex-row">
            <div className="card" style={{marginRight:10}}>
                <div className="card-video" >
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=Im5wJLdudDg'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Strength Training Routine'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
            <div className="card" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=UqFzWx8X5AM'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Fats Burning Gym Routine'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
            <div className="card" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=fWT-_jx41Jc'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                <h5 className="text-center"> {'Back & Bicep Workout'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
            <div className="card" style={{marginRight:10}}>
                <div className="card-video">
                <ReactPlayer width={250} height={200}  url={'https://www.youtube.com/watch?v=spl60Ns4xlo'}  controls={true}></ReactPlayer>
                </div>
                <div className="card-text p-4">
                  <h5 className="text-center"> {'Botty Workout'} </h5>
                  <p> {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos ad dolores.'} </p>
                </div>

            </div>
        </div>
        <div className="text-center mt-top">
        <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Videos">{'Watch More...'}</NavLink>
                </div>
    </div>
  </Fragment>
    
  )
}

export default Card
