import React from "react";
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { Location } from "../../app/models/location";
import { Episode } from "../../app/models/episode";
import Loading from "../shared/loading";
import { Character } from "../../app/models/character";

const Episodes: React.FC = () => {
    const GET_EPISODES = gql(`query GetEpisodes {
        episodes {
            results {name,episode,created,characters{image,name,id}}
        }
    }`);
    const { loading, error, data } = useQuery(GET_EPISODES);
    if (loading) return <Loading />;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);

    return (
        <div className="">
            <div className='p-2'>Information of episodes:</div>
            <div className='max-h-[300px] p-3 overflow-auto shadow border-t  border-purple-600'>
                { data?.episodes?.results.map(({ id, name, episode, created,characters }: Episode) => (
                        <div key={id} className='border-b py-2 border-purple-200'>
                            <h3>name: {name}</h3>
                            <div>episode :{episode}</div>
                            <div>created :{created}</div>
                            <br />
                            {/* <div className='p-2'>List of characters who have been seen in the episode</div>
                            <div>
                                {
                                    characters?.map(({ image, name,id }: Character) => (
                                        <div className="flex" key={id}>
                                            <div>
                                                <img className="rounded " alt={name} src={`${image}`} />
                                            </div>
                                            <div>{name}</div>
                                        </div>
                                    ))
                                }
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Episodes;