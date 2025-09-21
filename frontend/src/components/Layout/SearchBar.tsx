export const SearchBar = () => {
    return (
        <div className="w-full">
            <label className={`w-full  duration-500 input bg-white
             text-black flex items-center gap-2 rounded-lg px-3 py-2 text-xl border-2 border-gray-200`}>
                <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    required
                    placeholder="Search..."
                    className={`bg-transparent`}
                />

            </label>
        </div>

    )
}