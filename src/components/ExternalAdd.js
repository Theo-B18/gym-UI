import React from 'react'
import '../index.css'
import exAdd1 from '../images/foodadd.jpg'
import exAdd2 from '../images/YBDelivery.jpg'
import { NavLink } from 'react-router-dom'

const styleBtnReadmore = {
    paddingLeft: 30,
    paddingRight: 30,
    textDecoration: 'none', 
    
}

const ExternalAdd = () => {
  return (
    <div className='container mt-lg'>
        <h1 className="text-center mt text-purple mb">CITY TOP SERVICES</h1>
        <div className="flex-row ">
            <div className="ex-add-flyer">
                <img src={exAdd2} alt="" srcset="" />
            </div>
            <div className="ex-add-flyer-text bg-grey">
            <h2 className="text-center mt text-purple">SHIP ANWHERE IN LIBERIA!</h2>
            <p className="mt text-purple p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis consequatur mollitia inventore accusamus dolore? Facere est quia, atque tempore distinctio nam? Esse placeat, ab qui iure suscipit quibusdam! Assumenda repellendus magni necessitatibus natus! Placeat explicabo assumenda voluptate officia nisi ipsa qui? Cumque illo minus exercitationem fugiat facere, eligendi dolore non praesentium laboriosam in aliquid.</p>
            <p className='text-purple p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fuga doloribus cum?</p>
            <div className="text-center mt">
                 <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-yellow-sm' to="/CoachProfile">{'Connect'}</NavLink>
                </div>
            </div>
        </div>
        <div className="flex-row mt-exp">
            <div className="ex-add-flyer">
                <img src={exAdd1} alt="" srcset="" />
            </div>
            <div className="ex-add-flyer-text bg-grey">
            <h1 className="text-center mt text-purple">EAT DELICIOUS MEAL!</h1>
            <h5 className="text-center text-purple">GET FOOD ON DELIVERY TOO</h5>
            <p className="mt text-purple p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis consequatur mollitia inventore accusamus dolore? Facere est quia, atque tempore distinctio nam? Esse placeat, ab qui iure suscipit quibusdam! Assumenda repellendus magni necessitatibus natus! Placeat explicabo assumenda voluptate officia nisi ipsa qui? Cumque illo minus exercitationem fugiat facere, eligendi dolore non praesentium laboriosam in aliquid.</p>
            <div className="text-center mt">
                 <NavLink style={styleBtnReadmore}  type="button" className='btn-btn-yellow-sm' to="/CoachProfile">{'Connect'}</NavLink>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ExternalAdd
