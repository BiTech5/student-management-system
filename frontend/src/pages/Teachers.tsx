import { SearchBar } from "../components/Layout/SearchBar";
import { TeacherCard } from "../components/Card/TeacherCard";
import { StudentList } from "../components/List/StudentList";
import { IoMdPersonAdd } from "react-icons/io";
const Teachers = () => {
    return (
        <>
            <section className="flex flex-col w-full" aria-label="Student Management">
                <SearchBar />
                <div className="m-4">
                    <div className="flex justify-between ">
                        <h1 className="text-black text-3xl font-bold">Teachers</h1>
                        <div className="flex justify-end ">
                            <button className="btn px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700  hover:scale-110 border-0">
                                <IoMdPersonAdd />
                                Add Teachers
                            </button>
                        </div>
                    </div>
                    <TeacherCard />
                    <StudentList />
                </div>
            </section>
        </>
    )
}
export default Teachers;