import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { PiExamFill } from "react-icons/pi";
import { useContext } from "react";
import { SideBarContext } from "../../Context/SideBarContext";
import { NavLink } from "react-router-dom";
const menuItems = [
    { icons: <IoHomeSharp />, label: 'Dashboard',slug:'/' },
    { icons: <PiStudentFill />, label: 'Students',slug:'/students' },
    { icons: <FaUserGroup />, label: 'Teachers',slug:'/teachers' },
    { icons: <IoLibrarySharp />, label: 'Courses',slug:'/courses' },
    { icons: <GrSchedules />, label: 'Schedule',slug:'/schedule' },
    { icons: <PiExamFill />, label: 'Results',slug:'/results' }
];

export const SideBar: React.FC = () => {
    const { isOpen, toggleSidebar } = useContext(SideBarContext);
    return (
        <>
            <nav className={`h-screen shadow-md duration-500 ${isOpen ? `w-60` : 'w-20'} p-2 bg-blue-500 flex-shrink-0`}>
                <div className="px-3 py-2 h-20 flex justify-between items-center">
                    <h1 className={`${!isOpen && 'w-0 translate-x24'} duration-500 overflow-hidden text-2xl font-bold cursor-no-drop`}>SMS</h1>
                    <MdMenuOpen size={30} className="cursor-pointer" onClick={toggleSidebar} />
                </div>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="py-2 px-4 hover:bg-blue-400 cursor-pointer rounded">
                            <NavLink to={item.slug} className={'flex justify-between items-center text-xl'}>
                                <p className={`${!isOpen && 'w-0 translate-x24'} duration-500 overflow-hidden`}>{item.label}</p>

                                {item.icons && <span className=" text-2xl">{item.icons}</span>}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}