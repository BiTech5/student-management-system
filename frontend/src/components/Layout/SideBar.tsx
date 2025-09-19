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
    { icons: <IoHomeSharp />, label: 'Dashboard', slug: '/' },
    { icons: <PiStudentFill />, label: 'Students', slug: '/students' },
    { icons: <FaUserGroup />, label: 'Teachers', slug: '/teachers' },
    { icons: <IoLibrarySharp />, label: 'Courses', slug: '/courses' },
    { icons: <GrSchedules />, label: 'Schedule', slug: '/schedule' },
    { icons: <PiExamFill />, label: 'Results', slug: '/results' }
];

export const SideBar: React.FC = () => {
    const { isOpen, toggleSidebar } = useContext(SideBarContext);
    return (
        <>
            <nav className={`hidden md:block md:h-screen md:shadow-md md:duration-500 ${isOpen ? `w-60` : 'w-20'} md:p-2 md:bg-blue-500 md:flex-shrink-0`}>
                <div className="px-3 py-2 h-20 flex justify-between items-center">
                    <h1 className={`${!isOpen && 'w-0 translate-x24'} duration-500 overflow-hidden text-2xl font-bold cursor-no-drop`}>SMS</h1>
                    <MdMenuOpen size={30} className="cursor-pointer" onClick={toggleSidebar} />
                </div>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="pb-1">
                            <NavLink
                                to={item.slug}
                                className={({ isActive }) =>
                                    `py-2 px-4 cursor-pointer rounded flex justify-between items-center text-xl 
     hover:bg-blue-400/50  
     ${isActive ? "bg-blue-400 font-semibold " : ""}`
                                }
                            >
                                <p className={`${!isOpen && 'w-0 translate-x24'} duration-500 overflow-hidden`}>{item.label}</p>

                                {item.icons && <span className=" text-2xl">{item.icons}</span>}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* for small screen */}
            <nav className="flex md:hidden fixed bottom-0 left-0 right-0 bg-blue-500 shadow-md justify-around items-center py-2 z-50">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.slug}
                        className={({ isActive }) =>
                            `flex flex-col items-center rounded  text-white text-sm  hover:bg-blue-400/50 ${isActive ? "font-semibold bg-blue-400" : ""
                            }`
                        }
                    >
                        <span className="text-3xl m-3">{item.icons}</span>
                    </NavLink>
                ))}
            </nav>
        </>
    );
}