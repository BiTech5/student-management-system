export const StudentList = () => {
    return (
        <>
            <div className="mt-5">
                <div className="flex gap-5">
                    {["Class", "Section", "Gender"].map((label, index) => (
                        <select
                            key={index}
                            defaultValue={label}
                            className="select bg-white border border-gray-300 text-black font-bold text-lg w-60"
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
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 1, name: "Cy Ganderton", job: "Quality Control Specialist", color: "Blue" },
                                { id: 2, name: "Alex Johnson", job: "Software Engineer", color: "Green" },
                                { id: 3, name: "Maria Lopez", job: "Product Manager", color: "Red" },
                                { id: 4, name: "John Doe", job: "Data Analyst", color: "Yellow" },
                            ].map((student) => (
                                <tr key={student.id} className="hover:bg-gray-100">
                                    <th>{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.job}</td>
                                    <td>{student.color}</td>
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