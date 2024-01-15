import React from 'react'
import showcase1 from '../images/gallery2.JPG'
import showcase2 from '../images/ganesh.jpg'
import showcase3 from '../images/theoback.jpg'
import showcase4 from '../images/sai.jpg'
import showcase5 from '../images/karthik.jpg'
import showcase6 from '../images/noshirt.jpg'
import showcase7 from '../images/noshirt2.jpg'
import showcase8 from '../images/friends.jpg'
import showcase9 from '../images/whiteMuscle.jpg'
import showcase10 from '../images/haza.jpg'
import showcase11 from '../images/nizami2.jpg'
import showcase12 from '../images/bro1.jpg'


const HomePictures = () => {
  return (
    <div className='container mt-exp bg-purple p-2'>
        <h1 className="text-center p-4 text-yello">GYM is Fun!!</h1>
        <div className="img-showcase">
            <div className="flex-row mt-exp">
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase1} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase2} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase3} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase4} alt="" sizes="" srcset="" />
            </div>
            </div>
            <div className="flex-row mt-exp">
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase6} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase5} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase7} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase8} alt="" sizes="" srcset="" />
            </div>
            </div>
            <div className="flex-row mt-exp">
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase9} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase10} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase11} alt="" sizes="" srcset="" />
            </div>
            <div className="showcase-img mr box-shadow-black-thick">
                <img src={showcase12} alt="" sizes="" srcset="" />
            </div>
            </div>
            
        </div>

      
    </div>
  )
}

export default HomePictures
