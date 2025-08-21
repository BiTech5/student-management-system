import React from "react"
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import { CourseChart } from "../components/Metrix/CourseChart";
import { IoPerson, IoBookSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AttenceTend } from "../components/Metrix/AttendenceTend";

const DashBoard: React.FC = () => {
    const { isOpen } = useContext(SideBarContext);
    return (
        <>
            <div className={` bg-gray-100 w-full p-10 overflow-y-auto flex-1`}>
                <div className="flex gap-3">
                    <div
                        className={`bg-blue-600 duration-500 ${isOpen ? `w-80 h-36` : `w-96 h-40`
                            } rounded-2xl flex items-center gap-6 p-8`}
                    >
                        <IoPerson className="text-white text-6xl" />
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">12</h1>
                            <p className={`${isOpen ? 'text-xl' : 'text-3xl'} 'font-bold duration-500 '`}>Total Student</p>
                        </div>
                    </div>

                    <div className={`bg-purple-800 duration-500 ${isOpen ? `w-80 h-36` : `w-96 h-40`
                        } rounded-2xl flex items-center gap-6 p-8`}>
                        <IoBookSharp className="text-white text-6xl" />
                        <div className="text-center">

                            <h1 className="text-4xl  font-bold">12</h1>
                            <p className={`${isOpen ? 'text-xl' : 'text-3xl'} 'font-bold duration-500 '`}>
                                Total Courses
                            </p>
                        </div>
                    </div>
                    <div className={`bg-green-500 duration-500 ${isOpen ? `w-80 h-36` : `w-96 h-40`
                        } rounded-2xl flex items-center gap-6 p-8`}>
                        <FaChalkboardTeacher className="text-white text-6xl" />
                        <div className="text-center">

                            <h1 className="text-4xl  font-bold">12</h1>
                            <p className={`${isOpen ? 'text-xl' : 'text-3xl'} 'font-bold duration-500 '`}>
                                Total Teachers
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`flex gap-20`}>
                    <CourseChart />
                    <div className={`duration-500 shadow-lg rounded-2xl bg-white  h-100 mt-10  ${isOpen ? `w-70` : `w-80`}`}>
                        <h1 className="text-center text-2xl m-5 font-bold text-gray-900">Student List</h1>
                        <table className="w-full text-center">
                            <thead className=" text-gray-800">
                                <tr>
                                    <th className="px-4 py-2 border-t-1 border-b-1 border-gray-400">Name</th>
                                    <th className="px-4 py-2 border-t-1 border-b-1 border-gray-400">Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="hover:bg-gray-100">
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">hello@world.com</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                    <td className=" p-3 py-2border-t-1 border-b-1 border-gray-400">Student</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end m-4">
                            <button className="text-blue-600 cursor-pointer">View All</button>
                        </div>
                    </div>
                </div>
                <div className={`flex gap-20`}>
                    <AttenceTend />
                    <div
                        className={`duration-500 shadow-lg rounded-2xl bg-white h-100 mt-10 ${isOpen ? `w-70` : `w-80`
                            }`}
                    >
                        <h1 className="text-center text-2xl m-5 font-bold text-gray-900">
                            Notification
                        </h1>

                        {/* Notification List */}
                        <div className="px-6 space-y-4">
                            <div className="flex items-start gap-3 border-b pb-3">
                                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
                                <p className="text-gray-700 text-sm">
                                    New comment on your post <span className="font-semibold">“React Tips”</span>
                                </p>
                                <span className="ml-auto text-xs text-gray-500">2m ago</span>
                            </div>

                            <div className="flex items-start gap-3 border-b pb-3">
                                <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                                <p className="text-gray-700 text-sm">
                                    Your profile was viewed by <span className="font-semibold">Alex</span>.
                                </p>
                                <span className="ml-auto text-xs text-gray-500">10m ago</span>
                            </div>

                            <div className="flex items-start gap-3 border-b pb-3">
                                <span className="w-2 h-2 mt-2 bg-yellow-500 rounded-full"></span>
                                <p className="text-gray-700 text-sm">
                                    You have a new follower <span className="font-semibold">Sophia</span>.
                                </p>
                                <span className="ml-auto text-xs text-gray-500">30m ago</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 bg-red-500 rounded-full"></span>
                                <p className="text-gray-700 text-sm">
                                    Password change required for security.
                                </p>
                                <span className="ml-auto text-xs text-gray-500">1h ago</span>
                            </div>
                        </div>

                        <div className="flex justify-end m-4">
                            <button className="text-blue-600 cursor-pointer">View All</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default DashBoard;