import React from "react"
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import { CourseChart } from "../components/Metrix/CourseChart";
export const DashBoard: React.FC = () => {
    const { isOpen } = useContext(SideBarContext);
    return (
        <>
            <div className={` bg-gray-100 w-full p-10`}>
                <div className="flex gap-3">
                    <div className={`bg-blue-600 duration-500 ${isOpen ? `w-85 h-35` : `w-95 h-40`} rounded-2xl grid place-items-center p-8`}>
                        <h1 className="text-4xl  font-bold">12</h1>
                        <p className="text-2xl font-bold">
                            Total Student
                        </p>
                    </div>
                    <div className={`bg-purple-800 duration-500 ${isOpen ? `w-85 h-35` : `w-95 h-40`} rounded-2xl grid place-items-center p-8`}>
                        <h1 className="text-4xl  font-bold">12</h1>
                        <p className="text-2xl font-bold">
                            Total Courses
                        </p>
                    </div>
                    <div className={`bg-green-500 duration-500 ${isOpen ? `w-85 h-35` : `w-95 h-40`} rounded-2xl grid place-items-center p-8`}>
                        <h1 className="text-4xl  font-bold">12</h1>
                        <p className="text-2xl font-bold">
                            Total Teachers
                        </p>
                    </div>
                </div>
                <div className={`flex gap-20`}>
                    <CourseChart />
                    <div className="shadow-lg rounded-2xl bg-white  h-100 mt-10 w-70">
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
            </div>
        </>
    );
}