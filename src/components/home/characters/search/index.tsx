import React from "react";
import { useDispatch } from "react-redux";
import { setPage, setSearch } from "../../../../app/store/slices/charactersList";
import { SetURLSearchParams, URLSearchParamsInit } from "react-router-dom";

interface Props {
    setSearchParams: SetURLSearchParams
    searchParams: URLSearchParams
}

const Search: React.FC<Props> = ({ setSearchParams, searchParams }) => {

    const dispatch = useDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPage(1));
        const searchQuery = event.target.value ? { search: event.target.value } : {};
        dispatch(setSearch(event.target.value));
        setSearchParams({ page: '1', ...searchQuery } as URLSearchParamsInit, { replace: true });

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
                    type="search" placeholder="search ..." required value={searchParams.get('search')?.toString() || ''}
                    onChange={handleChange}
                />

            </div>
        </form>
    )
}

export default Search