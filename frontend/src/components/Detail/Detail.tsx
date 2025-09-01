import { useState } from "react";
import { Overview } from "./Overview";
export const Detail = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="flex w-full h-screen">
                

            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img className="w-16 h-16 rounded-full bg-gray-300" src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"/>
                        <div>
                            <h1 className="text-2xl font-bold text-black">John Doe</h1>
                            <p className="text-gray-600">Roll No: 12</p>
                            <p className="text-gray-600">Class: X    </p>
                            <p className="text-gray-600">Section: A</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="btn border-none px-4 py-2 bg-blue-500 text-white rounded-lg hover:scale-105 hover:bg-blue-600">Edit</button>
                        <button className="btn border-none px-4 py-2 bg-red-500 text-white rounded-lg hover:scale-105 hover:bg-red-600">Delete</button>
                        <button className="btn border-none px-4 py-2 bg-gray-400 text-white rounded-lg hover:scale-105 hover:bg-gray-500">Download</button>
                    </div>
                </div>

                <div className="mt-6 border-b-2 border-t-2 pt-2 border-gray-200 flex space-x-6">
                    {[
                        "overview",
                        "attendance",
                        "grades",
                        "fees",
                        "guardian",
                        "documents",
                    ].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 capitalize cursor-pointer hover:text-blue-500 ${activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-600 font-bold"
                                    : "text-gray-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    {activeTab === "overview" && (
                        <Overview/>
                    )}
                    {activeTab === "attendance" && (
                        <p className="text-gray-600">Attendance chart & table here.</p>
                    )}
                    {activeTab === "grades" && (
                        <p className="text-gray-600">Grades table & performance chart here.</p>
                    )}
                    {activeTab === "fees" && (
                        <p className="text-gray-600">Fee records table here.</p>
                    )}
                    {activeTab === "guardian" && (
                        <p className="text-gray-600">Guardian details here.</p>
                    )}
                    {activeTab === "documents" && (
                        <p className="text-gray-600">Uploaded documents preview here.</p>
                    )}
                </div>
            </main>
        </div>
    );
};


