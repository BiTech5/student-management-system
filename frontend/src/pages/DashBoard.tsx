import React from "react"
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";
export const DashBoard: React.FC = () => {
    const {isOpen}=useContext(SideBarContext);
    return (
        <>
            <div className={` bg-gray-100 w-full p-10`}>
               <div className="flex gap-3">
                <div className={`bg-blue-600 duration-500 ${isOpen?`w-75 h-30`:`w-85 h-35`} rounded-2xl grid place-items-center`}>Student</div>
                <div className={`bg-purple-800 duration-500 ${isOpen?`w-75 h-30`:`w-85 h-35`} rounded-2xl grid place-items-center`}>Student</div>
                <div className={`bg-green-500 duration-500 ${isOpen?`w-75 h-30`:`w-85 h-35`} rounded-2xl grid place-items-center`}>Student</div>
               </div>
            </div>
        </>
    );
}