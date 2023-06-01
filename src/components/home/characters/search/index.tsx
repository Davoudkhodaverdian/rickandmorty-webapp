import React from "react";

interface Props {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Search: React.FC<Props> = ({ setSearch,setPage }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(1);
        setSearch(event.target.value);
    }
    return (
        <form className="mb-5 mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                Search
            </label>
            <div className="relative">
                <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input className="block p-4 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-purple-600"
                    type="search" placeholder="search ..." required
                    onChange={handleChange}
                // value={(searchParams.get('title') || '') as string}
                />
                {/* <button type="submit"
                    className="absolute left-2.5 bottom-[7px] px-4 py-2 shadow-2xl rounded bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 ">
                    جستجو
                </button> */}
            </div>
        </form>
    )
}

export default Search