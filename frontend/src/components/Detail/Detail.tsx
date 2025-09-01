export const Detail = () => {
    return (
        <>
            <div className="m-4 relative">
                <div className="flex gap-2">
                    <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="profile pic" className="rounded-full h-30 w-30" />
                    <div className="text-black m-4">
                        <h2 className="font-bold text-3xl">Rajesh Hamal</h2>
                        <p className="font-semibold text-xl">Roll N.o: <span>16</span></p>
                        <div className="flex gap-6 ">
                            <p>Class: X</p>
                            <p>Section: A</p>
                            <p>DOB: 2005-6-6</p>
                            <p>Contact: 977</p>
                            <p>Email: biwin@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 absolute left-4/5">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-error">Delete</button>
                        <button className="btn btn-warning">Download</button>
                    </div>
                </div>
            </div>
        </>
    )
}