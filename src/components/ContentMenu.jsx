import React from 'react';
import { FaRobot } from "react-icons/fa";
import { GrManual } from "react-icons/gr";
import { TfiTimer } from "react-icons/tfi";
import { SiAboutdotme } from "react-icons/si";

const ContentMenu = () => {
  return (
    <div>
        <div className="flex flex-row space-x-7 m-5 justify-center">
            <div className="h-[130px] w-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center hover:bg-red-300 transition duration-300">
              <div>
                <div className=" flex justify-center">
                  <FaRobot size={35} />
                </div>
                <div className="mt-2">Auto Loader</div>
              </div>
            </div>
            <div className="h-[130px] w-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center ">
              <div>
                <div className=" flex justify-center">
                  <GrManual size={35} />
                </div>
                <div className="mt-2">Manual</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-7 m-5 justify-center">
          <div className="h-[130px] w-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center ">
              <div>
                <div className=" flex justify-center">
                  <TfiTimer size={35} />
                </div>
                <div className="mt-2">Timer</div>
              </div>
            </div>
          <div className="h-[130px] w-[130px] bg-white shadow-lg rounded-lg flex items-center justify-center ">
              <div>
                <div className=" flex justify-center">
                  <SiAboutdotme size={35} />
                </div>
                <div className="mt-2">About</div>
              </div>
            </div>
          </div>
    </div>
  )
}

function Card(props){
  return(
    <div cls></div>
  )
}

export default ContentMenu

