export const StdCard = () => {
    return (
        <>
            <div className="flex gap-2 mt-3">
                <div className={`flex flex-col justify-center items-center text-black border-2 w-65 h-30 border-gray-300 rounded`}>
                    <h2 className="text-xl font-bold mb-2">Total Students</h2>
                    <p className="text-5xl font-bold text-blue-600">1245</p>
                </div>
                <div className={`flex flex-col justify-center items-center text-black border-2 w-65 h-30 border-gray-300 rounded`}>
                    <h2 className="text-xl font-bold mb-2">Boys</h2>
                    <p className="text-5xl font-bold text-red-600">700</p>
                </div>
                <div className={`flex flex-col justify-center items-center text-black border-2 w-65 h-30 border-gray-300 rounded`}>
                    <h2 className="text-xl font-bold mb-2">Girls</h2>
                    <p className="text-5xl font-bold text-green-600">545</p>
                </div>
                <div className={`flex flex-col justify-center items-center text-black border-2 w-65 h-30 border-gray-300 rounded`}>
                    <h2 className="text-xl font-bold mb-2">Classes</h2>
                    <p className="text-5xl font-bold text-purple-600">12</p>
                </div>
            </div>
        </>
    )
}