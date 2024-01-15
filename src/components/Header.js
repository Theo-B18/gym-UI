import "../index.css"
import Logo from '../images/YB_GYM_LOGO2.png'
import Navbar from './Navbar'



const Header = () => {

 
  return (
      <div className='container' >
    <div className='flex-box bg-purple header' style={{position:'fixed', zIndex:1}}>
        <div className="logo-brand flex-row">
          <div className=" logo">
          <img src={Logo} alt="" sizes="" srcset="" /> 
          </div>
          <div className="brand">
            <h1>YB GYM</h1>
          </div>
            
       
        </div>
        <div className="nav-links">
         <Navbar ></Navbar>
        </div>
      </div>
    </div>
  )
}

export default Header
