import React from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { Episode } from "../../app/models/episode";
import Loading from "../shared/loading";

const Episodes: React.FC = () => {
    const GET_EPISODES = gql(`query GetEpisodes {
        episodes {
            results {name,id,episode,created,characters{image,name,id}}
        }
    }`);
    const { loading, error, data } = useQuery(GET_EPISODES);
    if (loading) return <Loading />;
    if (error) {
        console.log(error.message)
        return <p></p>;
    }
    console.log(data);

    return (
        <div className="">
            <div className='p-2'>Information of episodes:</div>
            <div className='max-h-[300px] p-3 overflow-auto shadow border-t  border-purple-600'>
                { data?.episodes?.results.map(({ id, name, episode, created }: Episode) => (
                        <div key={id} className='border-b py-2 border-purple-200'>
                            <h3>name: {name}</h3>
                            <div>episode :{episode}</div>
                            <div>created :{created}</div>
                            <br />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Episodes;