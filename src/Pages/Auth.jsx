import React, { useState } from "react";
import authImage from "../assets/auth.jpg";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = ({isloginPage,setIsloginPage}) => {
  console.log(isloginPage)
  
  return (
    <div>
      <div className="flex justify-between h-screen ">
        <div className="p-14 w-[50%] flex justify-start items-center ">
          {
            isloginPage?<Login setIsloginPage={setIsloginPage}/>:<Signup setIsloginPage={setIsloginPage} />
          }
           
          
        </div>
        <div className="w-[50%] flex justify-center items-center p-3 ">
          <img src={authImage} alt="" className="rounded-xl"  />
        </div>
      </div>
    </div>
  );
};

export default Auth;
