import { Fragment } from 'react';
import '../index.css'
import {NavLink} from "react-router-dom";
// import { hover } from "@testing-library/user-event/dist/hover";

const styleLinks = {
  textFont :{
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    marginRight: 12,
    textDecoration: 'none',
  }

} 

const Navbar = () => {



  return (
    <Fragment>
    <div >
        <nav>
             <NavLink className="nav_link" activeClassName="main_link" style={styleLinks.textFont} to="/"> Home </NavLink>  
             <NavLink className="nav_link" activeClassName="main_link" style={styleLinks.textFont}   to="/AboutUs">About us</NavLink>  
             <NavLink className="nav_link" style={styleLinks.textFont} to="/GymTips">Gym Tips</NavLink>  
             <NavLink className="nav_link" style={styleLinks.textFont} to="/Coaches">Coaches</NavLink>  
             <NavLink className="nav_link" style={styleLinks.textFont} to="/FitnessConsultant">Consultations</NavLink>  
             <NavLink className="nav_link" style={styleLinks.textFont} to="/GymMarket">Shop</NavLink>  
             <NavLink className="nav_link" style={styleLinks.textFont} to="/Gallery">Gallery</NavLink>  
             <NavLink className="nav_link" style={styleLinks.textFont} to="/Register">Sign up  |</NavLink> 
             <NavLink className="nav_link" style={styleLinks.textFont} to="/Login">login</NavLink>  
        </nav>
      
    </div>
    </Fragment>
  )
}

export default Navbar
