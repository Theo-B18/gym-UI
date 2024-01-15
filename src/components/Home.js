import React from 'react'
import Userdata from './userdata'
import Flyers from './Flyers'
import Card from './Card'
import GymTips from './GymTips'
import Ourrules from './Ourrules'
import CoachHome from './CoachHome'
import ModeOperation from './ModeOperation'
import ExternalAdd from './ExternalAdd'
import Testimonials from './Testimonials'
import HomePictures from './HomePictures'



const Home = () => {
  return (
    <div>
       <Userdata/>
         <GymTips/>
         <HomePictures></HomePictures>
        <  Flyers/>
         <Card/>
       <Ourrules/>
       <CoachHome/>
       <ModeOperation/>
       <ExternalAdd></ExternalAdd>
       <Testimonials></Testimonials>
       
    </div>
  )
}

export default Home
