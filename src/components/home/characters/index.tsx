import React from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import Loading from "../../shared/loading";
import { Pagination } from "@mui/material";
import Search from "./search";
import { useMemo } from 'react';
import Items from "./items";
// interface Props {
//     pagesCount: number
// }

const Characters: React.FC = () => {
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState('');
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const GET_CHARACTERS = gql(`query GetCharacters {
        characters(page:${page}${search ? ', filter: {name: "' + search + '"}' : ''}) {
            results {name,image,id,status,species,type,gender,created}
            info {pages,count}
        }
    }`);
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (error) return <p>Error : {error.message}</p>;
    const pagesCount = data?.characters?.info?.pages;

    console.log(data);

    return (
        <div>
            <div className=" md:max-w-[1000px] m-auto px-5 py-6">
                <div className="my-3">find your favorite character</div>
                <div>
                    <Search setSearch={setSearch} setPage={setPage} />
                </div>
                {
                    loading ? <div className="h-[500px]"><Loading /> </div> :
                        <div className="grid grid-cols-3 overflow-auto h-[500px]">
                            <Items data={data?.characters?.results} />
                        </div>
                }
                <div className="m-5">
                    <Pagination count={pagesCount} page={page} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default Characters;