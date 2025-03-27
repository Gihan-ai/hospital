import React from "react";
import { assets } from "../assets/assets";

const Flooter= () =>{
    return(
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm" >
            {/* 1..*/}
            <div className= "">
                <img className="mb-5 w-40" src={assets.logo} />
                <p className="w-full md:w-2/3 text-gray-600 leading-6 ">Lorem Ipusm is simply dummy text of the printing and typsetting industry. </p>
             
            </div>
            {/*2*/}
            <div>
                <p className="text-xl font- medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                   <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*3 */}
            <div className="flex flex-col gap-2 text-gray-600">
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+11 574 3762</li>
                    <li>gihanabeysekra@gmail.com</li>
                </ul>
            </div>
            <div>
                <hr/>
                <p className="py-7 text-sm text-center"> copyright 2025@ prescipto-all Right reseived</p>
                </div>
            </div>
        </div>
    )

}

export default Flooter;