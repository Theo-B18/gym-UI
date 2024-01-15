import {Routes, Route} from 'react-router-dom'
import  AboutUs  from './components/AboutUs'
import GymTips  from './components/GymTips'
import Coaches from './components/Coaches'
import Register  from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import FitnessConsultant from './components/FitnessConsultant'
import Gallery from './components/Gallery'
import Flyerinfo from './components/Flyerinfo'
import GymMarket from './components/GymMarket'
import Videos from './components/Videos'
import CoachProfile from './components/CoachProfile'
import Job from './components/Job'
import Buyform from './components/Buyform'
import PaymentMSg from './components/PaymentMSg'
import Login from './components/Login'








function App() {
  return (
    < >
      <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='GymTips' element={<GymTips/>}/>
        <Route path='Coaches' element={<Coaches/>}/>
        <Route path='FitnessConsultant' element={<FitnessConsultant/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='Flyerinfo' element={<Flyerinfo/>}/>
        <Route path='GymMarket' element={<GymMarket/>}/>
        <Route path='Videos' element={<Videos/>}/>
        <Route path='CoachProfile' element={<CoachProfile/>}/>
        <Route path='job' element={<Job/>}/>
        <Route path='Buyform' element={<Buyform/>}/>
        <Route path='PaymentMsg' element={<PaymentMSg/>}/>
        <Route path='Login' element={<Login/>}></Route>
      </Routes>    
     <Footer></Footer>
    </>
  );
}

export default App;
