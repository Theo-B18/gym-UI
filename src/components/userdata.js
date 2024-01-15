import '../index.css'
import React  from 'react'
import img1 from '../images/symbol2a.png'
import img2 from '../images/bulk-sample1.png'
import img3 from '../images/training1.png'
import img4 from '../images/wallpaper.jpg'




const userdata = () =>{

  return (
    <>
    <div className=' container'>
<div id='home-full-img' className="home-full-img "   >
  <div id='gym-name'>
  <h1 className='mb' > <span className='text-purple'>YB GYM</span>  LIBERIA</h1>
  <h3 className='text-center underline bg-purple p-1'>Train like a pro!!!</h3>
  </div>
<img  src={img4} alt="" sizes="" srcset="" />
</div>

       <div className="flex-row flex mt">
            <div className="col add1 add1-img">
            <img  src={img1} alt="" sizes="" srcset="" />
            <div className="add-words">
              <h2 className='text-center text-purple'>
                {'Running Daily'}
              </h2>
            </div>
            </div>
            <div className="col add1" >
            <img  src={img2} alt="" sizes="" srcset=""  />
            <div className="add-words">
              <h2 className='text-center text-purple'>
                {'Body Building'}
              </h2>
            </div>
            </div>
            <div className="col add1">
            <img  src={img3} alt="" sizes="" srcset="" />
            <div className="add-words">
              <h2 className='text-center text-purple'>
                {'Dropping Weight'}
              </h2>
            </div>
            </div>
       </div>
      
    </div></>
    
  )
}



export default userdata
