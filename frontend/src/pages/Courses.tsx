import { CourseCard } from "../components/Card/CourseCard";
import { SearchBar } from "../components/Layout/SearchBar";
import { IoMdPersonAdd } from "react-icons/io";
import { CourseList } from "../components/List/CourseList";
const Courses = () => {
    return (
        <>
            <section className="flex flex-col w-full" aria-label="Student Management">
                <div className="m-4">
                    <div className="md:flex md:justify-between ">
                        <h1 className="text-black text-3xl font-bold">Courses</h1>
                    </div>
                    <CourseCard />
                    <div className="flex md:justify-between gap-4 mt-5 md:flex-row flex-col">
                        <SearchBar />

                        <button className="btn px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700  hover:scale-110 border-0">
                            <IoMdPersonAdd />
                            Add Students
                        </button>
                    </div>
                    <CourseList />
                </div>
            </section>
        </>
    )
}
export default Courses;