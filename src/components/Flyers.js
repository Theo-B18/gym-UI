import React from 'react'
import '../index.css'
import flyer1 from '../images/ADD1.jpg'
import flyer2 from '../images/ADD2.jpg'
import flyer3 from '../images/ADD3.jpg'
import flyer4 from '../images/ADD4.jpg'
import add1 from '../images/ADD7.jpg'
import add2 from '../images/ADD8.jpg'
import mach1 from '../images/ADD6.jpg'
import mach2 from '../images/ADD5.jpg'
// import { ButtonHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'

const styleBtnJoin = {
    paddingLeft: 150,
    paddingRight: 150,
    textDecoration: 'none',  
}

const styleBtnReadmore = {
    paddingLeft: 30,
    paddingRight: 30,
    textDecoration: 'none', 
    
}

const styleBtnConnect = {
    paddingLeft: 50,
    paddingRight: 50,
    textDecoration: 'none', 
    
}

const Flyers = () => {
  return (
    <div className='container mt-top p-xlg-1'>
            <h1 className="text-center mt title mb">{'WHAT WE CAN OFFER YOU'}</h1>
        <div className="flex-row mt-exp ">
            <div className="col-flyer box-shadow-grey">
                <img src={flyer1} alt="" sizes="" srcset="" />
                <div className="text-center mt pb-1">
                <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Flyerinfo">{'READ MORE'}</NavLink>
                </div>  
            </div>

            <div className="col-flyer">
                <img src={flyer2} alt="" sizes="" srcset="" />
                <div className="text-center mt pb-1">
                <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Flyerinfo">{'READ MORE'}</NavLink>
                </div>
            </div>
            <div className="col-flyer">
                <img src={flyer3} alt="" sizes="" srcset="" />
                <div className="text-center mt">
                   
                <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Flyerinfo">{'READ MORE'}</NavLink>
                </div>
            </div>
            <div className="col-flyer">
                <img src={flyer4} alt="" sizes="" srcset="" />
                <div className="text-center mt">
                <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Flyerinfo">{'READ MORE'}</NavLink>
                </div>
            </div>
        </div>
      <div className="text-center mt-lg mb-lg">
      <NavLink style={styleBtnJoin} type="button" className='btn-btn-purple-lg' to="/Register">{'JOIN NOW'}</NavLink>
        {/* <button type="button" className='btn-btn-purple-lg '>{'JOIN NOW'}</button> */}
      </div>

      <h1 className="text-center mt title mt-top mb">ADVERTISMENT</h1>

      <div className="flex-row mt-exp text-center">
        <div className="col-add bg-grey-round">
            <img src={add1} alt="" sizes="" srcset="" />
        
            <h2 className="text-center mt text-purple">{'BIG SALES!'}</h2>
            <p className="paragraph">{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet assumenda repellendus officiis autem nostrum ex sint. Cum accusamus officiis iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis deleniti consequuntur maiores neque quae. Minima similique laboriosam libero fugit nisi?'}</p>
            <p className="paragraph">{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet assumenda repellendus officiis autem nostrum ex sint. Cum accusamus officiis iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis deleniti consequuntur maiores neque quae. Minima similique laboriosam libero fugit nisi?'}</p>
            <div className="text-center mt">
            <NavLink style={styleBtnConnect}  type="button" className='btn-btn-yellow-sm' to="file:///C:/Users/ADMIN/Desktop/My%20build%20Application/YSZ-Ecommerce/index.html">{'CHECK'}</NavLink>
                </div>
        </div>
        <div className="col-add bg-grey-round">
            <img src={add2} alt="" sizes="" srcset="" />
          
           <h2 className="text-center mt text-purple">{'BIG SALES!'}</h2>
            <p className="paragraph">{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet assumenda repellendus officiis autem nostrum ex sint. Cum accusamus officiis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione soluta ex? Id voluptatum aspernatur laboriosam molestias, error officia dolorum!'}</p>
            <p className="paragraph">{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet assumenda repellendus officiis autem nostrum ex sint. Cum accusamus officiis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione soluta ex? Id voluptatum aspernatur laboriosam molestias, error officia dolorum!'}</p>
            <div className="text-center mt">
            <NavLink style={styleBtnConnect}  type="button" className='btn-btn-yellow-sm' to="/GymMarket">{'CHECK'}</NavLink>
                </div>
        </div>
      </div>
<div className="mt-top">
      <h1 className="text-center mt title mb">{'TRAIN LIKE A PRO'}</h1>

<div className="flex-row">
    <div className="mach-add">
        <img src={mach1} alt="" sizes="" srcset="" />
    </div>
    <div className="mach-add-text bg-grey p-4">
    <h2 className="text-center mt text-purple">{'ABOUT THE MEDAL!'}</h2>
      <p className="paragraph">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci illum nemo neque quam in delectus asperiores deserunt expedita beatae, sapiente, incidunt velit enim ullam dolorum quo suscipit nobis magni, aliquid a quos maxime! Provident eius ad aliquid quasi sit, sapiente dolorum. Voluptatum inventore placeat tenetur officia cumque molestiae vel ea asperiores. Aliquid voluptatibus architecto amet numquam minus iste mollitia?'}</p>
      <p className="paragraph">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci illum nemo neque quam in delectus asperiores deserunt expedita beatae, sapiente, incidunt velit enim ullam dolorum quo suscipit nobis magni, aliquid a quos maxime! Provident eius ad aliquid quasi sit, sapiente dolorum. Voluptatum inventore placeat tenetur officia cumque molestiae vel ea asperiores. '}</p>
      <div className="text-center mt">
      <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Flyerinfo">{'FINDOUT'}</NavLink>
                </div>
    </div>
</div>
<div className="flex-row mt-top">
    <div className="mach-add">
        <img src={mach2} alt="" sizes="" srcset="" />
    </div>
    <div className="mach-add-text bg-grey p-4">
    <h2 className="text-center mt text-purple">{'ABOUT THE MEDAL!'}</h2>
      <p className="paragraph">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci illum nemo neque quam in delectus asperiores deserunt expedita beatae, sapiente, incidunt velit enim ullam dolorum quo suscipit nobis magni, aliquid a quos maxime! Provident eius ad aliquid quasi sit, sapiente dolorum. Voluptatum inventore placeat tenetur officia cumque molestiae vel ea asperiores. Aliquid voluptatibus architecto amet numquam minus iste mollitia?'}</p>
      <p className="paragraph">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci illum nemo neque quam in delectus asperiores deserunt expedita beatae, sapiente, incidunt velit enim ullam dolorum quo suscipit nobis magni, aliquid a quos maxime! Provident eius ad aliquid quasi sit, sapiente dolorum. Voluptatum inventore placeat tenetur officia cumque molestiae vel ea asperiores. '}</p>
      <div className="text-center mt">
      <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-purple-sm' to="/Flyerinfo">{'FINDOUT'}</NavLink>
                </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Flyers
