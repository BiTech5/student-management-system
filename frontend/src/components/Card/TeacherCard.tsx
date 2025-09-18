import { useContext } from "react";
import { SideBarContext } from "../../Context/SideBarContext";
export const TeacherCard = () => {
    const { isOpen } = useContext(SideBarContext);

    return (
        <>
            <div className="flex gap-2 mt-4">
                <div className={`flex flex-col justify-center items-center text-black border-2 duration-500 ${isOpen?'w-57':'w-65 '} h-30 border-gray-300 rounded`}>
                    <h2 className={`${isOpen?'text-lg':`text-xl`} font-bold duration-500 mb-2`}>Total Teachers</h2>
                    <p className={`${isOpen?'text-4xl':'text-5xl'} duration-500 font-bold text-blue-600`}>1245</p>
                </div>

                <div className={`flex flex-col justify-center items-center text-black border-2 duration-500 ${isOpen?'w-57':'w-65 '} h-30  border-gray-300 rounded`}>
                    <h2 className={`${isOpen?'text-lg':`text-xl`} font-bold duration-500 mb-2`}>Male Teachers</h2>
                    <p className={`${isOpen?'text-4xl':'text-5xl'} duration-500 font-bold text-red-600`}>700</p>
                </div>

                <div className={`flex flex-col justify-center items-center text-black border-2 duration-500 ${isOpen?'w-57':'w-65 '} h-30  border-gray-300 rounded`}>
                    <h2 className={`${isOpen?'text-lg':`text-xl`} font-bold duration-500 mb-2`}>Female Teachers</h2>
                    <p className={`${isOpen?'text-4xl':'text-5xl'} duration-500 font-bold text-green-600`}>545</p>
                </div>

                <div className={`flex flex-col justify-center items-center text-black border-2 duration-500 ${isOpen?'w-57':'w-65 '} h-30  border-gray-300 rounded`}>
                    <h2 className={`${isOpen?'text-lg':`text-xl`} font-bold duration-500 mb-2`}>Total Subjects</h2>
                    <p className={`${isOpen?'text-4xl':'text-5xl'} duration-500 font-bold text-purple-600`}>12</p>
                </div>
            </div>
        </>
    )
}