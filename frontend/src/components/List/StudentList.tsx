import { useContext } from "react";
import { SideBarContext } from "../../Context/SideBarContext";
export const StudentList = () => {
    const { isOpen } = useContext(SideBarContext);
    return (
        <>
            <div className="mt-5">
                <div className="flex gap-5">
                    {["Class", "Section", "Gender", "Faculty"].map((label, index) => (
                        <select
                            key={index}
                            defaultValue={label}
                            className={`select bg-white border border-gray-300 text-black font-bold text-lg duration-500 ${isOpen?'w-55':'w-65'}`}
                        >
                            <option disabled={true}>{label}</option>
                            <option>Crimson</option>
                            <option>Amber</option>
                            <option>Velvet</option>
                        </select>
                    ))}
                </div>
                <div className="overflow-x-auto rounded-box mt-4 text-black">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-200 text-black font-bold">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Faculty</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 1, name: "Cy Ganderton", class: "10", faculty: "Science" },
                                { id: 2, name: "Alex Johnson", class: "12", faculty: "Commerce" },
                                { id: 3, name: "Maria Lopez", class: "11", faculty: "Arts" },
                                { id: 4, name: "John Doe", class: "9", faculty: "Science" },
                            ].map((student) => (
                                <tr key={student.id} className="hover:bg-gray-100">
                                    <th>{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.class}</td>
                                    <td>{student.faculty}</td>
                                    <td className="hover:underline text-blue-600 hover:text-blue-700"><a href="">Details</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}