import { SearchBar } from "../components/Layout/SearchBar";
const Students = () => {
    return (
        <>

            <section className="flex flex-col w-full" aria-label="Student Management">
                <SearchBar />
                <div className="flex justify-end mt-2 mr-3">
                    <button className="btn px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700  hover:scale-110 border-0">
                        Add Student
                    </button>
                </div>
            </section>
        </>
    )
}
export default Students;