import React, { useState } from "react";
import Characters from "./characters";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import Loading from "../shared/loading";
import { Fade } from "@mui/material";

const Home: React.FC = () => {

    // const GET_CHARACTERSINFO = gql(`query GetCharacters {
    //     characters {info {pages,count}}
    // }`);


    // const { loading, error, data } = useQuery(GET_CHARACTERSINFO);
    // if (loading) return <div className="h-screen"><Loading /></div>;
    // if (error) return <p>Error : {error.message}</p>;
    // const pagesCount = data?.characters?.info?.pages
    return (
        <div className="mx-6">
            <Fade in={true} timeout={2000}>
                <div>
                    <div>home page</div>
                    <div>rick and morty web application</div>
                    {/* {pagesCount > 0 && <Characters pagesCount={pagesCount} />} */}
                    {<Characters />}
                    {/* <Locations/> */}
                </div>
            </Fade>
        </div>
    )
}

export default Home;