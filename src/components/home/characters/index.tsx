import React, { useEffect } from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import Loading from "../../shared/loading";
import { Pagination } from "@mui/material";
import Search from "./search";
import Items from "./items";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../app/store/slices/charactersList";

const Characters: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = useSelector((state: RootState) => state.charactersList.page);
    const search = useSelector((state: RootState) => state.charactersList.search);
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchParams.get('page')) dispatch(setPage(Number(searchParams.get('page'))));
    }, []);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setSearchParams({ page: value.toString() }, { replace: true });
        dispatch(setPage(value))
    };
    const GET_CHARACTERS = gql(`query GetCharacters {
        characters(page:${page}${search ? ', filter: {name: "' + search + '"}' : ''}) {
            results {name,image,id,status,species,type,gender,created}
            info {pages,count}
        }
    }`);

    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (error) {
        console.log(error.message)
        return <p></p>;
    }
    const pagesCount = data?.characters?.info?.pages;

    console.log(data);
    return (
        <div>
            <div className=" md:max-w-[1000px] m-auto py-6">
                <div className="my-3"> <h1>find your favorite character</h1></div>
                <div> 
                    <Search setSearchParams={setSearchParams}/>
                </div>
                {
                    loading ? <div className="h-[500px]"><Loading /> </div> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-auto h-[500px]"><Items data={data?.characters?.results} /></div>
                }
                <div className="m-5">
                    <Pagination count={pagesCount} page={page} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default Characters;