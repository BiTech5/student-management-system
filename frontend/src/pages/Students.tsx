import { SearchBar } from "../components/Layout/SearchBar";
import { StdCard } from "../components/Card/StdCard";
import { StudentList } from "../components/List/StudentList";
import { IoMdPersonAdd } from "react-icons/io";
const Students = () => {
    return (
        <>

            <section className="flex flex-col w-full" aria-label="Student Management">
                <div className="m-4">
                    <div className="md:flex md:justify-between ">
                        <h1 className="text-black text-3xl font-bold">Students</h1>
                    </div>
                    <StdCard />
                    <div className="flex md:justify-between gap-4 mt-5 md:flex-row flex-col">
                        <SearchBar />

                        <button className="btn px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700  hover:scale-110 border-0">
                            <IoMdPersonAdd />
                            Add Students
                        </button>
                    </div>
                    <StudentList />
                </div>
            </section>
        </>
    )
}
export default Students;