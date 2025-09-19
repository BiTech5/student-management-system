import { SearchBar } from "../components/Layout/SearchBar";
import { StdCard } from "../components/Card/StdCard";
import { StudentList } from "../components/List/StudentList";
import { IoMdPersonAdd } from "react-icons/io";
const Students = () => {
    return (
        <>

            <section className="flex flex-col w-full" aria-label="Student Management">
                <SearchBar />
                <div className="m-4">
                    <div className="md:flex md:justify-between ">
                        <h1 className="text-black text-3xl font-bold">Students</h1>
                        <div className="flex justify-end ">
                            <button className="btn px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700  hover:scale-110 border-0">
                                <IoMdPersonAdd />
                                Add Student
                            </button>
                        </div>
                    </div>
                    <StdCard />
                    <StudentList />
                </div>
            </section>
        </>
    )
}
export default Students;