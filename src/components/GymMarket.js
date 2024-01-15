import React from 'react'
import { NavLink } from 'react-router-dom'
import barbell from '../gymmarket/barbell&stam.png'
import chestpress from '../gymmarket/chest-press.png'
import cycle3 from '../gymmarket/cycle3.png'
import cycle4 from '../gymmarket/cycle4.png'
import dumbell1 from '../gymmarket/dumbell1.png'
import dumbeell3 from '../gymmarket/dumbell3.png'
import gymmatt from '../gymmarket/gym-matt.png'
import kettelbell2 from '../gymmarket/kettlebell2.png'
import kettelbell1 from '../gymmarket/kettelbell1.png'
import machine1 from '../gymmarket/machine1.png'
import machine4 from '../gymmarket/machine4.png'
import marchine5 from '../gymmarket/machine5.png'
import machine6 from '../gymmarket/machine6.png'
import rowmachine from '../gymmarket/row-machine.png'
import yogamatt3 from '../gymmarket/yoga-matt3.png'



const GymMarket = () => {
  const styleimg ={
    height: 200,
    width: 200,
    /* borderRadius:1000, */
    backgroundColor: 'gold',
};

const styleBtnBuy ={
  width: 150,
  padding: 8,
 /*  backgroundColor: 'purple', */
  color: 'white',
  fontWeight: 'bold',
  textDecoration: 'none',
  
}
  return (
    <>
    <div className='container mt-exp '>
       <hr />
       <h1 className='text-center mt text-purple underline '> {'BUY YOUR GYM EQIPTMENTS'} </h1>
       <div className="flex-row mt-lg mb-lg ">
           <div className="circle-img space-around-even border-bottom "  >
             <img src={barbell} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbell Rubber"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb ">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom">
           <img src={cycle3} alt="" srcset="" style={styleimg} />
           <div className=" ">
             <h4 className='text-center mt p-1'> {" Kittel Bell"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb ">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom">
             <img src={cycle4} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy} type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={dumbell1} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={dumbeell3} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
       </div>
       <div className="flex-row mt-lg mb-lg ">
           <div className="circle-img space-around-even border-bottom "  >
             <img src={gymmatt} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>

           <div className="circle-img space-around-even border-bottom" >
           <img src={kettelbell2} alt="" srcset="" style={styleimg} />
           <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4> 
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1"> {'8 in Store'} </p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>

           <div className="circle-img space-around-even border-bottom" >
             <img src={kettelbell1} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={machine1} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={machine4} alt="" srcset="" style={styleimg} />
                   <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
       </div>
       <div className="flex-row mt-lg mb-lg ">
           <div className="circle-img space-around-even border-bottom "  >
             <img src={machine6} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
           <img src={marchine5} alt="" srcset="" style={styleimg} />
           <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={chestpress} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={rowmachine} alt="" srcset="" style={styleimg} />
             <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
           <div className="circle-img space-around-even border-bottom" >
             <img src={yogamatt3} alt="" srcset="" style={styleimg} />
                   <div className=" ">
             <h4 className='text-center mt p-1'> {"Dumbells"} </h4>
             <p className="text">{'Price:'} USD 50 </p>
             <p className="text pb-1">{'8 in Store'}</p>
             <div className="text-center mb">
             <NavLink style={styleBtnBuy}  type="button" className='btn-btn-purple-sm' to="/BuyForm">{'BUY NOW'}</NavLink>
             </div>
           </div>
           </div>
       </div>
   </div>
   
   </>
  )
}

export default GymMarket
