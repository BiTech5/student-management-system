export const Overview = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                {/* Basic Info */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-bold mb-4 text-gray-800 text-lg">Basic Info</h2>
                    <div className="grid grid-cols-2 gap-y-2">
                        <p className="font-medium">Name:</p>
                        <p>Biki Kc</p>

                        <p className="font-medium">DOB:</p>
                        <p>2005-03-15</p>

                        <p className="font-medium">Gender:</p>
                        <p>Male</p>

                        <p className="font-medium">Class:</p>
                        <p>X</p>

                        <p className="font-medium">Section:</p>
                        <p>A</p>

                        <p className="font-medium">Roll No:</p>
                        <p>12</p>

                        <p className="font-medium">Contact Number:</p>
                        <p>984XXXXXXX</p>

                        <p className="font-medium">Email:</p>
                        <p>xyz@mail.com</p>
                    </div>
                </div>

                {/* Guardian Info */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="font-bold mb-4 text-gray-800 text-lg">Guardian Info</h2>
                    <div className="grid grid-cols-2 gap-y-2">
                        <p className="font-medium">Name:</p>
                        <p>Jane Doe</p>

                        <p className="font-medium">Relationship:</p>
                        <p>Mother</p>

                        <p className="font-medium">Phone:</p>
                        <p>984XXXXXXX</p>

                        <p className="font-medium">Address:</p>
                        <p>1234 Biki St</p>
                    </div>
                </div>
            </div>
        </>
    )
}
