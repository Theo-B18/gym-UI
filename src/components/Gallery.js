import React from 'react'
import '../index.css'
import Gallery1 from '../images/gallery1.JPG'
import Gallery2 from '../images/gallery2.JPG'
import Gallery3 from '../images/bgimg.jpg'
import Gallery4 from '../images/gallery4.JPG'

const Gallery = () => {
  return (
    <div className='container text-center'>
      <div className="header">
      <h1>This is for gallery</h1>
      <p>Take Photos or videos and Send to Our Admin </p>
      </div>

      <div className="flex-row mt-exp">
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery2} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery3} alt="" srcset="" />
        </div>
        <div className="gallery-img">
          <img src={Gallery4} alt="" srcset="" />
        </div>
      </div>
      <div className="flex-row mt-exp">
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img">
          <img src={Gallery1} alt="" srcset="" />
        </div>
      </div>
      <div className="flex-row mt-exp">
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img">
          <img src={Gallery1} alt="" srcset="" />
        </div>
      </div>
      <div className="flex-row mt-exp">
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img mr">
          <img src={Gallery1} alt="" srcset="" />
        </div>
        <div className="gallery-img">
          <img src={Gallery1} alt="" srcset="" />
        </div>
      </div>
      
    </div>
  )
}

export default Gallery
