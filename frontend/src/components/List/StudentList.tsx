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
            </div>
        </>
    )
}