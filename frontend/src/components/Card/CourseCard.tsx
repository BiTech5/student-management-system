import { useContext } from "react";
import { SideBarContext } from "../../Context/SideBarContext";

export const CourseCard = () => {
    const { isOpen } = useContext(SideBarContext);

    return (
        <div
            className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4
      "
        >
            {/* Total Courses */}
            <div
                className={`
          flex flex-col justify-center items-center text-black border-2 
          duration-500 h-28 border-gray-300 rounded p-4
          w-full md:${isOpen ? "w-57" : "w-65"}
        `}
            >
                <h2
                    className={`
            ${isOpen ? "text-base md:text-lg" : "text-lg md:text-xl"} 
            font-bold duration-500 mb-2 text-center
          `}
                >
                    Total Courses
                </h2>
                <p
                    className={`
            ${isOpen ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} 
            duration-500 font-bold text-blue-600
          `}
                >
                    33
                </p>
            </div>

            {/* Morning */}
            <div
                className={`
          flex flex-col justify-center items-center text-black border-2 
          duration-500 h-28 border-gray-300 rounded p-4
          w-full md:${isOpen ? "w-57" : "w-65"}
        `}
            >
                <h2
                    className={`
            ${isOpen ? "text-base md:text-lg" : "text-lg md:text-xl"} 
            font-bold duration-500 mb-2 text-center
          `}
                >
                    Morning Courses
                </h2>
                <p
                    className={`
            ${isOpen ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} 
            duration-500 font-bold text-red-600
          `}
                >
                    15
                </p>
            </div>

            {/* Day*/}
            <div
                className={`
          flex flex-col justify-center items-center text-black border-2 
          duration-500 h-28 border-gray-300 rounded p-4
          w-full md:${isOpen ? "w-57" : "w-65"}
        `}
            >
                <h2
                    className={`
            ${isOpen ? "text-base md:text-lg" : "text-lg md:text-xl"} 
            font-bold duration-500 mb-2 text-center
          `}
                >
                    Day Courses
                </h2>
                <p
                    className={`
            ${isOpen ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} 
            duration-500 font-bold text-green-600
          `}
                >
                    18
                </p>
            </div>
        </div>
    );
};
