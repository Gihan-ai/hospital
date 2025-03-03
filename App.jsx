import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Appoiment from "./pages/Appoiment";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import  Doctors  from "./pages/Doctors";
import About from "./pages/About";
import  Contact  from "./pages/Contact";
import Login from "./pages/Login";
import Myprofile from "./pages/Myprofile";
import MyAppoiment from "./pages/MyApoiment"



const App =()=> {
  return(
    <div className='mx-4 sm:mx-[10%]'>  
      <Navbar/>
       <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
         <Route path='/doctors/:speciality' element={<Doctors/>}/>
         <Route path='about/' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/myprofile' element={<Myprofile/>}/>
         <Route path='/my-appoinments' element={<MyAppoiment/>}/>
         <Route path='/appointment/:docId' element={<Appoiment/>}/>
        </Routes>  
    </div>
     );
};
export default App;
