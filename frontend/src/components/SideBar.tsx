import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { PiExamFill } from "react-icons/pi";
const menuItems = [
    { icons: <IoHomeSharp/>, label: 'Dashboard' },
    { icons:<PiStudentFill/>, label: 'Students' },
    { icons:<FaUserGroup/>, label: 'Teachers' },
    { icons: <IoLibrarySharp/>, label: 'Courses' },
    { icons: <GrSchedules/>, label: 'Schedule' },
    { icons: <PiExamFill/>, label: 'Results' }
];

export const SideBar: React.FC = () => {
    const [open, SetOpen] = useState(true);
    function toggle() {
        SetOpen(!open);
        }
    return (
        <>
            <nav className={`h-screen shadow-md duration-500 ${open?`w-60`:'w-20'} p-2 bg-blue-500`}>
                <div className="px-3 py-2 h-20 flex justify-between items-center">
                <h1 className={`${!open && 'w-0 translate-x24'} duration-500 overflow-hidden text-2xl font-bold cursor-no-drop`}>SMS</h1>
                    <MdMenuOpen size={30} className="cursor-pointer" onClick={toggle} />
                </div>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="py-2 px-4 hover:bg-blue-400 cursor-pointer flex justify-between items-center text-xl">
                             <p className={`${!open && 'w-0 translate-x24'} duration-500 overflow-hidden`}>{item.label}</p>
                            
                            {item.icons && <span className=" text-2xl">{item.icons}</span>}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}